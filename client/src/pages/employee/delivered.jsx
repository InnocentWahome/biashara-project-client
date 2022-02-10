import React, { useState, useEffect } from "react"
import { DataGrid } from "@mui/x-data-grid"
import EmployeeLayout from "../../layouts/EmployeeLayout"
import $http from "../../plugins/axios"
import DeliveredProductsReport from "../../components/forms/DeliveredProductsReport"

const DashboardFeedback = () => {
  const columns = [
    { field: "id", headerName: "ID" },
    { field: "name", headerName: "Name", width: 200 },
    { field: "description", headerName: "Description", width: 200 },
    { field: "quantity", headerName: "Stock Available", width: 200 },
    { field: "price", headerName: "Price", width: 200 },
    { field: "image", headerName: "Image URL", width: 200 },
  ]
  const [tableData, setTableData] = useState([])
  const [pageSize, setPageSize] = React.useState(25)

  const fetchUsers = async e => {
    try {
      const response = await $http.Api({
        method: "GET",
        url: "/product",
      })
      if (response.data?.data) {
        console.log(tableData)
        setTableData(response.data.data)
      }
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  return (
    <EmployeeLayout>
      <div className="container pt-6">
        <div class="columns">
          <div class="column is-two-thirds">
            <p class="is-size-4 has-text-centered pb-3 title">Performance of Delivered Products</p>
            <div style={{ height: 700, width: "200" }}>
              <DataGrid
                rows={tableData}
                pageSize={pageSize}
                onPageSizeChange={newPage => setPageSize(newPage)}
                pagination
                columns={columns}
                // checkboxSelection
              />
            </div>
          </div>
          <div class="column pt-6 mt-6">
            <DeliveredProductsReport />
          </div>
        </div>
      </div>
    </EmployeeLayout>
  )
}

export default DashboardFeedback
