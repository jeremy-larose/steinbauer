using System.ComponentModel.DataAnnotations;

namespace Steinbauer.Data.Entities
{
    public class Modification
    {
        public int Id { get; set; }
        public string ModName { get; set; }
        public int Horsepower { get; set; }
        public int Torque { get; set; }
    }
}