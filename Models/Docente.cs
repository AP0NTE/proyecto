using System.ComponentModel.DataAnnotations;
using Newtonsoft.Json;

namespace ProyectoFinal.Models
{
    public class Docente
    {
        [JsonProperty("id")]
         public int Id { get; set; }
        [JsonProperty("email")]
        [Required] public string Email{ get; set; }
        [JsonProperty("usuario")]
        [Required] public string Usuario{ get; set; }
        [JsonProperty("clave")]
        [Required] public string Clave{ get; set; }
        [JsonProperty("salon")]
        [Required] public string Salon{ get; set; }
        [JsonProperty("lic")]
        [Required] public string Lic{ get; set; }
        [JsonProperty("sexo")]
         public string Sexo{ get; set; }
         [JsonProperty("nombre")]
        [Required] public string Nombre{ get; set; }
        [JsonProperty("apellido")]
        [Required] public string Apellido{ get; set; }
        [JsonProperty("fechan")]
        [Required] public string Fechan{ get; set; }
        [JsonProperty("documento")]
        [Required] public string Documento{ get; set; }
        [JsonProperty("telefono")]
        [Required] public string Telefono{ get; set; }
        [JsonProperty("estado")]
        public string estado{get; set;}
   
    }
}