import React from "react";
import CustomInput from "../../../../components/common/CustomInput/CustomInput";
import CustomDropdown from "../../../../components/common/CustomDropdown/CustomDropdown";
import CustomRadio from "../../../../components/common/CustomRadio/CustomRadio";
import CustomMonthYear from "../../../../components/common/CustomMonthYear/CustomMonthYear";
import CustomFileUpload from "../../../../components/common/CustomFileUpload/CustomFileUpload";
import CustomDatePicker from "../../../../components/common/CustomDatePicker/CustomDatePicker";
import { Form, FormikProvider } from "formik";

function VehicleDetails({
   formik,
   makeData,
   handleFileChange,
   selectOptionData,
   fuelType,
   tonnageData,
   setFuelType,
   vehicleCategoryData
}) {
   console.log({ sssssssssss: formik.getFieldProps('vehicleNo') });
   return (
      <FormikProvider value={formik}>
         <Form className="needs-validation" noValidate>
            <div
               className="tab-pane fade show active"
               id="0"
               role="tabpanel"
               aria-labelledby="0"
            >
               <div className="card card-primary">
                  <div className="card-header">
                     <h3 className="card-title">Vehicle Details</h3>
                  </div>

                  <div className="row card-body">
                     {/* Vehicle No Sec */}
                     <div className="col-lg-4">
                        <CustomInput
                           require={require}
                           label="Vehicle No"
                           id="vehicleNo"
                           name="vehicleNo"
                           placeholder="Enter Vehicle No"
                           // onChange={formik.handleChange}
                           // value={formik.values.vehicleNo}
                           {...formik.getFieldProps('vehicleNo')}
                           errors={formik.errors.vehicleNo}
                           message={formik.errors.vehicleNo}
                        />
                     </div>
                     <div className="col-lg-4">
                        {/* Vehicle No Sec */}
                        <CustomInput
                           require={require}
                           label="Chasis No"
                           id="chasisNo"
                           name="chasisNo"
                           placeholder="Enter Chasis No"
                           {...formik.getFieldProps('chasisNo')}

                           // onChange={formik.handleChange}
                           // value={formik.values.chasisNo}
                           errors={formik.errors.chasisNo}
                           message={formik.errors.chasisNo}
                        />
                     </div>
                     <div className="col-lg-4">
                        {/* Vehicle No Sec */}
                        <CustomInput
                           require={require}
                           label="Engine No"
                           id="engineNo"
                           name="engineNo"
                           placeholder="Enter Engine No"
                           onChange={formik.handleChange}
                           // onBlur={formik.handleBlur}
                           value={formik.values.engineNo}
                           errors={formik.errors.engineNo}
                           message={formik.errors.engineNo}
                        />
                     </div>

                     <div className="col-lg-4">
                        <CustomInput
                           require={require}
                           label="Vehicle owner name"
                           id="vehicleOwner"
                           name="vehicleOwner"
                           placeholder="Enter vehicle owner name"
                           onChange={formik.handleChange}
                           value={formik.values.vehicleOwnerName}
                           errors={formik.errors.vehicleOwnerName}
                           message={formik.errors.vehicleOwnerName}
                        />
                     </div>

                     {/* Dimension  */}
                     <div className="col-lg-4">
                        <CustomDropdown
                           label="Dimension(L B H (ft))"
                           optionData={selectOptionData}
                           value={formik.values.dimension}
                           onChange={(value) => {
                              formik.setFieldValue("dimension", value);
                           }}
                           errors={formik.errors.dimension}
                           message={formik.errors.dimension}
                        />
                     </div>

                     {/* Fastag bank name Sec */}
                     <div className="col-lg-4">
                        <CustomInput
                           require={require}
                           label="Fastag bank name"
                           id="fastagBankName"
                           name="fastagBankName"
                           placeholder="Enter Fastag bank name"
                           onChange={formik.handleChange}
                           value={formik.values.fastagBankName}
                           errors={formik.errors.fastagBankName}
                           message={formik.errors.fastagBankName}
                        />
                     </div>
                     {/* Vehicle Category Sec */}
                     <div className="col-lg-4">
                        <CustomDropdown
                           label="Vehicle Category"
                           optionData={vehicleCategoryData}
                           value={formik.values.vehicleCategory}
                           onChange={(value) => {
                              formik.setFieldValue("vehicleCategory", value);
                           }}
                           errors={formik.errors.vehicleCategory}
                           message={formik.errors.vehicleCategory}
                        />
                     </div>
                     {/* Tonnage Sec */}
                     <div className="col-lg-4">
                        <CustomDropdown
                           label="Tonnage(T)"
                           optionData={tonnageData}
                           value={formik.values.tonnage}
                           onChange={(value) => {
                              formik.setFieldValue("tonnage", value);
                           }}
                           errors={formik.errors.tonnage}
                           message={formik.errors.tonnage}
                        />
                     </div>

                     <div className="col-lg-4">
                        <label className="text-bold">
                           Fuel Type
                           <span className="text-danger">*</span>
                        </label>
                        <div className="form-group mt-2">
                           <CustomRadio
                              label="Diesel"
                              id="diesel"
                              value="Diesel"
                              name="fuelType"
                              defaultChecked={fuelType}
                              onChange={(event) => setFuelType(event.target.value)}
                           />

                           <CustomRadio
                              label="CNG"
                              id="cng"
                              value="CNG"
                              name="fuelType"
                              onChange={(event) => setFuelType(event.target.value)}
                           />
                        </div>
                     </div>

                     <div className="col-lg-4">
                        <CustomDropdown
                           label="Make"
                           optionData={makeData}
                           value={formik.values.make}
                           onChange={(value) => {
                              formik.setFieldValue("make", value);
                           }}
                           errors={formik.errors.make}
                           message={formik.errors.make}
                        />
                     </div>
                     <div className="col-lg-4">
                        <CustomMonthYear
                           label="Model (Month Year)"
                           values={formik.values.model}
                           errors={formik.errors.model}
                           message={formik.errors.model}
                        />
                     </div>
                     <div className="col-lg-4">
                        <label className="text-bold">
                           Registration emiCertificate
                           <span className="text-danger">*</span>
                        </label>
                        <CustomFileUpload
                           accept=".pdf, .doc, .docx"
                           onChange={(event) => handleFileChange(event)}
                           errors={formik.errors.insuranceAmount}
                           message={formik.errors.insuranceAmount}
                        />
                     </div>
                     <div className="col-lg-4">
                        <CustomDatePicker
                           require={require}
                           label="Insurance Expiry Date"
                           placeholder="Enter Insurance Expiry Date"
                           values={formik.values.insuranceExpiryDate}
                           errors={formik.errors.insuranceExpiryDate}
                           message={formik.errors.insuranceExpiryDate}
                        />
                     </div>
                     <div className="col-lg-4">
                        <CustomInput
                           require={require}
                           label="Insurance Amount"
                           id="fitnessAmount"
                           name="fitnessAmount"
                           placeholder="Enter Insurance Amount"
                           onChange={formik.handleChange}
                           value={formik.values.insuranceAmount}
                           errors={formik.errors.insuranceAmount}
                           message={formik.errors.insuranceAmount}
                        />
                     </div>
                     <div className="col-lg-4">
                        <label className="text-bold">
                           Insurance Certificate
                           <span className="text-danger">*</span>
                        </label>
                        <CustomFileUpload
                           accept=".pdf, .doc, .docx"
                           onChange={(event) => handleFileChange(event)}
                           errors={formik.errors.insuranceAmount}
                           message={formik.errors.insuranceAmount}
                        />
                     </div>
                     <div className="col-lg-4">
                        <CustomDatePicker
                           require={require}
                           label="Fitness Expiry Date"
                           placeholder="Enter Fitness Expiry Date"
                           values={formik.values.fitnessExpiryDate}
                           errors={formik.errors.fitnessExpiryDate}
                           message={formik.errors.fitnessExpiryDate}
                        />
                     </div>
                     <div className="col-lg-4">
                        <CustomInput
                           require={require}
                           label="Fitness Amount"
                           id="fitnessAmount"
                           name="fitnessAmount"
                           placeholder="Enter Fitness Amount"
                           onChange={formik.handleChange}
                           value={formik.values.fitnessAmount}
                           errors={formik.errors.fitnessAmount}
                           message={formik.errors.fitnessAmount}
                        />
                     </div>
                     <div className="col-lg-4">
                        <label className="text-bold">
                           Fitness Certificate
                           <span className="text-danger">*</span>
                        </label>
                        <CustomFileUpload
                           accept=".pdf, .doc, .docx"
                           onChange={(event) => handleFileChange(event)}
                           errors={formik.errors.insuranceAmount}
                           message={formik.errors.insuranceAmount}
                        />
                     </div>
                     <div className="col-lg-4">
                        <CustomDatePicker
                           require={require}
                           label="Local Permit Expiry Date"
                           placeholder="Enter Local Permit Expiry Date"
                           name="localPermitExpiryDate"
                           values={formik.values.localPermitExpiryDate}
                           errors={formik.errors.localPermitExpiryDate}
                           message={formik.errors.localPermitExpiryDate}
                        />
                     </div>
                     <div className="col-lg-4">
                        <CustomInput
                           require={require}
                           label="Local Permit Amount"
                           id="fitnessAmount"
                           name="fitnessAmount"
                           placeholder="Enter Local Permit Amount"
                           onChange={formik.handleChange}
                           value={formik.values.fitnessAmount}
                           errors={formik.errors.fitnessAmount}
                           message={formik.errors.fitnessAmount}
                        />
                     </div>
                     <div className="col-lg-4">
                        <label className="text-bold">
                           Local Permit Document
                           <span className="text-danger">*</span>
                        </label>
                        <CustomFileUpload
                           accept=".pdf, .doc, .docx"
                           onChange={(event) => handleFileChange(event)}
                           errors={formik.errors.insuranceAmount}
                           message={formik.errors.insuranceAmount}
                        />
                     </div>
                     <div className="col-lg-4">
                        <CustomDatePicker
                           require={require}
                           label="National Permit Expiry Date"
                           placeholder="Enter National Permit Expiry Date"
                           values={formik.values.nationalPermitExpiryDate}
                           errors={formik.errors.nationalPermitExpiryDate}
                           message={formik.errors.nationalPermitExpiryDate}
                        />
                     </div>
                     <div className="col-lg-4">
                        <CustomInput
                           require={require}
                           label="National Permit Amount"
                           id="fitnessAmount"
                           name="fitnessAmount"
                           placeholder="Enter National Permit Amount"
                           onChange={formik.handleChange}
                           value={formik.values.nationalPermitAmount}
                           errors={formik.errors.nationalPermitAmount}
                           message={formik.errors.nationalPermitAmount}
                        />
                     </div>
                     <div className="col-lg-4">
                        <label className="text-bold">
                           National Permit Document
                           <span className="text-danger">*</span>
                        </label>
                        <CustomFileUpload
                           accept=".pdf, .doc, .docx"
                           onChange={(event) => handleFileChange(event)}
                           errors={formik.errors.insuranceAmount}
                           message={formik.errors.insuranceAmount}
                        />
                     </div>
                     <div className="col-lg-4">
                        <CustomDatePicker
                           require={require}
                           label="PUC Expiry Date"
                           placeholder="Enter PUC Expiry Date"
                           values={formik.values.pucExpiryDate}
                           errors={formik.errors.pucExpiryDate}
                           message={formik.errors.pucExpiryDate}
                        />
                     </div>
                     <div className="col-lg-4">
                        <CustomInput
                           require={require}
                           label="PUC Amount"
                           id="fitnessAmount"
                           name="fitnessAmount"
                           placeholder="Enter PUC Amount"
                           onChange={formik.handleChange}
                           value={formik.values.pucAmount}
                           errors={formik.errors.pucAmount}
                           message={formik.errors.pucAmount}
                        />
                     </div>
                     <div className="col-lg-4">
                        <label className="text-bold">
                           PUC Document
                           <span className="text-danger">*</span>
                        </label>
                        <CustomFileUpload
                           accept=".pdf, .doc, .docx"
                           onChange={(event) => handleFileChange(event)}
                           errors={formik.errors.insuranceAmount}
                           message={formik.errors.insuranceAmount}
                        />
                     </div>
                     <div className="col-lg-4">
                        <label className="text-bold">
                           MV Tax
                           <span className="text-danger">*</span>
                        </label>
                        <CustomFileUpload
                           accept=".pdf, .doc, .docx"
                           onChange={(event) => handleFileChange(event)}
                           errors={formik.errors.insuranceAmount}
                           message={formik.errors.insuranceAmount}
                        />
                     </div>
                     <div className="col-lg-4">
                        <CustomDatePicker
                           require={require}
                           label="MV Tax Expiry Date"
                           placeholder="Enter MV Tax Expiry Date"
                           values={formik.values.mvTaxExpiryDate}
                           errors={formik.errors.mvTaxExpiryDate}
                           message={formik.errors.mvTaxExpiryDate}
                        />
                     </div>
                     <div className="col-lg-4">
                        <CustomInput
                           require={require}
                           label="MV Tax Amount"
                           id="fitnessAmount"
                           name="fitnessAmount"
                           placeholder="Enter MV Tax Amount"
                           onChange={formik.handleChange}
                           value={formik.values.mvTaxAmount}
                           errors={formik.errors.mvTaxAmount}
                           message={formik.errors.mvTaxAmount}
                        />
                     </div>
                     <div className="col-lg-6">
                        <CustomInput
                           label="GPS Provider Name"
                           id="gpsProvider"
                           name="gpsProvider"
                           placeholder="Enter GPS Provider Name"
                           onChange={formik.handleChange}
                           value={formik.values.gpsProviderName}
                           errors={formik.errors.gpsProviderName}
                           message={formik.errors.gpsProviderName}
                        />
                     </div>
                     <div className="col-lg-6">
                        <CustomInput
                           label="GPS Amount"
                           id="fitnessAmount"
                           name="fitnessAmount"
                           placeholder="Enter GPS Amount"
                           onChange={formik.handleChange}
                           value={formik.values.gpsAmount}
                           errors={formik.errors.gpsAmount}
                           message={formik.errors.gpsAmount}
                        />
                     </div>
                     <div className="col-lg-6">
                        <CustomInput
                           label="Fabricator Name"
                           id="fitnessAmount"
                           name="fitnessAmount"
                           placeholder="Enter Fabricator Name"
                           onChange={formik.handleChange}
                           value={formik.values.fabricatorName}
                           errors={formik.errors.fabricatorName}
                           message={formik.errors.fabricatorName}
                        />
                     </div>

                     <div className="col-lg-6">
                        <CustomInput
                           label="Fabricator Location"
                           id="fitnessAmount"
                           name="fitnessAmount"
                           placeholder="Enter Fabricator Location"
                           onChange={formik.handleChange}
                           value={formik.values.fabricatorLocation}
                           errors={formik.errors.fabricatorLocation}
                           message={formik.errors.fabricatorLocation}
                        />
                     </div>
                  </div>
               </div>
            </div>
         </Form>
      </FormikProvider>
   );
}

export default VehicleDetails;
