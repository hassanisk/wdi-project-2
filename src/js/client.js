$(document).ready(() => {
  $('#searchForm').on('submit', (e) => {
    let searchText = $('#searchText').val();
    getMovies(searchText);
    e.preventDefault();
  });
});


function getMovies(searchText) {
  $
  .get('http://www.omdbapi.com/?s='+searchText)
  .done((response) => {
    console.log(response);
    let movies = response.Search;
    let output ='';
    $.each(movies, (index, movie) =>{
      output += `
      <div class="col-md-3">
       <div class="well text-center">
        <img src="${movie.Poster}">
        <h5>${movie.Title}</h5>
        <a onclick="movieSelected('${movie.imdbID}')" class="btn btn-primary" href="#">Movie Details</a>
       </div>
      </div>
      `;
    });
    $('#movies').html(output);
  })
  .catch((err) => {

  });
}
