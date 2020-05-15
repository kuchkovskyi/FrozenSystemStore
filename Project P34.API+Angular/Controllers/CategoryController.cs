using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Project_P34.API_Angular.Helper;
using Project_P34.DataAccess;
using Project_P34.DataAccess.Entity;
using Project_P34.DTO.Models;
using Project_P34.DTO.Models.Results;

namespace Project_P34.API_Angular.Controllers
{
    [Route("api/Category")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        private readonly EFContext _context;

        public CategoryController(EFContext context)
        {
            _context = context;
        }

        [HttpPost("addCategory")]
        public ResultDTO AddCategory([FromBody]AddCategoryDTO model)
        {
            if (!ModelState.IsValid)
            {
                return new ResultDTO
                {
                    Status = 500,
                    Message = "Error",
                    Errors = CustomValidator.GetErrorsByModel(ModelState)
                };
            }
            else
            {
                var category = new Category()
                {
                    Name = model.Name
                };

                _context.categories.Add(category);

                _context.SaveChanges();

                return new ResultDTO
                {
                    Status = 200,
                    Message = "OK"
                };
            }
        }

        [HttpGet]
        public IEnumerable<CategoryDTO> getCategory()
        {
            List<CategoryDTO> data = new List<CategoryDTO>();

            var dataFromDB = _context.categories.ToList();
            foreach (var item in dataFromDB)
            {
                CategoryDTO category = new CategoryDTO();
                var moreInfo = _context.categories.FirstOrDefault(t => t.Id == item.Id);

                category.Id = moreInfo.Id;
                category.Name = moreInfo.Name;

                data.Add(category);
            }
            return data;
        }

        [HttpPost("RemoveCategory/{id}")]
        public ResultDTO RemoveCategory([FromRoute]int id)
        {
            try
            {
                var category = _context.categories.FirstOrDefault(t => t.Id == id);
                if (category != null)
                {
                    _context.categories.Remove(category);
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

        [HttpGet("{id}")]
        public CategoryDTO GetCategory([FromRoute] int id)
        {
            var category = _context.categories.FirstOrDefault(t => t.Id == id);

            CategoryDTO model = new CategoryDTO();
            model.Id = category.Id;
            model.Name = category.Name;

            return model;
        }

        [HttpPost("editCategory/{id}")]
        public ResultDTO EditCategory([FromRoute] int id, [FromBody]CategoryDTO model)
        {
            var category = _context.categories.FirstOrDefault(t => t.Id == id);

            category.Name = model.Name;

            _context.SaveChanges();

            return new ResultDTO
            {
                Status = 200,
                Message = "OK"
            };
        }
    }

}
