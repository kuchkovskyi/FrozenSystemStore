using Project_P34.API_Angular.Helper;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Project_P34.DTO.Models
{
    public class UserRegisterDTO
    {
        [Required(ErrorMessage = "Full name is required!")]
        public string fullName { get; set; }

        [Required(ErrorMessage = "Email is required!")]
        //[EmailAddress(ErrorMessage = "Email is not correct!")]
        //[CustomEmail(ErrorMessage = "This mail is already registered!")]
        public string email { get; set; }

        [Required(ErrorMessage = "Password is required!")]
        public string password { get; set; }

        [Required(ErrorMessage = "Phone number is required!")]
        public string phoneNumber { get; set; }

        [Required(ErrorMessage = "Address is required!")]
        public string address { get; set; }

        [Required(ErrorMessage = "Age is required!")]
        public int age { get; set; }
    }
}
