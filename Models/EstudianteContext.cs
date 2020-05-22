using Microsoft.EntityFrameworkCore;
namespace ProyectoFinal.Models
{
    public class EstudianteContext:DbContext
    {
        public EstudianteContext(DbContextOptions<EstudianteContext> options):
        base(options){
        }
        public DbSet<Estudiante> Estudiante{get; set;}
    }
}