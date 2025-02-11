using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EtelfutarWPF.DTOs
{
    internal class LoginDTO
    {
        public string LoginName { set; get; }
        public string TmpHash { get; set; }
    }
}
