using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EtelfutarWPF.DTOs
{
    public class RegistryFelhasznalokDTO
    {
        public RegistryFelhasznalokDTO(string email, string felhasznaloNev, string teljesNev, string hash, int varosId, string lakcim, string salt)
        {
            Email = email;
            FelhasznaloNev = felhasznaloNev;
            TeljesNev = teljesNev;
            Hash = hash;
            VarosId = varosId;
            LakCim = lakcim;
            Salt = salt;
        }

        public RegistryFelhasznalokDTO() { }
        public string Email { get; set; }
        public string FelhasznaloNev { get; set; }
        public string TeljesNev { get; set; }
        public string Hash { get; set; }
        public int VarosId { get; set; }
        public string LakCim { get; set; }
        public string Salt { get; set; }
    }
}
