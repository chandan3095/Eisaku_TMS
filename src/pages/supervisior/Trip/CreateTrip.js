import React, { useState } from 'react'
import BodyHeader from '../../../components/common/CommonBodyHeader'
import CustomInput from '../../../components/common/CustomInput/CustomInput'
import CustomDatePicker from '../../../components/common/CustomDatePicker/CustomDatePicker'
import CustomTextArea from '../../../components/common/CustomTextArea/CustomTextArea'
import CustomDropdown from '../../../components/common/CustomDropdown/CustomDropdown'
import selectOptionData from '../../../constansts/LocalData'
import CustomFileUpload from '../../../components/common/CustomFileUpload/CustomFileUpload'

const CreateTrip = () => {
   const [formData, setFormData] = useState({
      vehicleNo: '',
      driverName: '',
      driverNo: '',
      customerName: '',

      laneName: '',
      origin: '',
      destination: '',
      EWayBillNo: '',
      EWayExpiry: '',
      invoiceNo: '',
      invoiceDate: '',
      invoiceValue: '',
      customer_eisakuLRNo: '',
      vehicleReportedDate: '',
      vehicleDispatchDate: '',
      actualDiselProvided: '',
      actualAdblueProvided: '',
      actualDriverTripAdvance: '',
      actualMiscExpence: '',
      actualMiscExpenceRemarks: '',
      destinationReportedTime: '',
      destinationUnloadingTime: '',
      pod: '',
      podRemarks: '',
   });

  return (
     <div>
        <BodyHeader title="Add Trip Request" />
        <form className="p-5 shadow-lg">
           <div className="card card-primary">
              <div className="card-header">
                 <h3 className="card-title">General Details</h3>
              </div>
              <div className="card-body">
                 <div className="row">
                    <div className="col-lg-4">
                       <label className="text-bold">Customer name</label>
                       <CustomDropdown
                          optionData={selectOptionData}
                          value={formData.customerName}
                       // onChange={(event) =>
                       //   setVehicleCategory(event.target.value)
                       // }
                       />
                    </div>
                    <div className="col-lg-4">
                       <label className="text-bold">Vehicle No.</label>
                       <CustomDropdown
                          optionData={selectOptionData}
                          value={formData.vehicleNo}
                       // onChange={(event) =>
                       //   setVehicleCategory(event.target.value)
                       // }
                       />
                    </div>

                    <div className="col-lg-4">
                       <label className="text-bold">Driver name</label>
                       <CustomDropdown
                          optionData={selectOptionData}
                          value={formData.driverName}
                       // onChange={(event) =>
                       //   setVehicleCategory(event.target.value)
                       // }
                       />
                    </div>

                    {/* Driver number */}
                    <div className="col-lg-4">
                       <label className="text-bold">Driver No.</label>
                       <CustomDropdown
                          optionData={selectOptionData}
                          value={formData.driverNo}
                       // onChange={(event) =>
                       //   setVehicleCategory(event.target.value)
                       // }
                       />
                    </div>

                    
                 </div>
              </div>
           </div>

           <div className="card card-primary">
              <div className="card-header">
                 <h3 className="card-title">Lane Type</h3>
              </div>
              <div className="card-body">
                 <div className="row">
                    {/* lane name */}
                    <div className="col-lg-4">
                       <label className="text-bold">Lane Name</label>
                       <CustomDropdown
                          optionData={selectOptionData}
                          value={formData.laneName}
                       // onChange={(event) =>
                       //   setVehicleCategory(event.target.value)
                       // }
                       />
                    </div>

                    <div className="col-lg-4">
                       <label className="text-bold">Origin</label>
                       <CustomDropdown
                          optionData={selectOptionData}
                          value={formData.origin}
                       // onChange={(event) =>
                       //   setVehicleCategory(event.target.value)
                       // }
                       />
                    </div>

                    <div className="col-lg-4">
                       <label className="text-bold">Destination</label>
                       <CustomDropdown
                          optionData={selectOptionData}
                          value={formData.destination}
                       // onChange={(event) =>
                       //   setVehicleCategory(event.target.value)
                       // }
                       />
                    </div>

                    <div className="col-lg-4">
                       <CustomInput
                          label="E waybill No."
                          id="EWayBillNo"
                          placeholder="E waybill No."
                          value={formData.EWayBillNo}
                          onChange={()=>{}}
                          name="EWayBillNo"
                       />
                    </div>

                    <div className="col-lg-4">
                       <CustomDatePicker
                          label="E Waybill Expiry Date & Time"
                          name="EWayExpiry"
                          id="EWayExpiry"
                          value={formData.EWayExpiry}
                          onChange={()=>{}} />
                    </div>

                    <div className="col-lg-4">
                       <CustomInput
                          label="Invoice No."
                          id="invoiceNo"
                          placeholder="Invoice No."
                          value={formData.invoiceNo}
                          onChange={()=>{}}
                          name="invoiceNo"
                       />
                    </div>

                    <div className="col-lg-4">
                       <CustomDatePicker
                          label="Invoice Date"
                          name="invoiceDate"
                          id="invoiceDate"
                          value={formData.invoiceDate}
                          onChange={()=>{}} />
                    </div>

                    <div className="col-lg-4">
                       <CustomInput
                          label="Invoice value"
                          id="invoiceValue"
                          placeholder="Invoice value"
                          value={formData.invoiceValue}
                          onChange={()=>{}}
                          name="invoiceValue"
                       />
                    </div>

                    <div className="col-lg-4">
                       <CustomInput
                          label="Customer / Eisaku LR no."
                          id="customer_eisakuLRNo"
                          placeholder="Customer / Eisaku LR no."
                          value={formData.customer_eisakuLRNo}
                          onChange={()=>{}}
                          name="customer_eisakuLRNo"
                       />
                    </div>

                    <div className="col-lg-4">
                       <CustomDatePicker
                          label="Vehicle reported date time"
                          name="vehicleReportedDate"
                          id="vehicleReportedDate"
                          value={formData.vehicleReportedDate}
                          onChange={()=>{}} />
                    </div>

                    <div className="col-lg-4">
                       <CustomDatePicker
                          label="Vehicle disptch date time"
                          name="vehicleDispatchDate"
                          id="vehicleDispatchDate"
                          value={formData.vehicleDispatchDate}
                          onChange={()=>{}} />
                    </div>

                    <div className="col-lg-4">
                       <CustomInput
                          label="Actual Diesel provided"
                          id="actualDiselProvided"
                          inputType="number"
                          placeholder="E.g 100 Ltr."
                          value={formData.actualDiselProvided}
                          onChange={()=>{}}
                          name="actualDiselProvided"
                       />
                    </div>

                    <div className="col-lg-4">
                       <CustomInput
                          label="Actual Adblue provided"
                          id="actualAdblueProvided"
                          inputType="number"
                          placeholder="E.g 100 Ltr."
                          value={formData.actualAdblueProvided}
                          onChange={()=>{}}
                          name="actualAdblueProvided"
                       />
                    </div>

                    <div className="col-lg-4">
                       <CustomInput
                          label="Actual driver trip advance"
                          id="actualDriverTripAdvance"
                          placeholder="E.g 100Rs"
                          inputType="number"
                          value={formData.actualDriverTripAdvance}
                          onChange={()=>{}}
                          name="actualDriverTripAdvance"
                       />
                    </div>

                    <div className="col-lg-4">
                       <CustomInput
                          label="Actual miscellaneous expense "
                          id="actualMiscExpence"
                          placeholder="E.g 100Rs"
                          inputType="number"
                          value={formData.actualMiscExpence}
                          onChange={()=>{}}
                          name="actualMiscExpence"
                       />
                    </div>

                    <div className="col-lg-12">
                       <CustomTextArea
                          label="Miscellaneous Expense Remarks"
                          id="actualMiscExpenceRemarks"
                          name="actualMiscExpenceRemarks"
                          placeholder="Remarks"
                          value={formData.actualMiscExpenceRemarks}
                          onChange={()=>{}} />
                    </div>

                    <div className="col-lg-4">
                       <CustomDatePicker
                          label="Destination Reported date time"
                          name="destinationReportedTime"
                          id="destinationReportedTime"
                          value={formData.destinationReportedTime}
                          onChange={()=>{}} />
                    </div>

                    <div className="col-lg-4">
                       <CustomDatePicker
                          label="Destination Unloading date time"
                          name="destinationUnloadingTime"
                          id="destinationUnloadingTime"
                          value={formData.destinationUnloadingTime}
                          onChange={()=>{}} />
                    </div>

                    <div className="col-lg-4">
                       <label className="text-bold">POD</label>
                       <CustomFileUpload
                          label="DL Document"
                          id="pod"
                          name="pod"
                          onChange={()=>{}} />
                    </div>

                    <div className="col-lg-12">
                       <CustomTextArea
                          label="POD(Remarks)"
                          id="podRemarks"
                          name="podRemarks"
                          placeholder="Remarks"
                          value={formData.podRemarks}
                          onChange={()=>{}} />
                    </div>
                 </div>
              </div>
           </div>

           {/* <div className="card card-primary">
              <div className="card-header">
                 <h3 className="card-title">Identification Documents</h3>
              </div>
              <div className="card-body">
                 <div className="row">
                    <div className="col-lg-6">
                       <CustomInput
                          label="Aadhar Card"
                          id="aadharCard"
                          placeholder="Enter Aadhar Card"
                          value={''}
                          onChange={''}
                          name="aadharCard"
                       />
                    </div>

                    <div className="col-lg-6">
                       <CustomInput
                          label="Pan Card"
                          id="panCard"
                          placeholder="Enter Pan Card"
                          value={''}
                          onChange={''}
                          name="panCard"
                       />
                    </div>

                 </div>
              </div>
           </div> */}

           <div className="col-12 mt-4 text-center">
              <button className="btn btn-success px-4 py-3" type="button" onClick={''}>
                 <h6 className="mb-0 text-uppercase">Approve</h6>
              </button>
              <button className="btn btn-danger ml-3 px-4 py-3" type="submit">
                 <h6 className="mb-0 text-uppercase">Reject</h6>
              </button>
           </div>

        </form>
     </div>
  )
}

export default CreateTrip
