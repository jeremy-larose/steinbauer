using System;
using System.Collections.Generic;
using System.Linq;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Steinbauer.Data;
using Steinbauer.Data.Entities;
using Steinbauer.ViewModels;

namespace Steinbauer.Controllers
{
    [Route("/api/vehicles/{vehicleId}/mods")]
    [ApiController]
    [Produces("application/json")]
    public class VehicleModsController : Controller
    {
        private readonly ISteinbauerRepository _repository;
        private readonly ILogger<VehicleModsController> _logger;
        private readonly IMapper _mapper;
        private readonly SteinbauerDbContext _context;

        public VehicleModsController(ISteinbauerRepository repository, ILogger<VehicleModsController> logger,
            IMapper mapper, SteinbauerDbContext context)
        {
            _repository = repository;
            _logger = logger;
            _mapper = mapper;
            _context = context;
        }

        [HttpGet]
        public IActionResult Get(int vehicleId)
        {
            try
            {
                var mods = _repository.GetModsForVehicle(vehicleId);
                return Ok(_mapper.Map<IEnumerable<Modification>, IEnumerable<ModificationViewModel>>(mods));
            }
            catch (Exception e)
            {
                return BadRequest($"Unable to load modifications for vehicle: {e}");
            }
        }

        [HttpGet("{modId:int}")]
        public IActionResult Get(int vehicleId, int modId)
        {
            try
            {
                var mod = _repository.GetModByVehicleId(vehicleId, modId);
                return Ok(_mapper.Map<Modification, ModificationViewModel>(mod));
            }
            catch (Exception e)
            {
                return BadRequest($"Unable to load modification for vehicle: {e}");
            }
        }

        [HttpPost]
        public IActionResult Post(int vehicleId, [FromBody] ModificationViewModel model)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    var newMod = _mapper.Map<ModificationViewModel, Modification>(model);
                    var vehicle = _repository.GetVehicleById(vehicleId);
                    _repository.AddModification(newMod);
                    vehicle.Modifications.Add(newMod);
                    _context.SaveChanges();
                    return Ok(_mapper.Map<Modification, ModificationViewModel>(newMod));
                }
                else
                {
                    return BadRequest(ModelState);
                }
            }
            catch (Exception e)
            {
                return BadRequest($"Unable to post a new modification {model} to vehicle: {vehicleId}.");
            }
        }

        [HttpDelete("{modId:int}")]
        public IActionResult Delete(int vehicleId, int modId)
        {
            try
            {
                var vehicle = _repository.GetVehicleById(vehicleId);
                if (vehicle != null)
                {
                    var mod = vehicle.Modifications.FirstOrDefault(m => m.ModId == modId);
                    vehicle.Modifications.Remove(mod);
                    _context.SaveChanges();
                    return Ok();
                }
                else
                {
                    _logger.LogError($"The vehicle {vehicleId} was not found to delete modification from.");
                    return NotFound("The requested vehicle was not found to delete modification from.");
                }
            }
            catch (Exception e)
            {
                _logger.LogError($"Unable to delete mod {modId} from vehicle {vehicleId}.");
                return BadRequest("Unable to delete mod from vehicle.");
            }
        }
    }
}