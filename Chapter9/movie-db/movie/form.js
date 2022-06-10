export function render(movie) {
    return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Movie list</title>
        <link rel="stylesheet" href="/style.css">
      </head>
      <body>
        <form action="/movie/save" method="post">
            <input type="hidden" id="id" name="id" values="${movie.id}"/>
            <div>
                <label for="title">Title:</label>
                <input type="text" id="title" name="title" values="${movie.title}"/>
            </div>
            <div>
                <label for="year">Year:</label>
                <input type="text" id="year" name="year" value="${movie.year}">
            </div>
            <div>
              <label for='id'>Public:</label>
              <input type="checkbox" id="public" value="1" ${movie.public ? 'checked="checked"' : ''}/>
            </div>
            <div>
                <button type="submit">Save</button>
            </div>
        </form>
      </body>
    </html>
    `;
}