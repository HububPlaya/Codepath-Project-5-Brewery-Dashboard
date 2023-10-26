import React from 'react';

const AppSidebar = () => {
    return (
        <div className="app-sidebar">
            <div className="header">
                <h3 className="header-title">Brewery Library</h3>
            </div>
            <div className="menu">
                <ul>
                    <li className="menu-item">
                        <a className="menu-link" href="/">🔍  Search</a>
                    </li>
                    <li className="menu-item">
                        <a className="menu-link" href="/">🏠  Dashboard</a>
                    </li>
                    <li className="menu-item">
                    <a className="menu-link" href="/">ℹ️ About</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default AppSidebar;