const buttons = document.querySelectorAll('.button'); /* we got a node list */
const body = document.querySelector("body")

buttons.forEach(function(button){
    console.log(button);
    button.addEventListener('click', function(e){
        /* e is a event obj and it carries many properties*/
        console.log(e);
        console.log(e.target);
        if(e.target.id === 'orange'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'pink'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'green'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'red'){
            body.style.backgroundColor = e.target.id;
        }
    });
});

const refresh = document.querySelector('.refresh')

refresh.addEventListener('click', function(){
    body.style.backgroundColor = '';
})