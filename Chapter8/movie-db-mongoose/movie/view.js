export function render(movies) {
    return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="style.css"/>
        <title>Movie List</title>
      </head>
      <body>
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Title</th>
                </tr>
            </thead>
            <tbody>
                ${
                    movies.map(
                        movie => `<tr>
                            <td>${movie.id}</td>
                            <td>${movie.title}</td>
                            <td><a href="/movie/delete/${movie.id}">Delete</a></td>
                            <td><a href="/movie/form/${movie.id}">Modify</a></td>
                        </tr>`
                    ).join('')
                }
            </tbody>
        </table>
        <a href="/movie/form">New</a>
      </body>
    </html>
    `;
}