using System;
using System.Collections.Generic;

namespace AdventureWorkds_API_backend
{
    public partial class SalesTaxRate
    {
        public int SalesTaxRateId { get; set; }
        public int StateProvinceId { get; set; }
        public byte TaxType { get; set; }
        public decimal TaxRate { get; set; }
        public string Name { get; set; } = null!;
        public Guid Rowguid { get; set; }
        public DateTime ModifiedDate { get; set; }

        public virtual StateProvince StateProvince { get; set; } = null!;
    }
}
