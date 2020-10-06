using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Steinbauer.Data.Entities;

namespace Steinbauer.Data
{
    public class VehiclesRepository : ISteinbauerRepository
    {
        private readonly SteinbauerDbContext _dbContext;
        private readonly ILogger<VehiclesRepository> _logger;

        public VehiclesRepository(SteinbauerDbContext dbContext, ILogger<VehiclesRepository> logger)
        {
            _dbContext = dbContext;
            _logger = logger;
        }

        public IEnumerable<Vehicle> GetAllVehicles(bool includeMods)
        {
            if (includeMods)
            {
                return _dbContext.Vehicles
                    .OrderBy(v => v.Id)
                    .Include(v => v.Modifications)
                    .ToList();
            }
            else
            {
                return _dbContext.Vehicles
                    .OrderBy(v => v.Id)
                    .ToList();
            }
        }

        public IEnumerable<Modification> GetAllModifications()
        {
            return _dbContext.Modifications
                .OrderBy(m => m.ModId)
                .ToList();
        }

        public IEnumerable<Modification> GetModsForVehicle(int vehicleId)
        {
            try
            {
                var vehicle = GetVehicleById(vehicleId);
                if (vehicle != null)
                {
                    return _dbContext.Vehicles.Find(vehicleId).Modifications
                        .OrderBy(m => m.ModId)
                        .ToList();
                }
                else
                {
                    _logger.LogError("GetAllModifications for null vehicle.");
                    return null;
                }
            }
            catch (Exception e)
            {
                _logger.LogError($"Failed to get all modifications: {e}");
                return null;
            }
        }

        public Modification GetModByVehicleId(int vehicleId, int modId)
        {
            try
            {
                var vehicle = GetVehicleById(vehicleId);
                if (vehicle != null)
                {
                    return vehicle.Modifications.FirstOrDefault(m => m.ModId == modId);
                }
                else
                {
                    _logger.LogError($"Failed to find the vehicle {vehicleId}.");
                    return null;
                }
            }
            catch (Exception e)
            {
                _logger.LogError($"Failed to get modification {modId} for vehicle {vehicleId}.");
                return null;
            }
        }

        public Modification GetModById(int id)
        {
            return _dbContext.Modifications.FirstOrDefault(m => m.ModId == id);
        }

        public IEnumerable<Vehicle> GetVehiclesByType(VehicleType vehicleType)
        {
            return _dbContext.Vehicles
                .Where(v => v.VehicleType == vehicleType)
                .ToList();
        }

        public Vehicle GetVehicleById(int id)
        {
            return _dbContext.Vehicles
                .Include(v => v.Modifications)
                .FirstOrDefault(v => v.Id == id);
        }

        public Modification GetModificationById(int modId)
        {
            return _dbContext.Modifications
                .FirstOrDefault(m => m.ModId == modId);
        }

        public bool SaveAll()
        {
            return _dbContext.SaveChanges() > 0;
        }

        public void AddEntity(object model)
        {
            try
            {
                _dbContext.Add(model);
                _dbContext.SaveChanges();
            }
            catch (Exception e)
            {
                _logger.LogWarning($"Could not add the entity: {e}.");
            }
        }

        public void DeleteEntity(int id)
        {
            var vehicle = new Vehicle() {Id = id};
            _dbContext.Entry(vehicle).State = EntityState.Deleted;
            _dbContext.SaveChanges();
        }

        public void AddVehicle(Vehicle newVehicle)
        {
            AddEntity(newVehicle);
        }

        public void AddModification(Modification newMod)
        {
            AddEntity(newMod);
        }
    }
}