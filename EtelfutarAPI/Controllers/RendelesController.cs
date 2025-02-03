using EtelfutarAPI.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace EtelfutarAPI.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class RendelesController : Controller
    {
        [HttpGet("GetRendelesekAsync")]
        public async Task<IActionResult> GetRendelesekAsync()
        {
            using (var context = new EtelfutarContext())
            {
                try
                {
                    List<Rendeles> result = await context.Rendeles.Include(x => x.Felhasznalo).Include(x=>x.Felhasznalo.Varos).ToListAsync();
                    return Ok(result);
                }
                catch (Exception ex)
                {
                    return BadRequest(ex.Message);
                }
            }
        }
        [HttpPost("PostRendelesAsync")]
        public async Task<IActionResult> PostRendelesAsync(Rendeles ujRendeles)
        {
            using (var context = new EtelfutarContext())
            {
                try
                {
                    if (ujRendeles is not null)
                    {
                        await context.Rendeles.AddAsync(ujRendeles);
                        await context.SaveChangesAsync();
                        return Ok("Sikeres mentés");
                    }
                    else
                    {
                        return BadRequest("Üres objektumot kaptam!");
                    }
                }
                catch (Exception ex)
                {
                    return BadRequest(ex.Message);
                }
            }
        }
        [HttpPut("PutVarosAsync")]
        public async Task<IActionResult> PutRendelesAsync(Rendeles modRendeles)
        {
            using (var context = new EtelfutarContext())
            {
                try
                {
                    if (context.Rendeles.Contains(modRendeles))
                    {
                        context.Rendeles.Update(modRendeles);
                        await context.SaveChangesAsync();
                        return Ok("Sikeres módosítás.");
                    }
                    else
                    {
                        return NotFound("Üres objektumot kaptam!");
                    }
                }
                catch (Exception ex)
                {
                    return BadRequest(ex.Message);
                }
            }
        }
        [HttpDelete("DeleteRendelesAsync")]
        public async Task<IActionResult> DeleteRendelesAsync(int id)
        {
            using (var context = new EtelfutarContext())
            {
                try
                {
                    Rendeles torlendo = new Rendeles
                    {
                        Id = id
                    };
                    if (context.Rendeles.Contains(torlendo))
                    {
                        context.Rendeles.Remove(torlendo);
                        await context.SaveChangesAsync();
                        return Ok("Sikeres törlés");
                    }
                    else
                    {
                        return NotFound("Nincs ilyen város.");
                    }
                }
                catch (Exception ex)
                {
                    return BadRequest(ex.Message);
                }
            }
        }
    }
}
