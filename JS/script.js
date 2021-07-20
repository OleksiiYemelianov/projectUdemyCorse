"use strict"; 

let numberOfFilms = +prompt("Сколько фильмов ты посмотрел", "100500");
let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let i = 0;
while (i < 2) {
    let a = prompt("Последний фильм?", ""),
        b = prompt("На сколько оцениваешь?", "");
        i++;

        if (a != null && b != null && a != "" && b != "" && a.length < 50 ) {
                    personalMovieDB.movies[a] = b;
                    console.log("done");
                } else {
                   console.log("error"); 
                   i--;
                }
    
}
// for (let i = 0; i < 2; i++) {
//     let a = prompt("Последний фильм?", ""),
//         b = prompt("На сколько оцениваешь?", "");
    
//     if (a != null && b != null && a != "" && b != "" && a.length < 50 ) {
//         personalMovieDB.movies[a] = b;
//         console.log("done");
//     } else {
//        console.log("error"); 
//        i--;
//     }
    
// }

if (personalMovieDB.count < 10 && personalMovieDB.count > 0) {
    alert("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count < 30) {
        alert("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
        alert("Вы - киноман!");
    } else {
        alert("Ты чо то хрень вводишь!");
    }

    


console.log(personalMovieDB);

    