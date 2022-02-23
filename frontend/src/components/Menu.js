import React from "react";

function Menu () {
    return (
        <div>
        <ul>Test menu (no styles)
            <li> <a href="/">Main</a></li>
            <li> <a href='http://127.0.0.1:8000/api/users/'>Users API</a></li>
            <li> <a href='http://127.0.0.1:8000/admin/'>Admin</a></li>
        </ul>
        </div>
        )
}
export default Menu;