import * as React from "react"

import AdminLayout from "../../layouts/AdminLayout"

const AdminHome = () => {
  return (
    <AdminLayout>
      <div class="container">
        <h1 class="has-text-centered pt-4 pb-4 title is-size-4">
          Admin Home Page
        </h1>
        <br />
        <table class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
          <thead class="border border-success">
            <th class="pl-6 pr-6 ">Role</th>
            <th class="pb-3">Guide</th>
          </thead>
          <tbody class="border border-primary">
            <td class="has-text-centered "> Access and Modify User's Data </td>
            <td class="has-text-centered is-vcentered  pb-5">
              Go to the <a href="/admin/users/">System User's</a> page to view
              all users, both users and employees
            </td>
          </tbody>
          <tbody class="border border-primary">
            <td class="has-text-centered "> View/Edit/Review Orders </td>
            <td class="has-text-centered is-vcentered  pb-5">
              You can review, edit and approve orders on the
              <a href="/admin/orders/">Review Orders</a> page
            </td>
          </tbody>
          <tbody class="border border-primary">
            <td class="has-text-centered "> Authorize delivery requests </td>
            <td class="has-text-centered is-vcentered  pb-5">
              Authorize delivery requests on the <a href="/admin/orders/">Delivery Requests</a>
              page
            </td>
          </tbody>
          <tbody class="border border-primary">
            <td class="has-text-centered "> Manage Inventory </td>
            <td class="has-text-centered is-vcentered  pb-5">
              Create and Update the company's inventory
              <a href="/admin/inventory/">Manage Inventory</a>
              page
            </td>
          </tbody>
          <tbody class="border border-primary">
            <td class="has-text-centered ">Product Performance </td>
            <td class="has-text-centered is-vcentered  pb-5">
              Review products' feedback on the
              <a href="/admin/product-performance/">Product Performance</a>
              page
            </td>
          </tbody>
          <tbody class="border border-primary">
            <td class="has-text-centered ">Check Employee Performance </td>
            <td class="has-text-centered is-vcentered  pb-5">
              Review and approve every employees' performance on the
              <a href="/admin/employee-performance/">Employee Performance</a>
              page
            </td>
          </tbody>
          <tbody class="border border-primary">
            <td class="has-text-centered ">
              Maintenance and Service Requests
            </td>
            <td class="has-text-centered is-vcentered  pb-5">
              You can schedule maintenance and service requests on thee{" "}
              <a href="/admin/maintenance/">Maintenance</a>
              page. You can also alert customers and employees on the same
            </td>
          </tbody>
        </table>
      </div>
    </AdminLayout>
  )
}
export default AdminHome
