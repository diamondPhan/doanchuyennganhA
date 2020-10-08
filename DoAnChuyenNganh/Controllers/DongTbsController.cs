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
    public class DongTbsController : ControllerBase
    {
        private readonly QuanLyThietBiContext _context;

        public DongTbsController(QuanLyThietBiContext context)
        {
            _context = context;
        }

        // GET: api/DongTbs
        [HttpGet]
        public async Task<ActionResult<IEnumerable<DongTb>>> GetDongTb()
        {
            return await _context.DongTb.ToListAsync();
        }

        // GET: api/DongTbs/5
        [HttpGet("{id}")]
        public async Task<ActionResult<DongTb>> GetDongTb(string id)
        {
            var dongTb = await _context.DongTb.FindAsync(id);

            if (dongTb == null)
            {
                return NotFound();
            }

            return dongTb;
        }

        // PUT: api/DongTbs/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutDongTb(string id, DongTb dongTb)
        {
            if (id != dongTb.IddongTb)
            {
                return BadRequest();
            }

            _context.Entry(dongTb).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DongTbExists(id))
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

        // POST: api/DongTbs
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<DongTb>> PostDongTb(DongTb dongTb)
        {
            _context.DongTb.Add(dongTb);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (DongTbExists(dongTb.IddongTb))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetDongTb", new { id = dongTb.IddongTb }, dongTb);
        }

        // DELETE: api/DongTbs/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<DongTb>> DeleteDongTb(string id)
        {
            var dongTb = await _context.DongTb.FindAsync(id);
            if (dongTb == null)
            {
                return NotFound();
            }

            _context.DongTb.Remove(dongTb);
            await _context.SaveChangesAsync();

            return dongTb;
        }

        private bool DongTbExists(string id)
        {
            return _context.DongTb.Any(e => e.IddongTb == id);
        }
    }
}
