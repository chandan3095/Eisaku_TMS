import * as yup from "yup"

const CustomerMasterSchema = yup.object().shape({
    customerName:yup.string().required('Customer name is required'),
    agreementDocument: yup.mixed()
    .required('An agreement document is required')
    .test('fileType', 'Invalid file format', (value) => {
      if (!value) return true; // Allow empty values (no file uploaded)
      return ['application/pdf', 'image/jpeg', 'image/png'].includes(value.type);
    })
    .test('fileSize', 'File size is too large', (value) => {
      if (!value) return true; // Allow empty values (no file uploaded)
      return value.size <= 10485760; // 10 MB in bytes (adjust as needed)
    }),
    contactPersonName: yup.string()
    .required('Contact person name is required')
    .matches(/^[A-Za-z\s]+$/, 'Should contain only letters and spaces'),

  customerMobileNo: yup.string()
    .required('Customer mobile number is required')
    .matches(/^[0-9]+$/, 'Should contain only digits')
    .min(10, 'Must be at least 10 digits')
    .max(10, 'Must not exceed 10 digits'),

  customerEmail: yup.string()
    .required('Customer email is required')
    .email('Invalid email format'),

  location: yup.string().required('Location is required'),

  address: yup.string().required('Address Line 1 is required'),

  laneName: yup.string().required('Lane name is required'),
  origin: yup.string().required('Origin is required'),
  destination: yup.string().required('Destination is required'),
  vehicleCategory: yup.string().required('Vehicle category is required'),
  tonnage: yup.number()
    .typeError('Tonnage must be a number')
    .required('Tonnage is required')
    .positive('Tonnage must be a positive number')
    .integer('Tonnage must be an integer'),

    expressModeRateAdditional: yup.number()
    .typeError('Express mode rate additional must be a number')
    .min(0, 'Express mode rate additional must be a positive number or zero'),

  superExpressModeRateAdditional: yup.number()
    .typeError('Super express mode rate additional must be a number')
    .min(0, 'Super express mode rate additional must be a positive number or zero'),

  detentionRateAdditional: yup.number()
    .typeError('Detention rate additional must be a number')
    .min(0, 'Detention rate additional must be a positive number or zero'),

  multipleLoadingLocationRateAdditional: yup.number()
    .typeError('Multiple loading location rate additional must be a number')
    .min(0, 'Multiple loading location rate additional must be a positive number or zero'),

  multipleUnloadingLocationRateAdditional: yup.number()
    .typeError('Multiple unloading location rate additional must be a number')
    .min(0, 'Multiple unloading location rate additional must be a positive number or zero'),

  loadingCharges: yup.number()
    .typeError('Loading charges must be a number')
    .min(0, 'Loading charges must be a positive number or zero'),

  unloadingCharge: yup.number()
    .typeError('Unloading charge must be a number')
    .min(0, 'Unloading charge must be a positive number or zero'),

  miscellaneousCharges: yup.number()
    .typeError('Miscellaneous charges must be a number')
    .min(0, 'Miscellaneous charges must be a positive number or zero'),

  miscellaneousRemarks: yup.string(),
})
export default CustomerMasterSchema;