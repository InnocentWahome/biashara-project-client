import React, { useState, useEffect } from "react"
import { DataGrid } from "@mui/x-data-grid"
import EmployeeLayout from "../../layouts/EmployeeLayout"
import $http from "../../plugins/axios"
import ProductForm from "../../components/forms/ProductForm"

const EmployeeStock = () => {
  const columns = [
    { field: "id", headerName: "ID" },
    { field: "name", headerName: "Product Name", width: 200 },
    { field: "description", headerName: "Product Description", width: 200 },
    { field: "price", headerName: "Product Price(KSH)", width: 200 },
    { field: "quantity", headerName: "Product Quantity", width: 200 },
    { field: "image", headerName: "Product Url", width: 200 },
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
      <div className="pl-6 pr-6 pt-6">
        <div className="columns">
          <div className="column is-two-thirds">
            <p className="is-size-4 has-text-centered pb-3">
              All Products Are Listed Here
            </p>
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
          <div className="column pt-6 mt-6">
            <ProductForm />
          </div>
        </div>
      </div>
    </EmployeeLayout>
  )
}

export default EmployeeStock
