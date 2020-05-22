using Microsoft.EntityFrameworkCore.Migrations;

namespace ProyectoFinal.Migrations.Estudiante
{
    public partial class Initial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Estudiante",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Email = table.Column<string>(nullable: false),
                    Usuario = table.Column<string>(nullable: false),
                    Clave = table.Column<string>(nullable: false),
                    Salon = table.Column<string>(nullable: false),
                    Acudiente = table.Column<string>(nullable: false),
                    Sexo = table.Column<string>(nullable: true),
                    Nombre = table.Column<string>(nullable: false),
                    Apellido = table.Column<string>(nullable: false),
                    Fechan = table.Column<string>(nullable: false),
                    Documento = table.Column<string>(nullable: false),
                    Telefono = table.Column<string>(nullable: false),
                    estado = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Estudiante", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Estudiante");
        }
    }
}
