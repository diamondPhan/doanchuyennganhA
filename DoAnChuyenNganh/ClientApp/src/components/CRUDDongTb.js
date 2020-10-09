import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import axios from "axios";
import './testcss.css'



export class FectchDongTbs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dongTbs: [],
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
        this.populateDongTbssData();
    }

    async populateDongTbssData() {
        const response = await fetch("api/DongTbs");
        const data = await response.json();
        this.setState({
            dongTbs: data,
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
                this.renderDongTbsTable(this.state.dongTbs)
            );
        return (
            <div className="content-page">
                <div className="content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="card-box">
                                    <h4 className="header-title mb-3">Dòng Thiết Bị</h4>
                                    <p>Component lấy dữ liệu từ Server.</p>
                                    <table className="table table-borderless table-hover table-centered m-0">
                                        <tr>
                                            <td>
                                                <label for="IdDongtb">ID Dòng Thiết Bị</label>
                                            </td>
                                            <td>
                                                <input name="IdDongtb" id="IdDongtb" type="text" readOnly={this.state.readOnly} className={txtbox_class} ></input>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <label for="tenDongTb">Tên Dòng Thiết Bị</label>
                                            </td>
                                            <td>
                                                <input
                                                    name="tenDongTb"
                                                    id="tenDongTb"
                                                    type="text"
                                                ></input>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <label for="IdNhomTb">ID Nhóm Thiết Bị</label>
                                            </td>
                                            <td>
                                                <input
                                                    name="IdNhomTb"
                                                    id="IdNhomTb"
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
                                    <h3> Dòng Thiết Bị DETAILS</h3>

                                    {contents}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    renderDongTbsTable(dongTbs) {
        return (
            <table className="table table-borderless table-hover table-centered m-0">
                <thead className="thead-light">
                    <tr>
                        <th></th>
                        <th>Mã Dong Thiet Bi</th>
                        <th>Tên Dong Thiet Bi</th>
                        <th>Ma Nhom Thiet Bi</th>
                        <th>Thao Tác</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {dongTbs.map((dongTb) => (
                        <tr
                            key={dongTb.iddongTb}
                            onClick={(id) => this.lnk_Click(dongTb.iddongTb)}
                        >
                            <td></td>
                            <td>{dongTb.iddongTb}</td>
                            <td>{dongTb.dongTb1}</td>
                            <td>{dongTb.idnhomTb}</td>
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
        var newDongTb = {
            iddongTb: document.getElementById("IdDongtb").value,
            dongTb1: document.getElementById("tenDongTb").value,
            idnhomTb: document.getElementById("IdNhomTb").value,
        };
        axios.post("api/DongTbs/", newDongTb).then((response) => {
            var result = response.data;
            if (result) {
                alert("hihi");
                //this.props.history.push("/fetch-donvi");
                // window.location.href="/fetch-donvi";
                this.getAll();
                window.location.href = "/fetch-dongtb";
            } else {
                alert(123);
            }
        });
    };
    getAll = (event) => {
        axios.get("api/DongTbs").then((response) => {
            var dongTbs = response.data;
            // alert(JSON.stringify(computer));
            this.renderDongTbsTable(dongTbs);
        });
    };
    handleEdit = (event) => {
        var id = document.getElementById("IdDongtb").value;
        var newDongTb = {
            iddongTb: document.getElementById("IdDongtb").value,
            dongTb1: document.getElementById("tenDongTb").value,
            idnhomTb: document.getElementById("IdNhomTb").value,
        };
        axios.put("api/DongTbs/" + id, newDongTb).then((response) => {
            console.log(response);
            var result = response.data;
            console.log(result);
            if (!result) {
                alert("hihi");
                this.getAll();
                window.location.href = "/fetch-dongtb";
            } else {

                alert("No success");
                // window.location.href = "/test-fetch-donvi";
            }
        });
    };
    handleDeleted = (event) => {
        var deleted = 1;
        var id = document.getElementById("IdDongtb").value;
        var newDongTb = {
            iddongTb: document.getElementById("IdDongtb").value,
            dongTb1: document.getElementById("tenDongTb").value,
            idnhomTb: document.getElementById("IdNhomTb").value,
            delete: deleted,
        };
        axios.put("api/DongTbs/" + id, newDongTb).then((response) => {
            console.log(response);
            var result = response.data;
            console.log(result);
            if (!result) {
                alert("hihi");
                this.getAll();
                window.location.href = "/fetch-dongtb";
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
        axios.get("api/DongTbs/" + id).then((response) => {
            var dongTb = response.data;
            document.getElementById("IdDongtb").value = dongTb.iddongTb;
            document.getElementById("tenDongTb").value = dongTb.dongTb1;
            document.getElementById("IdNhomTb").value = dongTb.idnhomTb;
        });
    }
    //handleGetDetail(id) {
    //    console.log(id);
    //    axios.get("api/DonVis/" + id).then((response) => {
    //        var DonVi = response.data;
    //        document.getElementById("maDonVi").value = DonVi.maDonVi;
    //        document.getElementById("tenDonVi").value = DonVi.tenDonVi;
    //    });
    //}

    handleDelete(id) {
        console.log(id);
        //    //if (!window.confirm("Bạn có muốn xóa không?")) {
        //    //    return;
        //    //} else {
        //    //    fetch("api/DonVis/" + id, { method: 'delete' }).then((data) => {
        //    //        this.setState({
        //    //            data: this.state.donVis.filter((rec) => {
        //    //                return rec.maDonVi != id;
        //    //            }),
        //    //        });
        //    //        console.log(data);
        //    //    })
        //    //        .catch((error) => { console.log(error); })
        //    //}
        if (window.confirm("Xoa nhaaaa ??")) {
            //        var id = document.getElementById("maDonVi").value;
            axios.delete("api/DonVis/" + id).then((response) => {
                var result = response.data;
                if (!result) {
                    alert("da xoa");
                    window.location.href = "/test-fetch-donvi";
                } else {
                    alert(123);
                }
            });
        }
    }
}
