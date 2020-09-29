using System;
using System.Collections.Generic;

namespace Steinbauer.Data.Entities
{
    public enum VehicleType
    {
        Sedan,
        Truck,
        Compact,
        Crossover,
        Semi
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