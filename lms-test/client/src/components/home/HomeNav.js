import React from "react";
import { Link } from "react-router-dom";

function HomeNav() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/signup">signup</Link>
          </li>
          <li>
            <Link to="/login">login</Link>
          </li>
          <li>
            <Link to="/apply-leave">apply leave</Link>
          </li>
          <li>
            <Link to="/users">manage users</Link>
          </li>
          <li>
            <Link to="/policies">policies</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default HomeNav;
