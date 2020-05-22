using Microsoft.EntityFrameworkCore;
namespace ProyectoFinal.Models
{
    public class DocenteContext:DbContext
    {
        public DocenteContext(DbContextOptions<DocenteContext> options):
        base(options){

        }
        public DbSet<Docente> Docente{get; set;}
        
    }
}