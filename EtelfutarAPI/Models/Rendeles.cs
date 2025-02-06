using System;
using System.Collections.Generic;

namespace EtelfutarAPI.Models;

public partial class Rendeles
{
    public int Id { get; set; }

    public int FelhasznaloId { get; set; }

    public int OsszAr { get; set; }

    public virtual Felhasznalok Felhasznalo { get; set; } = null!;

    public virtual ICollection<Etelek> Etels { get; set; } = new List<Etelek>();
}
