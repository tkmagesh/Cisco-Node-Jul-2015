var express = require('express');
var router = express.Router();

var taskList = [
    {id :1, name : "Watch a movie", isCompleted : false},
    {id :2, name : "Plan for dinner", isCompleted : true},
    {id :3, name : "Master JavaScript", isCompleted : false},
]

router.get('/', function(req, res, next) {
  res.render('tasks/index', { title : "Task Manager",  list : taskList });
});

router.get('/new', function(req, res, next){
    res.render('tasks/new');
});

router.post('/new', function(req, res, next){
    var newTaskName = req.body.taskName;
    var newId = taskList.reduce(function(result, task){
       return result > task.id ? result : task.id
    },0) + 1;
    var newTask = {
        id : newId,
        name : newTaskName,
        isClosed : false
    };
    taskList.push(newTask);
    res.redirect('/tasks');
});

router.get('/completed', function(req, res, next){
    res.send('All completed tasks will be displayed here');
});

module.exports = router;
