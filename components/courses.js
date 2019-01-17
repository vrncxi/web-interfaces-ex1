const express = require('express');
const router = express.Router();


const courseData ={
    courses: [
  
        {
            id: 1,
            name : "Math",
            description: "Learn how to count"
            
        },
        {
            id: 2,
            name : "PE",
            description: "Physical exercises"
            
        },
        {
            id: 3,
            name : "Music",
            description: "Singing and playing"
            
        },
        
        
    ]
}

router.get('/', (req, res) => { res.json(courseData)});

router.get('/:courseId', (req, res) => {
    const resultCourse = courseData.courses.find(item => {
        if (item.id == req.params.courseId) {
            return true;
        }
        else {
            return false;
        }
    });
    
        res.json(resultCourse);
    
});

router.post('/', (req, res) => {

    courseData.courses.push({
        id: courseData.courses.length + 1,
        name: req.body.name,
        description: req.body.description
    })
    
    res.json(courseData);
});

router.put('/', (req, res) => {
    let toUpdateId;
    courseData.courses.forEach((item, i) => {
        if (item.id == req.body.id) toUpdateId = i;
    });

    courseData.courses[toUpdateId] = req.body;
    res.json(courseData);
});

router.delete('/:courseId', (req, res) => {
    courseData.courses.forEach((item, i) => {
        if (item.id == req.params.courseId) {
            courseData.courses.splice(i, 1);
            return;
        }
    });
    
    res.json(courseData);
    
});

module.exports = router;