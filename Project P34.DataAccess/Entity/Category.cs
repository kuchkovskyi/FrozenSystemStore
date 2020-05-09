using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Project_P34.DataAccess.Entity
{
    [Table("tblCategories")]
    public class Category
    {
        [Key]
        [ForeignKey("Product")]
        public string Id { get;set; } 

        [Required]
        public string Name { get; set; }

        public virtual Product Product { get; set; }

    }
}
