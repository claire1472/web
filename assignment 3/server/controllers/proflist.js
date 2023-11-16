var express = require('express');
var router = express.Router();
//const { router } = require('../config/app');
let prof = require('../models/proflist');

module.exports.Dislayproflist = async (req,res,next)=>{ //< Mark function as async
    try{
        const profList = await prof.find(); //< Use of await keyword
        res.render('prof/list', {
            title: 'prof List',
            profList: profList
        });
    }catch(err){
        console.error(err);
        //Handle error
        res.render('prof/list', {
            error: 'Error on server'
        });
    }
};

module.exports.Addprof = async (req,res,next)=>{
    try{
        res.render('prof/add',
            {
                title:'Add prof'
            })
    }
    catch(err)
    {
        console.error(err);
        res.render('prof/list',
            {
                error: 'Error on the server'
            });
    }
};

module.exports.Processprof = async (req,res,next)=>{
    try{
        let newprof = prof({
            "FullName":req.body.FullName,
            "Program": req.body.Program,
            "Email": req.body.Email,

        });
        prof.create(newprof).then(() =>{
            res.redirect('/proflist')
        })
    }
    catch(error){
        console.error(err);
        res.render('prof/list',
            {
                error: 'Error on the server'
            });
    }
};

module.exports.Editprof = async (req,res,next)=>{
    try{
        const id = req.params.id;
        const profToEdit = await prof.findById(id);
        res.render('prof/edit',
            {
                title:'Edit prof',
                prof:profToEdit
            })
    }
    catch(error){
        console.error(err);
        res.render('prof/list',
            {
                error: 'Error on the server'
            });
    }
}

module.exports.ProcessEditprof= (req,res,next)=>{
    try{
        const id = req.params.id;
        let updatedprof = prof({
            "_id":id,
            "FullName":req.body.FullName,
            "Program": req.body.Program,
            "Email": req.body.Email,


        });
        prof.findByIdAndUpdate(id,updatedprof).then(()=>{
            res.redirect('/proflist')
        });
    }
    catch(error){
        console.error(err);
        res.render('prof/list',
            {
                error: 'Error on the server'
            });
    }
}

module.exports.Deleteprof= (req,res,next)=>{
    try{
        let id = req.params.id;
        prof.deleteOne({_id:id}).then(() =>
        {
            res.redirect('/proflist')
        })
    }
    catch(error){
        console.error(err);
        res.render('prof/list',
            {
                error: 'Error on the server'
            });
    }
}