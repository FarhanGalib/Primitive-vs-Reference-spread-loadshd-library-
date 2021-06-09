
let arr1= [1,2,3];
let arr2 = [4,5,6];
let copiedArrayOfArr1 = [...arr];
console.log(copiedArrayOfArr1);

let arr1_arr2_concat=[...arr1, ...arr2]; 
console.log(arr1_arr2_concat);


let language ={
    name: 'javascript',
    age: 36,
};
let language2 =[...language];
console.log(language);
console.log(language2);


let employee = {
    name: "Farhan",
    language: ['Bangla', 'English'],
}

let employee2 = _.cloneDeep(employee);//LOADSH
employee.language.push('Hindi');
console.log(employee);
console.log(employee2);

