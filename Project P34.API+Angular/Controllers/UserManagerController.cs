using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Project_P34.DataAccess;
using Project_P34.DataAccess.Entity;
using Project_P34.DTO.Models;
using Project_P34.DTO.Models.Results;

namespace Project_P34.API_Angular.Controllers
{
    [Route("api/UserManager")]
    [ApiController]
    public class UserManagerController : ControllerBase
    {
        private readonly EFContext _context;

        private readonly UserManager<User> _userManager;

        public UserManagerController(EFContext context, UserManager<User> userManager)
        {
            _context = context;
            _userManager = userManager;
        }

        [HttpGet]
        public IEnumerable<UserItemDTO> getUsers()
        {
            List<UserItemDTO> data = new List<UserItemDTO>();

            var dataFromDB = _context.Users.Where(t => t.Email != "admin@gmail.com").ToList();
            foreach(var item in dataFromDB)
            {
                UserItemDTO temp = new UserItemDTO();
                var moreInfo = _context.userMoreInfos.FirstOrDefault(t => t.Id == item.Id);

                temp.Email = item.Email;
                temp.Id = item.Id;
                temp.Phone = item.PhoneNumber;
                if (moreInfo != null)
                {
                    temp.fullName = moreInfo.FullName;
                    temp.Age = moreInfo.Age;
                    temp.Address = moreInfo.Address;
                }

                data.Add(temp);
            }

            return data;
        }

        [HttpPost("RemoveUser/{id}")]
        public ResultDTO RemoveUser([FromRoute]string id)
        {
            try
            {
                var user = _context.Users.FirstOrDefault(t => t.Id == id);
                var userMoreInfo = _context.userMoreInfos.FirstOrDefault(t => t.Id == id);

                _context.Users.Remove(user);
                if(userMoreInfo!=null)
                {
                    _context.userMoreInfos.Remove(userMoreInfo);
                }
                _context.SaveChanges();

                return new ResultDTO
                {
                    Status = 200,
                    Message = "OK"
                };
            }
            catch (Exception ex)
            {
                List<string> temp = new List<string>();
                temp.Add(ex.Message);

                return new ResultDTO
                {
                    Status = 500,
                    Message = "ERROR",
                    Errors = temp
                };
            }
        }

    }
}