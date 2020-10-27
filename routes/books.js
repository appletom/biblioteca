
const fetch = require('node-fetch');

module.exports = (app, fetch) => {

    app.get("/routes/books", async (req, res) => {
        const { author, title } = req.body;
        const params = `${title ? "title" + title: ''}
                        ${author ? "&author" + author: ''}`
    
        fetch(`http://openlibrary.org/search.json?${params}&limit=10`)
        .then(result => result.json());
        .then(data => res.json(data));
    })


}