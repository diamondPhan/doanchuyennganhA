import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import axios from "axios";
import './testcss.css'



export class FetchNhomKDs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nhomKds: [],
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
        this.populateNhomKdsData();
    }

    async populateNhomKdsData() {
        const response = await fetch("api/NhomKds");
        const data = await response.json();
        this.setState({
            nhomKds: data,
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
                this.renderNhomKdsTable(this.state.nhomKds)
            );
        return (
            <div className="content-page">
                <div className="content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="card-box">
                                    <h4 className="header-title mb-3">Nhóm Kiểm Định</h4>
                                    <p>Component lấy dữ liệu từ Server.</p>
                                    <table className="table table-borderless table-hover table-centered m-0">
                                        <tr>
                                            <td>
                                                <label for="maNhomKd">Mã Nhóm Kiểm Định</label>
                                            </td>
                                            <td>
                                                <input name="maNhomKd" id="maNhomKd" type="text" readOnly={this.state.readOnly} className={txtbox_class} ></input>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <label for="nhomKd">Nhóm Kiểm Định</label>
                                            </td>
                                            <td>
                                                <input
                                                    name="nhomKd"
                                                    id="nhomKd"
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

    renderNhomKdsTable(nhomKds) {
        return (
            <table className="table table-borderless table-hover table-centered m-0">
                <thead className="thead-light">
                    <tr>
                        <th></th>
                        <th>Mã Nhóm Kiểm Định</th>
                        <th>Nhóm Kiểm Định</th>
                        <th>Thao Tác</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {nhomKds.map((nhomKd) => (
                        <tr
                            key={nhomKd.maNhomKd}
                            onClick={(id) => this.lnk_Click(nhomKd.maNhomKd)}
                        >
                            <td></td>
                            <td>{nhomKd.maNhomKd}</td>
                            <td>{nhomKd.nhomKiemDinh}</td>
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
        var newNhomKd = {
            maNhomKd: document.getElementById("maNhomKd").value,
            nhomKiemDinh: document.getElementById("nhomKd").value,
        };
        axios.post("api/NhomKds/", newNhomKd).then((response) => {
            var result = response.data;
            if (result) {
                alert("hihi");
                //this.props.history.push("/fetch-donvi");
                // window.location.href="/fetch-donvi";
                this.getAll();
                window.location.href = "/fetch-nhomkd";
            } else {
                alert(123);
            }
        });
    };
    getAll = (event) => {
        axios.get("api/NhomKds").then((response) => {
            var nhomKds = response.data;
            // alert(JSON.stringify(computer));
            this.renderNhomKdsTable(nhomKds);
        });
    };
    handleEdit = (event) => {
        var id = document.getElementById("maNhomKd").value;
        var newNhomKd = {
            maNhomKd: document.getElementById("maNhomKd").value,
            nhomKiemDinh: document.getElementById("nhomKd").value,
        };
        axios.put("api/NhomKds/" + id, newNhomKd).then((response) => {
            console.log(response);
            var result = response.data;
            console.log(result);
            if (!result) {
                alert("hihi");
                this.getAll();
                window.location.href = "/fetch-nhomkd";
            } else {

                alert("No success");
                // window.location.href = "/test-fetch-donvi";
            }
        });
    };
    handleDeleted = (event) => {
        var deleted = 1;
        var id = document.getElementById("maNhomKd").value;
        var newNhomKd = {
            maNhomKd: document.getElementById("maNhomKd").value,
            nhomKiemDinh: document.getElementById("nhomKd").value,
            delete: deleted
        };
        axios.put("api/NhomKds/" + id, newNhomKd).then((response) => {
            console.log(response);
            var result = response.data;
            console.log(result);
            if (!result) {
                alert("hihi");
                this.getAll();
                window.location.href = "/fetch-nhomkd";
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
        axios.get("api/NhomKds/" + id).then((response) => {
            var NhomKd = response.data;
            document.getElementById("maNhomKd").value = NhomKd.maNhomKd;
            document.getElementById("nhomKd").value = NhomKd.nhomKiemDinh;
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
