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
    public class MaTbsController : ControllerBase
    {
        private readonly QuanLyThietBiContext _context;

        public MaTbsController(QuanLyThietBiContext context)
        {
            _context = context;
        }

        // GET: api/MaTbs
        [HttpGet]
        public async Task<ActionResult<IEnumerable<MaTb>>> GetMaTb()
        {
            return await _context.MaTb.ToListAsync();
        }

        // GET: api/MaTbs/5
        [HttpGet("{id}")]
        public async Task<ActionResult<MaTb>> GetMaTb(string id)
        {
            var maTb = await _context.MaTb.FindAsync(id);

            if (maTb == null)
            {
                return NotFound();
            }

            return maTb;
        }

        // PUT: api/MaTbs/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutMaTb(string id, MaTb maTb)
        {
            if (id != maTb.MaTb1)
            {
                return BadRequest();
            }

            _context.Entry(maTb).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!MaTbExists(id))
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

        // POST: api/MaTbs
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<MaTb>> PostMaTb(MaTb maTb)
        {
            _context.MaTb.Add(maTb);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (MaTbExists(maTb.MaTb1))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetMaTb", new { id = maTb.MaTb1 }, maTb);
        }

        // DELETE: api/MaTbs/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<MaTb>> DeleteMaTb(string id)
        {
            var maTb = await _context.MaTb.FindAsync(id);
            if (maTb == null)
            {
                return NotFound();
            }

            _context.MaTb.Remove(maTb);
            await _context.SaveChangesAsync();

            return maTb;
        }

        private bool MaTbExists(string id)
        {
            return _context.MaTb.Any(e => e.MaTb1 == id);
        }
    }
}
