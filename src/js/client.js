$(document).ready(() => {
  $('.single-item').slick();
  $('#searchForm').on('submit', (e) => {
    const searchText = $('#searchText').val();
    getMovies(searchText);
    e.preventDefault();
  });
});


function getMovies(searchText) {
  $.get('http://www.omdbapi.com/?s='+searchText)
  .done((response) => {
    // console.log(response);
    let movies = response.Search;
    let output ='';
    $.each(movies, (index, movie) =>{
      output += `
      <div class="col-md-3 fontSquare">
      <div class="well text-center" >
      <a onclick="movieSelected('${movie.imdbID}')" class="btn btn-primary" href="#"><img src="${movie.Poster}"></a>
      <h5 class="fontSquare">${movie.Title}</h5>
      <a onclick="movieSelected('${movie.imdbID}')" class="btn btn-primary" href="#">Movie Details</a>
      </div>
      </div>
      `;
    });
    $('#movies').html(output);
  })
  .catch((err) => {
    console.log(err);
  });
}

function movieSelected(id){
  sessionStorage.setItem('movieID', id);
  window.location = '/movie';
  return false;
}

function getMovie(){
  let movieID = sessionStorage.getItem('movieID');
  $.get('http://www.omdbapi.com/?i='+movieID)
  .then((response) => {
    console.log(response);
    let movie  = response;

    let output = `
    <div class="row">
    <div class="col-md-4">
    <img src="${movie.Poster}" class="thumbnail">
    </div>
    <div class="col-md-8"
    <ul class="list-group">
    <h2 class="fontTitle fontItalic">${movie.Title}</h2>
    <li class="list-group-item"><strong>Genre: </strong><span class="text-warning">${movie.Genre}</span></li>
    <li class="list-group-item"><strong>Released: </strong><span class="text-warning">${movie.Released}</span></li>
    <li class="list-group-item"><strong>Rated: </strong><span class="text-warning">${movie.Rated}</span></li>
    <li class="list-group-item"><strong>IMDB Rating: </strong><span class="text-warning">${movie.imdbRating}</span></li>
    <li class="list-group-item"><strong>Director: </strong><span class="text-warning">${movie.Director}</span></li>
    <li class="list-group-item"><strong>Writer: </strong><span class="text-warning">${movie.Writer}</span></li>
    <li class="list-group-item"><strong>Actors: </strong><span class="text-warning">${movie.Actors}</span></li>

    </ul>
    </div>
    </div>
    <div class="row">
    <div class="well">
    <h3 class="fontTitle fontItalic">Plot</h3>
    <span class="text-warning ">
    ${movie.Plot}
    </span>
    <hr>
    <a href="/" class="btn btn-default">Go Back To Search</a>
    <a href="http://imdb.com/title/${movie.imdbID}" target="_blank" class="btn btn-primary">View IMDB</a>
    `;
    $('#movie').html(output);
  })

  .catch((err) => {
    console.log(err);
  });
}
$('#logo').hover(function(){
  $(this).wiggle('start');
},function(){
  $(this).wiggle('stop');
});
