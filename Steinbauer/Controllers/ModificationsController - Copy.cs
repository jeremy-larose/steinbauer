/*using System;
using System.Collections.Generic;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Steinbauer.Data;
using Steinbauer.Data.Entities;
using Steinbauer.ViewModels;

namespace Steinbauer.Controllers
{
    [Route( "api/mods/")]
    [ApiController]
    [Produces( "application/json")]

    public class ModificationsController : Controller
    {
        private readonly SteinbauerDbContext _context;
        private readonly ISteinbauerRepository _repository;
        private readonly ILogger<ModificationsController> _logger;
        private readonly IMapper _mapper;

        public ModificationsController(ISteinbauerRepository repository, ILogger<ModificationsController> logger, IMapper mapper, SteinbauerDbContext context )
        {
            _repository = repository;
            _context = context;
            _logger = logger;
            _mapper = mapper;
        }
        
        [HttpGet]
        [ProducesResponseType(200)]
        public IActionResult Get()
        {
            try
            {
                var results = _repository.GetAllModifications();
                return Ok(
                    _mapper.Map<IEnumerable<Modification>, IEnumerable<ModificationViewModel>>( results ));
            }
            catch (Exception e)
            {
                _logger.LogError( $"Failed to get modifications: {e}");
                return BadRequest("Failed to get modifications.");
            }
        }

        [HttpGet( "{id:int}")]
        public IActionResult Get( int id )
        {
            try
            {
                var mod = _repository.GetModificationById(id);
                if (mod != null)
                {
                    return Ok(_mapper.Map<Modification, ModificationViewModel>(mod));
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
                    
                    return Created($"/api/mods/{newModification.ModId}", _mapper.Map<Modification, ModificationViewModel>(newModification));
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
}*/