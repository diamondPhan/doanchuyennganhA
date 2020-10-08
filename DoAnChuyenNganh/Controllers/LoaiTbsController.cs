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
    public class LoaiTbsController : ControllerBase
    {
        private readonly QuanLyThietBiContext _context;

        public LoaiTbsController(QuanLyThietBiContext context)
        {
            _context = context;
        }

        // GET: api/LoaiTbs
        [HttpGet]
        public async Task<ActionResult<IEnumerable<LoaiTb>>> GetLoaiTb()
        {
            return await _context.LoaiTb.ToListAsync();
        }

        // GET: api/LoaiTbs/5
        [HttpGet("{id}")]
        public async Task<ActionResult<LoaiTb>> GetLoaiTb(string id)
        {
            var loaiTb = await _context.LoaiTb.FindAsync(id);

            if (loaiTb == null)
            {
                return NotFound();
            }

            return loaiTb;
        }

        // PUT: api/LoaiTbs/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutLoaiTb(string id, LoaiTb loaiTb)
        {
            if (id != loaiTb.MaLoai)
            {
                return BadRequest();
            }

            _context.Entry(loaiTb).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!LoaiTbExists(id))
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

        // POST: api/LoaiTbs
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<LoaiTb>> PostLoaiTb(LoaiTb loaiTb)
        {
            _context.LoaiTb.Add(loaiTb);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (LoaiTbExists(loaiTb.MaLoai))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetLoaiTb", new { id = loaiTb.MaLoai }, loaiTb);
        }

        // DELETE: api/LoaiTbs/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<LoaiTb>> DeleteLoaiTb(string id)
        {
            var loaiTb = await _context.LoaiTb.FindAsync(id);
            if (loaiTb == null)
            {
                return NotFound();
            }

            _context.LoaiTb.Remove(loaiTb);
            await _context.SaveChangesAsync();

            return loaiTb;
        }

        private bool LoaiTbExists(string id)
        {
            return _context.LoaiTb.Any(e => e.MaLoai == id);
        }
    }
}
