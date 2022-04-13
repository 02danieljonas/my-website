import React from "react";

const NavbarItems = ({ onClick, active, children }) => (
    <div onClick={onClick} data-active={active}>
        {children}
    </div>
);

export default NavbarItems;
