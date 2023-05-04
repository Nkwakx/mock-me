using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace MockOzowMe.Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class again : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Email",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "Metadata",
                table: "Transactions");

            migrationBuilder.RenameColumn(
                name: "Surname",
                table: "Users",
                newName: "Password");

            migrationBuilder.RenameColumn(
                name: "IdNumber",
                table: "Users",
                newName: "GivenName");

            migrationBuilder.RenameColumn(
                name: "Gender",
                table: "Users",
                newName: "AddressEmail");

            migrationBuilder.AlterDatabase()
                .OldAnnotation("Npgsql:PostgresExtension:hstore", ",,");

            migrationBuilder.AlterColumn<decimal>(
                name: "Balance",
                table: "Wallets",
                type: "numeric",
                nullable: false,
                oldClrType: typeof(long),
                oldType: "bigint");

            migrationBuilder.AddColumn<bool>(
                name: "Active",
                table: "Wallets",
                type: "boolean",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AlterColumn<decimal>(
                name: "Amount",
                table: "Transactions",
                type: "numeric",
                nullable: false,
                oldClrType: typeof(long),
                oldType: "bigint");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Active",
                table: "Wallets");

            migrationBuilder.RenameColumn(
                name: "Password",
                table: "Users",
                newName: "Surname");

            migrationBuilder.RenameColumn(
                name: "GivenName",
                table: "Users",
                newName: "IdNumber");

            migrationBuilder.RenameColumn(
                name: "AddressEmail",
                table: "Users",
                newName: "Gender");

            migrationBuilder.AlterDatabase()
                .Annotation("Npgsql:PostgresExtension:hstore", ",,");

            migrationBuilder.AlterColumn<long>(
                name: "Balance",
                table: "Wallets",
                type: "bigint",
                nullable: false,
                oldClrType: typeof(decimal),
                oldType: "numeric");

            migrationBuilder.AddColumn<string>(
                name: "Email",
                table: "Users",
                type: "text",
                nullable: true);

            migrationBuilder.AlterColumn<long>(
                name: "Amount",
                table: "Transactions",
                type: "bigint",
                nullable: false,
                oldClrType: typeof(decimal),
                oldType: "numeric");

            migrationBuilder.AddColumn<Dictionary<string, string>>(
                name: "Metadata",
                table: "Transactions",
                type: "hstore",
                nullable: true);
        }
    }
}
