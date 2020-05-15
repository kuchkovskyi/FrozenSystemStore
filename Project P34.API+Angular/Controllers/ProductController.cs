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
    [Route("api/Product")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly EFContext _context;


        public ProductController(EFContext context)
        {
            _context = context;
        }

        [HttpPost("addProduct")]
        public ResultDTO AddProduct([FromBody]AddProductDTO model)
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
                var product = new Product()
                {
                    Name = model.Name,
                    Price = model.Price,
                    Brand = model.Brand,
                    Category = model.Category,
                    Description = model.Description,
                    MainImage = model.MainImage,
                    Warranty = model.Warranty,
                    Payment = model.Payment,
                    FirstAdditionalImage = model.FirstAdditionalImage,
                    SecondAdditionalImage = model.SecondAdditionalImage,
                    ThirdAdditionalImage = model.ThirdAdditionalImage
                };

                _context.products.Add(product);

                _context.SaveChanges();

                return new ResultDTO
                {
                    Status = 200,
                    Message = "OK"
                };
            }
        }

        [HttpGet]
        public IEnumerable<ProductDTO> getProduct()
        {
            List<ProductDTO> data = new List<ProductDTO>();

            var dataFromDB = _context.products.ToList();
            foreach (var item in dataFromDB)
            {
                ProductDTO productDTO = new ProductDTO();
                var allInfo = _context.products.FirstOrDefault(t => t.Id == item.Id);

                productDTO.Id = allInfo.Id;
                productDTO.Name = allInfo.Name;
                productDTO.Price = allInfo.Price;
                productDTO.Brand = allInfo.Brand;
                productDTO.Category = allInfo.Category;
                productDTO.Description = allInfo.Description;
                productDTO.MainImage = allInfo.MainImage;
                productDTO.Warranty = allInfo.Warranty;
                productDTO.Payment = allInfo.Payment;
                productDTO.FirstAdditionalImage = allInfo.FirstAdditionalImage;
                productDTO.SecondAdditionalImage = allInfo.SecondAdditionalImage;
                productDTO.ThirdAdditionalImage = allInfo.ThirdAdditionalImage;

                data.Add(productDTO);
            }
            return data;
        }

        [HttpPost("RemoveProduct/{id}")]
        public ResultDTO RemoveProduct([FromRoute]int id)
        {
            try
            {
                var product = _context.products.FirstOrDefault(t => t.Id == id);
                if (product != null)
                {
                    _context.products.Remove(product);
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
        public ProductDTO GetProduct([FromRoute] int id)
        {
            var product = _context.products.FirstOrDefault(t => t.Id == id);

            ProductDTO model = new ProductDTO();

            model.Id = product.Id;
            model.Name = product.Name;
            model.Price = product.Price;
            model.Brand = product.Brand;
            model.Category = product.Category;
            model.Description = product.Description;
            model.MainImage = product.MainImage;
            model.Warranty = product.Warranty;
            model.Payment = product.Payment;
            model.FirstAdditionalImage = product.FirstAdditionalImage;
            model.SecondAdditionalImage = product.SecondAdditionalImage;
            model.ThirdAdditionalImage = product.ThirdAdditionalImage;

            return model;
        }

        [HttpPost("editProduct/{id}")]
        public ResultDTO EditProduct([FromRoute] int id, [FromBody]ProductDTO model)
        {
            var product = _context.products.FirstOrDefault(t => t.Id == id);

            product.Name = model.Name;
            product.Id = model.Id;
            product.Name = model.Name;
            product.Price = model.Price;
            product.Brand = model.Brand;
            product.Category = model.Category;
            product.Description = model.Description;
            product.MainImage = model.MainImage;
            product.Warranty = model.Warranty;
            product.Payment = model.Payment;
            product.FirstAdditionalImage = model.FirstAdditionalImage;
            product.SecondAdditionalImage = model.SecondAdditionalImage;
            product.ThirdAdditionalImage = model.ThirdAdditionalImage;

            _context.SaveChanges();

            return new ResultDTO
            {
                Status = 200,
                Message = "OK"
            };
        }
    }
}