using System;
using System.Collections.Generic;

namespace AdventureWorkds_API_backend
{
    public partial class ShoppingCartItem
    {
        public int ShoppingCartItemId { get; set; }
        public string ShoppingCartId { get; set; } = null!;
        public int Quantity { get; set; }
        public int ProductId { get; set; }
        public DateTime DateCreated { get; set; }
        public DateTime ModifiedDate { get; set; }

        public virtual Product Product { get; set; } = null!;
    }
}
