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
        [HttpPost("PostExcludedetelAsync")]
        public async Task<IActionResult> PostExcludedetelAsync(int etteremId, int etelId)
        {
            using (var context = new EtelfutarContext())
            {
                try
                {
                    Etelek kapcsolat = context.Eteleks.FirstOrDefaultAsync(x => x.Id == etelId).Result;
                    Ettermek kapcsolo = context.Ettermeks.FirstOrDefaultAsync(x => x.Id == etteremId).Result;
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
        [HttpDelete("DeleteExcludedetelAsync")]
        public async Task<IActionResult> DeleteExcludedetelAsync(int etteremId, int etelId)
        {
            using (var context = new EtelfutarContext())
            {
                try
                {
                    Etelek torlendo = context.Eteleks.FirstOrDefaultAsync(x=> x.Id == etelId).Result;
                    Ettermek torlo = context.Ettermeks.FirstOrDefaultAsync(x=> x.Id == etteremId).Result;
                    if (torlendo is not null && torlo is not null)
                    {
                        torlo.Etels.Remove(torlendo);
                        await context.SaveChangesAsync();
                        return Ok("Sikeres törlés");
                    }
                    else
                    {
                        return StatusCode(404, "Nincs találat");
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
