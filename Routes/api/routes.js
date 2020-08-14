const express = require('express')
const router = express.Router();
const articles = require('../../articles');

//Get all Articles
router.get('/', (req, res) => res.json(articles))

//Get Single Articles 
router.get('/:id', (req, res) => {
    const found =  articles.some(article => article.id === parseInt(req.params.id));
    if(!found) res.status(400).json({message:`No article with the id of ${req.params.id}`});
    res.json(articles.filter(article => article.id === parseInt(req.params.id)));
})


module.exports = router