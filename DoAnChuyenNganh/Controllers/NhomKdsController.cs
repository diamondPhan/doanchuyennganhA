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
    public class NhomKdsController : ControllerBase
    {
        private readonly QuanLyThietBiContext _context;

        public NhomKdsController(QuanLyThietBiContext context)
        {
            _context = context;
        }

        // GET: api/NhomKds
        [HttpGet]
        public async Task<ActionResult<IEnumerable<NhomKd>>> GetNhomKd()
        {
            return await _context.NhomKd.ToListAsync();
        }

        // GET: api/NhomKds/5
        [HttpGet("{id}")]
        public async Task<ActionResult<NhomKd>> GetNhomKd(string id)
        {
            var nhomKd = await _context.NhomKd.FindAsync(id);

            if (nhomKd == null)
            {
                return NotFound();
            }

            return nhomKd;
        }

        // PUT: api/NhomKds/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutNhomKd(string id, NhomKd nhomKd)
        {
            if (id != nhomKd.MaNhomKd)
            {
                return BadRequest();
            }

            _context.Entry(nhomKd).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!NhomKdExists(id))
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

        // POST: api/NhomKds
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<NhomKd>> PostNhomKd(NhomKd nhomKd)
        {
            _context.NhomKd.Add(nhomKd);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (NhomKdExists(nhomKd.MaNhomKd))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetNhomKd", new { id = nhomKd.MaNhomKd }, nhomKd);
        }

        // DELETE: api/NhomKds/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<NhomKd>> DeleteNhomKd(string id)
        {
            var nhomKd = await _context.NhomKd.FindAsync(id);
            if (nhomKd == null)
            {
                return NotFound();
            }

            _context.NhomKd.Remove(nhomKd);
            await _context.SaveChangesAsync();

            return nhomKd;
        }

        private bool NhomKdExists(string id)
        {
            return _context.NhomKd.Any(e => e.MaNhomKd == id);
        }
    }
}
