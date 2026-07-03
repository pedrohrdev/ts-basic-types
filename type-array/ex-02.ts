/*
Exercise 2 — Movies

Create an array named `movies` containing objects with:

title
year
watched

Then:

iterate through the array using `for...of`;
print only the title and year of each movie;
at the end, count how many movies have been watched (`watched === true`) and display that number.
*/

// Type Movie containing the parameters of movie
type Movie = {
    title: string,
    year: number,
    watched: boolean
}

let watchedCount = 0;

let movies: Movie[] = [
    {
        title: "Spider-Man: No Way Home",
        year: 2021,
        watched: true
    },

        {
        title: "Grown Ups",
        year: 2010,
        watched: true
    },

        {
        title: "Fight Club",
        year: 1999,
        watched: false
    }
];

for(const movie of movies) {
    console.log(`${movie.title}, year: ${movie.year};`);
};

console.log('============================')

for(const movieWatched of movies) {
    if(movieWatched.watched === true) {
        console.log(`you watched: ${movieWatched.title}`);
        watchedCount++
    }    
}

console.log('============================')

console.log(`You've watched ${watchedCount} movies`)

