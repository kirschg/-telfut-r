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
        [HttpPost("PostRendeltetelAsync")]
        public async Task<IActionResult> PostRendeltetelAsync(int etelId, int rendelesId)
        {
            using (var context = new EtelfutarContext())
            {
                try
                {
                    Etelek? etel = await context.Eteleks.FirstOrDefaultAsync(x => x.Id == etelId);
                    Rendeles? rendeles = await context.Rendeles.FirstOrDefaultAsync(x => x.Id == rendelesId);
                    if (etel is not null && rendeles is not null)
                    {
                        rendeles.Etels.Add(etel);
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
        [HttpDelete("DeleteRendeltetelAsync")]
        public async Task<IActionResult> DeleteRendeltetelAsync(int etelId, int rendelesId)
        {
            using (var context = new EtelfutarContext())
            {
                try
                {
                    Etelek? etel = await context.Eteleks.FirstOrDefaultAsync(x => x.Id == etelId);
                    Rendeles? rendeles = await context.Rendeles.FirstOrDefaultAsync(x => x.Id == rendelesId);
                    if (etel is not null && rendeles is not null)
                    {
                        rendeles.Etels.Remove(etel);
                        await context.SaveChangesAsync();
                        return Ok("Sikeres törlés");
                    }
                    else
                    {
                        return StatusCode(404, "nincs találat");
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
