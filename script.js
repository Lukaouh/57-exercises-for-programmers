
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

//     let Int = parseInt(firstNum);
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
