const express = require ('express');
const router =express.Router();
const Task = require('../models/task');


router.get('/', async (req, res) => {

    const task = await Task.find();

    //console.log(task);
    res.json(task);
});

router.get('/:id', async(req,res)=>{
    const task = await Task.findById(req.params.id);
    res.json(task);
});

router.post('/', async (req, res) => {
    // console.log(req.body);
    const {id,title,description}= req.body;
    const task = new Task ({id,title,description});
    // console.log(task);
    await task.save();
    res.json({status:'TASK SAVED'});
}
);

router.put('/:id', async (req,res)=>{
    const {title,description}=req.body;
    const newTask = {title,description};
    await Task.findByIdAndUpdate(req.params.id,newTask);
    // console.log(req.params.id);
    res.json('TASK Updated');
}
);

router.delete('/:id',async(req,res)=>{
    await Task.findByIdAndRemove(req.params.id);
    res.json({status:'Task Deleted'});
});

module.exports=router;