'use strict'

const fetch = require('node-fetch')
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => {
        let string = ""
        data
            .filter(e => e.title[0] === "s")
            .forEach(e => string += e.body)
        console.log(string)
    })