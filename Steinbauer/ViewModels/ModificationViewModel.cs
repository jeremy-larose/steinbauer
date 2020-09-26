using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using Steinbauer.Data.Entities;

namespace Steinbauer.ViewModels
{
    public class ModificationViewModel
    {
        public int ModificationId { get; set; }
        public string ModificationName { get; set; }
        public int Horsepower { get; set; }
        public int Torque { get; set; }
        [Required]
        public decimal UnitPrice { get; set; }
    }
}