Movie sagas is an movie browser that has a list of movies on its home page. You can click on the Posters for each of the movies and open its description. Within the description for each movie there is an edit button that allows you to change the title and description of the movie.


Prerequisites
I used npm install for:
"@material-ui/core": "^3.9.3",
    "@material-ui/icons": "^4.2.1",
    "axios": "^0.18.1",
    "body-parser": "^1.19.0",
    "express": "^4.17.1",
    "pg": "^7.11.0",
    "react": "^16.8.6",
    "react-dom": "^16.8.6",
    "react-redux": "^5.1.1",
    "react-router-dom": "^5.0.1",
    "react-scripts": "^3.0.1",
    "redux": "^4.0.1",
    "redux-logger": "^3.0.6",
    "redux-saga": "^1.0.2",
    "router": "^1.3.3"


installing
1. dowload this project
2. npm install 
3. npm run server
4. npm run client

Completed Features
1. Able to see the list of movies on the dom
2. Able to see the description of the movie
3. Able to edit the title and description of a movie


Next Steps
feature A
I plan to add new genres into the database/movie

feature B
I plan to be able to remove genre from the database/movie

feature C
I plan to allow the user to add there own movies

Author
Alex Smith












# React-Redux with Sagas

> **PLEASE COMMENT YOUR CODE.** Do not clone this repository. Instead, download the zip, extract the contents, `git init`, `git add .`, `git commit -m "initial commit - base project"` and add your remote. Please do this before you leave for the day.

For this weekend challenge you'll be building a movie application!
We'll be able to see movies that exist in our DB. We'll also be able to see detailed view for each individual movie, including genres associated with that movie. We'll also be able to edit our movie's information.

## Video Wireframe

[video ![Home Wireframe](/wireframes/home-wireframe.png)](https://vimeo.com/343530927)

## Database Setup

1. Create a database named `saga_movies_weekend`
2. Run the queries from `database.sql` on the `saga_movies_weekend` database.
3. You will need to create the junction table between the `movies` and `genres` tables!

## Install Dependencies

1. `npm install`
2. `npm run server`
3. `npm run client`

## Notes

### Genres
We've given you some starter genres in the database. Feel free to change or add some with Postico.
 
### Movies
We've added some movie posters in the `public/images` folder, and the database is set up to use them.

### Relationships
Genres can be applied to many different movies. Movies can have multiple genres. This is Many-to-Many! Junction Table time!

## Feature List

> NOTE: Start by taking inventory of the existing code. Part of the work for setting up sagas has been done for you.

### Home / List Page

This should display all of the movies in the movie database. When a movie poster is clicked, a user should be brought to the `/details` view.

### Details Page

This should show all details **including genres**, for the selected movie.

The details page should have the buttons:

- `Back to List` button, which should bring the user to the Home Page
- `Edit` button, which should bring the user to the Edit Page

> Base functionality does not require the movie details to load correctly after refresh of the browser.

### Edit Page

This should show:

- an input field (for changing the movie title), for the selected movie.
- a textarea (for changing the movie description)

The details page should have the buttons:

- `Cancel` button, which should bring the user to the Details Page
- `Save` button, which should update the title and description in the database and bring the user to the Details Page

> Base functionality does not require the current values (the existing movie title and description) to populate in the input and textarea.

> Base functionality does not require the movie information to load correctly after refresh of the browser.

### General Tasks

As one of your last projects, it's possible you will be sharing this with employers, so be sure to follow best practices and make it look good!

- [ ] Invest some time in styling it up!
    - [ ] Research grids for you movie posters on the Move List page
    - [ ] Add route change animations
- [ ] Commit your code frequently! You should have at 15+ commits on a project of this size. Use branches to help break down your features.
- [ ] Comment your code.
- [ ] Update this README to include a description of the project in your own words.

## Stretch Goals

- [ ] Display the current values in the input (title) and textarea (description) on the Edit Page
- [ ] Display all genres on movie list page. Research [array_agg](https://stackoverflow.com/questions/43458174/how-to-save-and-return-javascript-object-with-subarray-in-normalized-sql) to make this possible.
- [ ] Move sagas and reducers out of your `index.js` and into separate files (ideally in `src/redux/reducers` and `src/redux/sagas` folders).
- [ ] Allow the user to refresh the details or edit page. The url for the details page would be something like `/details/1` for movie with id of `1`. Research [react router params](https://reacttraining.com/react-router/web/example/url-params).
- [ ] Allow the user to add a genre to a movie.
- [ ] Allow the user to remove a genre from a movie.
- [ ] Only display the top 10 movies, and allow the user to search for movie titles with a search bar on the home page (you can do this on the client side or the server side, server side is a bigger stretch, but good practice).
- [ ] Create an `Admin` page. Add a link from the `Home` page to the `Admin` page. The page should initially display a login form (an input for username and an input for password). When the user enters the correct username (`camera`) and password (`action`), the page should display a form to add genres to the database, and a list of all of the genres with an `x` to remove them from the database. Note: This isn't actually secure, but it's pretty fun, and really good practice.
