using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ProyectoFinal.Models;


namespace ProyectoFinal.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EstudianteController : ControllerBase
    {
        private readonly EstudianteContext _context;
        public EstudianteController(EstudianteContext context)
        {
            _context = context;
            if (_context.Estudiante.Count() == 0)
            {
                // Crea un nuevo item si la coleccion esta vacia,
                // lo que significa que no puedes borrar todos los Items.
                _context.Estudiante.Add(new Estudiante {Email="",Usuario="",Clave="",Salon="",Acudiente="",
                Sexo="",Nombre="",Apellido="", Fechan="",Documento="",Telefono="",estado=""});
                _context.SaveChanges();
            }
            
        }

        // GET: api/Task
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Estudiante>>> GetTaskItems()
        {
        return await _context.Estudiante.ToListAsync();
        }

        // GET: api/Task/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Estudiante>> GetTaskItem(int id)
        {
            var estudiante = await _context.Estudiante.FindAsync(id);
            if (estudiante == null)
            {
                return NotFound();
            }
            return estudiante;
        }

        // POST: api/Task
        [HttpPost]
        public async Task<ActionResult<Estudiante>> PostTaskItem(Estudiante item)
        {
            item.estado="ACTIVO";
            _context.Estudiante.Add(item);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetTaskItem), new { id = item.Documento }, item);
        }

        // PUT: api/Task/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTaskItem(int id, Estudiante item)
        {
            if (id != item.Id)
            {
                return BadRequest();
            }
            _context.Entry(item).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return NoContent();
        }

        // DELETE: api/Todo/5

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTaskItem(int id)
        {
            var Estudiante = await
            _context.Estudiante.FindAsync(id);
            if (Estudiante == null)
            {
                return NotFound();
            }
            _context.Estudiante.Remove(Estudiante);
            await _context.SaveChangesAsync();
            return NoContent();
        }
        
    }
}