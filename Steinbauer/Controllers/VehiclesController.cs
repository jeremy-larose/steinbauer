using System;
using System.Collections.Generic;
using System.Linq;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore.Internal;
using Microsoft.Extensions.Logging;
using Steinbauer.Data;
using Steinbauer.Data.Entities;
using Steinbauer.ViewModels;

namespace Steinbauer.Controllers
{
    [Route("api/[Controller]")]
    [ApiController]
    [Produces("application/json")]
    public class VehiclesController : Controller
    {
        private readonly SteinbauerDbContext _context;
        private readonly ISteinbauerRepository _repository;
        private readonly ILogger<VehiclesController> _logger;
        private readonly IMapper _mapper;

        public VehiclesController(ISteinbauerRepository vehiclesRepository, ILogger<VehiclesController> logger,
            IMapper mapper, SteinbauerDbContext context)
        {
            _repository = vehiclesRepository;
            _context = context;
            _logger = logger;
            _mapper = mapper;
        }

        [HttpGet]
        [ProducesResponseType(200)]
        public IActionResult Get(bool includeMods = true)
        {
            try
            {
                var results = _repository.GetAllVehicles(includeMods);
                return Ok(
                    _mapper.Map<IEnumerable<Vehicle>, IEnumerable<VehicleViewModel>>(results));
            }
            catch (Exception e)
            {
                _logger.LogError($"Failed to get vehicles: {e}");
                return BadRequest("Failed to get vehicle.");
            }
        }

        [HttpGet("{id:int}")]
        public IActionResult Get(int id)
        {
            try
            {
                var vehicle = _repository.GetVehicleById(id);
                if (vehicle != null)
                {
                    return Ok(_mapper.Map<Vehicle, VehicleViewModel>(vehicle));
                }
                else
                {
                    return NotFound();
                }
            }
            catch (Exception e)
            {
                _logger.LogError($"Failed to get vehicle: {e}");
                return BadRequest("Failed to get vehicle.");
            }
        }

        [HttpDelete("{id:int}")]

        public IActionResult DeleteVehicle(int? id)
        {
            try
            {
                if( id == null )
                {
                    return NotFound();
                }

                _repository.DeleteEntity( id ); 
                return Ok();
            }
            catch (Exception e)
            {
                _logger.LogError($"Failed to delete vehicle: {e}");
                return BadRequest("Failed to delete vehicle.");
            }
        }
        
        [HttpPost]
        [ActionName( nameof( Get ))]
        public IActionResult AddVehicle(VehicleViewModel vehicle)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    var newVehicle = _mapper.Map<VehicleViewModel, Vehicle>(vehicle);
                    _context.Vehicles.Add(newVehicle);
                    _repository.AddEntity(newVehicle);
                    _context.SaveChanges();
                    return Created($"/api/vehicles/{newVehicle.Id}",
                        _mapper.Map<Vehicle, VehicleViewModel>(newVehicle));
                }
                else
                {
                    return BadRequest(ModelState);
                }
            }
            catch( Exception e )
            {
                _logger.LogInformation( $"Failed to create new vehicle: {e}");
                return BadRequest("Failed to add new vehicle to database. ");
            }
        }
        
        public IActionResult AddModification(ModificationViewModel modification)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    var newMod = _mapper.Map<ModificationViewModel, Modification>(modification);
                    _context.Modifications.Add(newMod);
                    _repository.AddEntity(newMod);
                    _context.SaveChanges();
                    return Created($"/api/mods/{newMod.Id}",
                        _mapper.Map<Modification, ModificationViewModel>(newMod));
                }
                else
                {
                    return BadRequest(ModelState);
                }
            }
            catch( Exception e )
            {
                _logger.LogInformation( $"Failed to create new modification: {e}");
                return BadRequest("Failed to add new modification to database. ");
            }
        }
    }
}