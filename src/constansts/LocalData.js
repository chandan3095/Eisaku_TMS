export const SideBarDropdownData = [
    {
        menuName: "Fleet Master",
        url: "/fleet-master",
        icon:"fa-truck-moving",
        dropdownList:[
            {
                subMenuName: "Add",
                url: "/add-form",
            },
            {
                subMenuName: "View",
                url: "/list",
            }
        ]
    },
    {
        menuName: "Driver Master",
        url: "/driver-master",
        icon:"fa-universal-access",
        dropdownList:[
            {
                subMenuName: "Add",
                url: "/add-form",
            },
            {
                subMenuName: "View",
                url: "/view",
            }
        ]
    },
    {
        menuName: "Helper  Master",
        url: "/helper-master",
        icon:"fa-hands-helping",
        dropdownList:[
            {
                subMenuName: "Add",
                url: "/add-form",
            },
            {
                subMenuName: "View",
                url: "/view",
            }
        ]
    },
    {
        menuName: "Customer Master",
        url: "/customer-master",
        icon:"fa-user",
        dropdownList:[
            {
                subMenuName: "Add",
                url: "/add-form",
            },
            {
                subMenuName: "View",
                url: "/view",
            }
        ]
    },
    {
        menuName: "Vendor  Master",
        url: "/vendor-master",
        icon:"fa-tree",
        dropdownList:[
            {
                subMenuName: "Add",
                url: "/add-form",
            },
            {
                subMenuName: "View",
                url: "/view",
            }
        ]
    },
    {
        menuName: "Lane Master",
        url: "/lane-master",
        icon:"fa-arrows-alt-h",
        dropdownList:[
            {
                subMenuName: "Add",
                url: "/add-form",
            },
            {
                subMenuName: "View",
                url: "/view",
            }
        ]
    },
    {
        menuName: "Contractor Master",
        url: "/contractor-master",
        icon:"fa-address-card",
        dropdownList:[
            {
                subMenuName: "Add",
                url: "/add-form",
            },
            {
                subMenuName: "View",
                url: "/view",
            }
        ]
    },
    {
        menuName: "Location Master",
        url: "/location-master",
        icon:"fa-map-marker-alt",
        dropdownList:[
            {
                subMenuName: "Add",
                url: "/add-form",
            },
            {
                subMenuName: "View",
                url: "/view",
            }
        ]
    },
   {
      menuName: "Trip",
      url: "/trip",
      icon: "fa-truck",
      dropdownList: [
         {
            subMenuName: "View",
            url: "/view-trip",
         }
      ]
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

export const fleetMasterFormTitle= [
    {
        label:"Vehicle Details",
        value: 0
    },
    {
        label:"EMI",
        value: 1
    },
    {
        label:"Service Record",
        value: 2
    },
    {
        label:"Tyre",
        value: 3
    },
    {
        label:"Monthly Maintenance Budget",
        value: 4
    }
]