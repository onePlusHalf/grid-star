document.addEventListener('mouseover', function(event) {
    if(event.target.tagName === 'DIV') {
        event.target.style.backgroundColor = 'green';
    console.log(event.target.style.transform);
        event.target.style.transform = event.target.style.transform? '': 'rotate(10deg)';
    console.log(event.target.style.transform);
        //event.target.style.display = 'none';
    }
    console.log(event.target.style.display);
});

window.onresize = function() {

    console.log(window.innerWidth);
}

const main = document.getElementsByTagName('main');
console.log(main[0]);

for(let i = 0;i<100;i++){
	let div = document.createElement('div');
	main[0].appendChild(div);
}

console.log(window.innerWidth);
