using EtelfutarAPI.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace EtelfutarAPI.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class EtelekController : Controller
    {
        [HttpGet("GetEtelekAsync")]
        public async Task<IActionResult> GetEtelekAsync()
        {
            using (var context = new EtelfutarContext())
            {
                try
                {
                    List<Etelek> result = await context.Eteleks.Include(x=>x.Chain).ToListAsync();
                    return Ok(result);
                }
                catch (Exception ex)
                {
                    return BadRequest(ex.Message);
                }
            }
        }
        [HttpPost("PostEtelAsync")]
        public async Task<IActionResult> PostEtelAsync(Etelek ujEtel)
        {
            using (var context = new EtelfutarContext())
            {
                try
                {
                    if (ujEtel is not null)
                    {
                        await context.Eteleks.AddAsync(ujEtel);
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
        [HttpPut("PutEtelAsync")]
        public async Task<IActionResult> PutEtelAsync(Etelek modEtel)
        {
            using (var context = new EtelfutarContext())
            {
                try
                {
                    if (context.Eteleks.Contains(modEtel))
                    {
                        context.Eteleks.Update(modEtel);
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
        [HttpDelete("DeleteEtelAsync")]
        public async Task<IActionResult> DeleteEtelAsync(int id)
        {
            using (var context = new EtelfutarContext())
            {
                try
                {
                    Etelek torlendo = new Etelek
                    {
                        Id = id
                    };
                    if (context.Eteleks.Contains(torlendo))
                    {
                        context.Eteleks.Remove(torlendo);
                        await context.SaveChangesAsync();
                        return Ok("Sikeres törlés");
                    }
                    else
                    {
                        return StatusCode(404, "Nincs ilyen étel.");
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
