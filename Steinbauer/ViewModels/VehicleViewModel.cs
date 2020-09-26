using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Steinbauer.ViewModels
{
    public class VehicleViewModel
    {
        public int VehicleId { get; set; }
        [Required]
        [MinLength(4)]
        public string OwnerName { get; set; }
        [Required]
        public bool EngineRunning { get; set; }
        public DateTime Date { get; set; }
        
        public ICollection<ModificationViewModel> Modifications { get; set; }
    }
}