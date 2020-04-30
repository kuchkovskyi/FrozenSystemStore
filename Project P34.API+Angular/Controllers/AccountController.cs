using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Project_P34.API_Angular.Helper;
using Project_P34.DataAccess;
using Project_P34.DataAccess.Entity;
using Project_P34.Domain.Interfaces;
using Project_P34.DTO.Models;
using Project_P34.DTO.Models.Results;

namespace Project_P34.API_Angular.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        private readonly EFContext _context;
        private readonly UserManager<User> _userManager;
        private readonly SignInManager<User> _signInManager;
        private readonly IJWTTokenService _jWTTokenService;
        private readonly IConfiguration _configuration;

        public AccountController(
             EFContext context,
             UserManager<User> userManager,
             SignInManager<User> signInManager,
             IJWTTokenService jWTTokenService,
             IConfiguration configuration)
        {
            _userManager = userManager;
            _context = context;
            _signInManager = signInManager;
            _jWTTokenService = jWTTokenService;
            _configuration = configuration;
        }

        [HttpPost("register")]
        public async Task<ResultDTO> Register([FromBody] UserRegisterDTO model)
        {
            if (!ModelState.IsValid)
            {
                return new ResultDTO
                {
                    Status = 500,
                    Message = "ERROR",
                    Errors = CustomValidator.GetErrorsByModel(ModelState)
                };
            }
            else
            {
                var user = new User()
                {
                    Email = model.email,
                    UserName = model.email,
                    PhoneNumber = model.phoneNumber
                };

                var userMoreInfo = new UserMoreInfo()
                {
                    Id = user.Id,
                    FullName = model.fullName,
                    Address = model.address,
                    Age = model.age
                };

                var result = await _userManager.CreateAsync(user, model.password);

                if (!result.Succeeded)
                {
                    return new ResultDTO
                    {
                        Status = 500,
                        Errors = CustomValidator.GetErrorsByIdentityResult(result)
                    };
                }
                else if (result.Succeeded)
                {
                    result = _userManager.AddToRoleAsync(user, "User").Result;
                    _context.userMoreInfos.Add(userMoreInfo);
                    _context.SaveChanges();
                }
                
                return new ResultDTO
                {
                    Status = 200,
                    Message = "OK"
                };
            }

        }


        [HttpPost("login")]
        public async Task<ResultDTO> Login([FromBody]UserLoginDTO model)
        {
            if(!ModelState.IsValid)
            {
                return new ResultDTO
                {
                    Status = 400,
                    Message = "ERROR",
                    Errors = CustomValidator.GetErrorsByModel(ModelState)
                };
            }
            else
            {
                var result = await _signInManager.PasswordSignInAsync(model.Email, model.Password, false, false);
                if( !result.Succeeded)
                {
                    List<string> error = new List<string>();
                    error.Add("User is not found, password or email discorrect");
                    return new ResultDTO
                    {
                        Status = 400,
                        Message = "User is not found",
                        Errors = error
                    };
                }
                else
                {
                    var user = await _userManager.FindByEmailAsync(model.Email);
                    await _signInManager.SignInAsync(user, false);

                    return new ResultDTO
                    {
                        Status = 200,
                        Message = "Ok",
                        Token = _jWTTokenService.CreateToken(user)
                    };
                }
            }
        }

    }
}