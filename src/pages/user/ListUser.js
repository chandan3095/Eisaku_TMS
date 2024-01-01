import React, { useState } from 'react'
import DataTable from 'react-data-table-component'
import CustomInput from '../../components/common/CustomInput/CustomInput'

function ListUser() {
   const columns = [
      {
         name: 'User Name',
         selector: row => row.userName,
         sortable: true
      },
      {
         name: 'Mobile No',
         selector: row => row.mobileNo
      },
      {
         name: 'User Type',
         selector: row => row.userType,
         sortable: true
      },
      {
         name: 'Supervisor Name',
         selector: row => row.supervisor,
         sortable: true
      }
   ]

   const data = [
      {
         id: 1,
         userName: 'aaa',
         mobileNo: '9874563214',
         userType: 'manager',
         supervisor: 'aab'
      },
      {
         id: 1,
         userName: 'aaa',
         mobileNo: '9874563214',
         userType: 'manager',
         supervisor: 'aba'
      },
      {
         id: 2,
         userName: 'bbb',
         mobileNo: '9874563214',
         userType: 'admin',
         supervisor: 'abb'
      },
      {
         id: 3,
         userName: 'ccc',
         mobileNo: '9874563214',
         userType: 'user',
         supervisor: 'acb'
      },
      {
         id: 4,
         userName: 'ddd',
         mobileNo: '9874563214',
         userType: 'management',
         supervisor: 'dab'
      },
      {
         id: 5,
         userName: 'eee',
         mobileNo: '9874563214',
         userType: 'manager',
         supervisor: 'bcb'
      },
   ]
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
      <div className='container'>
         <div className="text-end">
            <CustomInput inputType="text" placeholder="Search..." id="search" onChange={(e) => handleFilter(e)} />
         </div>
         <DataTable
            columns={columns}
            data={records}
            sortable
            fixedHeader
            pagination>
         </DataTable>
      </div>
   )
}

export default ListUser