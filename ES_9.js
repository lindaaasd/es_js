
let MyString = " "


for (let i= 1; i <= 100; i++) {

MyString = " " + MyString + i + " "

if ( i % 10 == 0) { 
    MyString = MyString + "/n"
}
}

console.log (MyString)