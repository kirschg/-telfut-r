using EtelfutarAPI.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace EtelfutarAPI.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class RendeltetelController : Controller
    {
        [HttpGet("GetRendeltetelekAsync")]
        public async Task<IActionResult> GetRendeltetelekAsync()
        {
            using (var context = new EtelfutarContext())
            {
                try
                {
                    List<Rendeltetel> result = await context.Rendeltetels.Include(x=>x.Etel.Chain).Include(x => x.Rendeles.Felhasznalo.Varos).ToListAsync();
                    return Ok(result);
                }
                catch (Exception ex)
                {
                    return BadRequest(ex.Message);
                }
            }
        }
        [HttpPost("PostRendeltetelAsync")]
        public async Task<IActionResult> PostRendeltetelAsync(Rendeltetel ujRendeltetel)
        {
            using (var context = new EtelfutarContext())
            {
                try
                {
                    if (ujRendeltetel is not null)
                    {
                        await context.Rendeltetels.AddAsync(ujRendeltetel);
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
        [HttpPut("PutRendeltetelAsync")]
        public async Task<IActionResult> PutRendeltetelAsync(Rendeltetel modRendeltetel)
        {
            using (var context = new EtelfutarContext())
            {
                try
                {
                    if (context.Rendeltetels.Contains(modRendeltetel))
                    {
                        context.Rendeltetels.Update(modRendeltetel);
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
        [HttpDelete("DeleteRendeltetelAsync")]
        public async Task<IActionResult> DeleteRendeltetelAsync(int id)
        {
            using (var context = new EtelfutarContext())
            {
                try
                {
                    Rendeltetel torlendo = new Rendeltetel
                    {
                        Id = id
                    };
                    if (context.Rendeltetels.Contains(torlendo))
                    {
                        context.Rendeltetels.Remove(torlendo);
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
