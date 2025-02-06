﻿using System;
using System.Collections.Generic;

namespace EtelfutarAPI.Models;

public partial class Etelek
{
    public int Id { get; set; }

    public string Nev { get; set; } = null!;

    public int Kaloria { get; set; }

    public int Ar { get; set; }

    public int ChainId { get; set; }

    public string Indexkep { get; set; } = null!;

    public virtual Chain Chain { get; set; } = null!;

    public virtual ICollection<Ettermek> Etterems { get; set; } = new List<Ettermek>();

    public virtual ICollection<Rendeles> Rendeles { get; set; } = new List<Rendeles>();
}
