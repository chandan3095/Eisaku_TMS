import { ROLES } from "./Roles";
export const SideBarDropdownData = [
  {
    menuName: "Fleet Master",
    url: "/fleet-master",
    icon: "fa-truck-moving",
    roles: [ROLES.corporateAdmin],
    dropdownList: [
      {
        subMenuName: "Add",
        url: "/add-form",
        subDropdownList: [],
      },
      {
        subMenuName: "View",
        url: "/list",
        subDropdownList: [],
      },
    ],
  },
  {
    menuName: "Driver Master",
    url: "/driver-master",
    icon: "fa-universal-access",
     roles: [ROLES.corporateAdmin],
    dropdownList: [
      {
        subMenuName: "Add",
        url: "/add-form",
        subDropdownList: [],
      },
      {
        subMenuName: "View",
        url: "/view",
        subDropdownList: [],
      },
    ],
  },
  {
    menuName: "Helper  Master",
    url: "/helper-master",
    icon: "fa-hands-helping",
     roles: [ROLES.corporateAdmin],
    dropdownList: [
      {
        subMenuName: "Add",
        url: "/add-form",
        subDropdownList: [],
      },
      {
        subMenuName: "View",
        url: "/view",
        subDropdownList: [],
      },
    ],
  },
  {
    menuName: "Customer Master",
    url: "/customer-master",
    icon: "fa-user",
     roles: [ROLES.corporateAdmin],
    dropdownList: [
      {
        subMenuName: "Add",
        url: "/add-form",
        subDropdownList: [],
      },
      {
        subMenuName: "View",
        url: "/view",
        subDropdownList: [],
      },
    ],
  },
  {
    menuName: "Vendor  Master",
    url: "/vendor-master",
    icon: "fa-tree",
     roles: [ROLES.corporateAdmin],
    dropdownList: [
      {
        subMenuName: "Add",
        url: "/add-form",
        subDropdownList: [],
      },
      {
        subMenuName: "View",
        url: "/view",
        subDropdownList: [],
      },
    ],
  },
  {
    menuName: "Lane Master",
    url: "/lane-master",
    icon: "fa-arrows-alt-h",
     roles: [ROLES.corporateAdmin],
    dropdownList: [
      {
        subMenuName: "Add",
        url: "/add-form",
        subDropdownList: [],
      },
      {
        subMenuName: "View",
        url: "/view",
        subDropdownList: [],
      },
    ],
  },
  {
    menuName: "Contractor Master",
    url: "/contractor-master",
    icon: "fa-address-card",
     roles: [ROLES.corporateAdmin],
    dropdownList: [
      {
        subMenuName: "Add",
        url: "/add-form",
        subDropdownList: [],
      },
      {
        subMenuName: "View",
        url: "/view",
        subDropdownList: [],
      },
    ],
  },
  {
    menuName: "Location Master",
    url: "/location-master",
    icon: "fa-map-marker-alt",
     roles: [ROLES.corporateAdmin],
    dropdownList: [
      {
        subMenuName: "Add",
        url: "/add-form",
        subDropdownList: [],
      },
      {
        subMenuName: "View",
        url: "/view",
        subDropdownList: [
          // {
          //    subMenuName: "Add",
          //    url: "/add",
          // },
          // {
          //    subMenuName: "View",
          //    url: "/view",
          // }
        ],
      },
    ],
  },
  {
    menuName: "Trip",
    url: "/trip",
    icon: "fa-truck",
    roles: [ROLES.corporateAdmin, ROLES.supervisor, ROLES.manager],
    dropdownList: [
      {
        subMenuName: "Contractual",
        url: "/contractual",
        subDropdownList: [
          {
             subMenuName: "view",
             url: "/view",
          }
        ],
      },
      {
        subMenuName: "Adhoc",
        url: "/adhoc",
        subDropdownList: [
          {
            subMenuName: "Add",
            url: "/add",
          },
          {
            subMenuName: "View",
            url: "/view",
          },
        ],
      },
    ],
  },
  {
    menuName: "Create Adhoc Lane",
    url: "/adhoc-lane",
    icon: "fa-map-marker-alt",
    roles: [ROLES.management, ROLES.manager],
    dropdownList: [
      {
        subMenuName: "Add",
        url: "/add",
        subDropdownList: [],
      },
      {
        subMenuName: "View",
        url: "/view",
        subDropdownList: [],
      },
    ],
  },
  {
    menuName: "Create Adhoc Vendor",
    url: "/adhoc-vendor",
    icon: "fa-map-marker-alt",
    roles: [ROLES.management, ROLES.manager],
    dropdownList: [
      {
        subMenuName: "Add",
        url: "/add",
        subDropdownList: [],
      },
      {
        subMenuName: "View",
        url: "/view",
        subDropdownList: [],
      },
    ],
  },
];

