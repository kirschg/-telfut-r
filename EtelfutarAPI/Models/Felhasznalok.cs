﻿using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace EtelfutarAPI.Models;

public partial class Felhasznalok
{
    public int Id { get; set; }

    public string FelhasznaloNev { get; set; } = null!;

    public string Email { get; set; } = null!;

    public int VarosId { get; set; }

    public string Lakcim { get; set; } = null!;

    public string Hash { get; set; } = null!;

    public string Salt { get; set; } = null!;

    [JsonIgnore]
    public virtual ICollection<Rendeles> Rendeles { get; set; } = new List<Rendeles>();

    public virtual Varosok Varos { get; set; } = null!;
}
