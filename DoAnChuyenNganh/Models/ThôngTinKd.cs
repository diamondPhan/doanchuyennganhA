using System;
using System.Collections.Generic;

namespace DoAnChuyenNganh.Models
{
    public partial class ThôngTinKd
    {
        public double MaKd { get; set; }
        public string MaTb { get; set; }
        public double? GiaKd { get; set; }
        public double? ChuKyKd { get; set; }
        public string DonViGuiKd { get; set; }
        public string DonViKd { get; set; }
        public DateTime? NgàyKdganNhat { get; set; }
        public DateTime? NgaytoihanKd { get; set; }
        public string SoKd { get; set; }
        public string TinhTrangKd { get; set; }
        public string ViTriLuuTruKd { get; set; }
        public double? SốSeri { get; set; }
        public string F13 { get; set; }
        public string F14 { get; set; }

        public virtual MaTb MaTbNavigation { get; set; }
    }
}
