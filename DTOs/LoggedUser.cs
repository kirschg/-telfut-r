using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EtelfutarWPF.DTOs
{
    public class LoggedUser
    {
        public string FelhasznaloNev { get; set; } = null!;

        public string Email { get; set; } = null!;

        public int Jogosultsag { get; set; }

        public string Token { get; set; }
    }
}
