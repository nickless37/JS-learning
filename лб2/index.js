let input = document.getElementById("inp").value            //отримання інпуту

function buttonTest(){
    input = document.getElementById("inp").value
    console.log(input)
    console.log("checkup2")
}

let student = {                       //шаблон обекта "студент"
    name:'error',
    surname: 'error',
    BirthYear: -1,
    mark: -1,
}


function LoadData(){                //вхідні дані (опціонально для подальшої оптимізації та модульності, у цій роботі не обов'язково, але зручно)
    return [
        {
            name: 'student1',
            surname: 'surname1',
            BirthYear: 2006,
            mark: 90,
        },
        {
            name: 'student2',
            surname: 'surname2',
            BirthYear: 2005,
            mark: 99,
        },
        {
            name: 'student3',
            surname: 'surname3',
            BirthYear: 2008,
            mark: 80,
        }
    ]
}

let students = LoadData()             

let innerHTML = `<table id="JavaTable">`;              //створення таблиці як даних
students.map(student=>{                                                                                        //пояснення: для масиву students виконуэться функція map, що бере student, який має властивості name, surname, BirthYear, mark. функція виконується до всього масиву студентів і в кінці кола починає нову строку у "умовному HTML" 
    return `<tr><td>${student.name}</td><td>${student.surname}</td><td>${student.BirthYear}</td><td>${student.mark}</td></tr>`
}).forEach(row=> { innerHTML = innerHTML + row });
innerHTML = innerHTML + `</table>`;

let div = document.getElementById("JavaTableDiv");             //перенос таблиці в штмл
div.innerHTML = innerHTML;





function filter(input){
    innerHTML = `<table id="JavaTableDiv">`;


    if(typeof input == "string"){
        students.map(student=>{                
            return `<tr><td>${student.name}</td><td>${student.surname}</td><td>${student.BirthYear}</td></tr>`
        }).forEach(row=> { innerHTML = innerHTML + row });
    }
    else if(typeof input == "number"){
        students.map(student=>{
            return `<tr><td>${student.mark}</td></tr>`
        }).forEach(row=> { innerHTML = innerHTML + row });
    }
    else if(typeof input == "boolean"){
        students.map(student=>{
            return `<tr><td>${student.name}</td><td>${student.surname}</td><td>${student.BirthYear}</td><td>${student.mark}</td></tr>`
        }).forEach(row=> { innerHTML = innerHTML + row });
    }
    else {console.log("Fatal error")}

    innerHTML = innerHTML + `</table>`;
    div = document.getElementById("JavaTableDiv")
    div.innerHTML = innerHTML;
}





function buttonAction(){
    input = document.getElementById("inp").value


    //перевырка інпуту (isNaN -> Is Not A Number), (trim- обрізає пробіли на початку та в кінці)
    if (!isNaN(input) && input.trim() != "") {                 
        input = Number(input)  //перетворення в числовий формат
        //console.log("введено число " + typeof input)
    }
    else if (input.trim() == ""){
        input = Boolean(input) //перетворення в false (у ДС ця команда перетворює "" в -, а " " в +)
        //console.log("введено пустота " + typeof input)
    }
    else {
        //console.log("введено текст " + typeof input)
    }



    if (typeof input == "string"){
        //console.log("string")
        console.log("філтровано за першими 3 колонками")
    }
    else if(typeof input == "number"){
        //console.log("Number ")
        console.log("філтровано за 4 колонкою")
    }
    else if(typeof input == "boolean"){
        //console.log("boolean ")
        console.log("без фільтру")
    }
    else{
        console.log("error")
        console.log(typeof input)
        console.log(input)
    }
    //console.log("checkup3")

    filter(input)
}