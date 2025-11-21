// npm run dev
const express = require('express')
const app = express()
const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

const students_list = [
  { id: 1, 
    name: "Борис", 
    facunty: "FIT",
    group: "12", 
    year: "2024",
    specialty: "125",
   },
   { id: 2, 
    name: "Денис",
    facunty: "FIT",
    group: "13", 
    year: "2023",

    specialty: "121",
   },
   { id: 3, 
    name: "Кирило", 
    facunty: "FIT",
    group: "13", 
    year: "2023",
    specialty: "124",
   },
   { id: 4, 
    name: "Олександр",
    facunty: "FIT",
    group: "12", 
    year: "2022",
    specialty: "121",
   },
   { id: 5, 
    name: "Карина",
    facunty: "FIT",
    group: "14", 
    year: "2022",
    specialty: "125",
   },
];


app.get('/students', (req, res) => {
  res.json(students_list);
}); 

//помилковий код:

// let results = students_list;

// app.get('/students/query', (req, res) => {
//   // const id = parseInt(req.params.id); //params шукає елемент за принципом http://localhost:3000/students/х де х-шукане значення
//   const id = parseInt(req.query.id); //цей варіант шукає за принципом http://localhost:3000/students/query?у=х де у-шуканий класс, а х-шукане значення. 
//   const student = students_list.find(search => search.id === id);

//   if (student) {
//     res.json(student);
//   }
//   else{
//     res.status(404).send({ error: "student not found" }); //.json({error:}) також має працювати
//   }
// });

// app.get('/students/query', (req, res) => {
//   const name = req.query.name; 
//   const student = students_list.find(search => search.name.includes(name));

//   if (student) {
//     //res.json(student);    подібний підхід не підходить для пошуку декількох можливих об'єктів, бо повертає лише перший знайдений 
//     results = results.filter(search =>
//       search.name.toLowerCase().includes(name.toLowerCase())
//     );
//     res.json(results);
//   }
//   else{
//     res.status(404).send({ error: "student not found" });
//   }
// });

// // неможливо використовувати шлях '/students/query' для різних параметрів подібним способом. якщо треба зробити пошук по декільком класам, потрібен інший шлях

// app.get('/students/query', (req, res) => {
//   const facunty = req.query.facunty; 
//   const student = students_list.find(search => search.facunty.includes(facunty));

//   if (student) {
//     results = results.filter(search =>
//       search.facunty.toLowerCase().includes(facunty.toLowerCase())
//     );
//     res.json(results);
//   }
//   else{
//     res.status(404).send({ error: "student not found" });
//   }
// });


//масштабований варіант


app.get('/students/query', (req, res) => {
  const { id, name, group, specialty } = req.query;

  let results = students_list;

  if (id) {
    results = results.filter(s => s.id === parseInt(id));
  }

  if (name) {
    results = results.filter(s =>
      s.name.toLowerCase().includes(name.toLowerCase())
    );
  }

  if (group) {
    results = results.filter(s =>
      s.group.toLowerCase() === group.toLowerCase()
    );
  }

  if (specialty) {
    results = results.filter(s =>
      s.specialty.toLowerCase() === specialty.toLowerCase()
    );
  }

  if (results.length === 0){
    return res.status(404).json({error: 'student not found'} );
  }

  res.json(results);
  //json повертає відповідь сервера, що зручніше в деяких випадках, send повертає повідомлення
});




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
  console.log(`http://localhost:` + (port))
})
