"use strict"; 

let numberOfFilms;

function start() {
  numberOfFilms = +prompt("Сколько фильмов ты посмотрел", "100500");  
  
  while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt("Сколько фильмов ты посмотрел", "100500"); 
  }
}

start();

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
for (let i = 0; i < 2; i++) {
    let a = prompt("Последний фильм?", ""),
        b = prompt("На сколько оцениваешь?", "");
    
    if (a != null && b != null && a != "" && b != "" && a.length < 50 ) {
        personalMovieDB.movies[a] = b;
        console.log("done");
    } else {
       console.log("error"); 
       i--;
    }
    }
}

rememberMyFilms();

function detectPersonalLevel() {
if (personalMovieDB.count < 10 && personalMovieDB.count > 0) {
    alert("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count < 30) {
        alert("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
        alert("Вы - киноман!");
    } else {
        alert("Ты чо то хрень вводишь!");
    }
}                                       
detectPersonalLevel();


function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
               personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
};

writeYourGenres();
    