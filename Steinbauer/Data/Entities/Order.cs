using System;
using System.Collections.Generic;

namespace Steinbauer.Data.Entities
{
    public class Order
    {
        public int Id { get; set; }
        public DateTime OrderDate { get; set; }
        public string OrderNumber { get; set; }
        public Vehicle Vehicle { get; set; }
        public ICollection<Modification> Modifications { get; set; }
        public StoreUser User { get; set; }
        public int VehicleId { get; set; }
    }
}