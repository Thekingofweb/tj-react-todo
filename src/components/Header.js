import React from "react";
import Logo from "../logo.svg";

const Header = () => {
    return (
        <div>
            <div className="logo-container mb-6">
                <img className="h-6" src={Logo} width={64} alt="Todo" />
            </div>
            <div className="title self-start text-5xl p-4 mb-6">待办</div>
        </div>
    );
};

export default Header;
