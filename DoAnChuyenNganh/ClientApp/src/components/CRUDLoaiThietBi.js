import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import axios from "axios";
import './testcss.css'



export class FetchLoaiTbs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loaiTbs: [],
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
        this.populateLoaiTbsData();
    }

    async populateLoaiTbsData() {
        const response = await fetch("api/LoaiTbs");
        const data = await response.json();
        this.setState({
            loaiTbs: data,
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
                this.renderLoaiTbsTable(this.state.loaiTbs)
            );
        return (
            <div className="content-page">
                <div className="content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="card-box">
                                    <h4 className="header-title mb-3">Loại Thiết Bị</h4>
                                    <p>Component lấy dữ liệu từ Server.</p>
                                    <table className="table table-borderless table-hover table-centered m-0">
                                        <tr>
                                            <td>
                                                <label for="maLoai">Mã Loại</label>
                                            </td>
                                            <td>
                                                <input name="maLoai" id="maLoai" type="text" readOnly={this.state.readOnly} className={txtbox_class} ></input>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <label for="loaiTb">Loại Thiết Bị</label>
                                            </td>
                                            <td>
                                                <input
                                                    name="loaiTb"
                                                    id="loaiTb"
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
                                    <h3> Chi Tiết Loại Thiết Bị </h3>

                                    {contents}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    renderLoaiTbsTable(donVis) {
        return (
            <table className="table table-borderless table-hover table-centered m-0">
                <thead className="thead-light">
                    <tr>
                        <th></th>
                        <th>Mã Loại</th>
                        <th>Loại Thiết Bị</th>
                        <th>Thao Tác</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {donVis.map((loaiTb) => (
                        <tr
                            key={loaiTb.maLoai}
                            onClick={(id) => this.lnk_Click(loaiTb.maLoai)}
                        >
                            <td></td>
                            <td>{loaiTb.maLoai}</td>
                            <td>{loaiTb.loaiThietBi}</td>
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
        var newLoaiTb = {
            maLoai: document.getElementById("maLoai").value,
            loaiThietBi: document.getElementById("loaiTb").value,
        };
        axios.post("api/LoaiTbs/", newLoaiTb).then((response) => {
            var result = response.data;
            if (result) {
                alert("hihi");
                //this.props.history.push("/fetch-donvi");
                // window.location.href="/fetch-donvi";
                this.getAll();
                window.location.href = "/fetch-loaitb";
            } else {
                alert(123);
            }
        });
    };
    getAll = (event) => {
        axios.get("api/LoaiTbs").then((response) => {
            var loaiTbs = response.data;
            // alert(JSON.stringify(computer));
            this.renderLoaiTbsTable(loaiTbs);
        });
    };
    handleEdit = (event) => {
        var id = document.getElementById("maLoai").value;
        var newLoaiTb = {
            maLoai: document.getElementById("maLoai").value,
            loaiThietBi: document.getElementById("loaiTb").value,
        };
        axios.put("api/LoaiTbs/" + id, newLoaiTb).then((response) => {
            console.log(response);
            var result = response.data;
            console.log(result);
            if (!result) {
                alert("hihi");
                this.getAll();
                window.location.href = "/fetch-loaitb";
            } else {

                alert("No success");
                // window.location.href = "/test-fetch-donvi";
            }
        });
    };
    handleDeleted = (event) => {
        var deleted = 1;
        var id = document.getElementById("maLoai").value;
        var newLoaiTb = {
            maLoai: document.getElementById("maLoai").value,
            loaiThietBi: document.getElementById("loaiTb").value,
            delete: deleted,
        };
        axios.put("api/LoaiTbs/" + id, newLoaiTb).then((response) => {
            console.log(response);
            var result = response.data;
            console.log(result);
            if (!result) {
                alert("hihi");
                this.getAll();
                window.location.href = "/fetch-loaitb";
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
        axios.get("api/LoaiTbs/" + id).then((response) => {
            var LoaiTb = response.data;
            document.getElementById("maLoai").value = LoaiTb.maLoai;
            document.getElementById("loaiTb").value = LoaiTb.loaiThietBi;
        });
    }

    //handleDelete(id) {
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
