"use strict"; 

let numberOfFilms = +prompt("Сколько фильмов ты посмотрел", "100500");
let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let a = prompt("Последний фильм?", ""),
    b = prompt("На сколько оцениваешь?", ""),
    c = prompt("Последний фильм?", ""),
    d = prompt("На сколько оцениваешь?", "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);

    