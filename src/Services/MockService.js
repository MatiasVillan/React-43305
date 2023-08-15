import React from 'react';
 
const products = [
    {
        id: 1,
        title: 'Thriller',
        artist: 'Michael Jackson',
        genre: 'Pop',
        stock: 5,
        price: 1000,
        img: '/assets/img/disco.png',
    },
    {
        id: 2,
        title: 'Back in Black',
        artist: 'AC/DC',
        genre: 'Rock',
        stock: 10,
        price: 1000,
        img: '/assets/img/disco.png',
    },
    {
        id: 3,
        title: 'The Dark Side of the Moon',
        artist: 'Pink Floyd',
        genre: 'Progressive',
        stock: 5,
        price: 1000,
        img: '/assets/img/disco.png',
    },
    {
        id: 4,
        title: 'The Bodyguard (Original Soundtrack Album)',
        artist: 'Various Artists',
        genre: 'Soundtrack',
        stock: 3,
        price: 1000,
        img: '/assets/img/disco.png',
    },
    {
        id: 5,
        title: 'Bat Out of Hell',
        artist: 'Meat Loaf',
        genre: 'Rock',
        stock: 10,
        price: 1000,
        img: '/assets/img/disco.png',
    },
    {
        id: 6,
        title: 'Back to Black',
        artist: 'Amy Winehouse',
        genre: 'Soul',
        stock: 8,
        price: 1000,
        img: '/assets/img/disco.png',
    },
    {
        id: 7,
        title: 'Rumours',
        artist: 'Fleetwood Mac',
        genre: 'Rock',
        stock: 4,
        price: 1000,
        img: '/assets/img/disco.png',
    },
    {
        id: 8,
        title: 'Saturday Night Fever (Original Soundtrack)',
        artist: 'Various Artists',
        genre: 'Disco',
        stock: 7,
        price: 1000,
        img: '/assets/img/disco.png',
    },
    {
        id: 9,
        title: 'Come On Over',
        artist: 'Shania Twain',
        genre: 'Country',
        stock: 14,
        price: 1000,
        img: '/assets/img/disco.png',
    },
    {
        id: 10,
        title: 'The Wall',
        artist: 'Pink Floyd',
        genre: 'Progressive',
        stock:  11,
        price: 1000,
        img: '/assets/img/disco.png',
    },
    {
        id: 11,
        title: 'Their Greatest Hits (1971-1975)',
        artist: 'Eagles',
        genre: 'Rock',
        stock: 1,
        price: 1500,
        img: '/assets/img/disco.png',
    },
    {
        id: 12,
        title: 'Come Away with Me',
        artist: 'Norah Jones',
        genre: 'Jazz',
        stock: 20,
        price: 1500,
        img: '/assets/img/disco.png',
    },
    {
        id: 13,
        title: '21',
        artist: 'Adele',
        genre: 'Pop',
        stock: 13,
        price: 1500,
        img: '/assets/img/disco.png',
    },
    {
        id: 14,
        title: 'Appetite for Destruction',
        artist: 'Guns N\' Roses',
        genre: 'Rock',
        stock: 2,
        price: 1500,
        img: '/assets/img/disco.png',
    },
    {
        id: 15,
        title: 'The Eminem Show',
        artist: 'Eminem',
        genre: 'Hip Hop',
        stock: 5,
        price: 1500,
        img: '/assets/img/disco.png',
    },
    {
        id: 16,
        title: 'Led Zeppelin IV',
        artist: 'Led Zeppelin',
        genre: 'Rock',
        stock: 16,
        price: 1500,
        img: '/assets/img/disco.png',
    },
    {
        id: 17,
        title: 'Come On Over',
        artist: 'Shania Twain',
        genre: 'Country',
        stock: 12,
        price: 1500,
        img: '/assets/img/disco.png',
    },
    {
        id: 18,
        title: 'The Joshua Tree',
        artist: 'U2',
        genre: 'Rock',
        stock: 20,
        price: 1500,
        img: '/assets/img/disco.png',
    },
    {
        id: 19,
        title: 'The Beatles (White Album)',
        artist: 'The Beatles',
        genre: 'Rock',
        stock: 1,
        price: 1500,
        img: '/assets/img/disco.png',
    },
    {
        id: 20,
        title: 'Appetite for Destruction',
        artist: 'Guns N\' Roses',
        genre: 'Rock',
        stock: 5,
        price: 1500,
        img: '/assets/img/disco.png',
    },
];

const getData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {resolve(products)}, 1600);
    } );
}

const getItemDetails = (itemUrl) => {
    return new Promise((resolve, reject) => { 
        const itemDetails = products.find((item) => item.id === parseInt(itemUrl));
        setTimeout(() => resolve(itemDetails), 800);
    });
}

const getGenreList = (genreUrl) => {
    return new Promise((resolve, reject) => {
        const genreList = products.filter((item) => {
            console.log(item.genre.toLowerCase(), genreUrl.toLowerCase());
            return item.genre.toLowerCase() === genreUrl.toLowerCase()
        });
        setTimeout(() => resolve(genreList) , 1200);
    });
}

export default getData;
export { getGenreList, getItemDetails };