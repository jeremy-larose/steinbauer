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
                new SteinbauerDbContext(serviceProvider.GetRequiredService<DbContextOptions<SteinbauerDbContext>>()))
            {
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
                        Name = "Jeremy LaRose",
                        Speed = 10,
                        Horsepower = 710,
                        Torque = 985,
                        VehicleType = VehicleType.Truck,
                        ImageFile = "ramTruck.jpg",
                        Modifications = new List<Modification>
                        {
                            new Modification()
                            {
                                Horsepower = 50,
                                Torque = 50,
                                ModName = "Supercharger",
                                ModId = 1
                            },
                            new Modification()
                            {
                                Horsepower = 25,
                                Torque = 100,
                                ModName = "Diablo Tune",
                                ModId = 2
                            }
                        }
                    },
                    new Vehicle()
                    {
                        Id = 2,
                        EngineRunning = false,
                        LastRan = DateTime.Today,
                        Name = "Macey Blouw",
                        Speed = 0,
                        Horsepower = 385,
                        Torque = 410,
                        VehicleType = VehicleType.Sedan,
                        ImageFile = "dodgeCharger.jpg",
                        Modifications = new List<Modification>
                        {
                            new Modification()
                            {
                                Horsepower = 125,
                                Torque = 100,
                                ModName = "Turbocharged",
                                ModId = 3
                            }
                        }
                    },
                    new Vehicle()
                    {
                        Id = 3,
                        EngineRunning = true,
                        LastRan = DateTime.Now,
                        Name = "Kelly Blouw",
                        Speed = 70,
                        Horsepower = 485,
                        Torque = 1200,
                        VehicleType = VehicleType.Semi,
                        ImageFile = "semiTruck.jpg"
                    });

                context.SaveChanges();
            }
        }
    }
}