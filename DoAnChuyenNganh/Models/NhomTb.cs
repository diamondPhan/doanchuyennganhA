using System;
using System.Collections.Generic;

namespace DoAnChuyenNganh.Models
{
    public partial class NhomTb
    {
        public NhomTb()
        {
            MaTb = new HashSet<MaTb>();
        }

        public string IdnhomTb { get; set; }
        public string NhomTb1 { get; set; }

        public virtual ICollection<MaTb> MaTb { get; set; }
    }
}
