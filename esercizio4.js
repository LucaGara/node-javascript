'use strict'

const fetch = require('node-fetch')
let removeSpace = (string) => {
    for(let i; i<string; i++){
        if (string[i] === " "){
            string[i] = ""
        }
    }
    return string
}
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => {
        const list = []
        data
            .forEach(e => e.body = removeSpace(e.body))
        data    
            .filter(e => e.body.length % 3 === 0)
            .forEach(e => list.push(e.id))
        console.log(list)
    })