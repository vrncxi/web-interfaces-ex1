const express = require('express');
const app = express();
const port = 3000;
const studentsComponent = require('./components/students');
const coursesComponent = require('./components/courses');
const courseGradesComponent = require('./components/course-grades');
const bodyParser = require('body-parser');

/*app.get('/students', (req, res) => {

  const studentData =[
  
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
        id: 1,
        name : {
          firstname: "Tom",
          lastname: "R"
        },
        address: " Road st 15 12a",
        class: "i13",
        
    },
    {
      id: 1,
      name : {
        firstname: "Sam",
        lastname: "I"
      },
      address: " Road st 15 12a",
      class: "w3",
      
  },
      
  ];
  
  res.json(studentData);
  
  
  });
  */

app.use(bodyParser.json());

app.use('/course-grades', courseGradesComponent );
app.use('/students', studentsComponent);

app.use('/courses', coursesComponent);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))