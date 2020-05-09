using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Project_P34.DTO.Models
{
    public class AddCategoryDTO
    {
        [Required]
        public string Name { get; set; }
    }
}
