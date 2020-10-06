using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;

namespace Steinbauer.Data.Entities
{
    public enum VehicleType
    {
        Sedan = 0,
        Truck = 1,
        Compact = 2,
        Crossover = 3,
        Semi = 4
    }

    public class Vehicle
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public VehicleType VehicleType { get; set; }
        public bool EngineRunning { get; set; }
        public DateTime LastRan { get; set; }
        public int Speed { get; set; }
        public string ImageFile { get; set; }
        public int Horsepower { get; set; }
        public int Torque { get; set; }
        public ICollection<Modification> Modifications { get; set; }
    }
}