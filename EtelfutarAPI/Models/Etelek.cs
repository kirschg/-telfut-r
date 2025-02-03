﻿using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;

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

    [JsonIgnore]
    public virtual ICollection<Excludedetel> Excludedetels { get; set; } = new List<Excludedetel>();

    [JsonIgnore]
    public virtual ICollection<Rendeltetel> Rendeltetels { get; set; } = new List<Rendeltetel>();
}
