using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using EtelfutarAPI.Models;
using EtelfutarAPI.DTOs;

namespace VizsgaremekAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RegistryController : ControllerBase
    {
        [HttpPost]
        public async Task<IActionResult> Registry(RegistryFelhasznalokDTO userInput)
        {
            using (var context = new EtelfutarContext())
            {
                try
                {
                    if (context.Felhasznaloks.FirstOrDefault(f => f.FelhasznaloNev == userInput.FelhasznaloNev) != null)
                    {
                        return BadRequest("A felhasználó név már foglalt.");

                    }
                    if (context.Felhasznaloks.FirstOrDefault(f => f.Email == userInput.Email) != null)
                    {
                        return BadRequest("Ezzel az email címmel már regisztráltak.");
                    }
                    Felhasznalok user = new Felhasznalok()
                    {
                        Id = 0,
                        FelhasznaloNev = userInput.FelhasznaloNev,
                        Email = userInput.Email,
                        Hash = "",
                        Salt = userInput.Salt,
                        Jogosultsag = 0,
                        Aktiv = 0,
                        Lakcim = userInput.LakCim,
                        VarosId = userInput.VarosId,
                        TeljesNev = userInput.TeljesNev
                    };

                    user.Hash = Program.CreateSHA256(userInput.Hash);
                    await context.Felhasznaloks.AddAsync(user);
                    await context.SaveChangesAsync();
                    Program.SendEmail(user.Email, "Regisztráció", $"https://localhost:7106/api/Registry?felhasznaloNev={user.FelhasznaloNev}&email={user.Email}");
                    return Ok("Sikeres regisztráció! Ellenőrizze az emailjeit és véglegesítse a regisztrációt!");
                }
                catch (Exception ex)
                {
                    return BadRequest(ex.Message);
                }
            }
        }
        [HttpGet]
        public async Task<IActionResult> EndOfTheRegistry(string felhasznaloNev, string email)
        {
            using(var context = new EtelfutarContext())
            {
                try
                {
                    Felhasznalok user = await context.Felhasznaloks.FirstOrDefaultAsync(f=>f.FelhasznaloNev == felhasznaloNev && f.Email == email);
                    if(user == null)
                    {
                        return BadRequest("Sikertelen a regisztráció befejezése.");
                    }
                    user.Aktiv = 1;
                    context.Felhasznaloks.Update(user);
                    await context.SaveChangesAsync();
                    return Ok("A regisztráció sikeresen befejeződött.");
                }
                catch (Exception ex)
                {
                    return BadRequest(ex.Message);
                }
            }
        }
    }
}
