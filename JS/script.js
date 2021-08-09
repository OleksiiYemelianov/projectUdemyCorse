"use strict";

let personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personalMovieDB.count = +prompt("Сколько фильмов ты посмотрел", "100500");

        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("Сколько фильмов ты посмотрел", "100500");
        }
    },
    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            let a = prompt("Последний фильм?", ""),
                b = prompt("На сколько оцениваешь?", "");

            if (a != null && b != null && a != "" && b != "" && a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log("done");
            } else {
                console.log("error");
                i--;
            }
        }
    },
    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10 && personalMovieDB.count > 0) {
            alert("Просмотрено довольно мало фильмов");
        } else if (personalMovieDB.count < 30) {
            alert("Вы классический зритель");
        } else if (personalMovieDB.count >= 30) {
            alert("Вы - киноман!");
        } else {
            alert("Ты чо то хрень вводишь!");
        }
    },
    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function () {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function () {
        for (let i = 1; i < 2; i++) {
            // let genre = prompt(`Ваш любимый жанр под номером ${i}`);
            // if (genre == null || genre === "") {
            //     console.log('Вы ввели некоректные данные или не ввели их вобще');
            //     i--;
            // } else {
            //     personalMovieDB.genres[i - 1] = genre;
            // }
            let genres = prompt(`Введите Ваши любимые жанры через запятую`).toLowerCase(); //toLowerCase используется, чтобы избежать неправильной сортировки из-за разного
            if (genres == null || genres === "") {
                    console.log('Вы ввели некоректные данные или не ввели их вобще');
                    i--;
                } else {
                    personalMovieDB.genres = genres.split(', ');
                    personalMovieDB.genres.sort(); // ссортирует значения по алфавиту, для примера. 
                }


        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр № ${i + 1} - это ${item}`);

        });

    }
};






