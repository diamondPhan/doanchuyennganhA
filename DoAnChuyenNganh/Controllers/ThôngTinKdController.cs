using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using DoAnChuyenNganh.Models;

namespace DoAnChuyenNganh.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ThôngTinKdController : ControllerBase
    {
        private readonly QuanLyThietBiContext _context;

        public ThôngTinKdController(QuanLyThietBiContext context)
        {
            _context = context;
        }

        // GET: api/ThôngTinKd
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ThongTinKD>>> GetThôngTinKd()
        {
            return await _context.ThôngTinKd.ToListAsync();
        }

        // GET: api/ThôngTinKd/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ThongTinKD>> GetThôngTinKd(double id)
        {
            var thôngTinKd = await _context.ThôngTinKd.FindAsync(id);

            if (thôngTinKd == null)
            {
                return NotFound();
            }

            return thôngTinKd;
        }

        // PUT: api/ThôngTinKd/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutThôngTinKd(double id, ThongTinKD thôngTinKd)
        {
            if (id != thôngTinKd.MaKd)
            {
                return BadRequest();
            }

            _context.Entry(thôngTinKd).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ThôngTinKdExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/ThôngTinKd
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<ThongTinKD>> PostThôngTinKd(ThongTinKD thôngTinKd)
        {
            _context.ThôngTinKd.Add(thôngTinKd);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (ThôngTinKdExists(thôngTinKd.MaKd))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetThôngTinKd", new { id = thôngTinKd.MaKd }, thôngTinKd);
        }

        // DELETE: api/ThôngTinKd/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<ThongTinKD>> DeleteThôngTinKd(double id)
        {
            var thôngTinKd = await _context.ThôngTinKd.FindAsync(id);
            if (thôngTinKd == null)
            {
                return NotFound();
            }

            _context.ThôngTinKd.Remove(thôngTinKd);
            await _context.SaveChangesAsync();

            return thôngTinKd;
        }

        private bool ThôngTinKdExists(double id)
        {
            return _context.ThôngTinKd.Any(e => e.MaKd == id);
        }
    }
}
