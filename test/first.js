const express = require('express');
const app = express();
const port = 3000;


app.get('/', function (req, res) {
    res.send("<h1>hello world</h1>")
    let arr = ['c', 'a', 'b'];
    const sort = arr.sort();
    console.log('sort: ', sort);
    const reverse = arr.reverse();
    console.log('reverse: ', reverse);

    const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

    // const result = words.filter(function(word){
    //     return word.length > 6;
    // });

    const result = words.filter(word => word.length > 6);

    console.log('result: ', result);

    let userList = [];
    let user = {};
    for (var i = 0; i < 3; i++) {
        user.firstName = 'mike' + i;
        user.lastName = 'won' + i;
        user.email = 'm' + i + 'm.com';
        userList.push(user);
    }

    console.log('userList: ', userList);

    let mapList = userList.map(user => {
        return {
            fullName: user.lastName + user.firstName,
            firstName: user.firstName
        }
    });

    console.log('mapList: ', mapList);

    let points = [40, 100, 1, 5, 25, 10];
    // let sum = points.reduce((total, currentValue) => {
    //     return total + currentValue;
    // }, 0);

    let sum = points.reduce((total, currentValue) => total + currentValue);
    console.log('sum: ', sum);

    // spread operator
    let arr1 = [4, 5, 6];
    let arr2 = [1, 2, 3];
    let arr3 = [...arr2, ...arr1];
    console.log('arr3: ', arr3);

    let cd = "CD";
    let alphabet = ['A', 'B', ...cd];
    console.log('alphabet: ', alphabet);


    const getPerson = () => {
        return {
            firstName: "John",
            lastName: "Doe",
            age: 500
        };
    }

    const {fn, ln} = getPerson();
    console.log('fn: ', fn);
    console.log('ln: ', ln);

});


app.listen(port, () => {
    console.log('Express server listen..')
});

(() => {
    const getPerson = () => {
        return {
            firstName: "John",
            lastName: "Doe",
            age: 500
        };
    }

    const {firstName, lastName} = getPerson();
    console.log('firstName: ', firstName);
    console.log('lastName: ', lastName);


    const displayFullName = ({firstName, lastName}) => console.log(`${firstName}, ${lastName}`);
    displayFullName(getPerson());


    const getScores = () => [70, 80, 90];

    let scores = getScores();

    // let x = scores[0], y = scores[1], z = scores[2];
    var [x, y, z] = scores;

    console.log('x: ', x);
    console.log('y: ', y);
    console.log('z: ', z);

    var [x, y, ...args] = getScores();
    console.log(args);

    const getProfile = () => ['John', 'Doe', ['Red', 'Green', 'Blue']];

    let [firstName1, lastName1, [color1, color2, color3]] = getProfile();
    console.log('color1: ', color1);

    const say = (msg) => {
        if(msg != undefined)
            console.log('msg: ', msg);
        else
            console.log('no parameter');
    }
    
    say();

    const sum = (...args) => {
        let total = 0;
        for(let x of args) {
            total += x;
        }

        return total;
    }

    let s = sum(3, 2, 5, 7, 4, 23);
    console.log('s: ', s);


    const promise = new Promise((resolve, reject) => {
        if(true) {
            resolve('result');
        } else {
            reject(new Error('error'));
        }
    });

    const myFunction = async () => {
        const r = await asyncFunction();
    }


    class Car {
        constructor(modelName, modelYear, type, price) {
            this.modelName = modelName;
            this.modelYear = modelYear;
            this.type = type;
            this.price = price;
        }

        getModelName() {
            return this.modelName;
        }

        setModelName(modelName) {
            this.modelName = modelName;
        }
    }

    let ionic = new Car("ionic", "2022", "e", "4000");
    let genesis = new Car("genesis", "2022", "g", 8000);
    console.log('ionic: ', ionic);
    let modelName = ionic.getModelName();
    console.log('modelName: ', modelName);
    ionic.setModelName('ionic4500');
    console.log('modelName: ', ionic.getModelName());

    class ElectricCar extends Car {
        constructor(modelName, modelYear, price, chargeTime) {
            super(modelName, modelYear, "e", price);
            this.chargeTime = chargeTime;
        }

        setChargeTime(time) {
            this.chargeTime = this.chargeTime;
        }

        getChargeTime() {
            return this.chargeTime;
        }
    }


    var regexp = /World/;
    // var regexp = new RegExp("World");

    var str = "Hello World !";
    console.log(regexp.test(str))
    console.log(str.search(regexp));
})()