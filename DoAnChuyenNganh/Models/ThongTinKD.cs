using System;
using System.Collections.Generic;

namespace DoAnChuyenNganh.Models
{
    public partial class ThongTinKD
    {
        public double MaKd { get; set; }
        public string MaTb { get; set; }
        public double? GiaKd { get; set; }
        public double? ChuKyKd { get; set; }
        public string DonViGuiKd { get; set; }
        public string DonViKd { get; set; }
        public DateTime? NgayKdganNhat { get; set; }
        public DateTime? NgaytoihanKd { get; set; }
        public string SoKd { get; set; }
        public string TinhTrangKd { get; set; }
        public string ViTriLuuTruKd { get; set; }
        public double? SoSeri { get; set; }
        public int delete { get; set; }
     
        public virtual MaTb MaTbNavigation { get; set; }
    }
}
