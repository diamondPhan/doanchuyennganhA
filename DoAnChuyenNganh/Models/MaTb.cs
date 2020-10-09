using System;
using System.Collections.Generic;

namespace DoAnChuyenNganh.Models
{
    public partial class MaTb
    {
        public MaTb()
        {
            ThongTinKD = new HashSet<ThongTinKD>();
        }

        public double? Stt { get; set; }
        public string MaTb1 { get; set; }
        public string IdnhomTb { get; set; }
        public string MaDonVi { get; set; }
        public string MaLoai { get; set; }
        public string MaNhomKd { get; set; }
        public string IdhoaDon { get; set; }
        public string IddongTb { get; set; }
        public double? NgayPhieuXuat { get; set; }
        public string NgayPhieuNhap { get; set; }
        public string TenTb { get; set; }
        public string TenChuan { get; set; }
        public string GiaMua { get; set; }
        public string DonViBan { get; set; }
        public string DonViTinh { get; set; }
        public double? Soluong { get; set; }
        public string TinhTrang { get; set; }
        public double? NgayTinhTrang { get; set; }
        public double? PhapLy { get; set; }
        public double? ViTriLuuTruBkk { get; set; }
        public double? MaMay { get; set; }
        public double? NuocSanXuat { get; set; }
        public double? NamSx { get; set; }
        public double? GhiChu { get; set; }
        public int delete { get; set; }
   

        public virtual DongTb IddongTbNavigation { get; set; }
        public virtual HoaDon IdhoaDonNavigation { get; set; }
        public virtual NhomTb IdnhomTbNavigation { get; set; }
        public virtual DonVi MaDonViNavigation { get; set; }
        public virtual LoaiTb MaLoaiNavigation { get; set; }
        public virtual NhomKd MaNhomKdNavigation { get; set; }
        public virtual ICollection<ThongTinKD> ThongTinKD { get; set; }
    }
}
