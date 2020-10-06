using System;
using System.Linq;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Steinbauer.Data;
using Steinbauer.Data.Entities;
using Steinbauer.ViewModels;

namespace Steinbauer.Controllers
{
    [Route("/api/mods")]
    [ApiController]
    [Produces("application/json")]
    public class ModificationsController : Controller
    {
        private readonly ISteinbauerRepository _repository;
        private readonly ILogger<ModificationsController> _logger;
        private readonly IMapper _mapper;
        private readonly SteinbauerDbContext _context;

        public ModificationsController(ISteinbauerRepository repository, ILogger<ModificationsController> logger,
            IMapper mapper, SteinbauerDbContext context)
        {
            _repository = repository;
            _logger = logger;
            _mapper = mapper;
            _context = context;
        }

        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                var mods = _repository.GetAllModifications();
                return Ok(mods);
            }
            catch (Exception e)
            {
                return BadRequest($"Unable to load modifications: {e}");
            }
        }

        [HttpGet("{modId:int}")]
        public IActionResult Get( int modId )
        {
            try
            {
                var mod = _repository.GetModById(modId);
                _logger.LogInformation( $"Loading information for mod at ID: {modId}");
                return Ok( _mapper.Map<Modification, ModificationViewModel>(mod));

            }
            catch ( Exception e)
            {
                return BadRequest($"Not able to find mod: {modId}");
            }
        }
    }
}