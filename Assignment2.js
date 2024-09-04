const classOneStudents = [{name: 'Favour', age: 10, grade: 'A' }, {name: 'Victor', age: 11, grade: 'B'},  
    {name: 'Brave', age: 19, grade: 'C'}, {name: 'Blessed', age: 11, grade: 'D'},
    {name: 'Grace', age: 10, grade: 'E'}, {name: 'Ambrose', age: 9, grade: 'F'},
    {name: 'Pascal', age: 12, grade: 'B'}, {name: 'Peter', age: 10, grade: 'A'}]

const filterByGrade = (classOneStudents, grade) =>{
return classOneStudents.filter((students)=>students.grade ===  grade)
}

const averageAge = (classOneStudents) => {
const totalAge = classOneStudents.reduce ((sum, students) => sum + students.age, 0 )
return totalAge/classOneStudents.length
}
const gradeAStudents = filterByGrade(classOneStudents, 'A')
const midage = averageAge(classOneStudents)
console.log(gradeAStudents)
console.log(midage)