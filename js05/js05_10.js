let person = 'harin';

function print(){
    let person2 = 'jay';

    function innerPrint(){
        console.log(person);
        console.log(person2);
    }
    innerPrint();
    console.log('print finished');
}

print();
console.log('finished');