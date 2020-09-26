using System;
using System.Collections.Generic;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore.Internal;
using Microsoft.Extensions.Logging;
using Steinbauer.Data;
using Steinbauer.Data.Entities;
using Steinbauer.ViewModels;

namespace Steinbauer.Controllers
{
    [Route( "api/[Controller]")]
    [ApiController]
    [Produces( "application/json")]
    public class VehiclesController : ControllerBase
    {
        private VehiclesDbContext _context;
        private readonly ISteinbauerRepository _repository;
        private readonly ILogger<VehiclesController> _logger;
        private readonly IMapper _mapper;

        public VehiclesController(ISteinbauerRepository vehiclesRepository, ILogger<VehiclesController> logger, IMapper mapper, VehiclesDbContext context )
        {
            _repository = vehiclesRepository;
            _context = context;
            _logger = logger;
            _mapper = mapper;

            if (!_context.Vehicles.Any())
            {
                _context.Vehicles.Add(new Vehicle()
                {
                    Id = 0,
                    VehicleType = VehicleType.Compact,
                    EngineRunning = false,
                    ImageFile = "null",
                    LastRan = DateTime.Today,
                    Name = "FirstVehicle",
                    Speed = 0
                });
                _context.SaveChanges();
            }
        }

        [HttpGet]
        public IEnumerable<Vehicle> GetVehicles()
        {
            return _context.Vehicles;
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
                _logger.LogInformation( $"Failed to get vehicle: {e}");
                return BadRequest( "Failed to get vehicle." );
            }
        }
        
        [HttpPost]
        [ActionName( nameof( GetVehicles ))]
        public IActionResult AddVehicle(VehicleViewModel vehicle)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    var newVehicle = _mapper.Map<VehicleViewModel, Vehicle>(vehicle);
                    _context.Vehicles.Add(newVehicle);
                    _context.SaveChanges();

                    return Created($"/api/vehicles/{newVehicle.Id}", _mapper.Map<Vehicle, VehicleViewModel>(newVehicle));
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
    }
}