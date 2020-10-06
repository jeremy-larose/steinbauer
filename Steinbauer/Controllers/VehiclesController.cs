using System;
using System.Collections.Generic;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
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

        [HttpPut("{id:int}")]
        public IActionResult Put(VehicleViewModel model, int id)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    var oldVehicle = _repository.GetVehicleById(id);
                    if (oldVehicle == null) return NotFound($"Could not find the vehicle at ID: {id} to update.");

                    _mapper.Map(model, oldVehicle);

                    _repository.SaveAll();
                    return Ok(_mapper.Map<Vehicle, VehicleViewModel>(oldVehicle));
                }
                else
                {                
                    return BadRequest("Model state is not valid.");
                }
            }
            catch (Exception e)
            {
                return BadRequest($"There was an error attempting to update the vehicle: {e}");
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
        public IActionResult DeleteVehicle(int id)
        {
            try
            {
                _repository.DeleteEntity(id);
                return Ok();
            }
            catch (Exception e)
            {
                _logger.LogError($"Failed to delete vehicle: {e}");
                return BadRequest("Failed to delete vehicle.");
            }
        }

        [HttpPost]
        [ActionName(nameof(Get))]
        public IActionResult AddVehicle(VehicleViewModel vehicle)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    var newVehicle = _mapper.Map<VehicleViewModel, Vehicle>(vehicle);
                    _context.Vehicles.Add(newVehicle);
                    _context.SaveChanges();

                    return Created($"/api/vehicles/{newVehicle.Id}",
                        _mapper.Map<Vehicle, VehicleViewModel>(newVehicle));
                }
                else
                {
                    return BadRequest(ModelState);
                }
            }
            catch (Exception e)
            {
                _logger.LogInformation($"Failed to create new vehicle: {e}");
                return BadRequest("Failed to add new vehicle to database. ");
            }
        }
    }
}