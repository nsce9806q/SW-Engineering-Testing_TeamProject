const express = require('express');
const app = new express();
const ejs = require('ejs');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/team_project', {useNewUrlParser:true});

const BlogPost = require('./models/BlogPost.js');
const { title } = require('process');

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.post('/posts/store', (req,res) =>{
    BlogPost.create(req.body, (error, blogpost) =>{
        res.redirect('/board')        
    })
})

app.post('/posts/edit/:id', (req,res) =>{
    BlogPost.findByIdAndUpdate({_id:req.params.id}, req.body , (error, blogpost) =>{
        res.redirect('/board/')
    }) 
})

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.path = require('path');

app.get('/', (req, res) =>{
    res.render('index');
})

app.get('/board', async(req, res) =>{
    const blogposts = await BlogPost.find({})
    res.render('board',{
        blogposts
    });
})

app.get('/create', (req, res) =>{
    res.render('create');
})

app.get('/post/:id', async(req,res)=>{
    const blogpost = await BlogPost.findById(req.params.id)
    res.render('post', {
        blogpost
    })
})

app.get('/post/edit/:id', async(req,res)=>{
    const blogedit = await BlogPost.findById(req.params.id)
    res.render('edit', {
        blogedit
    })
})

app.get('/post/delete/:id', async(req,res)=>{
    BlogPost.findByIdAndDelete({_id:req.params.id}, (error, blogpost) =>{
        res.redirect('/board/')
    }) 
})

app.listen(4000, ()=>{
    console.log('App listening on port http://localhost:4000/')
})