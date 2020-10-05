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
    [Route( "/api/mods/")]
    [ApiController]
    [Produces( "application/json")]
    public class ModificationsController : Controller
    {
        private readonly ISteinbauerRepository _repository;
        private readonly ILogger<VehicleModsController> _logger;
        private readonly IMapper _mapper;
        private readonly SteinbauerDbContext _context;

        public ModificationsController(ISteinbauerRepository repository, ILogger<VehicleModsController> logger,
            IMapper mapper, SteinbauerDbContext context )
        {
            _repository = repository;
            _logger = logger;
            _mapper = mapper;
            _context = context;
        }
        
        [HttpGet]
        public IActionResult Get()
        {
            var modifications = _repository.GetAllModifications();
            if (modifications != null)
            {
                return Ok(_mapper.Map<IEnumerable<Modification>, IEnumerable<ModificationViewModel>>(modifications));
            }
            else
            {
                return NotFound();
            }
        }

        [HttpGet("{modId}")]
        public IActionResult Get(int modId)
        {
            var modification = _repository.GetModificationById(modId);
            if (modification != null)
            {
                    return Ok(_mapper.Map<Modification, ModificationViewModel>(modification));
            }
            else
            {
                return NotFound();
            }
        } 

        [HttpPost]
        public IActionResult Post(ModificationViewModel model)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    var newMod = _mapper.Map<ModificationViewModel, Modification>(model);

                    _repository.AddEntity(newMod);
                    _repository.SaveAll();

                    return Created($"/api/mods/{newMod.ModId}", _mapper.Map<Modification, ModificationViewModel>(newMod));
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
    }  
}