import React from "react";

const NavbarItems = ({ id, onClick, active }) => {
    return (
        <div id={id} onClick={onClick} data-active={active}>
            {id}
        </div>
    );
};

export default NavbarItems;
