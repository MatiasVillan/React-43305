import React from 'react';
 
const products = [
    {
        id: 1,
        title: 'Thriller',
        artist: 'Michael Jackson',
        genre: 'Pop',
        stock: 5,
    },
    {
        id: 2,
        title: 'Back in Black',
        artist: 'AC/DC',
        genre: 'Rock',
        stock: 10,
    },
    {
        id: 3,
        title: 'The Dark Side of the Moon',
        artist: 'Pink Floyd',
        genre: 'Progressive Rock',
        stock: 5,
    },
    {
        id: 4,
        title: 'The Bodyguard (Original Soundtrack Album)',
        artist: 'Various Artists',
        genre: 'Soundtrack',
        stock: 3,
    },
    {
        id: 5,
        title: 'Bat Out of Hell',
        artist: 'Meat Loaf',
        genre: 'Rock',
        stock: 10,
    },
    {
        id: 6,
        title: 'Back to Black',
        artist: 'Amy Winehouse',
        genre: 'Soul',
        stock: 8,
    },
    {
        id: 7,
        title: 'Rumours',
        artist: 'Fleetwood Mac',
        genre: 'Rock',
        stock: 4,
    },
    {
        id: 8,
        title: 'Saturday Night Fever (Original Soundtrack)',
        artist: 'Various Artists',
        genre: 'Disco',
        stock: 7,
    },
    {
        id: 9,
        title: 'Come On Over',
        artist: 'Shania Twain',
        genre: 'Country',
        stock: 14,
    },
    {
        id: 10,
        title: 'The Wall',
        artist: 'Pink Floyd',
        genre: 'Progressive Rock',
        stock:  11,
    },
    {
        id: 11,
        title: 'Their Greatest Hits (1971-1975)',
        artist: 'Eagles',
        genre: 'Rock',
        stock: 1,
    },
    {
        id: 12,
        title: 'Come Away with Me',
        artist: 'Norah Jones',
        genre: 'Jazz',
        stock: 20,
    },
    {
        id: 13,
        title: '21',
        artist: 'Adele',
        genre: 'Pop',
        stock: 13,
    },
    {
        id: 14,
        title: 'Appetite for Destruction',
        artist: 'Guns N\' Roses',
        genre: 'Rock',
        stock: 2,
    },
    {
        id: 15,
        title: 'The Eminem Show',
        artist: 'Eminem',
        genre: 'Hip Hop',
        stock: 5,
    },
    {
        id: 16,
        title: 'Led Zeppelin IV',
        artist: 'Led Zeppelin',
        genre: 'Rock',
        stock: 16,
    },
    {
        id: 17,
        title: 'Come On Over',
        artist: 'Shania Twain',
        genre: 'Country',
        stock: 12,
    },
    {
        id: 18,
        title: 'The Joshua Tree',
        artist: 'U2',
        genre: 'Rock',
        stock: 20,
    },
    {
        id: 19,
        title: 'The Beatles (White Album)',
        artist: 'The Beatles',
        genre: 'Rock',
        stock: 1,
    },
    {
        id: 20,
        title: 'Appetite for Destruction',
        artist: 'Guns N\' Roses',
        genre: 'Rock',
        stock: 5,
    },
];

const getData = () => {
    return new Promise( (resolve, reject) => {
        setTimeout( () => { resolve(products) }, 1600 );
    } );
}

export default getData;