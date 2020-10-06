using System.Text.Json;
using Microsoft.EntityFrameworkCore;
using Steinbauer.Data.Entities;

namespace Steinbauer.Data
{
    public class SteinbauerDbContext : DbContext
    {
        public SteinbauerDbContext(DbContextOptions<SteinbauerDbContext> options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
        }

        public DbSet<Vehicle> Vehicles { get; set; }
        public DbSet<Modification> Modifications { get; set; }
    }
}