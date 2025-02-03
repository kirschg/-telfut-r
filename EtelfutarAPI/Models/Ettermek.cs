using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace EtelfutarAPI.Models;

public partial class Ettermek
{
    public int Id { get; set; }

    public string Cim { get; set; } = null!;

    public int ChainId { get; set; }

    public int VarosId { get; set; }

    public string Indexkep { get; set; } = null!;

    public virtual Chain Chain { get; set; } = null!;

    [JsonIgnore]
    public virtual ICollection<Excludedetel> Excludedetels { get; set; } = new List<Excludedetel>();

    public virtual Varosok Varos { get; set; } = null!;
}