export const Roles= [
   {
      value: 1,
      label: 'Management'
   },
   {
      value: 2,
      label: 'Manager'
   },
   {
      value: 3,
      label: 'Corporate Admin'
   },
   {
      value: 4,
      label: 'Supervisor'
   },
]

                          
const selectOptionData =[
    {
        label:"Company 1",
        value:"Company 1"
      },
      {
        label:"Company 2",
        value:"Company 2"
      },
      {
        label:"Company 3",
        value:"Company 3"
      },
      {
        label:"Company 4",
        value:"Company 4"
      },
      {
        label:"Company 5",
        value:"Company 5"
      },
      {
        label:"Company 6",
        value:"Company 6"
      },
      {
        label:"Company 7",
        value:"Company 7"
      },
      {
        label:"Company 8",
        value:"Company 8"
      },
      {
        label:"NA",
        value:"NA"
      },
]

export default selectOptionData;

export const fleetMasterFormTitle = [
  {
    label: "Vehicle Details",
    value: 0,
  },
  {
    label: "EMI",
    value: 1,
  },
  {
    label: "Service Record",
    value: 2,
  },
  {
    label: "Tyre",
    value: 3,
  },
  {
    label: "Monthly Maintenance Budget",
    value: 4,
  },
];
export const locationData = [
  {
    label: "Kolkata",
    value: "Kolkata",
  },
  {
    label: "Delhi",
    value: "Delhi",
  },
  {
    label: "Patna",
    value: "Patna",
  },
];
export const originData = [
  {
    label: "Kolkata",
    value: "Kolkata",
  },
  {
    label: "Delhi",
    value: "Delhi",
  },
  {
    label: "Patna",
    value: "Patna",
  },
];
export const vehicleCategoryData = [
  {
    label: "20ft",
    value: "20ft",
  },
  {
    label: "22ft",
    value: "22ft",
  },
  {
    label: "24ft",
    value: "24ft",
  },
  {
    label: "32ft SXL",
    value: "32ft SXL",
  },
  {
    label: "32ft MXL",
    value: "32ft MXL",
  },
  {
    label: "Any Other",
    value: "Any Other",
  },
];

export const tonnageData = [
  {
    label: "5",
    value: "5",
  },
  {
    label: "6",
    value: "6",
  },
  {
    label: "7",
    value: "7",
  },
  {
    label: "8",
    value: "8",
  },
  {
    label: "9",
    value: "9",
  },
  {
    label: "10.5",
    value: "10.5",
  },
  {
    label: "15",
    value: "15",
  },
  {
    label: "18",
    value: "18",
  },
  {
    label: "any other",
    value: "any other",
  },
];

export const destinationData = [
  {
    label: "New York",
    value: "New York",
  },
  {
    label: "Paris",
    value: "Paris",
  },
  {
    label: "Tokyo",
    value: "Tokyo",
  },
  {
    label: "London",
    value: "London",
  },
];

export const makeData = [
  {
    label: "Tata",
    value: "Tata",
  },
  {
    label: "Eicher",
    value: "Eicher",
  },
  {
    label: "Ashok leyland",
    value: "Ashok leyland",
  },
];
