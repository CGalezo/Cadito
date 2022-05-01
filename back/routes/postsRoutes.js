const express = require('express')
const router = express.Router()

const postSchema = require('../models/posts')

router.post('/', (req, res) => {
    const newPost = new postSchema({
        owner_id:req.body.owner_id,
        img_url:req.body.img_url,
        display_name: req.body.display_name,
        description: req.body.description,
        price: req.body.price
    })
    newPost.save()
    .then(data =>{
        res.json(data)
    })
    .catch(error=>{
        res.json(error)
    })
})

router.get('/', async (req, res) => {
    if(req.query.user_id){
        await postSchema.find({owner_id:req.query.user_id})
        .then(data =>{
            res.json(data)
        })
        .catch(error=>{
            res.json(error)
        })
    }else if(req.query.post_id){
        await postSchema.findOne({_id:req.query.post_id})
        .then(data =>{
            res.json(data)
        })
        .catch(error=>{
            res.json(error)
        })
    }
    
})

router.get('/recent', async (req, res) => {
    
    await postSchema.find({}).sort('-date').limit(10)
    .then(data =>{
        res.json(data)
    })
    .catch(error=>{
        res.json(error)
    })
})

module.exports = router