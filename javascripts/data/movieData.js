// AJAX 

$.get('../../db/movie.json')
.done((data) => {
    console.log(data);
})
.fail((error) => {
    console.error(error);
});