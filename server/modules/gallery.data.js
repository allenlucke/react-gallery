const express = require('express');


const galleryItems = [
    { id: 1, title: 'Goat Pic', path: 'images/goat_small.jpg', description: 'Photo of a goat taken at Glacier National Park.', likes: 0 },
    { id: 2, title: 'Julia in Blanket', path: 'images/img1.jpg', description: 'Photo my wife took of my daughter at about 7 weeks old.', likes: 0 },
    { id: 3, title: 'Together at last.', path: 'images/img2.jpg', description: 'Photo of us right before we left the hospital.', likes: 0 },
    { id: 4, title: 'Hello World', path: 'images/img3.jpg', description: 'Photo I took of Julia at about 5 weeks.', likes: 0 },
    { id: 5, title: 'a test', path: 'https://images.unsplash.com/photo-1575629521977-9c273642c0a8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80', description: '', likes: 0 }
];

module.exports = galleryItems;