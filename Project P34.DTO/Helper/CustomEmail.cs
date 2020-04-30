using Microsoft.AspNetCore.Identity;
using Project_P34.DataAccess.Entity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Project_P34.API_Angular.Helper
{
    //public class CustomEmailAttribute : ValidationAttribute
    //{
    //    protected override ValidationResult IsValid(object eMail,
    //        ValidationContext validationContext)
    //    {
    //        if (eMail != null)
    //        {
    //            var service = (UserManager<User>)validationContext
    //                     .GetService(typeof(UserManager<User>));


    //            var user = service.FindByEmailAsync(eMail.ToString())
    //                .Result;

    //            if (user != null)
    //            {
    //                return new ValidationResult(null);
    //            }
    //            return ValidationResult.Success;
    //        }
    //        return new ValidationResult(null);
    //    }
    //}

    public class IsDigitalsAttribute : ValidationAttribute
    {
        protected override ValidationResult IsValid(object eMail,
            ValidationContext validationContext)
        {
            if (eMail != null)
            {

                return ValidationResult.Success;
            }
            return new ValidationResult(null);
        }
    }

}
