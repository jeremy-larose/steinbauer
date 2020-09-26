using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Steinbauer.Data;
using Steinbauer.Data.Entities;

namespace Steinbauer.Services
{
    public class DataGenerator
    {
        public static void Initialize(IServiceProvider serviceProvider)
        {
            using (var context =
                new VehiclesDbContext(serviceProvider.GetRequiredService<DbContextOptions<VehiclesDbContext>>()))
            {
                // Look for any vehicles.
                if (context.Vehicles.Any())
                {
                    return; // Data was already loaded.
                }

                context.Vehicles.AddRange(
                    new Vehicle()
                    {
                        Id = 1,
                        EngineRunning = true,
                        LastRan = DateTime.Today,
                        Name = "JeremyCar",
                        Speed = 10,
                        VehicleType = VehicleType.Truck,
                        ImageFile = "ramTruck.jpg",
                        Modifications = new List<Modification>
                        {
                            new Modification()
                            {
                                Horsepower = 50,
                                Torque = 50,
                                ModName = "Supercharger",
                                Id = 1
                            },
                            new Modification()
                            {
                                Horsepower = 25,
                                Torque = 100,
                                ModName = "Diablo Tune",
                                Id = 2
                            }
                        }
                    },
                    new Vehicle()
                    {
                        Id = 2,
                        EngineRunning = false,
                        LastRan = DateTime.Today,
                        Name = "MaceyCar",
                        Speed = 0,
                        VehicleType = VehicleType.Sedan,
                        ImageFile = "dodgeCharger.jpg",
                        Modifications = new List<Modification>
                        {
                            new Modification()
                            {
                            Horsepower = 125,
                            Torque = 100,
                            ModName = "Turbocharged",
                            Id = 3
                            }
                        }
                    },
                    new Vehicle()
                    {
                        Id = 3,
                        EngineRunning = true,
                        LastRan = DateTime.Now,
                        Name = "KellyCar",
                        Speed = 70,
                        VehicleType = VehicleType.Semi,
                        ImageFile = "semiTruck.jpg"
                    });

                context.SaveChanges();
            }
        }
    }
}