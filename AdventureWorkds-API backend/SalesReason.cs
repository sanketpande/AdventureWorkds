using System;
using System.Collections.Generic;

namespace AdventureWorkds_API_backend
{
    public partial class SalesReason
    {
        public SalesReason()
        {
            SalesOrderHeaderSalesReasons = new HashSet<SalesOrderHeaderSalesReason>();
        }

        public int SalesReasonId { get; set; }
        public string Name { get; set; } = null!;
        public string ReasonType { get; set; } = null!;
        public DateTime ModifiedDate { get; set; }

        public virtual ICollection<SalesOrderHeaderSalesReason> SalesOrderHeaderSalesReasons { get; set; }
    }
}
