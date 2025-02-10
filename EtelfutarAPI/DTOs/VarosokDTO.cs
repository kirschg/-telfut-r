using EtelfutarAPI.Models;

namespace EtelfutarAPI.DTOs
{
    public class VarosokDTO
    {
        public VarosokDTO(Varosok varosok)
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
