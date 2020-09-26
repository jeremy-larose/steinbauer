using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.Extensions.Logging;
using Steinbauer.Data.Entities;

namespace Steinbauer.Data
{
    public class VehiclesRepository : ISteinbauerRepository
    {
        private readonly VehiclesDbContext _dbContext;
        private readonly ILogger<VehiclesRepository> _logger;

        public VehiclesRepository(VehiclesDbContext dbContext, ILogger<VehiclesRepository> logger )
        {
            _dbContext = dbContext;
            _logger = logger;
        }

        public IEnumerable<Vehicle> GetAllVehicles()
        {
            try
            {
                return _dbContext.Vehicles
                    .OrderBy(v => v.Id)
                    .ToList();
            }
            catch (Exception ex)
            {
                _logger.LogError( $"Failed to get all products: {ex}" );
                return null;
            }
        }

        public IEnumerable<Vehicle> GetVehiclesByType(VehicleType vehicleType)
        {
            return _dbContext.Vehicles
                .Where(v => v.VehicleType == vehicleType )
                .ToList();
        }

        public Vehicle GetVehicleById(int id)
        {
            return _dbContext.Vehicles.Where(v => v.Id == id).FirstOrDefault();
        }

        public IEnumerable<Modification> GetModificationById(int id)
        {
            return _dbContext.Modifications
                .Where(m => m.Id == id)
                .ToList();
        }

        public IEnumerable<Modification> GetAllModifications()
        {
            try
            {
                return _dbContext.Modifications
                    .OrderBy(v => v.Id)
                    .ToList();
            }
            catch (Exception e)
            {
                _logger.LogError($"Failed to get all modifications: {e}");
                return null;
            }
        }
        
        public bool SaveAll()
        {
            _dbContext.SaveChanges();
            return true;
        }

        public void AddEntity(object model)
        {
            _dbContext.Add( model );
            _dbContext.SaveChanges();
        }


        
    }
}