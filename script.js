
// Saying Hello; First challeng of the book!
// function greeting(){
//     window.prompt('What is your name?');
//     document.write(` Hello, ${window.prompt()}, nice to meet you!`);
// }
// greeting();



//Counting the Number of Characters; Second challeng of the book!
// function Counter(){
//     if(window.prompt() == ''){
//         window.alert('Please fill the gap')
//     }
//     window.prompt("What is the input string?"); 
//     document.write(`${window.prompt()} has ${window.prompt().length} Characters.`)
// }
// Counter();


//Printing qoutes; Third challeng of the book;
// function Quotes(){
//     let quote = window.prompt('What is the quote?');
//     let author = window.prompt('Who said it?');
//     document.write(`${author} says, "${quote}"`);
    
// }


//Mad Lib; Fourth challeng of the book;
// function HilariousStory(){
//     let Noun = document.getElementById('noun').value;
//     let Verb = document.getElementById('verb').value;
//     let Adj = document.getElementById('adj').value;
//     let Adverb = document.getElementById('adverb').value;
//     let Story = document.getElementById('story');

//     if(Noun == '' || Verb == '' || Adj == '' || Adverb == ''){
//         window.alert('Please fill the each gap...');
//     }else{
//         Story.innerHTML = (`Do you ${Verb} Your ${Adj} ${Noun} ${Adverb} ? That's Hilarious!`);
//     }

// }
// function SaveDate(){
//     sessionStorage.setItem('Noun', noun.value)
//     sessionStorage.setItem('Verb', verb.value)
//     sessionStorage.setItem('Adj', adj.value)
//     sessionStorage.setItem('Adverb', adverb.value)
// } 
// function getItems(){
//     noun.value = sessionStorage.getItem('Noun');
//     verb.value = sessionStorage.getItem('Verb');
//     adj.value = sessionStorage.getItem('Adj');
//     adverb.value = sessionStorage.getItem('Adverb');
// }
// getItems();
// SaveDate();



// Simple Math; Fifth challeng of the book!
// function Math(){
//     let firstNum = document.getElementById('num1').value;
//     let secondNum = document.getElementById('num2').value;

//     let Sum = document.getElementById('plus');
//     let Minus = document.getElementById('min');
//     let Times = document.getElementById('times');
//     let Div = document.getElementById('div');

//     let Int = seInt(firstNum);
//     let Int2 = parseInt(secondNum);
//     if(Int < 0 || Int2 < 0){
//         window.alert('Please enter positive numbers')

//     }else if(firstNum == '' || secondNum == ''){
//         window.alert('Please enter numbers')
//     }else{
//         Sum.textContent = (`${Int} + ${Int2} = ${Int + Int2}`);
//         Minus.textContent = (`${Int} - ${Int2} = ${Int  - Int2}`);
//         Times.textContent = (`${Int} * ${Int2} = ${Int * Int2}`);
//         Div.textContent = (`${Int} / ${Int2} = ${Int  / Int2}`);
    
//     }
//     SaveInfo();
// }
// function SaveInfo(){
//     sessionStorage.setItem('Sum', plus.textContent)
//     sessionStorage.setItem('Minus', min.textContent)
//     sessionStorage.setItem('Times', times.textContent)
//     sessionStorage.setItem('Div', div.textContent)
// }
// function Getitem(){
//     plus.textContent = sessionStorage.getItem('Sum')
//     min.textContent = sessionStorage.getItem('Minus')
//     times.textContent = sessionStorage.getItem('Times')
//     div.textContent = sessionStorage.getItem('Div')

// }

// Getitem();


//Retirement Calculator; Sixth challeng of the book;
// function Retirement(){
//     const Nowday = document.getElementById('nowday').value;
//     const Retire = document.getElementById('retire_age').value;
//     const Until = document.getElementById('until');
//     const Willbe = document.getElementById('willbe');

//     const date = new Date().getFullYear();
//     const int = parseInt(Nowday);
//     const int1 = parseInt(Retire);

//     if(int < 0 || int1 < 0){
//         window.alert('Please enter positive Numbers !')
//     }else{
//         Until.innerHTML = (`You have ${int1 - int} years left until you can retire..":)`)
//         Willbe.innerHTML = (`Its ${date}, so you can retire in ${date + (int1 - int)}.. `)

//     }

// }

//Area of a rectangular room 7th challeng of book;
// function rectangle(){
//     let Width = parseInt(document.getElementById('width').value);
//     let Height = parseInt(document.getElementById('height').value);

//     let Deminsion = document.getElementById('deminsion');
//     let Feet = document.getElementById('square_feet');
//     let Meters = document.getElementById('square_meters');
//     let formula = 0.09290304;

//     if(Width <= 0 || Height <= 0  || Width == '' || Height == ''){
//         window.alert('Please enter real Area ...')
//     }else{
//         Deminsion.innerHTML = (`Your entered demision of ${Height} feet by ${Width} feet. `)
//         Feet.innerHTML = (`The area is ${Width * Height} square feet.`);
//         Meters.innerHTML = (`${Width * Height * formula} Square meters.`);
//         SaveArea();

