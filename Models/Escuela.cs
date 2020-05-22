using System.ComponentModel.DataAnnotations;
using Newtonsoft.Json;

namespace ProyectoFinal.Models
{
    public class Escuela
    {
         public int Id { get; set; }
        
        [Required] public string Email{ get; set; }
        [Required] public string Usuario{ get; set; }
        [Required] public string Clave{ get; set; }
        [Required] public string Salon{ get; set; }
        [Required] public string Lic{ get; set; }
        [Required] public string Sexo{ get; set; }
        [Required] public string Nombre{ get; set; }
        [Required] public string Apellido{ get; set; }
        [Required] public string Fechan{ get; set; }
        [Required] public string Documento{ get; set; }
        [Required] public string Telefono{ get; set; }
        [Required] public string Acudiente{ get; set; }
        public string estado{get; set;}
   
    }
}