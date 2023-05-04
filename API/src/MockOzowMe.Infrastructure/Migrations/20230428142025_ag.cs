using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace MockOzowMe.Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class ag : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "AddressEmail",
                table: "Users",
                newName: "EmailAddress");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "EmailAddress",
                table: "Users",
                newName: "AddressEmail");
        }
    }
}
