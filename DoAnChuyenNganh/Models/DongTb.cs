using System;
using System.Collections.Generic;

namespace DoAnChuyenNganh.Models
{
    public partial class DongTb
    {
        public DongTb()
        {
            MaTb = new HashSet<MaTb>();
        }

        public string IddongTb { get; set; }
        public string DongTb1 { get; set; }
        public string IdnhomTb { get; set; }

        public virtual ICollection<MaTb> MaTb { get; set; }
    }
}
