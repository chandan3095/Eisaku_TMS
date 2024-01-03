import React, { useState } from 'react'
import CustomInput from '../../../components/common/CustomInput/CustomInput'
import CustomFileUpload from '../../../components/common/CustomFileUpload/CustomFileUpload'
import CustomMonthYear from '../../../components/common/CustomMonthYear/CustomMonthYear'
import CustomRadio from '../../../components/common/CustomRadio/CustomRadio'
import CustomDropdown from '../../../components/common/CustomDropdown/CustomDropdown'
import MultipleFileUpload from '../../../components/common/MultipleFileUpload/MultipleFileUpload'
import MultiSelectDropdown from '../../../components/common/MultiSelectDropdown/MultiSelectDropdown'

const VendorMasterAdd = () => {
   const [addContact, setAddContact] = useState(['']);
   const [addEmail, setAddEmail] = useState(['']);

   const handleAddContact = () => {
      setAddContact([...addContact, ''])
   }
   const handleAddEmail = () => {
      setAddEmail([...addEmail, ''])
   }

   const handleRemoveContact = (index) => {
      const updatedContacts = [...addContact];
      updatedContacts.splice(index, 1);
      setAddContact(updatedContacts);
   };

   const handleRemoveEmail=(index)=>{
      const updatedEmail= [...addEmail]
      updatedEmail.splice(index,1)
      setAddEmail(updatedEmail)
   }
   return (
      <div>
         <form className="p-5 shadow-lg">
            <h1 className="mb-4 text-center">Vendor Master</h1>
            <div className="row">
               <div className="col-lg-12">
                  <div className="card card-primary">
                     <div className="card-header">
                        <h3 className="card-title">Add Vendor Master</h3>
                     </div>
                     <div className="card-body">
                        <div className="row">
                           <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                              <CustomInput
                                 label="Vendor Name"
                                 id="#vendorName"
                                 name="vendorName"
                                 placeholder="Enter Vendor Name"
                              />
                           </div>

                           <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                              <CustomInput
                                 label="Location"
                                 id="#location"
                                 name="location"
                                 placeholder="Enter Location"
                              />
                           </div>

                           <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                              {addContact.map((contact, index) => {
                                 return (
                                    <div key={index}>
                                       <CustomInput
                                          label="Mobile No"
                                          inputType="number"
                                          id="#vendorMobile"
                                          name="vendorMobile"
                                          placeholder="Enter Contact Person Mobile No."
                                          value={contact}
                                       />

                                       {
                                          index > 0 && (
                                             <button
                                                type="button"
                                                className="btn btn-danger float-right ml-3 mb-3"
                                                onClick={handleRemoveContact}
                                             >
                                                <i className="fas fa-trash"></i> Delete item
                                             </button>
                                          )
                                       }
                                    </div>
                                 )
                              })}
                              <button
                                 type="button"
                                 className="btn btn-primary float-right"
                                 onClick={handleAddContact}
                              >
                                 <i className="fas fa-plus"></i> Add item
                              </button>

                           </div>
                           <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                              {addEmail.map((email, index) => {
                                 return (
                                    <div key={index}>
                                       <CustomInput
                                          label="Email Id"
                                          inputType="text"
                                          id="#vendorEmail"
                                          name="vendorEmail"
                                          placeholder="Enter Contact Person Email"
                                          value={email}
                                       />

                                       {
                                          index > 0 && (
                                             <button
                                                type="button"
                                                className="btn btn-danger float-right ml-3 mb-3"
                                                onClick={handleRemoveEmail}
                                             >
                                                <i className="fas fa-trash"></i> Delete item
                                             </button>
                                          )
                                       }
                                    </div>
                                 )
                              })}
                              <button
                                 type="button"
                                 className="btn btn-primary float-right"
                                 onClick={handleAddEmail}
                              >
                                 <i className="fas fa-plus"></i> Add item
                              </button>
                           </div>

                           <div className="col-12 col-sm-12 col-md-12 col-lg-12 mb-3">
                              <label htmlFor="address">Address</label>
                              <textarea
                                 name="address"
                                 id="address"
                                 cols="30"
                                 rows="2"
                                 className='form-control'
                                 placeholder='Enter Address'></textarea>
                           </div>

                           <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                              <CustomFileUpload
                                 label="GST Details"
                                 id="gst"
                                 name="gst"
                              />
                           </div>

                           <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                              <CustomFileUpload
                                 label="Bank Details"
                                 id="bankDetails"
                                 name="bankDetails"
                              />
                           </div>

                           <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                              {/* <CustomFileUpload
                                 label="Agreement Details"
                                 id="agreementDetails"
                                 name="agreementDetails"
                              /> */}
                              <MultipleFileUpload label="Agreement Details" />
                           </div>

                           <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                              <label htmlFor="laneName">Lane Name</label>
                              <MultiSelectDropdown options={[
                                 { value: '1', label: 'Management1' },
                                 { value: '2', label: 'Management2' },
                                 { value: '3', label: 'Management3' },
                                 { value: '4', label: 'Management4' },
                              ]} />
                           </div>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="col-12 mt-3 text-center">
                  <button className="btn btn-primary px-4 py-3" type="submit">
                     <h5 className="mb-0 text-uppercase">Submit</h5>
                  </button>
                  <button className="btn btn-danger ml-3 px-4 py-3" type="submit">
                     <h5 className="mb-0 text-uppercase">reset</h5>
                  </button>
               </div>
            </div>
         </form>
      </div>
   )
}

export default VendorMasterAdd;
