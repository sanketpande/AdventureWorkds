using System;
using System.Collections.Generic;

namespace AdventureWorkds_API_backend
{
    public partial class SpecialOfferProduct
    {
        public SpecialOfferProduct()
        {
            SalesOrderDetails = new HashSet<SalesOrderDetail>();
        }

        public int SpecialOfferId { get; set; }
        public int ProductId { get; set; }
        public Guid Rowguid { get; set; }
        public DateTime ModifiedDate { get; set; }

        public virtual Product Product { get; set; } = null!;
        public virtual SpecialOffer SpecialOffer { get; set; } = null!;
        public virtual ICollection<SalesOrderDetail> SalesOrderDetails { get; set; }
    }
}
