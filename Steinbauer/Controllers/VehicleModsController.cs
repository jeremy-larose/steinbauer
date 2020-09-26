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
    [Route( "/api/vehicles/{vehicleid}/mods")]
    [ApiController]
    [Produces( "application/json")]
    public class VehicleModsController : ControllerBase
    {
        private VehiclesDbContext _context;
        private readonly ISteinbauerRepository _repository;
        private readonly ILogger<VehicleModsController> _logger;
        private readonly IMapper _mapper;

        public VehicleModsController(ISteinbauerRepository repository, ILogger<VehicleModsController> logger,
            IMapper mapper, VehiclesDbContext context)
        {
            _repository = repository;
            _logger = logger;
            _mapper = mapper;
            _context = context;

            if (!_context.Modifications.Any())
            {
                _context.Modifications.Add(new Modification
                {
                    Id = 1,
                    ModName = "DiabloTuner",
                    Horsepower = 10,
                    Torque = 10
                });

                _context.Modifications.Add(new Modification
                {
                    Id = 2,
                    ModName = "Custom Exhaust",
                    Horsepower = 10,
                    Torque = 20
                });
                    _context.SaveChanges();
            }
        }

        [HttpGet]
        public IActionResult Get(int vehicleId)
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

        [HttpGet("{id}")]
        public IActionResult Get(int vehicleId, int id)
        {
            var vehicle = _repository.GetVehicleById(vehicleId);
            if (vehicle != null)
            {
                //var mod = vehicle.Modifications.Where(v => v.Id == id).FirstOrDefault();
                return Ok(_mapper.Map<IEnumerable<Modification>, IEnumerable<ModificationViewModel>>(vehicle.Modifications));
            }
            else
            {
                return NotFound();
            }
        }
        /* Working Code, Commented to follow video
        [HttpGet]
        public IEnumerable<Modification> GetModifications()
        {
            return _context.Modifications;
        }

        [HttpPost]
        public IActionResult Post([FromBody] ModificationViewModel model)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    var newMod = _mapper.Map<ModificationViewModel, Modification>(model);

                    _repository.AddEntity(newMod);
                    _repository.SaveAll();

                    return Created($"/api/mods/{newMod.Id}", _mapper.Map<Modification, ModificationViewModel>(newMod));
                }
                else
                {
                    return BadRequest(ModelState);
                }
            }
            catch (Exception e)
            {
                _logger.LogInformation( $"Failed to create new modification: {e}");
                return BadRequest("Failed to add new modification to database.");
            }
        }

        [HttpPost]
        [ActionName(nameof(GetModifications))]
        public IActionResult AddModification( ModificationViewModel modification )
        {
            try
            {
                if (ModelState.IsValid)
                {
                    var newModification = _mapper.Map<ModificationViewModel, Modification>(modification);
                    _context.Modifications.Add(newModification);
                    _context.SaveChanges();
                    
                    return Created($"/api/mods/{newModification.Id}", _mapper.Map<Modification, ModificationViewModel>(newModification));
                }
                else
                {
                    return BadRequest( ModelState );
                }
            }
            catch (Exception e)
            {
                _logger.LogInformation( $"Failed to create new modification: {e}");
                return BadRequest("Failed to add new modification to database.");
            }
        } */ 
    }  
}