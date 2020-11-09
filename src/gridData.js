import Editor from './components/Editor';
import ActionsRenderer from './components/ActionsRenderer';
import MaterialUIDateComponent from "./components/DatePicker";

export default {

    columnDefs: [  
        { headerName: "Number", field: "Number", checkboxSelection: true,  },  
        { headerName: "Name", field: "Name" },  
        { headerName: "Balance", field: "Balance" },  
        { headerName: "City", field: "City" },  
        { headerName: "Country", field: "Country" },  
        { headerName: "Bank", field: "Bank" },  
        { headerName: "Currency", field: "Currency" }
    ],

    frameworkComponents: {
        simpleEditor: Editor,
        actionsRenderer: ActionsRenderer,
        agDateImput: MaterialUIDateComponent
    },

    defaultColDef: {
        flex: 1,
        wrapText: true,
        autoHeight: true,
        sortable: true,
        filter: true,
        floatingFilter: false,
        resizeable: true,
        editable: true,
        suppressKeyboardEvent: params => params.editing
    },

    rowData: [  
        {  
            Number: "857483",  
            Name: "Nick",  
            Balance: "2205.42",  
            City: "Denver",  
            Country: "USA",  
            Bank: "Elevations",  
            Currency: "$",  
            
        },  
        {  
            Number: "009483",  
            Name: "Jim",  
            Balance: "2510.10",  
            City: "New York",  
            Country: "USA",  
            Bank: "Chase",  
            Currency: "$",  
        },  
        {  
            Number: "039221",  
            Name: "Tom",  
            Balance: "6730.52",  
            City: "Denver",  
            Country: "USA",  
            Bank: "JP Morgan",  
            Currency: "$",  
        },  
        {  
            Number: "447393",  
            Name: "Bro",  
            Balance: "1102.83",  
            City: "London",  
            Country: "UK",  
            Bank: "Barclays",  
            Currency: "£",  
        },  
        {  
            Number: "500876",  
            Name: "Broseph",  
            Balance: "3871.91",  
            City: "Bristol",  
            Country: "UK",  
            Bank: "Barclays",  
            Currency: "£",  
        },  
        {  
            Number: "665940",  
            Name: "Tommy Bahama",
            Balance: "1869.01",  
            City: "Brighton",  
            Country: "UK",  
            Bank: "Santander",  
            Currency: "£",  
        },  
        {  
            Number: "722049",  
            Name: "Jimmy John",  
            Balance: "2045.65",  
            City: "Leeds",  
            Country: "UK",
            Bank: "Halifax",  
            Currency: "£",  
        },  
        {  
            Number: "811322",  
            Name: "Doug",  
            Balance: "4012.49",  
            City: "Chicago",  
            Country: "USA",  
            Bank: "Chase",  
            Currency: "$",  
        },
        {  
            Number: "009483",  
            Name: "Jim",  
            Balance: "2510.10",  
            City: "New York",  
            Country: "USA",  
            Bank: "Chase",  
            Currency: "$",  
        },
        {  
            Number: "722049",  
            Name: "Jimmy John",  
            Balance: "2045.65",  
            City: "Leeds",  
            Country: "UK",
            Bank: "Halifax",  
            Currency: "£",  
        },
        {  
            Number: "447393",  
            Name: "Bro",  
            Balance: "1102.83",  
            City: "London",  
            Country: "UK",  
            Bank: "Barclays",  
            Currency: "£",  
        },
        {  
            Number: "722049",  
            Name: "Jimmy John",  
            Balance: "2045.65",  
            City: "Leeds",  
            Country: "UK",
            Bank: "Halifax",  
            Currency: "£",  
        },
        {  
            Number: "009483",  
            Name: "Jim",  
            Balance: "2510.10",  
            City: "New York",  
            Country: "USA",  
            Bank: "Chase",  
            Currency: "$",  
        },  
        {  
            Number: "039221",  
            Name: "Tom",  
            Balance: "6730.52",  
            City: "Denver",  
            Country: "USA",  
            Bank: "JP Morgan",  
            Currency: "$",  
        },
    ]
}
