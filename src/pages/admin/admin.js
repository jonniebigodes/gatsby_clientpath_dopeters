import React from "react"
import { Router } from "@reach/router"
import AdminPage from "../../components/admin/admin"
import AdminUser from "../../components/admin/user"
import AdminUsers from "../../components/admin/users"

const AdminIndex = () => {
  console.log(`router was hit`);
  
  return (
    <Router basepath="/">
      <AdminPage path="admin" />
      <AdminUser path="admin/user/:userId" />
      <AdminUsers path="admin/users" />
    </Router>
  )
}

export default AdminIndex
