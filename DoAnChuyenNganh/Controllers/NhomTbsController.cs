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
    public class NhomTbsController : ControllerBase
    {
        private readonly QuanLyThietBiContext _context;

        public NhomTbsController(QuanLyThietBiContext context)
        {
            _context = context;
        }

        // GET: api/NhomTbs
        [HttpGet]
        public async Task<ActionResult<IEnumerable<NhomTb>>> GetNhomTb()
        {
            return await _context.NhomTb.ToListAsync();
        }

        // GET: api/NhomTbs/5
        [HttpGet("{id}")]
        public async Task<ActionResult<NhomTb>> GetNhomTb(string id)
        {
            var nhomTb = await _context.NhomTb.FindAsync(id);

            if (nhomTb == null)
            {
                return NotFound();
            }

            return nhomTb;
        }

        // PUT: api/NhomTbs/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutNhomTb(string id, NhomTb nhomTb)
        {
            if (id != nhomTb.IdnhomTb)
            {
                return BadRequest();
            }

            _context.Entry(nhomTb).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!NhomTbExists(id))
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

        // POST: api/NhomTbs
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<NhomTb>> PostNhomTb(NhomTb nhomTb)
        {
            _context.NhomTb.Add(nhomTb);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (NhomTbExists(nhomTb.IdnhomTb))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetNhomTb", new { id = nhomTb.IdnhomTb }, nhomTb);
        }

        // DELETE: api/NhomTbs/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<NhomTb>> DeleteNhomTb(string id)
        {
            var nhomTb = await _context.NhomTb.FindAsync(id);
            if (nhomTb == null)
            {
                return NotFound();
            }

            _context.NhomTb.Remove(nhomTb);
            await _context.SaveChangesAsync();

            return nhomTb;
        }

        private bool NhomTbExists(string id)
        {
            return _context.NhomTb.Any(e => e.IdnhomTb == id);
        }
    }
}
