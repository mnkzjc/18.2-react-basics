var element = React.createElement('div', {},
    React.createElement('h1', {}, 'Lista Filmów'),
    React.createElement('ul', {}, moviesElements),
    React.createElement('p', {}, 'nie wyświetla listy? :(')
);


ReactDOM.render(element, document.getElementById('app'));


var movies = [
    {
        id: 1,
        title: 'Blade Runner',
        desc: 'Czy androidy śnią o elektrycznych owcach?'
    },
    {
        id: 2,
        title: 'Total Recall',
        desc: 'Przypomnimy to panu hurtowo'
    }
];

var moviesElements = movies.map(function(movie) {
    return React.createElement('li', {key: movie.id}, 
        React.createElement('h2', {}, movie.title),
        React.createElement('p', {}, movie.desc)
    );
});

