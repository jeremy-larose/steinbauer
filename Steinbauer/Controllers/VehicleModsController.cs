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
    [Route( "/api/vehicles/{vehicleId}/mods")]
    [ApiController]
    [Produces( "application/json")]
    public class VehicleModsController : Controller
    {
        private readonly ISteinbauerRepository _repository;
        private readonly ILogger<VehicleModsController> _logger;
        private readonly IMapper _mapper;
        private readonly VehiclesDbContext _context;

        public VehicleModsController(ISteinbauerRepository repository, ILogger<VehicleModsController> logger,
            IMapper mapper, VehiclesDbContext context )
        {
            _repository = repository;
            _logger = logger;
            _mapper = mapper;
            _context = context;
        }
        
        [HttpGet]
        public IActionResult Get(int vehicleId)
        {
            var vehicle = _repository.GetVehicleById(vehicleId);
            if (vehicle != null)
                return Ok(_mapper.Map<IEnumerable<Modification>, IEnumerable<ModificationViewModel>>(vehicle.Modifications));
            
            return NotFound();
        }

        [HttpGet("{id}")]
        public IActionResult Get(int vehicleId, int id)
        {
            var vehicle = _repository.GetVehicleById(vehicleId);
            if (vehicle != null)
            {
                var mod = vehicle.Modifications.FirstOrDefault( v=>v.Id == vehicleId );
                if (mod != null)
                {
                    return Ok(_mapper.Map<Modification, ModificationViewModel>(mod));
                }
            }
            return NotFound();
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
        [ActionName(nameof( Get ))]
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
        } 
    }  
}