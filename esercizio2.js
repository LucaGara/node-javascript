'use strict'

const fetch = require('node-fetch')
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => {
        const list = []
        data
            .filter(e => e.userId%2 !== 0)
            .forEach(e => list.push(e.id))
        console.log(list)
    })