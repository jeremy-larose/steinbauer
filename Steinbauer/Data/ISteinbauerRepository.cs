using System.Collections.Generic;
using Steinbauer.Data.Entities;

namespace Steinbauer.Data
{
    public interface ISteinbauerRepository
    {
        IEnumerable<Vehicle> GetAllVehicles( bool includeMods );
        IEnumerable<Modification> GetAllModifications();
        IEnumerable<Modification> GetModsForVehicle( int id );

        Vehicle GetVehicleById(int id);
        Modification GetModByVehicleId(int vehicleId, int modId);
        Modification GetModById(int id);
        bool SaveAll();
        void AddEntity( object model );
        void DeleteEntity( int id );
        void AddModification(Modification newMod);
    }
}