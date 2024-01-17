import React, { useState, useEffect } from 'react'
import DataTable from 'react-data-table-component'
import CustomInput from '../../components/common/CustomInput/CustomInput'
import { useDispatch, useSelector } from 'react-redux'
import { listUserAsync } from '../../redux/features/listUserSlice'

function ListUser() {
   const dispatch = useDispatch();
   const userList = useSelector((state) => state.listUser)
   const [userRecords, setUserRecords] = useState(userList)
   console.log(userList);
   const columns = [
      {
         name: 'User Name',
         selector: row => row.name,
         sortable: true
      },
      {
         name: 'Mobile No',
         selector: row => row.mobile
      },
      {
         name: 'User Type',
         selector: row => row.role_name,
         sortable: true
      },
      // {
      //    name: 'Supervisor Name',
      //    selector: row => row.supervisor,
      //    sortable: true
      // },
      {
         name: 'Action',
         selector: row => row.action,
      }
   ]

   const data = userList?.user?.map?.((item) => {
      return {
         ...item, action:
            <>
               <button className="btn btn-primary mx-2">Edit</button>
               <button className="btn btn-danger mx-2"> Delete</button>
            </>
      }
   })

   const customStyles = {
      table: {
         style: {
            border: '1px solid #0bc4f0', // Set border color
         },
      },
      rows: {
         style: {
            minHeight: '72px', // override the row height
         }
      },
      headCells: {
         style: {
            paddingLeft: '8px', // override the cell padding for head cells
            paddingRight: '8px',
            backgroundColor: '#0bc4f0',
         },
      },
      cells: {
         style: {
            paddingLeft: '8px', // override the cell padding for data cells
            paddingRight: '8px',
            fontSize: '14px', // Set font size for regular cells
            border: '1px solid #0bc4f0',
         },
      },
   };

   useEffect(() => {
      dispatch(listUserAsync())
   }, []);

   const [records, setRecords] = useState(data)

   const handleFilter = (e) => {
      const searchText = e.target.value.toLowerCase();
      const newData = data.filter(row => {
         return row.userName.toLowerCase().includes(searchText) ||
            row.supervisor.toLowerCase().includes(searchText) ||
            row.userType.toLowerCase().includes(searchText);
      });
      setRecords(newData);
   };

   return (
      <div className='container mt-5'>
         <h1 className="mb-4 text-center">User's List</h1>
         <div className=" d-flex justify-content-between">
            <h3>User's List</h3>
            <CustomInput inputType="text" placeholder="Search..." id="search" onChange={(e) => handleFilter(e)} />
         </div>
         <DataTable
            columns={columns}
            data={data}
            sortable
            fixedHeader
            pagination
            responsive
            striped={true}
            borderColor="#000000"
            customStyles={customStyles}>
         </DataTable>
      </div>
   )
}

export default ListUser