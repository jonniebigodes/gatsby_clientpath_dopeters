import React from "react"
import { Link } from "gatsby"
export default () => (
  <div>
    Entry page
    <ul>
      <li>
        <Link to="/admin">Admin Page</Link>
      </li>
      <li>
        <Link to="/admin/user/123">Admin page with params</Link>
      </li>
      <li>
        <Link to="/admin/users">Users Page</Link>
      </li>
      <li>
        <Link to="/another-client/">Another example client side</Link>
      </li>
      <li>
        <Link to="/another-client/another-page/222222">
          Another example client side with params
        </Link>
      </li>
      <li>
        <Link to="/another-client/another-page/another-random-page">Another random example client side </Link>
      </li>
    </ul>
  </div>
)
