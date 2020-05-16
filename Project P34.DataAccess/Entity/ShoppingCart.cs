using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Project_P34.DataAccess.Entity
{
    [Table("tblCart")]
    public class ShoppingCart
    {
        [Key, ForeignKey("ProductOf"), Column(Order = 1)]
        public int ProductId { get; set; }
        public virtual Product ProductOf { get; set; }


        [Key, ForeignKey("UserOf"), Column(Order = 2)]
        public string UserId { get; set; }
        public virtual User UserOf { get; set; }
    }

}
