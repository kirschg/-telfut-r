using EtelfutarAPI.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace EtelfutarAPI.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class ExcludedetelController : Controller
    {
        [HttpGet("GetExcludedetelekAsync")]
        public async Task<IActionResult> GetExcludedetelekAsync()
        {
            using (var context = new EtelfutarContext())
            {
                try
                {
                    List<Excludedetel> result = await context.Excludedetels.Include(x=>x.Etel).Include(x => x.Etterem).ToListAsync();
                    return Ok(result);
                }
                catch (Exception ex)
                {
                    return BadRequest(ex.Message);
                }
            }
        }
        [HttpPost("PostExcludedetelAsync")]
        public async Task<IActionResult> PostExcludedetelAsync(Excludedetel ujExcludedetel)
        {
            using (var context = new EtelfutarContext())
            {
                try
                {
                    if (ujExcludedetel is not null)
                    {
                        await context.Excludedetels.AddAsync(ujExcludedetel);
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
        [HttpPut("PutExcludedetelAsync")]
        public async Task<IActionResult> PutExcludedetelAsync(Excludedetel modExcludedetel)
        {
            using (var context = new EtelfutarContext())
            {
                try
                {
                    if (context.Excludedetels.Contains(modExcludedetel))
                    {
                        context.Excludedetels.Update(modExcludedetel);
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
        [HttpDelete("DeleteExcludedetelAsync")]
        public async Task<IActionResult> DeleteExcludedetelAsync(int id)
        {
            using (var context = new EtelfutarContext())
            {
                try
                {
                    Excludedetel torlendo = new Excludedetel
                    {
                        Id = id
                    };
                    if (context.Excludedetels.Contains(torlendo))
                    {
                        context.Excludedetels.Remove(torlendo);
                        await context.SaveChangesAsync();
                        return Ok("Sikeres törlés");
                    }
                    else
                    {
                        return StatusCode(404, "Nincs ilyen város.");
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
