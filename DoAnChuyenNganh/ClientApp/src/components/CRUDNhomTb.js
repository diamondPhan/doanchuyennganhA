import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import axios from "axios";
import './testcss.css'



export class FetchNhomTBs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nhomTbs: [],
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
        this.populateNhomTbsData();
    }

    async populateNhomTbsData() {
        const response = await fetch("api/NhomTbs");
        const data = await response.json();
        this.setState({
            nhomTbs: data,
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
                this.renderNhomTbsTable(this.state.nhomTbs)
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
                                                <label for="idnhomTb">Mã Nhóm Kiểm Định</label>
                                            </td>
                                            <td>
                                                <input name="idnhomTb" id="idnhomTb" type="text" readOnly={this.state.readOnly} className={txtbox_class} ></input>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <label for="nhomTb">Nhóm Kiểm Định</label>
                                            </td>
                                            <td>
                                                <input
                                                    name="nhomTb"
                                                    id="nhomTb"
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
                                    <h3> Chi Tiết Nhóm Thiết Bị </h3>

                                    {contents}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    renderNhomTbsTable(nhomTbs) {
        return (
            <table className="table table-borderless table-hover table-centered m-0">
                <thead className="thead-light">
                    <tr>
                        <th></th>
                        <th>Mã Nhóm Thiêt Bị</th>
                        <th>Nhóm Thiết Bịh</th>
                        <th>Thao Tác</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {nhomTbs.map((nhomTb) => (
                        <tr
                            key={nhomTb.idnhomTb}
                            onClick={(id) => this.lnk_Click(nhomTb.idnhomTb)}
                        >
                            <td></td>
                            <td>{nhomTb.idnhomTb}</td>
                            <td>{nhomTb.nhomTb1}</td>
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
        var newNhomTb = {
            idnhomTb: document.getElementById("idnhomTb").value,
            nhomTb1: document.getElementById("nhomTb").value,
        };
        axios.post("api/NhomTbs/", newNhomTb).then((response) => {
            var result = response.data;
            if (result) {
                alert("hihi");
                //this.props.history.push("/fetch-donvi");
                // window.location.href="/fetch-donvi";
                this.getAll();
                window.location.href = "/fetch-nhomTb";
            } else {
                alert(123);
            }
        });
    };
    getAll = (event) => {
        axios.get("api/NhomTbs").then((response) => {
            var nhomTbs = response.data;
            // alert(JSON.stringify(computer));
            this.renderNhomTbsTable(nhomTbs);
        });
    };
    handleEdit = (event) => {
        var id = document.getElementById("idnhomTb").value;
        var newNhomTb = {
            idnhomTb: document.getElementById("idnhomTb").value,
            nhomTb1: document.getElementById("nhomTb").value,
        };
        axios.put("api/NhomTbs/" + id, newNhomTb).then((response) => {
            console.log(response);
            var result = response.data;
            console.log(result);
            if (!result) {
                alert("hihi");
                this.getAll();
                window.location.href = "/fetch-nhomTb";
            } else {

                alert("No success");
                // window.location.href = "/test-fetch-donvi";
            }
        });
    };
    handleDeleted = (event) => {
        var deleted = 1;
        var id = document.getElementById("idnhomTb").value;
        var newNhomTb = {
            idnhomTb: document.getElementById("idnhomTb").value,
            nhomTb1: document.getElementById("nhomTb").value,
            delete: deleted
        };
        axios.put("api/NhomTbs/" + id, newNhomTb).then((response) => {
            console.log(response);
            var result = response.data;
            console.log(result);
            if (!result) {
                alert("hihi");
                this.getAll();
                window.location.href = "/fetch-nhomTb";
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
        axios.get("api/NhomTbs/" + id).then((response) => {
            var NhomTb = response.data;
            document.getElementById("idnhomTb").value = NhomTb.idnhomTb;
            document.getElementById("nhomTb").value = NhomTb.nhomTb1;
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
