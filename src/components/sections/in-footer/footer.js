import React from "react";

class Footer extends React.Component {
    render() {
        return (
            <div className="app-footer">
                <div className="p-2 text-xs">
                <div className="pull-right text-muted py-1">
                    &copy; Copyright <strong>Flatkit</strong> <span className="hidden-xs-down">- Built with Love v1.1.3</span>
                    <a ui-scroll-to="content">
                        <i className="fa fa-long-arrow-up p-x-sm"></i>
                    </a>
                </div>
                <div className="nav">
                    <a className="nav-link" href="../">About</a>
                    <a className="nav-link" href="http://themeforest.net/user/flatfull/portfolio?ref=flatfull">Get it</a>
                </div>
                </div>
            </div>
        );
    }
}

export default Footer;