import React from "react";

const NavbarItems = ({ id, onClick, activeLink }) => {
    return (
        <div id={id} onClick={onClick} className={activeLink && "active"}>
            {id}
        </div>
    );
};

export default NavbarItems;
