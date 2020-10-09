using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace DoAnChuyenNganh.Models
{
    public partial class QuanLyThietBiContext : DbContext
    {
        public QuanLyThietBiContext()
        {
        }

        public QuanLyThietBiContext(DbContextOptions<QuanLyThietBiContext> options)
            : base(options)
        {
        }

        public virtual DbSet<DonVi> DonVi { get; set; }
        public virtual DbSet<DongTb> DongTb { get; set; }
        public virtual DbSet<HoaDon> HoaDon { get; set; }
        public virtual DbSet<LoaiTb> LoaiTb { get; set; }
        public virtual DbSet<MaTb> MaTb { get; set; }
        public virtual DbSet<NhomKd> NhomKd { get; set; }
        public virtual DbSet<NhomTb> NhomTb { get; set; }
        public virtual DbSet<ThongTinKD> ThongTinKd { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseSqlServer("Server=INTERN-NHBANG; Database=QuanLyThietBi; Trusted_Connection=True; MultipleActiveResultSets=true");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<DonVi>(entity =>
            {
                entity.HasKey(e => e.MaDonVi)
                    .HasName("PK__DonVi$__DDA5A6CF7E7272E9");

                entity.ToTable("DonVi$");

                entity.Property(e => e.MaDonVi).HasMaxLength(255);

                entity.Property(e => e.TenDonVi).HasMaxLength(255);
            });

            modelBuilder.Entity<DongTb>(entity =>
            {
                entity.HasKey(e => e.IddongTb)
                    .HasName("PK__DongTB$__FE71207E98DE59F0");

                entity.ToTable("DongTB$");

                entity.Property(e => e.IddongTb)
                    .HasColumnName("IDDongTB")
                    .HasMaxLength(255);

                entity.Property(e => e.DongTb1)
                    .HasColumnName("DongTB")
                    .HasMaxLength(255);

                entity.Property(e => e.IdnhomTb)
                    .HasColumnName("IDNhomTB")
                    .HasMaxLength(255);
            });

            modelBuilder.Entity<HoaDon>(entity =>
            {
                entity.HasKey(e => e.IdhoaDon)
                    .HasName("PK__HoaDon$__5B896F49F9241FDE");

                entity.ToTable("HoaDon$");

                entity.Property(e => e.IdhoaDon)
                    .HasColumnName("IDHoaDon")
                    .HasMaxLength(255);

                entity.Property(e => e.LoaiHoaDon).HasMaxLength(255);

                entity.Property(e => e.NgayHoaDon).HasMaxLength(255);

                entity.Property(e => e.SoHoaDon).HasMaxLength(255);

                entity.Property(e => e.TinhTrangHoaDon).HasMaxLength(255);

                entity.Property(e => e.ViTriLuuTruHd)
                    .HasColumnName("ViTriLuuTruHD")
                    .HasMaxLength(255);
            });

            modelBuilder.Entity<LoaiTb>(entity =>
            {
                entity.HasKey(e => e.MaLoai)
                    .HasName("PK__LoaiTB$__730A575959C314ED");

                entity.ToTable("LoaiTB$");

                entity.Property(e => e.MaLoai).HasMaxLength(255);

                entity.Property(e => e.LoaiThietBi).HasMaxLength(255);
            });

            modelBuilder.Entity<MaTb>(entity =>
            {
                entity.HasKey(e => e.MaTb1)
                    .HasName("PK__MaTB$__2725006F00F01D7D");

                entity.ToTable("MaTB$");

                entity.Property(e => e.MaTb1)
                    .HasColumnName("MaTB")
                    .HasMaxLength(255);

                entity.Property(e => e.DonViBan).HasMaxLength(255);

                entity.Property(e => e.GiaMua).HasMaxLength(255);

                entity.Property(e => e.IddongTb)
                    .HasColumnName("IDDongTB")
                    .HasMaxLength(255);

                entity.Property(e => e.IdhoaDon)
                    .HasColumnName("IDHoaDon")
                    .HasMaxLength(255);

                entity.Property(e => e.IdnhomTb)
                    .HasColumnName("IDNhomTB")
                    .HasMaxLength(255);

                entity.Property(e => e.MaDonVi).HasMaxLength(255);

                entity.Property(e => e.MaLoai).HasMaxLength(255);

                entity.Property(e => e.MaNhomKd)
                    .HasColumnName("MaNhomKD")
                    .HasMaxLength(255);

                entity.Property(e => e.NamSx).HasColumnName("NamSX");

                entity.Property(e => e.NgayPhieuNhap).HasMaxLength(255);

                entity.Property(e => e.Soluong).HasColumnName("soluong");

                entity.Property(e => e.Stt).HasColumnName("STT");

                entity.Property(e => e.TenChuan).HasMaxLength(255);

                entity.Property(e => e.TenTb)
                    .HasColumnName("TenTB")
                    .HasMaxLength(255);

                entity.Property(e => e.TinhTrang).HasMaxLength(255);

                entity.Property(e => e.ViTriLuuTruBkk).HasColumnName("ViTriLuuTruBKK");

                entity.Property(e => e.DonViTinh)
                    .HasColumnName("DonViTinh")
                    .HasMaxLength(255);

                entity.HasOne(d => d.IddongTbNavigation)
                    .WithMany(p => p.MaTb)
                    .HasForeignKey(d => d.IddongTb)
                    .HasConstraintName("FK_MaTB$_DongTB$");

                entity.HasOne(d => d.IdhoaDonNavigation)
                    .WithMany(p => p.MaTb)
                    .HasForeignKey(d => d.IdhoaDon)
                    .HasConstraintName("FK_MaTB$_HoaDon$");

                entity.HasOne(d => d.IdnhomTbNavigation)
                    .WithMany(p => p.MaTb)
                    .HasForeignKey(d => d.IdnhomTb)
                    .HasConstraintName("FK_MaTB$_NhomTB$");

                entity.HasOne(d => d.MaDonViNavigation)
                    .WithMany(p => p.MaTb)
                    .HasForeignKey(d => d.MaDonVi)
                    .HasConstraintName("FK_MaTB$_DonVi$");

                entity.HasOne(d => d.MaLoaiNavigation)
                    .WithMany(p => p.MaTb)
                    .HasForeignKey(d => d.MaLoai)
                    .HasConstraintName("FK_MaTB$_LoaiTB$");

                entity.HasOne(d => d.MaNhomKdNavigation)
                    .WithMany(p => p.MaTb)
                    .HasForeignKey(d => d.MaNhomKd)
                    .HasConstraintName("FK_MaTB$_NhomKD$");
            });

            modelBuilder.Entity<NhomKd>(entity =>
            {
                entity.HasKey(e => e.MaNhomKd)
                    .HasName("PK__NhomKD$__5A1F65733F04946C");

                entity.ToTable("NhomKD$");

                entity.Property(e => e.MaNhomKd)
                    .HasColumnName("MaNhomKD")
                    .HasMaxLength(255);

                entity.Property(e => e.NhomKiemDinh).HasMaxLength(255);
            });

            modelBuilder.Entity<NhomTb>(entity =>
            {
                entity.HasKey(e => e.IdnhomTb)
                    .HasName("PK__NhomTB$__7B168B48C2CC046D");

                entity.ToTable("NhomTB$");

                entity.Property(e => e.IdnhomTb)
                    .HasColumnName("IDNhomTB")
                    .HasMaxLength(255);

                entity.Property(e => e.NhomTb1)
                    .HasColumnName("NhomTB")
                    .HasMaxLength(255);
            });

            modelBuilder.Entity<ThongTinKD>(entity =>
            {
                entity.HasKey(e => e.MaKd)
                    .HasName("PK__'Thong t__2725CF02ACA60A3F");

                entity.ToTable("ThongTinKD$");

                entity.Property(e => e.MaKd).HasColumnName("MaKD");

                entity.Property(e => e.ChuKyKd).HasColumnName("ChuKyKD");

                entity.Property(e => e.DonViGuiKd)
                    .HasColumnName("DonViGuiKD")
                    .HasMaxLength(255);

                entity.Property(e => e.DonViKd)
                    .HasColumnName("DonViKD")
                    .HasMaxLength(255);

                entity.Property(e => e.GiaKd).HasColumnName("GiaKD");

                entity.Property(e => e.MaTb)
                    .HasColumnName("MaTB")
                    .HasMaxLength(255);

                entity.Property(e => e.NgaytoihanKd)
                    .HasColumnName("NgaytoihanKD")
                    .HasColumnType("datetime");

                entity.Property(e => e.NgayKdganNhat)
                    .HasColumnName("NgayKDGanNhat")
                    .HasColumnType("datetime");

                entity.Property(e => e.SoKd)
                    .HasColumnName("SoKD")
                    .HasMaxLength(255);

                entity.Property(e => e.SoSeri).HasColumnName("SoSeri");

                entity.Property(e => e.TinhTrangKd)
                    .HasColumnName("TinhTrangKD")
                    .HasMaxLength(255);

                entity.Property(e => e.ViTriLuuTruKd)
                    .HasColumnName("ViTriLuuTruKD")
                    .HasMaxLength(255);

                entity.HasOne(d => d.MaTbNavigation)
                    .WithMany(p => p.ThongTinKD)
                    .HasForeignKey(d => d.MaTb)
                    .HasConstraintName("FK_'Thong tin KD$'_MaTB$");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
