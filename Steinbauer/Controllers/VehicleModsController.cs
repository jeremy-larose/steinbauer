using System;
using System.Collections.Generic;
using System.Linq;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Steinbauer.Data;
using Steinbauer.Data.Entities;
using Steinbauer.ViewModels;

namespace Steinbauer.Controllers
{
    [Route( "api/vehicles/{vehicleId}/mods")]
    [ApiController]
    [Produces( "application/json")]

    public class VehicleModsController : Controller
    {
        private readonly SteinbauerDbContext _context;
        private readonly ISteinbauerRepository _repository;
        private readonly ILogger<VehicleModsController> _logger;
        private readonly IMapper _mapper;

        public VehicleModsController(ISteinbauerRepository repository, ILogger<VehicleModsController> logger, IMapper mapper, SteinbauerDbContext context )
        {
            _repository = repository;
            _context = context;
            _logger = logger;
            _mapper = mapper;
        }
 
        public IActionResult Get( int vehicleId )
        {
            try
            {
                var vehicle = _repository.GetVehicleById(vehicleId);
                if (vehicle != null)
                {
                    return Ok(_mapper.Map<IEnumerable<Modification>, IEnumerable<ModificationViewModel>>(vehicle.Modifications));
                }
                else
                {
                    return NotFound();
                }
            }
            catch (Exception e)
            {
                _logger.LogError( $"Failed to get modification: {e}");
                return BadRequest("Failed to get details on modification.");
            }
        }

        [HttpGet("{id}")]
        public IActionResult Get(int vehicleId, int id)
        {
            try
            {
                var vehicle = _repository.GetVehicleById(vehicleId);
                if (vehicle != null)
                {
                    var mod = vehicle.Modifications.FirstOrDefault( m=>m.ModId == id);
                    if (mod != null)
                    {
                        return Ok( _mapper.Map<Modification, ModificationViewModel>(mod));
                    }
                    else
                    {
                        _logger.LogError( $"Failed to find modification with ID: {id}");
                        return NotFound("Failed to get modification on vehicle.");
                    }
                }
                else
                {
                    return NotFound();
                }
            }
            catch (Exception e)
            {
                _logger.LogError( $"Failed to get modification: {e}");
                return BadRequest("Failed to get details on modification.");
            }
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int vehicleId, int id)
        {
            try
            {
                var vehicle = _repository.GetVehicleById(vehicleId);
                if (vehicle != null)
                {
                    var mod = vehicle.Modifications.FirstOrDefault(m => m.ModId == id);
                    _logger.LogWarning($"Mod = {mod.ModName} targeted for deletion.");
                    vehicle.Modifications.Remove(mod);
                    _context.SaveChanges();
                    return Ok();
                }
                else
                {
                    _logger.LogError( $"The vehicle {vehicleId} was not found to delete modification from.");
                    return NotFound("The requested vehicle was not found to delete modification from.");
                }
            }
            catch (Exception e)
            {
                _logger.LogError( $"Unable to delete mod {id} from vehicle {vehicleId}.");
                return BadRequest("Unable to delete mod from vehicle.");
            }
        }

        [HttpPut("{id:int}")]
        public IActionResult Put(int id, VehicleViewModel vehicleViewModel)
        {
            var vehicle = _repository.GetVehicleById(vehicleViewModel.VehicleId);
            if (vehicle == null) return NotFound("Vehicle was not found to add modification to.");

            _mapper.Map<Vehicle, VehicleViewModel>(vehicle);
            if (vehicleViewModel.Modifications != null)
            {
                foreach (var mod in vehicleViewModel.Modifications)
                {
                    var modification = _repository.GetModificationById(mod.ModificationId);
                    if (modification != null)
                    {
                        vehicle.Modifications.Add(modification);
                    }
                }
            }
            
            _context.SaveChanges();

            return Ok( _mapper.Map<VehicleViewModel>(vehicle));
        }

        //
        // [HttpPost( "{id}")]
        // public IActionResult Post( ModificationViewModel modification, int id )
        // {
        //     try
        //     {
        //         if (ModelState.IsValid)
        //         {
        //             var newMod = _mapper.Map<ModificationViewModel, Modification>(modification);
        //             var vehicleToUpdate = _repository.GetVehicleById(id);
        //
        //             vehicleToUpdate.Modifications.Add(newMod);
        //             _context.Entry(vehicleToUpdate).State = EntityState.Added;
        //             _context.SaveChanges();
        //             return Ok();
        //         }
        //         else
        //         {
        //             return BadRequest( ModelState );
        //         }
        //     }
        //     catch (Exception e)
        //     {
        //         _logger.LogInformation( $"Failed to add modification to vehicle: {e}");
        //         return BadRequest("Failed to add new modification to vehicle's database.");
        //     }
        // } 
    }
}