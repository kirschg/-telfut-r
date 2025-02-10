using EtelfutarAPI.Models;
using System.Security.Cryptography.X509Certificates;

namespace EtelfutarAPI.DTOs
{
    public class EttermekVarosDTO
    {
        public EttermekVarosDTO(Varosok varosok)
        {
            Id = varosok.Id;
            Nev = varosok.Nev;
            IndexKep = varosok.IndexKep;
        }

        public int Id { get; set; }
        public string Nev { get; set; }
        public string IndexKep { get; set; }
    }
}
