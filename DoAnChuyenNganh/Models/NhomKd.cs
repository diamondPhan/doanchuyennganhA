using System;
using System.Collections.Generic;

namespace DoAnChuyenNganh.Models
{
    public partial class NhomKd
    {
        public NhomKd()
        {
            MaTb = new HashSet<MaTb>();
        }

        public string MaNhomKd { get; set; }
        public string NhomKiemDinh { get; set; }

        public virtual ICollection<MaTb> MaTb { get; set; }
    }
}
