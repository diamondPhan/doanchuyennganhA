import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import axios from "axios";
import "./testcss.css";

export class FetchThongTins extends Component {
    constructor(props) {
        super(props);
        this.state = {
            thongtins: [],
            loading: true,
            checkchange: true,
            readOnly: true,
        };

        this._click = this._click.bind(this);
    }
    _click() {
        this.setState((prevState) => ({ readOnly: !prevState.readOnly }));
    }

    changeStateCheck() {
        this.setState({ checkchange: !this.state.checkchange });
    }
    //do db len web va chay dung mot lan

    componentDidMount() {
        this.populateThongTinKdsData();
    }

    async populateThongTinKdsData() {
        const response = await fetch("api/ThongTinKds");
        const data = await response.json();
        this.setState({
            ThongTinKds: data,
            loading: false,
        });
    }

    render() {
        let txtbox_class = this.state.checkchange ? "tbx_Add" : "tbx_Edit";
        let contents = this.state.loading ? (
            <p>
                <em>Loading...</em>
            </p>
        ) : (
                this.renderThongTinKdsTable(this.state.ThongTinKds)
            );
        return (
            <div className="content-page">
                <div className="content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="card-box">
                                    <h4 className="header-title mb-3">Thông Tin Kiểm Định</h4>
                                    <p>Component lấy dữ liệu từ Server.</p>
                                    <table className="table table-borderless table-hover table-centered m-0">
                                        <tr>
                                            <td>
                                                <label for="maKd">Mã Kiểm Định</label>
                                            </td>
                                            <td>
                                                <input
                                                    name="maKd"
                                                    id="maKd"
                                                    type="number"
                                                    readOnly={this.state.readOnly}
                                                    className={txtbox_class}
                                                ></input>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <label for="maTb">Mã Thiết Bị</label>
                                            </td>
                                            <td>
                                                <input
                                                    name="maTb"
                                                    id="maTb"
                                                    type="text"
                                                ></input>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <label for="giaKd">Giá Kiểm Định</label>
                                            </td>
                                            <td>
                                                <input
                                                    name="giaKd"
                                                    id="giaKd"
                                                    type="number"
                                                ></input>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <label for="chuKyKd">Chu Kỳ Kiểm Định</label>
                                            </td>
                                            <td>
                                                <input
                                                    name="chuKyKd"
                                                    id="chuKyKd"
                                                    type="number"
                                                ></input>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <label for="donViGuiKd">Đơn Vị Gửi Kiểm Định</label>
                                            </td>
                                            <td>
                                                <input
                                                    name="donViGuiKd"
                                                    id="donViGuiKd"
                                                    type="text"
                                                ></input>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <label for="donViKd">
                                                    Đơn Vị Kiểm Định
                        </label>
                                            </td>
                                            <td>
                                                <input
                                                    name="donViKd"
                                                    id="donViKd"
                                                    type="text"
                                                ></input>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <label for="ngayKdGanNhat">Ngày Kiểm Định Gần Nhất</label>
                                            </td>
                                            <td>
                                                <input
                                                    name="ngayKdGanNhat"
                                                    id="ngayKdGanNhat"
                                                    type="datetime-local"
                                                ></input>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <label for="ngayToiHanKD">Ngày Tới Hạn Kiểm Định</label>
                                            </td>
                                            <td>
                                                <input
                                                    name="ngayToiHanKD"
                                                    id="ngayToiHanKD"
                                                    type="datetime-local"
                                                ></input>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <label for="soKd">Số Kiểm Định</label>
                                            </td>
                                            <td>
                                                <input
                                                    name="soKd"
                                                    id="soKd"
                                                    type="text"
                                                ></input>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <label for="tinhTrangKd">Tình Trạng Kiểm Định</label>
                                            </td>
                                            <td>
                                                <input
                                                    name="tinhTrangKd"
                                                    id="tinhTrangKd"
                                                    type="text"
                                                ></input>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <label for="viTriLuuTruKd">Vị Trí Lưu Trữ Kiểm Định</label>
                                            </td>
                                            <td>
                                                <input
                                                    name="viTriLuuTruKd"
                                                    id="viTriLuuTruKd"
                                                    type="text"
                                                ></input>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <label for="soSeri">Số Seri</label>
                                            </td>
                                            <td>
                                                <input
                                                    name="soSeri"
                                                    id="soSeri"
                                                    type="number"
                                                ></input>
                                            </td>
                                        </tr>
                                    </table>
                                    <p>
                                        <Button className="btn btn-success">
                                            <Link to="/themDonVi" style={{ color: "#fff" }}>
                                                Thêm Đơn Vị Mới
                      </Link>
                                        </Button>
                                    </p>
                                    <p>
                                        <Button
                                            className="btn btn-success"
                                            id="btn-add"
                                            onClick={this.handleSave}
                                        >
                                            Add New
                    </Button>
                                        <Button
                                            className="btn btn-warning"
                                            id="btn-edit"
                                            onClick={this.handleEdit}
                                        >
                                            Edit
                    </Button>
                                    </p>
                                    <h3> Chi Tiết Hóa Đơn </h3>

                                    {contents}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    renderThongTinKdsTable(ThongTinKds) {
        return (
            <table className="table table-borderless table-hover table-centered m-0">
                <thead className="thead-light">
                    <tr>
                        <th></th>
                        <th>Mã Kiểm Định</th>
                        <th>Mã Thiết Bị</th>
                        <th>Giá Kiểm Định</th>
                        <th>Chu Kỳ Kiểm Định</th>
                        <th>Đơn Vị Gửi Kiểm Định</th>
                        <th>Đơn Vị Kiểm Định</th>
                        <th>Ngày Kiểm Định Gần Nhất</th>
                        <th>Ngày Tới Hạn Kiểm Định</th>
                        <th>Số Kiểm Định</th>
                        <th>Tình Trạng Kiểm Định</th>
                        <th>Vị Trí Lưu Trữ Kiểm Định</th>
                        <th>Số Seri</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {ThongTinKds.map((thongTin) => (
                        <tr
                            key={thongTin.maKd}
                            onClick={(id) => this.lnk_Click(thongTin.maKd)}
                        >
                            <td></td>
                            <td>{thongTin.maKd}</td>
                            <td>{thongTin.maTb}</td>
                            <td>{thongTin.giaKd}</td>
                            <td>{thongTin.chuKyKd}</td>
                            <td>{thongTin.donViGuiKd}</td>
                            <td>{thongTin.donViKd}</td>
                            <td>{thongTin.ngayKdganNhat}</td>
                            <td>{thongTin.ngaytoihanKd}</td>
                            <td>{thongTin.soKd}</td>
                            <td>{thongTin.tinhTrangKd}</td>
                            <td>{thongTin.viTriLuuTruKd}</td>
                            <td>{thongTin.soSeri}</td>
                            <td>
                                <button className="btn btn-danger" onClick={this.handleDeleted}>
                                    Xóa
                </button>
                &nbsp;
              </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    }

    handleSave = (event) => {
        var newthongTin = {
            maKd: document.getElementById("maKd").value,
            maTb: document.getElementById("maTb").value,
            giaKd: document.getElementById("giaKd").value,
            chuKyKd: document.getElementById("chuKyKd").value,
            donViGuiKd: document.getElementById("donViGuiKd").value,
            donViKd: document.getElementById("donViKd").value,
            ngayKdganNhat: document.getElementById("ngayKdGanNhat").value,
            ngaytoihanKd: document.getElementById("ngayToiHanKD").value,
            soKd: document.getElementById("soKd").value,
            tinhTrangKd: document.getElementById("tinhTrangKd").value,
            viTriLuuTruKd: document.getElementById("viTriLuuTruKd").value,
            soSeri: document.getElementById("soSeri").value,
        };
        
        console.log(newthongTin);
        axios.post("api/ThongTinKds/", newthongTin).then((response) => {
            var result = response.data;
            if (result) {
                alert("hihi");
                //this.props.history.push("/fetch-donvi");
                // window.location.href="/fetch-donvi";
                this.getAll();
                window.location.href = "/fetch-thongTin";
            } else {
                alert(123);
            }
        });
    };
    getAll = (event) => {
        axios.get("api/ThongTinKds").then((response) => {
            var ThongTinKds = response.data;
            // alert(JSON.stringify(computer));
            this.renderThongTinKdsTable(ThongTinKds);
        });
    };
    handleEdit = (event) => {
        var id = document.getElementById("maKd").value;
        var newthongTin = {
            maKd: document.getElementById("maKd").value,
            maTb: document.getElementById("maTb").value,
            giaKd: document.getElementById("giaKd").value,
            chuKyKd: document.getElementById("chuKyKd").value,
            donViGuiKd: document.getElementById("donViGuiKd").value,
            donViKd: document.getElementById("donViKd").value,
            ngayKdganNhat: document.getElementById("ngayKdGanNhat").value,
            ngaytoihanKd: document.getElementById("ngayToiHanKD").value,
            soKd: document.getElementById("soKd").value,
            tinhTrangKd: document.getElementById("tinhTrangKd").value,
            viTriLuuTruKd: document.getElementById("viTriLuuTruKd").value,
            soSeri: document.getElementById("soSeri").value,
        };
        axios.put("api/ThongTinKds/" + id, newthongTin).then((response) => {
            console.log(response);
            var result = response.data;
            console.log(result);
            if (!result) {
                alert("hihi");
                this.getAll();
                window.location.href = "/fetch-thongTin";
            } else {
                alert("No success");
                // window.location.href = "/test-fetch-donvi";
            }
        });
    };
    handleDeleted = (event) => {
        var deleted = 1;
        var id = document.getElementById("maKd").value;
        var newthongTin = {
            maKd: document.getElementById("maKd").value,
            maTb: document.getElementById("maTb").value,
            giaKd: document.getElementById("giaKd").value,
            chuKyKd: document.getElementById("chuKyKd").value,
            donViGuiKd: document.getElementById("donViGuiKd").value,
            donViKd: document.getElementById("donViKd").value,
            ngayKdganNhat: document.getElementById("ngayKdGanNhat").value,
            ngaytoihanKd: document.getElementById("ngayToiHanKD").value,
            soKd: document.getElementById("soKd").value,
            tinhTrangKd: document.getElementById("tinhTrangKd").value,
            viTriLuuTruKd: document.getElementById("viTriLuuTruKd").value,
            soSeri: document.getElementById("soSeri").value,
            delete: deleted
        };
        axios.put("api/ThongTinKds/" + id, newthongTin).then((response) => {
            console.log(response);
            var result = response.data;
            console.log(result);
            if (!result) {
                alert("hihi");
                this.getAll();
                window.location.href = "/fetch-thongTin";
            } else {
                alert("No success");
                // window.location.href = "/test-fetch-donvi";
            }
        });
    };
    lnk_Click(id) {
        this._click();
        this.handleGetDetail(id);
    }
    handleGetDetail(id) {
        console.log(id);
        axios.get("api/ThongTinKds/" + id).then((response) => {
            var thongTin = response.data;
            document.getElementById("maKd").value = thongTin.maKd;
            document.getElementById("maTb").value = thongTin.maTb;
            document.getElementById("giaKd").value = thongTin.giaKd;
            document.getElementById("chuKyKd").value = thongTin.chuKyKd;
            document.getElementById("donViGuiKd").value = thongTin.donViGuiKd;
            document.getElementById("donViKd").value = thongTin.donViKd;
            document.getElementById("ngayKdGanNhat").value = thongTin.ngayKdganNhat;
            document.getElementById("ngayToiHanKD").value = thongTin.ngaytoihanKd;
            document.getElementById("soKd").value = thongTin.soKd;
            document.getElementById("tinhTrangKd").value = thongTin.tinhTrangKd;
            document.getElementById("viTriLuuTruKd").value = thongTin.viTriLuuTruKd;
            document.getElementById("soSeri").value = thongTin.soSeri;
        });
    }

    //idthongTin: document.getElementById("idthongTin").value,
    //    sothongTin: document.getElementById("sothongTin").value,
    //        ngaythongTin: document.getElementById("ngaythongTin").value,
    //            loaithongTin: document.getElementById("loaithongTin").value,
    //                tinhTrangthongTin: document.getElementById("tinhTrangthongTin").value,
    //                    viTriLuuTruHd: document.getElementById("viTriLuuTruHd").value

    ////handleDelete(id) {
    //    console.log(id);
    //    //    //if (!window.confirm("Bạn có muốn xóa không?")) {
    //    //    //    return;
    //    //    //} else {
    //    //    //    fetch("api/DonVis/" + id, { method: 'delete' }).then((data) => {
    //    //    //        this.setState({
    //    //    //            data: this.state.donVis.filter((rec) => {
    //    //    //                return rec.maDonVi != id;
    //    //    //            }),
    //    //    //        });
    //    //    //        console.log(data);
    //    //    //    })
    //    //    //        .catch((error) => { console.log(error); })
    //    //    //}
    //    if (window.confirm("Xoa nhaaaa ??")) {
    //        //        var id = document.getElementById("maDonVi").value;
    //        axios.delete("api/DonVis/" + id).then((response) => {
    //            var result = response.data;
    //            if (!result) {
    //                alert("da xoa");
    //                window.location.href = "/test-fetch-donvi";
    //            } else {
    //                alert(123);
    //            }
    //        });
    //    }
    //}
}
