using System;
using System.Collections.Generic;

namespace DoAnChuyenNganh.Models
{
    public partial class LoaiTb
    {
        public LoaiTb()
        {
            MaTb = new HashSet<MaTb>();
        }

        public string MaLoai { get; set; }
        public string LoaiThietBi { get; set; }
        public int delete { set; get; }

        public virtual ICollection<MaTb> MaTb { get; set; }
    }
}
