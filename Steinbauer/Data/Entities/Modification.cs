using System.ComponentModel.DataAnnotations;
using Newtonsoft.Json;

namespace Steinbauer.Data.Entities
{
    public class Modification
    {
        [Key] public int ModId { get; set; }
        public string ModName { get; set; }
        public int Horsepower { get; set; }
        public int Torque { get; set; }
    }
}