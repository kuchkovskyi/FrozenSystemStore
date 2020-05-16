using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Project_P34.DataAccess.Entity;
using System;
using System.Collections.Generic;
using System.Text;

namespace Project_P34.DataAccess
{
    public class EFContext : IdentityDbContext<User>
    {
        public EFContext(DbContextOptions<EFContext> options) : base(options) { }

        public DbSet<UserMoreInfo> userMoreInfos { get; set; }

        public DbSet<Product> products { get; set; }

        public DbSet<Category> categories { get; set; }

        public DbSet<ShoppingCart> shoppingCarts { get; set; }

        public DbSet<FavoriteList> favoriteLists { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<User>()
                .HasOne(u => u.UserMoreInfo)
                .WithOne(t => t.User)
                .HasForeignKey<UserMoreInfo>(ui => ui.Id);

            builder.Entity<ShoppingCart>()
                .HasKey(k => new { k.UserId, k.ProductId });

            builder.Entity<FavoriteList>()
               .HasKey(k => new { k.FavoriteUserId, k.FavoriteProductId });

            base.OnModelCreating(builder);
        }

    }
}
