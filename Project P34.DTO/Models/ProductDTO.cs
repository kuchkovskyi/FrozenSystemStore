using System;
using System.Collections.Generic;
using System.Text;

namespace Project_P34.DTO.Models
{
    public class ProductDTO
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public int Price { get; set; }

        public string Brand { get; set; }

        public string Category { get; set; }

        public string Description { get; set; }

        public string MainImage { get; set; }

        public string Warranty { get; set; }

        public string Payment { get; set; }

        public string FirstAdditionalImage { get; set; }

        public string SecondAdditionalImage { get; set; }

        public string ThirdAdditionalImage { get; set; }
    }
}
