const teacherJay = {
    name: '제이',
    age: 30,
    teacherJayscript: function(student){
        student.gainExp();
    }
}

const studentBbo = {
    name: '뽀',
    age: 20,
    exp: 0,
    gainExp: function(){
        this.exp++;
    }
}
console.log(studentBbo.exp);
teacherJay.teacherJayscript(studentBbo);
console.log(studentBbo.exp);