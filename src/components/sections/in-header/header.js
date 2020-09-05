import React from 'react';

class Header extends React.Component {
    render(props) {
        return (
            <div className="app-header white box-shadow">
                <div className="navbar navbar-toggleable-sm flex-row align-items-center">
                {/* <!-- Open side - Naviation on mobile --> */}
                <a data-toggle="modal" data-target="#aside" className="hidden-lg-up mr-3">
                    <i className="material-icons">&#xe5d2;</i>
                </a>
                {/* <!-- / --> */}

                {/* <!-- Page title - Bind to $state's title --> */}
                <div className="mb-0 h5 no-wrap" ng-bind="$state.current.data.title" id="pageTitle"></div>

                {/* <!-- navbar collapse --> */}
                <div className="collapse navbar-collapse" id="collapse">
                    {/* <!-- link and dropdown --> */}
                    <ul className="nav navbar-nav mr-auto">
                    <li className="nav-item dropdown">
                        <a className="nav-link" href="" data-toggle="dropdown">
                        <i className="fa fa-fw fa-plus text-muted"></i>
                        <span>New</span>
                        </a>
                        <div ui-include="'../views/blocks/dropdown.new.html'"></div>
                    </li>
                    </ul>

                    <div ui-include="'../views/blocks/navbar.form.html'"></div>
                    {/* <!-- / --> */}
                </div>
                {/* <!-- / navbar collapse --> */}

                {/* <!-- navbar right --> */}
                <ul className="nav navbar-nav ml-auto flex-row">
                    <li className="nav-item dropdown pos-stc-xs">
                    <a className="nav-link mr-2" href="" data-toggle="dropdown">
                        <i className="material-icons">&#xe7f5;</i>
                        <span className="label label-sm up warn">3</span>
                    </a>
                    <div ui-include="'../views/blocks/dropdown.notification.html'"></div>
                    </li>
                    <li className="nav-item dropdown">
                    <a className="nav-link p-0 clear" href="#" data-toggle="dropdown">
                        <span className="avatar w-32">
                        <img src="/images/a0.jpg" alt="..."/>
                        <i className="on b-white bottom"></i>
                        </span>
                    </a>
                    <div ui-include="'../views/blocks/dropdown.user.html'"></div>
                    </li>
                    <li className="nav-item hidden-md-up">
                    <a className="nav-link pl-2" data-toggle="collapse" data-target="#collapse">
                        <i className="material-icons">&#xe5d4;</i>
                    </a>
                    </li>
                </ul>
                {/* <!-- / navbar right --> */}
                </div>
            </div>
        );
    }
}

export default Header;