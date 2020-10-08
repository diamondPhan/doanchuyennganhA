using System;
using System.Collections.Generic;

namespace DoAnChuyenNganh.Models
{
    public partial class DonVi
    {
        public DonVi()
        {
            MaTb = new HashSet<MaTb>();
        }

        public string MaDonVi { get; set; }
        public string TenDonVi { get; set; }
        public int delete { get; set; }
        public virtual ICollection<MaTb> MaTb { get; set; }
    }
}
