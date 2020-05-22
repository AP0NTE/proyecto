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
    public class DocenteController : ControllerBase
    {
        private readonly DocenteContext _context;
        public DocenteController(DocenteContext context)
        {
            _context = context;
            if (_context.Docente.Count() == 0)
            {
                // Crea un nuevo item si la coleccion esta vacia,
                // lo que significa que no puedes borrar todos los Items.
                _context.Docente.Add(new Docente {Email="",Usuario="",Clave="",Salon="",Lic="",
                Sexo="",Nombre="",Apellido="", Fechan="",Documento="",Telefono="",estado=""});
                _context.SaveChanges();
            }
            
        }

        // GET: api/Task
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Docente>>> GetTaskItems()
        {
        return await _context.Docente.ToListAsync();
        }

        // GET: api/Task/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Docente>> GetTaskItem(int id)
        {
            var docente = await _context.Docente.FindAsync(id);
            if (docente == null)
            {
                return NotFound();
            }
            return docente;
        }

        // POST: api/Task
        [HttpPost]
        public async Task<ActionResult<Docente>> PostTaskItem(Docente item)
        {
            item.estado="ACTIVO";
            _context.Docente.Add(item);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetTaskItem), new { id = item.Documento }, item);
        }

        // PUT: api/Task/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTaskItem(int id, Docente item)
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
            var Docente = await
            _context.Docente.FindAsync(id);
            if (Docente == null)
            {
                return NotFound();
            }
            _context.Docente.Remove(Docente);
            await _context.SaveChangesAsync();
            return NoContent();
        }
        
    }
}