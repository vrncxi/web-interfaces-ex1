const express = require('express');
const router = express.Router();

const gradesData = {
    grades: [
  
        {
            courseId: 1,
            studentId: 2,
            grade: 3
            
        },
        {
            courseId: 2,
            studentId: 2,
            grade: 3
            
        },
        
        {
            courseId: 1,
            studentId: 1,
            grade: 4
            
        },
        {
            courseId: 1,
            studentId: 3,
            grade: 5
            
        },
        {
            courseId: 2,
            studentId: 3,
            grade: 0
            
        },
        
    ]
}

//router.get('/', (req, res) => { res.json(gradesData)});
router.get('/', (req, res) => {
    const resultGrades = gradesData.grades.filter(item => {
        if (item.grade != 0) {
            return true;
        }else{
            return false;
        }
    });
    res.json(resultGrades);
});

router.get('/students/:studId', (req, res) => {
    const resultStudent = gradesData.grades.filter(item => {
        if (item.studentId == req.params.studId) {
            return true;
        }
        else {
            return false;
        }
    });
    
        res.json(resultStudent);
    
});

router.get('/courses/:courseId', (req, res) => {
    const resultCourses = gradesData.grades.filter(item => {
        if (item.courseId == req.params.courseId) {
            return true;
        }
        else {
            return false;
        }
    });
    
        res.json(resultCourses);
    
});

router.post('/', (req, res) => {

    gradesData.grades.push({
        courseId: req.body.courseId,
        studentId: req.body.studentId,
        grade:  req.body.grade
    })
    
    res.json(gradesData);
});

router.put('/', (req, res) => {
    let toUpdateId;
    gradesData.grades.forEach((item, i) => {
        if (item.courseId == req.body.courseId && item.studentId == req.body.studentId) toUpdateId = i;
    });

    gradesData.grades[toUpdateId].grade = req.body.grade;
    res.json(gradesData);
});

router.delete('/', (req, res) => {
    gradesData.grades.forEach((item, i) => {
        if (item.courseId == req.body.courseId && item.studentId == req.body.studentId) {
            gradesData.grades.splice(i, 1);
            return;
        }
    });
    
    res.json(gradesData);
    
});


module.exports = router;