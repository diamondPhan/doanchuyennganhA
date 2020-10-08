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
    public class DonVisController : ControllerBase
    {
        private readonly QuanLyThietBiContext _context;

        public DonVisController(QuanLyThietBiContext context)
        {
            _context = context;
        }

        // GET: api/DonVis
        [HttpGet]
        public async Task<ActionResult<IEnumerable<DonVi>>> GetDonVi()
        {
            return await _context.DonVi.ToListAsync();
        }

        // GET: api/DonVis/5
        [HttpGet("{id}")]
        public async Task<ActionResult<DonVi>> GetDonVi(string id)
        {
            var donVi = await _context.DonVi.FindAsync(id);

            if (donVi == null)
            {
                return NotFound();
            }

            return donVi;
        }

        // PUT: api/DonVis/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutDonVi(string id, DonVi donVi)
        {
            if (id != donVi.MaDonVi)
            {
                return BadRequest();
            }

            _context.Entry(donVi).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DonViExists(id))
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

        // POST: api/DonVis
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<DonVi>> PostDonVi(DonVi donVi)
        {
            _context.DonVi.Add(donVi);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (DonViExists(donVi.MaDonVi))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetDonVi", new { id = donVi.MaDonVi }, donVi);
        }

        // XDELETE: api/DonVis/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<DonVi>> DeleteDonVi(string id)
        {
            var donVi = await _context.DonVi.FindAsync(id);
            if (donVi == null)
            {
                return NotFound();
            }

            _context.DonVi.Remove(donVi);
            await _context.SaveChangesAsync();

            return donVi;
        }
        //[HttpDelete]
        //public ActionResult Delete (string id)
        //{
        //    try
        //    {
        //        var donVi = _context.DonVi.Find(id);
        //        return 
        //    }
        //    catch (Exception e)
        //    {
        //        return BadRequest();
        //    }
        //}
        private bool DonViExists(string id)
        {
            return _context.DonVi.Any(e => e.MaDonVi == id);
        }
    }
}
