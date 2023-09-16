const buttons = document.querySelectorAll('.button');
//console.log(buttons)

const body= document.querySelector("body");

buttons.forEach(function (button){
    //console.log(button)
    button.addEventListener('click',function(change){
        if (change.target.id === 'blue') {
            body.style.background=change.target.id;
        }
        if (change.target.id === 'red') {
            body.style.background=change.target.id;
        }
        if (change.target.id === 'yellow') {
            body.style.background=change.target.id;
        }
        if (change.target.id === 'green') {
            body.style.background=change.target.id;
        }
    })
})

