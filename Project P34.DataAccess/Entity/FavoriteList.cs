using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Project_P34.DataAccess.Entity
{
    [Table("tblFavotity")]
    public class FavoriteList
    {
        [Key, ForeignKey("ProductOf"), Column(Order = 1)]
        public int FavoriteProductId { get; set; }
        public virtual Product CategoryProductOf { get; set; }


        [Key, ForeignKey("UserOf"), Column(Order = 2)]
        public string FavoriteUserId { get; set; }
        public virtual User CategoryUserOf { get; set; }
    }
}
