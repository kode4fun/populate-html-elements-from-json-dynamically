
// Returns Array of html-element-object
export const htmlElements = [
    {
        colName: 'ID',
        getHtmlElement: (rowData) => {
            return <span>{rowData.id}</span>;
        }
    },
    {
        colName: 'Name',
        getHtmlElement: (rowData) => {
            return <strong>{rowData.name}</strong>;
        },
    },
    {
        colName: 'Username',
        getHtmlElement: (rowData) => {
            return <span>{rowData.username}</span>;
        },
    },
    {
        colName: 'Email',
        getHtmlElement: (rowData) => {
            return <i>{rowData.email}</i>;
        },
    },
    {
        colName: 'Phone',
        getHtmlElement: (rowData) => {
            return <span>{rowData.phone}</span>;
        },
    },
    {
        colName: 'Website',
        getHtmlElement: (rowData) => {
            return <abbr>{rowData.website}</abbr>;
        },
    },
]
