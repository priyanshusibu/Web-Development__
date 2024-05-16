const title = "Avatar";
const description = "Jake, who is paraplegic, replaces his twin on the Na'vi inhabited Pandora for a corporate mission. After the natives accept him as one of their own, he must decide where his loyalties lie.";
const imageUrl = "https://upload.wikimedia.org/wikipedia/en/d/d6/Avatar_%282009_film%29_poster.jpg";

// Create a new li element
let newMovie = document.createElement("li");
// Add class 'movie' to the li element
newMovie.classList.add("movie");

// Create an img element for the poster
let poster = document.createElement("img");

// Set the src and alt attributes for the poster
poster.setAttribute("src", imageUrl);
poster.setAttribute("alt", title);

// Create an h2 element for the movie title
let movieTitle = document.createElement("h2");

// Set the text content of the h2 element to the movie title
movieTitle.textContent = title;

// Create a p element for the movie description
let movieDescription = document.createElement("p");

// Set the text content of the p element to the movie description
movieDescription.textContent = description;

// Append poster, movieTitle, and movieDescription to newMovie
newMovie.appendChild(poster);
newMovie.appendChild(movieTitle);
newMovie.appendChild(movieDescription);
// Select the ul element with class 'movieList'
let movieList = document.querySelector(".movie-list");

// Append the newMovie to movieList
movieList.appendChild(newMovie);
