import React from 'react';

class Content1 extends React.Component {
    render(){
        return (
            <div className="app-body" id="view">
                {/* <!-- ############ PAGE START--> */}
                <div className="p-a white lt box-shadow">
                    <div className="row">
                        <div className="col-sm-6">
                        <h4 className="mb-0 _300">Welcome to Flatkit</h4>
                        <small className="text-muted">Bootstrap <strong>4</strong> Web App Kit with AngularJS</small>
                        </div>
                        <div className="col-sm-6 text-sm-right">
                        <div className="m-y-sm">
                            <span className="m-r-sm">Start manage:</span>
                            <div className="btn-group dropdown">
                            <button className="btn white btn-sm ">Projects</button>
                            <button className="btn white btn-sm dropdown-toggle" data-toggle="dropdown"></button>
                            <div className="dropdown-menu dropdown-menu-scale pull-right">
                                <a className="dropdown-item" href>Members</a>
                                <a className="dropdown-item" href>Tasks</a>
                                <a className="dropdown-item" href>Inbox</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item">Profile</a>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="padding">
                    <div className="row">
                        <div className="col-xs-12 col-sm-4">
                        <div className="box p-a">
                            <div className="pull-left m-r">
                            <span className="w-48 rounded  accent">
                                <i className="material-icons">&#xe151;</i>
                            </span>
                            </div>
                            <div className="clear">
                            <h4 className="m-0 text-lg _300"><a href>125 <span className="text-sm">Emails</span></a></h4>
                            <small className="text-muted">6 new arrivals.</small>
                            </div>
                        </div>
                        </div>
                        <div className="col-xs-6 col-sm-4">
                        <div className="box p-a">
                            <div className="pull-left m-r">
                            <span className="w-48 rounded primary">
                                <i className="material-icons">&#xe54f;</i>
                            </span>
                            </div>
                            <div className="clear">
                            <h4 className="m-0 text-lg _300"><a href>40 <span className="text-sm">Projects</span></a></h4>
                            <small className="text-muted">38 open.</small>
                            </div>
                        </div>
                        </div>
                        <div className="col-xs-6 col-sm-4">
                        <div className="box p-a">
                            <div className="pull-left m-r">
                            <span className="w-48 rounded warn">
                                <i className="material-icons">&#xe8d3;</i>
                            </span>
                            </div>
                            <div className="clear">
                            <h4 className="m-0 text-lg _300"><a href>600 <span className="text-sm">Users</span></a></h4>
                            <small className="text-muted">632 vips.</small>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6 col-md-4">
                        <div className="box">
                            <div className="box-header">
                            <h3>Projects monitor</h3>
                            <small>Calculated in last 30 days</small>
                            </div>
                            <div className="box-tool">
                            <ul className="nav">
                                <li className="nav-item inline">
                                <a className="nav-link">
                                    <i className="material-icons md-18">&#xe863;</i>
                                </a>
                                </li>
                                <li className="nav-item inline dropdown">
                                <a className="nav-link" data-toggle="dropdown">
                                    <i className="material-icons md-18">&#xe5d4;</i>
                                </a>
                                <div className="dropdown-menu dropdown-menu-scale pull-right">
                                    <a className="dropdown-item" href>This week</a>
                                    <a className="dropdown-item" href>This month</a>
                                    <a className="dropdown-item" href>This week</a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item">Today</a>
                                </div>
                                </li>
                            </ul>
                            </div>
                            <div className="box-body">
                            <div className="text-center m-b">
                                <div className="btn-group" data-toggle="buttons">
                                <label className="btn btn-sm white">
                                    <input type="radio" name="options" autocomplete="off"/> Month
                                </label>
                                <label className="btn btn-sm white">
                                    <input type="radio" name="options" autocomplete="off"/> Day
                                </label>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="col-sm-6 col-md-4">
                        <div className="box">
                            <div className="box-header">
                            <h3>Tasks</h3>
                            <small>Calculated in last 7 days</small>
                            </div>
                            <div className="box-tool">
                            <ul className="nav">
                                <li className="nav-item inline">
                                <a className="nav-link">
                                    <i className="material-icons md-18">&#xe863;</i>
                                </a>
                                </li>
                                <li className="nav-item inline dropdown">
                                <a className="nav-link" data-toggle="dropdown">
                                    <i className="material-icons md-18">&#xe5d4;</i>
                                </a>
                                <div className="dropdown-menu dropdown-menu-scale pull-right">
                                    <a className="dropdown-item" href>This week</a>
                                    <a className="dropdown-item" href>This month</a>
                                    <a className="dropdown-item" href>This week</a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item">Today</a>
                                </div>
                                </li>
                            </ul>
                            </div>
                            <div className="box-body">
                            <div className="text-center m-b">
                                <div className="btn-group" data-toggle="buttons">
                                <label className="btn btn-sm rounded white">
                                    <input type="radio" name="options" autocomplete="off"/> This Month
                                </label>
                                <label className="btn btn-sm rounded white">
                                    <input type="radio" name="options" autocomplete="off"/> This Week
                                </label>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="col-sm-12 col-md-4">
                        <div className="box">
                            <div className="box-header">
                            <h3>Sales</h3>
                            <small>Calculated in last 7 days</small>
                            </div>
                            <div className="box-tool">
                            <ul className="nav">
                                <li className="nav-item inline">
                                <a className="nav-link">
                                    <i className="material-icons md-18">&#xe863;</i>
                                </a>
                                </li>
                                <li className="nav-item inline dropdown">
                                <a className="nav-link" data-toggle="dropdown">
                                    <i className="material-icons md-18">&#xe5d4;</i>
                                </a>
                                <div className="dropdown-menu dropdown-menu-scale pull-right">
                                    <a className="dropdown-item" href>This week</a>
                                    <a className="dropdown-item" href>This month</a>
                                    <a className="dropdown-item" href>This week</a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item">Today</a>
                                </div>
                                </li>
                            </ul>
                            </div>
                            <div className="box-body">
                                <div className="text-center m-b">
                                    <div className="btn-group" data-toggle="buttons">
                                    <label className="btn btn-sm rounded white">
                                        <input type="radio" name="options" autocomplete="off"/> Market
                                    </label>
                                    <label className="btn btn-sm rounded white">
                                        <input type="radio" name="options" autocomplete="off"/> Referral
                                    </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12 col-md-6">
                        <div className="box">
                            <div className="box-header">
                            <h3>Open Projects <span className="label warning">9</span></h3>
                            <small>Your data status</small>
                            </div>
                            <ul className="list inset">
                            <li className="list-item">
                                <a herf className="list-left">
                                <span className="w-40 r-2x _600 text-lg accent">
                                    B
                                    </span>
                                </a>
                                <div className="list-body">
                                <div className="m-y-sm pull-right">
                                    <a href className="btn btn-xs white">Manage</a>
                                    <a href className="btn btn-xs white btn-icon"><i className="fa fa-pencil"></i></a>
                                </div>
                                <div><a href>Broadcast web app mockup</a></div>
                                <div className="text-sm">
                                    <span className="text-muted"><strong>5</strong> tasks, <strong>3</strong> issues</span>
                                    <span className="label"></span>
                                </div>
                                </div>
                            </li>
                            <li className="list-item">
                                <a herf className="list-left">
                                <span className="w-40 r-2x _600 text-lg success">
                                    G
                                    </span>
                                </a>
                                <div className="list-body">
                                <div className="m-y-sm pull-right">
                                    <a href className="btn btn-xs white">Manage</a>
                                    <a href className="btn btn-xs white btn-icon"><i className="fa fa-pencil"></i></a>
                                </div>
                                <div><a href>GoodDesign Bootstrap 4 migration</a></div>
                                <div className="text-sm">
                                    <span className="text-muted"><strong>35</strong> tasks, <strong>6</strong> issues</span>
                                    <span className="label"></span>
                                </div>
                                </div>
                            </li>
                            <li className="list-item">
                                <a herf className="list-left">
                                <span className="w-40 r-2x _600 text-lg purple">
                                    #
                                    </span>
                                </a>
                                <div className="list-body">
                                <div className="m-y-sm pull-right">
                                    <a href className="btn btn-xs white">Manage</a>
                                    <a href className="btn btn-xs white btn-icon"><i className="fa fa-pencil"></i></a>
                                </div>
                                <div><a href>#Hashtag android app develop</a></div>
                                <div className="text-sm">
                                    <span className="text-muted"><strong>52</strong> tasks, <strong>13</strong> issues</span>
                                    <span className="label"></span>
                                </div>
                                </div>
                            </li>
                            <li className="list-item">
                                <a herf className="list-left">
                                <span className="w-40 r-2x _600 blue">
                                    <i className="fa fa-lg fa-google"></i>
                                    </span>
                                </a>
                                <div className="list-body">
                                <div className="m-y-sm pull-right">
                                    <a href className="btn btn-xs white">Manage</a>
                                    <a href className="btn btn-xs white btn-icon"><i className="fa fa-pencil"></i></a>
                                </div>
                                <div><a href>Google material design application</a></div>
                                <div className="text-sm">
                                    <span className="text-muted"><strong>15</strong> tasks, <strong>3</strong> issues</span>
                                    <span className="label"></span>
                                </div>
                                </div>
                            </li>
                            <li className="list-item">
                                <a herf className="list-left">
                                <span className="w-40 r-2x _600 blue-800">
                                    <i className="fa fa-lg fa-facebook"></i>
                                    </span>
                                </a>
                                <div className="list-body">
                                <div className="m-y-sm pull-right">
                                    <a href className="btn btn-xs white">Manage</a>
                                    <a href className="btn btn-xs white btn-icon"><i className="fa fa-pencil"></i></a>
                                </div>
                                <div><a href>Facebook connection web application</a></div>
                                <div className="text-sm">
                                    <span className="text-muted"><strong>30</strong> tasks, <strong>5</strong> issues</span>
                                    <span className="label"></span>
                                </div>
                                </div>
                            </li>
                            </ul>
                        </div>
                        </div>
                        <div className="col-sm-12 col-md-6">
                        <div className="box">
                            <div className="box-header">
                            <h3>Stats</h3>
                            <small>Your data status</small>
                            </div>
                            <div className="box-tool">
                            <ul className="nav">
                                <li className="nav-item inline">
                                <a className="nav-link">
                                    <i className="material-icons md-18">&#xe863;</i>
                                </a>
                                </li>
                                <li className="nav-item inline dropdown">
                                <a className="nav-link" data-toggle="dropdown">
                                    <i className="material-icons md-18">&#xe5d4;</i>
                                </a>
                                <div className="dropdown-menu dropdown-menu-scale pull-right">
                                    <a className="dropdown-item" href>This week</a>
                                    <a className="dropdown-item" href>This month</a>
                                    <a className="dropdown-item" href>This week</a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item">Today</a>
                                </div>
                                </li>
                            </ul>
                            </div>
                            <table className="table">
                            <thead>
                                <tr>
                                <th /* style="width:60px;" */ className="text-center">Graph</th>
                                <th>Item</th>
                                <th /* style="width:70px;" */></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td>
                                    <div ui-jp="sparkline" ui-refresh="app.setting.color"
                                    ui-options="[ 16,15,15,14,17,18,16,15,16 ], {type:'bar', height:19, barWidth:4, barSpacing:2, barColor:'#0cc2aa'}"
                                    className="sparkline inline">loading...</div>
                                </td>
                                <td>App downloads</td>
                                <td className="text-success">
                                    <i className="fa fa-level-up"></i> 40%
                                </td>
                                </tr>
                                <tr>
                                <td className="text-center">
                                    <div ui-jp="sparkline" ui-refresh="app.setting.color"
                                    ui-options="[ 60,30,10 ], {type:'pie', height:19, sliceColors:['#fcc100','#fff','#0cc2aa']}"
                                    className="sparkline inline">loading...</div>
                                </td>
                                <td>Social connection</td>
                                <td className="text-success">
                                    <i className="fa fa-level-up"></i> 20%
                                </td>
                                </tr>
                                <tr>
                                <td>
                                    <div ui-jp="sparkline" ui-refresh="app.setting.color"
                                    ui-options="[ 16,15,15,14,17,18,16,15,16 ], {type:'line', height:19, width:60, lineColor:'#0cc2aa', fillColor:'transparent'}"
                                    className="sparkline inline">loading...</div>
                                </td>
                                <td>Revenue</td>
                                <td className="text-warning">
                                    <i className="fa fa-level-down"></i> 5%
                                </td>
                                </tr>
                                <tr>
                                <td>
                                    <div ui-jp="sparkline" ui-refresh="app.setting.color"
                                    ui-options="[ 16,15,15,14,17,18,16,15,16 ], {type:'discrete', height:19, width:60, lineColor:'#6cc788'}"
                                    className="sparkline inline">loading...</div>
                                </td>
                                <td>Customer increase</td>
                                <td className="text-danger">
                                    <i className="fa fa-level-down"></i> 20%
                                </td>
                                </tr>
                                <tr>
                                <td>
                                    <div ui-jp="sparkline" ui-refresh="app.setting.color"
                                    ui-options="[ 16,15,15,14,17,18,16,15,16 ], {type:'line', height:19, width:60, lineColor:'#fcc100', fillColor:'#fcc100'}"
                                    className="sparkline inline">loading...</div>
                                </td>
                                <td>Order placed</td>
                                <td className="text-warning">
                                    <i className="fa fa-level-down"></i> 5%
                                </td>
                                </tr>
                                <tr>
                                <td>
                                    <div ui-jp="sparkline" ui-refresh="app.setting.color"
                                    ui-options="[ 16,15,15,16,15,16,14,17,18 ], {type:'line', height:19, width:60, lineColor:'#fcc100', fillColor:'transparent'}"
                                    className="sparkline inline">loading...</div>
                                </td>
                                <td>Visitors</td>
                                <td className="text-warning">
                                    <i className="fa fa-level-down"></i> 8%
                                </td>
                                </tr>
                            </tbody>
                            </table>
                        </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6 col-md-4">
                        <div className="box">
                            <div className="box-header">
                            <h3>Members</h3>
                            </div>
                            <ul className="list no-border p-b">
                            <li className="list-item">
                                <a herf className="list-left">
                                <span className="w-40 avatar">
                                    <img src="/images/a4.jpg" alt="..."/>
                                    <i className="on b-white bottom"></i>
                                </span>
                                </a>
                                <div className="list-body">
                                <div><a href>Chris Fox</a></div>
                                <small className="text-muted text-ellipsis">Designer, Blogger</small>
                                </div>
                            </li>
                            <li className="list-item">
                                <a herf className="list-left">
                                <span className="w-40 avatar">
                                    <img src="/images/a5.jpg" alt="..."/>
                                    <i className="on b-white bottom"></i>
                                </span>
                                </a>
                                <div className="list-body">
                                <div><a href>Mogen Polish</a></div>
                                <small className="text-muted text-ellipsis">Writter, Mag Editor</small>
                                </div>
                            </li>
                            <li className="list-item">
                                <a herf className="list-left">
                                <span className="w-40 avatar">
                                    <img src="/images/a6.jpg" alt="..."/>
                                    <i className="away b-white bottom"></i>
                                </span>
                                </a>
                                <div className="list-body">
                                <div><a href>Joge Lucky</a></div>
                                <small className="text-muted text-ellipsis">Art director, Movie Cut</small>
                                </div>
                            </li>
                            <li className="list-item">
                                <a herf className="list-left">
                                <span className="w-40 avatar">
                                    <img src="/images/a7.jpg" alt="..."/>
                                    <i className="busy b-white bottom"></i>
                                </span>
                                </a>
                                <div className="list-body">
                                <div><a href>Folisise Chosielie</a></div>
                                <small className="text-muted text-ellipsis">Musician, Player</small>
                                </div>
                            </li>
                            <li className="list-item">
                                <a herf className="list-left">
                                <span className="w-40 avatar success">
                                    <span>P</span>
                                    <i className="away b-white bottom"></i>
                                </span>
                                </a>
                                <div className="list-body">
                                <div><a href>Peter</a></div>
                                <small className="text-muted text-ellipsis">Musician, Player</small>
                                </div>
                            </li>
                            </ul>
                        </div>
                        </div>
                        <div className="col-sm-6 col-md-4">
                        <div className="box">
                            <div className="box-header">
                            <h3>Tasks</h3>
                            <small>20 finished, 5 remaining</small>
                            </div>
                            <div className="box-tool">
                            <ul className="nav">
                                <li className="nav-item inline dropdown">
                                <a className="nav-link text-muted p-x-xs" data-toggle="dropdown">
                                    <i className="fa fa-ellipsis-v"></i>
                                </a>
                                <div className="dropdown-menu dropdown-menu-scale pull-right">
                                    <a className="dropdown-item" href>New task</a>
                                    <a className="dropdown-item" href>Make all finished</a>
                                    <a className="dropdown-item" href>Make all unfinished</a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item">Settings</a>
                                </div>
                                </li>
                            </ul>
                            </div>
                            <div className="box-body">
                            <div className="streamline b-l m-l">
                                <div className="sl-item b-success">
                                <div className="sl-icon">
                                    <i className="fa fa-check"></i>
                                </div>
                                <div className="sl-content">
                                    <div className="sl-date text-muted">8:30</div>
                                    <div>Call to customer <a href className="text-info">Jacob</a> and discuss the detail about the AP
                                    project.</div>
                                </div>
                                </div>
                                <div className="sl-item b-info">
                                <div className="sl-content">
                                    <div className="sl-date text-muted">Sat, 5 Mar</div>
                                    <div>Prepare for presentation</div>
                                </div>
                                </div>
                                <div className="sl-item b-warning">
                                <div className="sl-content">
                                    <div className="sl-date text-muted">Sun, 11 Feb</div>
                                    <div><a href className="text-info">Jessi</a> assign you a task <a href className="text-info">Mockup
                                        Design</a>.</div>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="box-footer">
                            <a href className="btn btn-sm warn text-u-c pull-right">Add one</a>
                            <a href className="btn btn-sm white text-u-c">More</a>
                            </div>
                        </div>
                        </div>
                        <div className="col-sm-12 col-md-4">
                        <div className="box">
                            <div className="box-header">
                            <span className="label success pull-right">5</span>
                            <h3>Activity</h3>
                            <small>10 members update their activies.</small>
                            </div>
                            <div className="box-body">
                            <div className="streamline b-l m-b m-l">
                                <div className="sl-item">
                                <div className="sl-left">
                                    <img src="/images/a2.jpg" className="img-circle"/>
                                </div>
                                <div className="sl-content">
                                    <a href className="text-info">Louis Elliott</a><span className="m-l-sm sl-date">5 min ago</span>
                                    <div>assign you a task <a href className="text-info">Mockup Design</a>.</div>
                                </div>
                                </div>
                                <div className="sl-item">
                                <div className="sl-left">
                                    <img src="/images/a5.jpg" className="img-circle"/>
                                </div>
                                <div className="sl-content">
                                    <a href className="text-info">Terry Moore</a><span className="m-l-sm sl-date">10 min ago</span>
                                    <div>Follow up to close deal</div>
                                </div>
                                </div>
                                <div className="sl-item">
                                <div className="sl-left">
                                    <img src="/images/a8.jpg" className="img-circle"/>
                                </div>
                                <div className="sl-content">
                                    <a href className="text-info">Walter Paler</a><span className="m-l-sm sl-date">1 hour ago</span>
                                    <div>was added to Repo</div>
                                </div>
                                </div>
                            </div>
                            <a href className="btn btn-sm white text-u-c m-y-xs">Load More</a>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>

                {/* <!-- ############ PAGE END--> */}

            </div>
        )
    }
}

export default Content1