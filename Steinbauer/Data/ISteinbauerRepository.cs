using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Steinbauer.Data.Entities;

namespace Steinbauer.Data
{
    public interface ISteinbauerRepository
    {
        IEnumerable<Vehicle> GetAllVehicles();
        IEnumerable<Modification> GetAllModifications();

        Vehicle GetVehicleById(int id);
        IEnumerable<Modification> GetModificationById(int id);

        bool SaveAll();
        void AddEntity( object model );        
    }
}