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
    public class ThongTinKDsController : ControllerBase
    {
        private readonly QuanLyThietBiContext _context;

        public ThongTinKDsController(QuanLyThietBiContext context)
        {
            _context = context;
        }

        // GET: api/ThongTinKDs
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ThongTinKD>>> GetThongTinKd()
        {
            return await _context.ThongTinKd.ToListAsync();
        }

        // GET: api/ThongTinKDs/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ThongTinKD>> GetThongTinKD(double id)
        {
            var thongTinKD = await _context.ThongTinKd.FindAsync(id);

            if (thongTinKD == null)
            {
                return NotFound();
            }

            return thongTinKD;
        }

        // PUT: api/ThongTinKDs/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutThongTinKD(double id, ThongTinKD thongTinKD)
        {
            if (id != thongTinKD.MaKd)
            {
                return BadRequest();
            }

            _context.Entry(thongTinKD).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ThongTinKDExists(id))
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

        // POST: api/ThongTinKDs
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<ThongTinKD>> PostThongTinKD(ThongTinKD thongTinKD)
        {
            _context.ThongTinKd.Add(thongTinKD);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (ThongTinKDExists(thongTinKD.MaKd))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetThongTinKD", new { id = thongTinKD.MaKd }, thongTinKD);
        }

        // DELETE: api/ThongTinKDs/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<ThongTinKD>> DeleteThongTinKD(double id)
        {
            var thongTinKD = await _context.ThongTinKd.FindAsync(id);
            if (thongTinKD == null)
            {
                return NotFound();
            }

            _context.ThongTinKd.Remove(thongTinKD);
            await _context.SaveChangesAsync();

            return thongTinKD;
        }

        private bool ThongTinKDExists(double id)
        {
            return _context.ThongTinKd.Any(e => e.MaKd == id);
        }
    }
}
