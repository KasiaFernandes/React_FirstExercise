var movies = [
    {
        id: 1,
        title: "Harry Potter",
        desc: "film o czarodzieju",
        url: "https://upload.wikimedia.org/wikipedia/en/c/c0/Harry_Potter_and_the_Philosopher%27s_Stone_posters.JPG"
    },
    {
        id: 2,
        title: "Król Lew",
        desc: "film o lwie",
        url: "https://upload.wikimedia.org/wikipedia/en/3/3d/The_Lion_King_poster.jpg"
    },
    {
        id: 3,
        title: "Demain tout commence",
        desc: "film o dziewczynce",
        url: "https://upload.wikimedia.org/wikipedia/en/7/75/Demain_tout_commence.jpg"
    },
    {
        id: 4,
        title: "Baby Driver",
        desc: "film about Baby, the driver",
        url: "https://upload.wikimedia.org/wikipedia/en/8/8e/Baby_Driver_poster.jpg"
    }
];

var moviesElements = movies.map(function(movie) {
    return React.createElement("li", {key: movie.id},
        React.createElement("h2", {}, movie.title),
        React.createElement("p", {}, movie.desc),
        React.createElement("img", {src: movie.url})    
    );
});

var element = 
React.createElement('div', {},
    React.createElement("h1", {}, "Lista Filmów"),
    React.createElement("ul", {}, moviesElements)
);

    ReactDOM.render(element, document.getElementById('app'));
