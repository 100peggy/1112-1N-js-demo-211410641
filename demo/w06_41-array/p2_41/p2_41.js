import { students, sdata } from './data_41.js';

//for sdata

console.log('sdata', sdata);

sdata.sort( function(a,b){return b-a});
console.log('sdata sorted', sdata);
console.log(`The hightest score: ${sdata[0]}`);
console.log(`The lowest score: ${sdata[sdata.length-1]}`);

console.log('students', students);

//for students

const students2 = students.map((student) => {
    //student.role = 'student';
    return {...student, role: 'student'};
});

console.log('students2 original', students2);

students2.sort(function(a,b){return a.score - b.score});
console.log('students2 sorted', students2);

console.log(`The lowest score: ${students2[0].score}`);
console.log(`The highest score: ${students[students2.length-1].score}`);