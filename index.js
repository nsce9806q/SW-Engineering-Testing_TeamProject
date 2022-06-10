const express = require('express');
const app = new express();
const ejs = require('ejs');

const mongoose = require('mongoose');

//로컬호스트에 연결
mongoose.connect('mongodb://localhost/team_project', {useNewUrlParser:true});

const BlogPost = require('./models/BlogPost.js');
const { title } = require('process');

app.use(express.urlencoded({extended:true}))
app.use(express.json())

//글쓰기 페이지(create.ejs)에서 post 값 받아서 schema 만듦
app.post('/posts/store', (req,res) =>{
    BlogPost.create(req.body, (error, blogpost) =>{
        res.redirect('/board')        
    })
})

//수정 페이지(edit.ejs)에서 수정 후 해당 값을 db에서 찾아서 update
app.post('/posts/edit/:id', (req,res) =>{
    BlogPost.findByIdAndUpdate({_id:req.params.id}, req.body , (error, blogpost) =>{
        res.redirect('/board/')
    }) 
})

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.path = require('path');

//시작시 index.ejs 페이지로 이동
app.get('/', (req, res) =>{
    res.render('index');
})

//db에서 모든 데이터를 받아서 blogposts에 저장 후 게시판페이지(board.ejs)로 이동
app.get('/board', async(req, res) =>{
    const blogposts = await BlogPost.find({})
    res.render('board',{
        blogposts
    });
})

//글쓰기 클릭시 글쓰기 페이지(create.ejs)로 이동
app.get('/create', (req, res) =>{
    res.render('create');
})

//게시판에서 댓글을 클릭시 해당 댓글을 수정, 삭제할 수 있는 페이지로 이동
app.get('/post/:id', async(req,res)=>{
    const blogpost = await BlogPost.findById(req.params.id)
    res.render('post', {
        blogpost
    })
})

//수정 버튼 클릭시 해당 데이터를 가지고 edit 페이지로 이동
app.get('/post/edit/:id', async(req,res)=>{
    const blogedit = await BlogPost.findById(req.params.id)
    res.render('edit', {
        blogedit
    })
})

//삭제 버튼 클릭시 해당 데이터를 삭제
app.get('/post/delete/:id', async(req,res)=>{
    BlogPost.findByIdAndDelete({_id:req.params.id}, (error, blogpost) =>{
        res.redirect('/board/')
    }) 
})

app.listen(4000, ()=>{
    console.log('App listening on port http://localhost:4000/')
})
