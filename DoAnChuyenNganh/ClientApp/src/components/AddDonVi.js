import React, { Component } from "react";
import axios from "axios";

export class DonVi {
    constructor() {
        this.maDonVi = "";
        this.tenDonVi = "";
    }
}

export class AddNewDonVi extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "",
            donVi: new DonVi(),
            loading: true,
        };
        this.initialize();
    }

    async initialize() {
        var maDonVi = this.props.match.params["maDonVi"];
        if (maDonVi) {
            const temp = await fetch("api/DonVis/" );
            const data = await temp.json();
            this.setState({
                title: "Chỉnh Sửa",
                donVi: data,
                loading: false,
            });
        } else {
            this.state = {
                title: "Tạo Mới",
                donVi: new DonVi(),
                loading: false,
            };
        }
    }

    render() {
        let contents = this.state.loading ?
            <p>
                <em>Loading...</em>
            </p>
            : this.renderCreateForm();
        return (
            <div>
                <h4>{this.state.title}</h4>
                <h4>Đơn Vị</h4>
                <hr />
                {contents}
            </div>
        );
    }

    handleSave = (event) => {
        var newDonVi = {
            maDonVi:document.getElementById("maDonVi").value,
            tenDonVi:document.getElementById("tenDonVi").value
        };
        axios.post("api/DonVis/", newDonVi).then((response) => {
            var result = response.data;
            if (result) {
                alert("hihi");
                //this.props.history.push("/fetch-donvi");
                window.location.href="/fetch-donvi";

            }
            else { alert(123); }
        });
        
    };

    handleCancel = (event) => {
        event.preventDefault();
        this.props.history.push("/fetch-donvi");
    };

    renderCreateForm() {
        return (
            <div className="content-page">
                <div className="content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="card-box">
                                    <form className="form-horizontal" onSubmit={this.handleSave}>
                                        <div className="form-group row">
                                            <input
                                                type="hidden"
                                                name="maDonVi"
                                                value={this.state.donVi.maDonVi}
                                            />
                                        </div>
                                        <div className="form-group row">
                                            <label className="control-label col-md-12" htmlFor="maDonVi">
                                                Mã Đơn Vị
                                          </label>
                                            <div className="col-md-4">
                                                <input type="text" name="maDonVi" id="maDonVi" defaultValue={this.state.donVi.maDonVi}
                                                    className="form-control"
                                                    required
                                                />
                                            </div>
                                            <label className="control-label col-md-12" htmlFor="tenDonVi">
                                                Tên Đơn Vị
                                          </label>
                                            <div className="col-md-4">
                                                <input
                                                    type="text"
                                                    name="tenDonVi"
                                                    id="tenDonVi"
                                                  defaultValue={this.state.donVi.tenDonVi}
                                                  className="form-control" required
                                              />
                                          </div>

                                            
                                        </div>
                                        <div className="form-group">
                                            <button type="submit" className="btn btn-success">Lưu</button>
                                            <button className="btn btn-danger" onClick={this.handleCancel}>Hủy</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ); 
    }
}
