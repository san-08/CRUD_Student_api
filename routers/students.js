const express = require('express')
const router = express.Router()
const student = require('../models/student')

router.get('/', async(req,res) =>{
    try{
          const students = await student.find()
          res.json(students)
    }
    catch(err){
        res.send(err)
    }
})

//single field name only

router.get('/:name', async(req,res) =>{
    try{
        //const student1 = await student.findOne({name:req.params.name})
        res.json(await student.findOne({name:req.params.name}))
        //res.json(student1)
    }catch(err){
        res.send(err)
    }
})

router.patch('/:name', async(req,res) =>{
    try{
        const student1 = await student.findOne({name:req.params.name})
        student1.rollno = req.body.rollno
        const a1 = await student1.save()
        res.json(a1)   

    }catch(err)
    {
        res.send(err)
    }
})

router.delete('/:rollno', async(req,res) =>{
    try{
        const students = await student.deleteOne({rollno:req.params.rollno})
        if(student == null)
        {
            res.send('name not found')
        }
        res.send(json)

    }catch(err){
        res.send(err)
    }
})


router.post('/', async function (req,res) {
        const Student = new student({
            name: req.body.name,
            rollno: req.body.rollno,
            age: req.body.age
        })

        try{
            const a1 = await Student.save()
            res.json(a1)

        }
        catch(err)
        {
            res.send(err)
        }
    })

    
module.exports = router