console.log('This is separate JS file');

// button onclick

// Option 1
//<button onclick="document.body.style.backgroundColor = 'yellow'"> click and see </button>
//  Option 2
function makeRed(){
    document.body.style.backgroundColor = 'red';
 }

//  option 3
const makeBlue =document.getElementById('blue-color');
makeBlue.onclick= blueblue;


function blueblue(){
    document.body.style.backgroundColor='blue';
}



// another  3 option
const makePurple= document.getElementById('purple-color');
makePurple.onclick= function purple_color(){
    document.body.style.backgroundColor= 'purple';
}



// Option 4

const makePinkbtn = document.getElementById('make-pink')
        makePinkbtn.addEventListener('click', makePink1);

        function makePink1(){
            document.body.style.backgroundColor= 'pink';
        }

        // another option 4
        const makeGreenBotton = document.getElementById('make-green');
        makeGreenBotton.addEventListener('click', function makeGreen(){
            document.body.style.backgroundColor= 'green';
        })

        // we are will use sometime
        // Option 4 final 

        document.getElementById('make-goldenRod').addEventListener('click', function(){
            document.body.style.backgroundColor = 'goldenrod';
        })
            


