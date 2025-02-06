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
                    Etelek kapcsolat = context.Eteleks.FirstOrDefaultAsync(x => x.Id == etelId).Result;
                    Rendeles kapcsolo = context.Rendeles.FirstOrDefaultAsync(x => x.Id == rendelesId).Result;
                    if (kapcsolat is not null && kapcsolo is not null)
                    {
                        kapcsolo.Etels.Add(kapcsolat);
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
                    Etelek torlendo = context.Eteleks.FirstOrDefaultAsync(x => x.Id == etelId).Result;
                    Rendeles torlo = context.Rendeles.FirstOrDefaultAsync(x => x.Id == rendelesId).Result;
                    if (torlendo is not null && torlo is not null)
                    {
                        torlo.Etels.Remove(torlendo);
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
