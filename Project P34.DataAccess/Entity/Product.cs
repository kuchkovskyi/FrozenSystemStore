using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Project_P34.DataAccess.Entity
{
    [Table("tblProduct")]
    public class Product
    {
        [Key]
        public string Id { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        public int Price { get; set; }

        [Required]
        public string Brand { get; set; }

        [Required]
        public virtual ICollection<Category> Category { get; set; }

        [Required]
        public string Description { get; set; }

        public string MainImage { get; set; }

        [Required]
        public string Warranty { get; set; }

        [Required]
        public string Payment { get; set; }

        public string FirstAdditionalImage { get; set; }

        public string SecondAdditionalImage { get; set; }

        public string ThirdAdditionalImage { get; set; }
    }
}
