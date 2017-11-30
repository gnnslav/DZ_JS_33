
var arr = [];
var newArr = document.getElementById('new');

function arrOut(){
	var elems = '';
	for (var i = 0; i < arr.length; i++){
		elems += arr[i] + ' ';
	}
	newArr.innerHTML = elems;
}

function getIndexElems(){
	var index = document.getElementById('index').value;
	var elem = document.getElementById('elem').value;   
	  
	   	arr[index] = elem;
	   	newArr.innerHTML = arr;
	   
		
}
var button = document.getElementById('button');
button.addEventListener('click', getIndexElems, false);


//metod pop


function getPop(){
	
	arr.pop();
	arrOut();
}
var pop = document.getElementById('pop');
pop.addEventListener('click', getPop, false);


//metod shift


function getShift(){
	
	var elem = document.getElementById('elem').value;  
	arr.shift(elem);
	arrOut();
}
var shift = document.getElementById('shift');
shift.addEventListener('click', getShift, false);

//metod push


function getpush(){
	var elem = document.getElementById('elem').value;  
	arr.push(elem);
	arrOut();
}
var push = document.getElementById('push');
push.addEventListener('click', getpush, false);

//metod unshift

function getunshift(){
	var elem = document.getElementById('elem').value;  
	arr.unshift(elem);
	arrOut();
}

var unshift = document.getElementById('unshift');
unshift.addEventListener('click', getunshift, false);

