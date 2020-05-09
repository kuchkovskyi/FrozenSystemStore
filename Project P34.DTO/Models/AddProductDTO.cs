using Project_P34.DataAccess.Entity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Project_P34.DTO.Models
{
    public class AddProductDTO
    {
        [Required(ErrorMessage = "Name is required!")]
        public string Name { get; set; }
        
        [Required(ErrorMessage = "Price is required!")]
        public string Price { get; set; }

        [Required(ErrorMessage = "Brand is required!")]
        public string Brand { get; set; }

        [Required(ErrorMessage = "Category is required!")]
        public Category CategoryId { get; set;  }

        [Required(ErrorMessage = "Description number is required!")]
        public string Description { get; set; }

        [Required(ErrorMessage = "MainImage is required!")]
        public string MainImage { get; set; }

        [Required(ErrorMessage = "Waranty is required!")]
        public int Warranty { get; set; }

        [Required(ErrorMessage = "Payment is required!")]
        public int Payment { get; set; }

        [Required(ErrorMessage = "First additional image is required!")]
        public string FirstAdditionalImage { get; set; }

        [Required(ErrorMessage = "Second additional image is required!")]
        public string SecondAdditionalImage { get; set; }

        [Required(ErrorMessage = "Third additional image is required!")]
        public string ThirdAdditionalImage { get; set; }
    }
}
