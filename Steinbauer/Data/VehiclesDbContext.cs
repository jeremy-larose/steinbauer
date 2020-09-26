using Microsoft.EntityFrameworkCore;
using Steinbauer.Data.Entities;

namespace Steinbauer.Data
{
    public class VehiclesDbContext : DbContext
    {
        public VehiclesDbContext(DbContextOptions<VehiclesDbContext> options) : base(options)
        {
        }

        public DbSet<Vehicle> Vehicles { get; set; }
        public DbSet<Modification> Modifications { get; set; }
    }
}