const express = require('express');
const router = express.Router();

const studentData = {
    students: [
  
        {
            id: 1,
            name : {
              firstname: "Peter",
              lastname: "P"
            },
            address: " Road st 15 12a",
            class: "w123",
            
        },
        {
          id: 2,
          name : {
            firstname: "Tom",
            lastname: "R"
          },
          address: " Road st 15 12a",
          class: "i13",
          
        },
        {
        id: 3,
        name : {
          firstname: "Sam",
          lastname: "I"
        },
        address: " Road st 15 12a",
        class: "w3",
        
        },
        
    ]
}

router.get('/', (req, res) => { res.json(studentData)});

router.get('/:studId', (req, res) => {
    const resultStudent = studentData.students.find(item => {
        if (item.id == req.params.studId) {
            return true;
        }
        else {
            return false;
        }
    });
    
        res.json(resultStudent);
    
});

router.post('/', (req, res) => {

    studentData.students.push({
        id: studentData.students.length + 1,
        name: {firstname: req.body.name.firstname,
                lastname: req.body.name.lastname},
        
        address: req.body.address ,
        class: req.body.class
    })
    
    res.json(studentData);
});

router.put('/', (req, res) => {
    let toUpdateId;
    studentData.students.forEach((item, i) => {
        if (item.id == req.body.id) toUpdateId = i;
    });

    studentData.students[toUpdateId] = req.body;
    res.json(studentData);
});

router.delete('/:studId', (req, res) => {
    studentData.students.forEach((item, i) => {
        if (item.id == req.params.studId) {
            studentData.students.splice(i, 1);
            return;
        }
    });
    
    res.json(studentData);
    
});


module.exports = router;