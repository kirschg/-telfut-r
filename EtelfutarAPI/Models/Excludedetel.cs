using System;
using System.Collections.Generic;

namespace EtelfutarAPI.Models;

public partial class Excludedetel
{
    public int Id { get; set; }

    public int EtelId { get; set; }

    public int EtteremId { get; set; }

    public virtual Etelek Etel { get; set; } = null!;

    public virtual Ettermek Etterem { get; set; } = null!;
}
