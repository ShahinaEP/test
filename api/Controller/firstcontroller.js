const express = require('express')
const FirstModel = require('../models/firstmodel')

const getController = async(req, res, next) =>{
    FirstModel.find()
        .then(first =>{
            res.status(200).json({
                massage: 'All data show',
                first
            })
        })
        .catch(error =>{
            console.log(error);
            res.status(500).json({
                message :'Error Occured',
                errorline :error
            })
        })
}

const postController = async(req, res, next) =>{

    const first = new FirstModel({
        name : req.body.name,
        phone : req.body.phone,
        email: req.body.email
    })
    first.save()
        .then(data =>{
            res.status(201).json({
                message: 'Contact Added',
                first: data
            })
        })
        .catch(error => console.log(error) )
}

module.exports={
    getController,
    postController
}