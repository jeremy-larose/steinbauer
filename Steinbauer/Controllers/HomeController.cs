using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Steinbauer.Data;
using Steinbauer.Models;

namespace Steinbauer.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        private readonly ISteinbauerRepository _repository;
        
        public HomeController( ISteinbauerRepository repository, ILogger<HomeController> logger )
        {
            _repository = repository;
            _logger = logger;
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
        
        public IActionResult Browse()
        {
            var results = _repository.GetAllVehicles( true );
            
            return View( results );
        }
    }
}
