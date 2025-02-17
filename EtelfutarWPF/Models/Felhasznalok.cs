﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EtelfutarWPF.Models
{
    public partial class Felhasznalok
    {
        public int Id { get; set; }

        public string FelhasznaloNev { get; set; } = null!;

        public string TeljesNev { get; set; } = null!;

        public string Email { get; set; } = null!;

        public int VarosId { get; set; }

        public string Lakcim { get; set; } = null!;

        public string Hash { get; set; } = null!;

        public string Salt { get; set; } = null!;

        public int Jogosultsag { get; set; }
    }
}
