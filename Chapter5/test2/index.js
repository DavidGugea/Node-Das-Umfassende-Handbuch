import { createServer } from 'http';

const addresses = [
    {
        id: 1,
        firstName: "James",
        lastName: "Bond",
        street: "12 Millbank",
        city: "London",
        country: "Great Britain",
    },
    {
        id: 2,
        firstName: "Sherlock",
        lastName: "Holmes",
        street: "221b Baker St.",
        city: "London",
        country: "Great Britain",
    },
];

createServer(
    (request, response) => {
        response.writeHead(
            200, {
                'content-type': 'text/html'
            }
        );
        
        const responseBody = `
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
                            <th>Vorname</th>
                            <th>Nachname</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${addresses.map(createRow).join('')}
                    </tbody>
                </table>
            </body>
        </html>
        `;

        response.end(responseBody);
    }
).listen(
    8080, () => console.log('Adressbuch erreichbar unter http://localhost:8080')
);

function createRow(address) {
    return `
    <tr>
        <td>${address.id}</td>
        <td>${address.firstName}</td>
        <td>${address.lastName}</td>
    </tr> 
    `;
}