//     }
// }

// function SaveArea(){
//     sessionStorage.setItem('Deminsion',  deminsion.innerHTML);
//     sessionStorage.setItem('Feet',  square_feet.innerHTML);
//     sessionStorage.setItem('Meters', square_meters.innerHTML)
// }

// function getItem(){
//     deminsion.innerHTML = sessionStorage.getItem('Deminsion');
//     square_feet.innerHTML = sessionStorage.getItem('Feet');
//     square_meters.innerHTML = sessionStorage.getItem('Meters')
// }

// getItem();


 // Get reference to the input field and display value element
//  Height.addEventListener('input', function() {
//     const Width = document.getElementById('Width').value;
//     const Height = document.getElementById('Height').value;

//     const displayValue = document.getElementById('displayValue');
//     const displayValue1 = document.getElementById('displayValue1');
//     let num = 0.09290304
//     if(Width < 0 || Height <  0){
//        window.alert("Please enter real area of the Room")
//     }else{
//         displayValue.textContent = (`You entered deminsion of ${Width} feet by ${Height} feet,
//         The area is ${Width * Height} Square Feet..`);
//         displayValue1.textContent = (`${Width * Height * num} Square meters..`);
//         saveMeters();
//     }

// });

// function saveMeters(){
//     sessionStorage.setItem('Feet', displayValue.textContent );
//     sessionStorage.setItem('Meters', displayValue1.textContent );
// }
// function getMeters() {
//     displayValue.textContent = sessionStorage.getItem('Feet');
//     displayValue1.textContent = sessionStorage.getItem('Meters')
// }
// getMeters();

//Pizza party 8th challeng of the book;
// pizza.addEventListener('input', function() {
//     const People = document.getElementById('people').value;
//     const Pizza = document.getElementById('pizza').value;  
//     const DisplayPeople = document.getElementById('displayPeople');
//     //each pizzas have 8 pieces !!!!
//     const Num = 8;
//     //WholeNum gets us rounded number of pieces of pizza;
//     const result = ((Pizza * Num) / People);
//     const wholeNum = Math.floor(result);
//     if(People < 0 || Pizza < 0){
//         window.alert('Please enter real number of People and Pizza')
//     }else{ 
//     DisplayPeople.textContent = (`${People} people with ${Pizza} pizzas
//     Each person gets ${wholeNum} piecies of pizza,
//     There are ${(Pizza * Num) - (wholeNum * People)} leftover pieces.`);

//     }
// });


//9th task of the book!! Paint Calculator!!!
// height.addEventListener('input', function(){
//     const Width = parseInt(document.getElementById('width').value);
//     const Height = parseInt(document.getElementById('height').value);
//     //1gallon cover 350feet square.
//     const Gallon = 350 ;
//     const Paragraph = document.getElementById('para');
//     //Math.ceil round up numbers// example: it will round 3.14 to 4//
//     const finallResult = Math.ceil((Width * Height) / Gallon)
//     if(Width < 0 || Height < 0){
//         window.alert('Please enter real size of the room')

//     }else{
//         Paragraph.innerHTML = (`You will need to purchase ${finallResult} gallons of paint to cover ${Width * Height} square feet`);
//         saveDate();
//     }

// })
// function saveDate(){
//     sessionStorage.setItem('info', para.innerHTML);
// }
// function getItem(){
//     para.innerHTML = sessionStorage.getItem('info');
// }
// getItem();


//Self-Checkout 10th challeng of the book;
// quanty_3.addEventListener('input', function(){
//     let Item1 = parseInt(document.getElementById('item_1').value);
//     let Quanty1 = parseInt(document.getElementById('quanty_1').value);
//     let Item2 = parseInt(document.getElementById('item_2').value);
//     let Quanty2 = parseInt(document.getElementById('quanty_2').value);
//     let Item3 = parseInt(document.getElementById('item_3').value);
//     let Quanty3 = parseInt(document.getElementById('quanty_3').value);
//     //In this Task tax rate is 5.5% global;
//     const Per = 5.5;
   
//         const Sub = document.getElementById('sub')
//         .innerHTML = ((Item1 * Quanty1) + (Item2 * Quanty2) + (Item3 * Quanty3));
    
//         const Tax = document.getElementById('tax')
//         .innerHTML = ((Sub * Per) / 100);
    
//         const Total= document.getElementById('total')
//         .innerHTML = ( Sub + Tax);
   
  
// })
//Task 11th of the book; Currency Conversion
// euro.addEventListener('input', function(){
//     const Euro = document.getElementById('euro').value;
//     const Value = (Euro * 2.7770) / 2.6850;
//     const RoundedNumber = Value.toFixed(1);

//     const Result = document.getElementById('result')
//     .textContent = ('you convert euro to dollar' + RoundedNumber ) 
// })