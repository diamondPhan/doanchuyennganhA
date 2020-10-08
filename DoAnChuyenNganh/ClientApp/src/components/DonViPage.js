import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import axios from "axios";



export class FectchDonVis extends Component {
    constructor(props) {
        super(props);
        this.state = {
            donVis: [],
            loading: true,
        };
    }
    //do db len web va chay dung mot lan

    componentDidMount() {
        this.populateDonVisData();
    }

    async populateDonVisData() {
        const response = await fetch("api/DonVis");
        const data = await response.json();
        this.setState({
            donVis: data,
            loading: false,
        });
    }

    render() {
        let contents = this.state.loading ? (
            <p>
                <em>Loading...</em>
            </p>
        ) : (
                this.renderDonVisTable(this.state.donVis)
            );
        return (
            <div className="content-page">
                <div className="content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="card-box">
                                    <h4 className="header-title mb-3">Đơn Vị</h4>
                                    <p>Component lấy dữ liệu từ Server.</p>
                                    <p>
                                        <Button className="btn btn-success">
                                            <Link to="/themDonVi" style={{ color: "#fff" }}>
                                                Thêm Đơn Vị Mới
                      </Link>
                                        </Button>
                                    </p>
                                    {contents}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    renderDonVisTable(donVis) {
        return (
            <table className="table table-borderless table-hover table-centered m-0">
                <thead className="thead-light">
                    <tr>
                        <th></th>
                        <th>Mã Đơn Vị</th>
                        <th>Tên Đơn Vị</th>
                        <th>Thao Tác</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {donVis.map((donVi) => (
                        <tr key={donVi.maDonVi}>
                            <td></td>
                            <td >{donVi.maDonVi}</td>
                            <td>{donVi.tenDonVi}</td>
                            <td>
                                <button
                                    className="btn btn-warning"
                                    onClick={(id) => this.handleEdit(donVi.maDonVi)}
                                >
                                    Chỉnh Sửa
                </button>
                &nbsp;
                <button
                                    className="btn btn-danger"
                                    onClick={(id) => this.handleDelete(donVi.maDonVi)}
                                >
                                    Xóa
                </button>
                &nbsp;
              </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        )
    }

    handleEdit(id) {
        console.log(id);
        this.props.history.push("/DonVis/edit/" + id);
        //window.location.href = "/" + id;
    }

    handleDelete(id)  {
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
        if (window.confirm('Xoa nhaaaa ??')) {
            //        var id = document.getElementById("maDonVi").value;
            axios.delete("api/DonVis/" + id).then((response) => {
                var result = response.data;
                if (result) {
                    alert("da xoa");
                    window.location.href = "/fetch-donvi";

                }
                else { alert(123); }
            });
        }
    }
}
