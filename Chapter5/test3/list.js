export function getList(addresses) {
    return `
        <!DOCTYPE html>
        <html>
            <head>
                <title>Adressbuch</title>
            </head> 
            <body>
                <h1>Adressbuch</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>FirstName</th>
                            <th>LastName</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${addresses.map(createRow).join('')}
                    </tbody>
                </table>
            </body>
        </html>
    `
}

function createRow(address) {
    return `
    <tr>
        <td>${address.id}</td>
        <td>${address.firstName}</td>
        <td>${address.lastName}</td>
        <td><a href='/delete/${address.id}'>Delete</a></td>
    </tr> 
    `;
}