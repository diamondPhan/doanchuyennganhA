import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import axios from "axios";
import './testcss.css'



export class FetchHoaDons extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hoaDons: [],
            loading: true,
            checkchange: true,
            readOnly: true,
        };

        this._click = this._click.bind(this);
    }
    _click() {
        this.setState(prevState => ({ readOnly: !prevState.readOnly }))
    }

    changeStateCheck() {
        this.setState({ checkchange: !this.state.checkchange });
    }
    //do db len web va chay dung mot lan

    componentDidMount() {
        this.populateHoaDonsData();
    }

    async populateHoaDonsData() {
        const response = await fetch("api/LoaiTbs");
        const data = await response.json();
        this.setState({
            hoaDons: data,
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
                this.renderHoaDonsTable(this.state.hoaDons)
            );
        return (
            <div className="content-page">
                <div className="content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="card-box">
                                    <h4 className="header-title mb-3">Hóa Đơn</h4>
                                    <p>Component lấy dữ liệu từ Server.</p>
                                    <table className="table table-borderless table-hover table-centered m-0">
                                        <tr>
                                            <td>
                                                <label for="idHoaDon">ID Hóa Đơn</label>
                                            </td>
                                            <td>
                                                <input name="idHoaDon" id="idHoaDon" type="text" readOnly={this.state.readOnly} className={txtbox_class} ></input>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <label for="soHoaDon">Số Hóa Đơn</label>
                                            </td>
                                            <td>
                                                <input
                                                    name="soHoaDon"
                                                    id="soHoaDon"
                                                    type="text"
                                                ></input>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <label for="ngayHoaDon">Ngày Hóa Đơn</label>
                                            </td>
                                            <td>
                                                <input
                                                    name="ngayHoaDon"
                                                    id="ngayHoaDon"
                                                    type="text"
                                                ></input>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <label for="loaiHoaDon">Loại Hóa Đơn</label>
                                            </td>
                                            <td>
                                                <input
                                                    name="loaiHoaDon"
                                                    id="loaiHoaDon"
                                                    type="text"
                                                ></input>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <label for="tinhTrangHoaDon">Tình Trạng Hóa Đơn</label>
                                            </td>
                                            <td>
                                                <input
                                                    name="tinhTrangHoaDon"
                                                    id="tinhTrangHoaDon"
                                                    type="text"
                                                ></input>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <label for="viTriLuuTruHoaDon">Vị Trí Lưu Trữ Hóa Đơn</label>
                                            </td>
                                            <td>
                                                <input
                                                    name="viTriLuuTruHoaDon"
                                                    id="viTriLuuTruHoaDon"
                                                    type="text"
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

    renderHoaDonsTable(hoaDons) {
        return (
            <table className="table table-borderless table-hover table-centered m-0">
                <thead className="thead-light">
                    <tr>
                        <th></th>
                        <th>Mã Hóa Đơn</th>
                        <th>Số Hóa Đơn</th>
                        <th>Ngày Hóa Đơn</th>
                        <th>Loại Hóa Đơn</th>
                        <th>Tình Trạng Hóa Đơn</th>
                        <th>Vị Trí Lưu Trữ</th>
                        <th>Thao Tác</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {hoaDons.map((hoaDon) => (
                        <tr
                            key={hoaDon.idhoaDon}
                            onClick={(id) => this.lnk_Click(hoaDon.idhoaDon)}
                        >
                            <td></td>
                            <td>{hoaDon.idhoaDon}</td>
                            <td>{hoaDon.soHoaDon}</td>
                            <td>{hoaDon.ngayHoaDon}</td>
                            <td>{hoaDon.loaiHoaDon}</td>
                            <td>{hoaDon.tinhTrangHoaDon}</td>
                            <td>{hoaDon.viTriLuuTruHd}</td>

                            <td>
                                {/* <button
                                    className="btn btn-warning"
                                    onClick={(id) => this.handleEdit(donVi.maDonVi)}
                                >
                                    Chỉnh Sửa
                </button> */}
                &nbsp;
                <button
                                    className="btn btn-danger"
                                    onClick={this.handleDeleted}
                                >
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
        var newHoaDon = {
            idhoaDon: document.getElementById("idhoaDon").value,
            soHoaDon: document.getElementById("soHoaDon").value,
            ngayHoaDon: document.getElementById("ngayHoaDon").value,
            loaiHoaDon: document.getElementById("loaiHoaDon").value,
            tinhTrangHoaDon: document.getElementById("tinhTrangHoaDon").value,
            viTriLuuTruHd: document.getElementById("viTriLuuTruHd").value
        };
        axios.post("api/HoaDons/", newHoaDon).then((response) => {
            var result = response.data;
            if (result) {
                alert("hihi");
                //this.props.history.push("/fetch-donvi");
                // window.location.href="/fetch-donvi";
                this.getAll();
                window.location.href = "/fetch-hoadon";
            } else {
                alert(123);
            }
        });
    };
    getAll = (event) => {
        axios.get("api/HoaDons").then((response) => {
            var hoaDons = response.data;
            // alert(JSON.stringify(computer));
            this.renderHoaDonsTable(hoaDons);
        });
    };
    handleEdit = (event) => {
        var id = document.getElementById("idhoaDon").value;
        var newHoaDon = {
            idhoaDon: document.getElementById("idhoaDon").value,
            soHoaDon: document.getElementById("soHoaDon").value,
            ngayHoaDon: document.getElementById("ngayHoaDon").value,
            loaiHoaDon: document.getElementById("loaiHoaDon").value,
            tinhTrangHoaDon: document.getElementById("tinhTrangHoaDon").value,
            viTriLuuTruHd: document.getElementById("viTriLuuTruHd").value
        };
        axios.put("api/HoaDons/" + id, newHoaDon).then((response) => {
            console.log(response);
            var result = response.data;
            console.log(result);
            if (!result) {
                alert("hihi");
                this.getAll();
                window.location.href = "/fetch-hoadon";
            } else {

                alert("No success");
                // window.location.href = "/test-fetch-donvi";
            }
        });
    };
    handleDeleted = (event) => {
        var deleted = 1;
        var id = document.getElementById("idhoaDon").value;
        var newHoaDon = {
            idhoaDon: document.getElementById("idhoaDon").value,
            soHoaDon: document.getElementById("soHoaDon").value,
            ngayHoaDon: document.getElementById("ngayHoaDon").value,
            loaiHoaDon: document.getElementById("loaiHoaDon").value,
            tinhTrangHoaDon: document.getElementById("tinhTrangHoaDon").value,
            viTriLuuTruHd: document.getElementById("viTriLuuTruHd").value,
            //delete = deleted,
        };
        axios.put("api/HoaDons/" + id, newHoaDon).then((response) => {
            console.log(response);
            var result = response.data;
            console.log(result);
            if (!result) {
                alert("hihi");
                this.getAll();
                window.location.href = "/fetch-hoadon";
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
        axios.get("api/HoaDons/" + id).then((response) => {
            var HoaDon = response.data;
            document.getElementById("idHoaDon").value = HoaDon.idhoaDon;
            document.getElementById("soHoaDon").value = HoaDon.soHoaDon;
            document.getElementById("ngayHoaDon").value = HoaDon.ngayHoaDon;
            document.getElementById("loaiHoaDon").value = HoaDon.loaiHoaDon;
            document.getElementById("tinhTrangHoaDon").value = HoaDon.tinhTrangHoaDon;
            document.getElementById("viTriLuuTruHd").value = HoaDon.viTriLuuTruHd;
        });
    }

    //idhoaDon: document.getElementById("idhoaDon").value,
    //    soHoaDon: document.getElementById("soHoaDon").value,
    //        ngayHoaDon: document.getElementById("ngayHoaDon").value,
    //            loaiHoaDon: document.getElementById("loaiHoaDon").value,
    //                tinhTrangHoaDon: document.getElementById("tinhTrangHoaDon").value,
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
