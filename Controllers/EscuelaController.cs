using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ProyectoFinal.Models;


/*namespace ProyectoFinal.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EscuelaController : ControllerBase
    {
        private readonly EscuelaContext _context;
        public EscuelaController(EscuelaContext context)
        {
            _context = context;
            if (_context.Escuela.Count() == 0)
            {
                // Crea un nuevo item si la coleccion esta vacia,
                // lo que significa que no puedes borrar todos los Items.
                _context.Escuela.Add(new Escuela {Email="s@gmail.com",Usuario="jdbfbj",Clave="vkjnvf",Salon="9°",Lic="nbnfgn",
                Sexo="feme",Nombre="rnbjk",Apellido="gbnk", Fechan="20/09/1990",Documento="12323423",Telefono="134534",Acudiente="iurbuinvsvbd"});
                _context.SaveChanges();
            }

        }

        // GET: api/Task
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Escuela>>> GetTaskItems()
        {
        return await _context.Escuela.ToListAsync();
        }

        // GET: api/Task/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Escuela>> GetTaskItem(int id)
        {
            var escuela = await _context.Escuela.FindAsync(id);
            if (escuela == null)
            {
                return NotFound();
            }
            return escuela;
        }

        // POST: api/Task
        [HttpPost]
        public async Task<ActionResult<Escuela>> PostTaskItem(Escuela item)
        {
            item.estado="ACTIVO";
            _context.Escuela.Add(item);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetTaskItem), new { id = item.Documento }, item);
        }

        // PUT: api/Task/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTaskItem(int id, Escuela item)
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
            var Escuela = await
            _context.Escuela.FindAsync(id);
            if (Escuela == null)
            {
                return NotFound();
            }
            _context.Escuela.Remove(Escuela);
            await _context.SaveChangesAsync();
            return NoContent();
        }
        
    }
}*/