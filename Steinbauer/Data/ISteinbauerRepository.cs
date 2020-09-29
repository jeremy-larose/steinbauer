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
        Modification GetModificationById(int id);

        bool SaveAll();
        void AddEntity( object model );
        void AddVehicle(Vehicle newVehicle);
        void AddModification(Modification newMod);
    }
}