using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Steinbauer.Data.Entities;

namespace Steinbauer.Data
{
    public class SteinbauerDbContext : IdentityDbContext<StoreUser>
    {
        public SteinbauerDbContext(DbContextOptions<SteinbauerDbContext> options) : base(options)
        {
        }

        public DbSet<Vehicle> Vehicles { get; set; }
        public DbSet<Modification> Modifications { get; set; }
    }
}