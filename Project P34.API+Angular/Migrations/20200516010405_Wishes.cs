using Microsoft.EntityFrameworkCore.Migrations;

namespace Project_P34.API_Angular.Migrations
{
    public partial class Wishes : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "tblFavotity",
                columns: table => new
                {
                    FavoriteProductId = table.Column<int>(nullable: false),
                    FavoriteUserId = table.Column<string>(nullable: false),
                    CategoryProductOfId = table.Column<int>(nullable: true),
                    CategoryUserOfId = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_tblFavotity", x => new { x.FavoriteUserId, x.FavoriteProductId });
                    table.ForeignKey(
                        name: "FK_tblFavotity_tblProduct_CategoryProductOfId",
                        column: x => x.CategoryProductOfId,
                        principalTable: "tblProduct",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_tblFavotity_AspNetUsers_CategoryUserOfId",
                        column: x => x.CategoryUserOfId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_tblFavotity_CategoryProductOfId",
                table: "tblFavotity",
                column: "CategoryProductOfId");

            migrationBuilder.CreateIndex(
                name: "IX_tblFavotity_CategoryUserOfId",
                table: "tblFavotity",
                column: "CategoryUserOfId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "tblFavotity");
        }
    }
}
