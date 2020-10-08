import React from "react";

const RightSideBar = () => {
    return (
        <div className="right-bar">
            <div className="rightbar-title">
                <a href="javascript:void(0);" className="right-bar-toggle float-right">
                    <i className="fe-x noti-icon" />
                </a>
                <h4 className="m-0 text-white">Settings</h4>
            </div>
            <div className="slimscroll-menu">
                {/* User box */}
                <div className="user-box">
                    <div className="user-img">
                        <img src="assets\images\users\avatar-1.jpg" alt="user-img" title="Mat Helme" className="rounded-circle img-fluid" />
                        <a href="javascript:void(0);" className="user-edit"><i className="mdi mdi-pencil" /></a>
                    </div>
                    <h5><a href="javascript: void(0);">Nik G. Patel</a> </h5>
                    <p className="text-muted mb-0"><small>Admin Head</small></p>
                </div>
                <ul className="nav nav-pills bg-light nav-justified">
                    <li className="nav-item">
                        <a href="#home1" data-toggle="tab" aria-expanded="false" className="nav-link rounded-0">
                            General
          </a>
                    </li>
                    <li className="nav-item">
                        <a href="#messages1" data-toggle="tab" aria-expanded="false" className="nav-link rounded-0 active">
                            Chat
          </a>
                    </li>
                </ul>
                <div className="tab-content pl-3 pr-3">
                    <div className="tab-pane" id="home1">
                        <div className="row mb-2">
                            <div className="col">
                                <h5 className="m-0 font-15">Notifications</h5>
                                <p className="text-muted"><small>Do you need them?</small></p>
                            </div> {/* end col*/}
                            <div className="col-auto">
                                <div className="custom-control custom-switch mb-2">
                                    <input type="checkbox" className="custom-control-input" id="tabswitch1" />
                                    <label className="custom-control-label" htmlFor="tabswitch1" />
                                </div>
                            </div> {/* end col */}
                        </div>
                        {/* end row*/}
                        <div className="row mb-2">
                            <div className="col">
                                <h5 className="m-0 font-15">API Access</h5>
                                <p className="text-muted"><small>Enable/Disable access</small></p>
                            </div> {/* end col*/}
                            <div className="col-auto">
                                <div className="custom-control custom-switch mb-2">
                                    <input type="checkbox" className="custom-control-input" defaultChecked id="tabswitch2" />
                                    <label className="custom-control-label" htmlFor="tabswitch2" />
                                </div>
                            </div> {/* end col */}
                        </div>
                        {/* end row*/}
                        <div className="row mb-2">
                            <div className="col">
                                <h5 className="m-0 font-15">Auto Updates</h5>
                                <p className="text-muted"><small>Keep up to date</small></p>
                            </div> {/* end col*/}
                            <div className="col-auto">
                                <div className="custom-control custom-switch mb-2">
                                    <input type="checkbox" className="custom-control-input" id="tabswitch3" />
                                    <label className="custom-control-label" htmlFor="tabswitch3" />
                                </div>
                            </div> {/* end col */}
                        </div>
                        {/* end row*/}
                        <div className="row mb-2">
                            <div className="col">
                                <h5 className="m-0 font-15">Online Status</h5>
                                <p className="text-muted"><small>Show your status to all</small></p>
                            </div> {/* end col*/}
                            <div className="col-auto">
                                <div className="custom-control custom-switch mb-2">
                                    <input type="checkbox" className="custom-control-input" defaultChecked id="tabswitch4" />
                                    <label className="custom-control-label" htmlFor="tabswitch4" />
                                </div>
                            </div> {/* end col */}
                        </div>
                        {/* end row*/}
                        <div className="alert alert-success alert-dismissible fade mt-3 show" role="alert">
                            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                            <h5>Unlimited Access</h5>
            Upgrade to plan to get access to unlimited reports
            <br />
                            <a href="javascript: void(0);" className="btn btn-outline-success mt-3 btn-sm">Upgrade<i className="ml-1 mdi mdi-arrow-right" /></a>
                        </div>
                    </div>
                    <div className="tab-pane show active" id="messages1">
                        <div>
                            <div className="inbox-widget">
                                <h5 className="mt-0">Recent</h5>
                                <div className="inbox-item">
                                    <div className="inbox-item-img"><img src="assets\images\users\avatar-2.jpg" className="rounded-circle" alt="" /> <i className="online user-status" /></div>
                                    <p className="inbox-item-author"><a href="javascript: void(0);" className="text-dark">Tomaslau</a></p>
                                    <p className="inbox-item-text">I've finished it! See you so...</p>
                                </div>
                                <div className="inbox-item">
                                    <div className="inbox-item-img"><img src="assets\images\users\avatar-3.jpg" className="rounded-circle" alt="" /> <i className="away user-status" /></div>
                                    <p className="inbox-item-author"><a href="javascript: void(0);" className="text-dark">Stillnotdavid</a></p>
                                    <p className="inbox-item-text">This theme is awesome!</p>
                                </div>
                                <div className="inbox-item">
                                    <div className="inbox-item-img"><img src="assets\images\users\avatar-4.jpg" className="rounded-circle" alt="" /> <i className="online user-status" /></div>
                                    <p className="inbox-item-author"><a href="javascript: void(0);" className="text-dark">Kurafire</a></p>
                                    <p className="inbox-item-text">Nice to meet you</p>
                                </div>
                                <div className="inbox-item">
                                    <div className="inbox-item-img"><img src="assets\images\users\avatar-5.jpg" className="rounded-circle" alt="" /> <i className="busy user-status" /></div>
                                    <p className="inbox-item-author"><a href="javascript: void(0);" className="text-dark">Shahedk</a></p>
                                    <p className="inbox-item-text">Hey! there I'm available...</p>
                                </div>
                                <div className="inbox-item">
                                    <div className="inbox-item-img"><img src="assets\images\users\avatar-6.jpg" className="rounded-circle" alt="" /> <i className="user-status" /></div>
                                    <p className="inbox-item-author"><a href="javascript: void(0);" className="text-dark">Adhamdannaway</a></p>
                                    <p className="inbox-item-text">This theme is awesome!</p>
                                </div>
                                <hr />
                                <h5>Favorite <span className="float-right badge badge-pill badge-danger">18</span></h5>
                                <hr />
                                <div className="inbox-item">
                                    <div className="inbox-item-img"><img src="assets\images\users\avatar-7.jpg" className="rounded-circle" alt="" /> <i className="busy user-status" /></div>
                                    <p className="inbox-item-author"><a href="javascript: void(0);" className="text-dark">Kennith</a></p>
                                    <p className="inbox-item-text">I've finished it! See you so...</p>
                                </div>
                                <div className="inbox-item">
                                    <div className="inbox-item-img"><img src="assets\images\users\avatar-3.jpg" className="rounded-circle" alt="" /> <i className="busy user-status" /></div>
                                    <p className="inbox-item-author"><a href="javascript: void(0);" className="text-dark">Stillnotdavid</a></p>
                                    <p className="inbox-item-text">This theme is awesome!</p>
                                </div>
                                <div className="inbox-item">
                                    <div className="inbox-item-img"><img src="assets\images\users\avatar-10.jpg" className="rounded-circle" alt="" /> <i className="online user-status" /></div>
                                    <p className="inbox-item-author"><a href="javascript: void(0);" className="text-dark">Kimberling</a></p>
                                    <p className="inbox-item-text">Nice to meet you</p>
                                </div>
                                <div className="inbox-item">
                                    <div className="inbox-item-img"><img src="assets\images\users\avatar-4.jpg" className="rounded-circle" alt="" /> <i className="user-status" /></div>
                                    <p className="inbox-item-author"><a href="javascript: void(0);" className="text-dark">Kurafire</a></p>
                                    <p className="inbox-item-text">Hey! there I'm available...</p>
                                </div>
                                <div className="inbox-item">
                                    <div className="inbox-item-img"><img src="assets\images\users\avatar-9.jpg" className="rounded-circle" alt="" /> <i className="away user-status" /></div>
                                    <p className="inbox-item-author"><a href="javascript: void(0);" className="text-dark">Leonareade</a></p>
                                    <p className="inbox-item-text">This theme is awesome!</p>
                                </div>
                                <div className="text-center mt-2">
                                    <a href="javascript:void(0);" className="text-muted"><i className="mdi mdi-spin mdi-loading mr-1" /> Load more </a>
                                </div>
                            </div> {/* end inbox-widget */}
                        </div> {/* end .p-3*/}
                    </div>
                </div>
            </div> {/* end slimscroll-menu*/}
        </div>
    )
};

export default RightSideBar;