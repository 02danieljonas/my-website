import React from "react";

const NavbarItems = ({ onClick, active, children }) => {
    return (
        <div onClick={onClick} data-active={active}>
            {children}
        </div>
    );
};

export default NavbarItems;
