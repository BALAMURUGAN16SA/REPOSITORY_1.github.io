var a = 0;
var x = 0;
var o = 0;

var pos = 
{
	'1' : '',
	'2' : '',
	'3' : '',
	'4' : '',
	'5' : '',
	'6' : '',
	'7' : '',
	'8' : '',
	'9' : ''
};

function f(id){
	var bid = (id.id); //this refers to object that executes current piece of code.

	if(bid == "B1"){
		var v = document.getElementById('B1').innerHTML;
		if((a % 2 == 0) && (v == '')){
			document.getElementById('B1').innerHTML = "X";
		}
		if(v != '')
			a--;
		pos['1'] = document.getElementById('B1').innerHTML;
		xw();
		if((a == 8) && (x+o == 0))
			dw();
	}

	else if(bid == "B2"){
		var v = document.getElementById('B2').innerHTML;
		if((a % 2 == 0) && (v == '')){
			document.getElementById('B2').innerHTML = "X";
		}
		if(v != '')
			a--;
		pos['2'] = document.getElementById('B2').innerHTML;
		xw();
		if((a == 8) && (x+o == 0))
			dw();
	}

	else if(bid == "B3"){
		var v = document.getElementById('B3').innerHTML;
		if((a % 2 == 0) && (v == '')){
			document.getElementById('B3').innerHTML = "X";
		}
		if(v != '')
			a--;
		pos['3'] = document.getElementById('B3').innerHTML;
		xw();
		if((a == 8) && (x+o == 0))
			dw();
	}

	else if(bid == "B4"){
		var v = document.getElementById('B4').innerHTML;
		if((a % 2 == 0) && (v == '')){
			document.getElementById('B4').innerHTML = "X";
		}
		if(v != '')
			a--;
		pos['4'] = document.getElementById('B4').innerHTML;
		xw();
		if((a == 8) && (x+o == 0))
			dw();
	}

	else if(bid == "B5"){
		var v = document.getElementById('B5').innerHTML;
		if((a % 2 == 0) && (v == '')){
			document.getElementById('B5').innerHTML = "X";
		}
		if(v != '')
			a--;
		pos['5'] = document.getElementById('B5').innerHTML;
		xw();
		if((a == 8) && (x+o == 0))
			dw();
	}

	else if(bid == "B6"){
		var v = document.getElementById('B6').innerHTML;
		if((a % 2 == 0) && (v == '')){
			document.getElementById('B6').innerHTML = "X";
		}
		if(v != '')
			a--;
		pos['6'] = document.getElementById('B6').innerHTML;
		xw();
		if((a == 8) && (x+o == 0))
			dw();
	}

	else if(bid == "B7"){
		var v = document.getElementById('B7').innerHTML;
		if((a % 2 == 0) && (v == '')){
			document.getElementById('B7').innerHTML = "X";
		}
		if(v != '')
			a--;
		pos['7'] = document.getElementById('B7').innerHTML;
		xw();
		if((a == 8) && (x+o == 0))
			dw();
	}

	else if(bid == "B8"){
		var v = document.getElementById('B8').innerHTML;
		if((a % 2 == 0) && (v == '')){
			document.getElementById('B8').innerHTML = "X";
		}
		if(v != '')
			a--;
		pos['8'] = document.getElementById('B8').innerHTML;
		xw();
		if((a == 8) && (x+o == 0))
			dw();
	}

	else if(bid == "B9"){
		var v = document.getElementById('B9').innerHTML;
		if((a % 2 == 0) && (v == '')){
			document.getElementById('B9').innerHTML = "X";
		}
		if(v != '')
			a--;
		pos['9'] = document.getElementById('B9').innerHTML;
		xw();
		if((a == 8) && (x+o == 0))
			dw();
	}

	a++;
	ct();
}

function ct() {
	var bid = Math.floor(Math.random()*9); //this refers to random values from 0-8.
	bid++;
	console.log(bid);
	console.log("a = " + a);
	if(bid == 1){
		var v = document.getElementById('B1').innerHTML;
		if((a % 2 == 1) && (v == '')){
			a++;
			document.getElementById('B1').innerHTML = "0";
		}
		if(v != ''){
			ct();
		}
		pos['1'] = document.getElementById('B1').innerHTML;
		ow();
		if((a == 8) && (x+o == 0))
			dw();
	}

	else if(bid == 2){
		var v = document.getElementById('B2').innerHTML;
		if((a % 2 == 1) && (v == '')){
			a++;
			document.getElementById('B2').innerHTML = "0";
		}
		if(v != ''){
			ct();
		}
		pos['2'] = document.getElementById('B2').innerHTML;
		ow();
		if((a == 8) && (x+o == 0))
			dw();
	}

	else if(bid == 3){
		var v = document.getElementById('B3').innerHTML;
		if((a % 2 == 1) && (v == '')){
			a++;
			document.getElementById('B3').innerHTML = "0";
		}
		if(v != ''){
			ct();
		}
		pos['3'] = document.getElementById('B3').innerHTML;
		ow();
		if((a == 8) && (x+o == 0))
			dw();
	}

	else if(bid == 4){
		var v = document.getElementById('B4').innerHTML;
		if((a % 2 == 1) && (v == '')){
			a++;
			document.getElementById('B4').innerHTML = "0";
		}
		if(v != ''){
			ct();
		}
		pos['4'] = document.getElementById('B4').innerHTML;
		ow();
		if((a == 8) && (x+o == 0))
			dw();
	}

	else if(bid == 5){
		var v = document.getElementById('B5').innerHTML;
		if((a % 2 == 1) && (v == '')){
			a++;
			document.getElementById('B5').innerHTML = "0";
		}
		if(v != ''){
			ct();
		}
		pos['5'] = document.getElementById('B5').innerHTML;
		ow();
		if((a == 8) && (x+o == 0))
			dw();
	}

	else if(bid == 6){
		var v = document.getElementById('B6').innerHTML;
		if((a % 2 == 1) && (v == '')){
			a++;
			document.getElementById('B6').innerHTML = "0";
		}
		if(v != ''){
			ct();
		}
		pos['6'] = document.getElementById('B6').innerHTML;
		ow();
		if((a == 8) && (x+o == 0))
			dw();
	}

	else if(bid == 7){
		var v = document.getElementById('B7').innerHTML;
		if((a % 2 == 1) && (v == '')){
			document.getElementById('B7').innerHTML = "0";
			a++;
		}
		if(v != ''){
			ct();
		}
		pos['7'] = document.getElementById('B7').innerHTML;
		ow();
		if((a == 8) && (x+o == 0))
			dw();
	}

	else if(bid == 8){
		var v = document.getElementById('B8').innerHTML;
		if((a % 2 == 1) && (v == '')){
			a++;
			document.getElementById('B8').innerHTML = "0";
		}
		if(v != ''){
			ct();
		}
		pos['8'] = document.getElementById('B8').innerHTML;
		ow();
		if((a == 8) && (x+o == 0))
			dw();
	}

	else if(bid == 9){
		var v = document.getElementById('B9').innerHTML;
		if((a % 2 == 1) && (v == '')){
			a++;
			document.getElementById('B9').innerHTML = "0";
		}
		if(v != ''){
			ct();
		}
		pos['9'] = document.getElementById('B9').innerHTML;
		ow();
		if((a == 8) && (x+o == 0))
			dw();
	}

}
function xw(){

	if((pos['1'] == 'X') && (pos['2'] == 'X') && (pos['3'] == 'X')){
		document.getElementById('WIN').innerHTML = "X WINS";
		x = 1;
		document.getElementById('B1').style.backgroundColor = "lightskyblue";
		document.getElementById('B2').style.backgroundColor = "lightskyblue";
		document.getElementById('B3').style.backgroundColor = "lightskyblue";
		setTimeout("window.open('TTT2.html','_self')",1000);
	}

	else if((pos['4'] == 'X') && (pos['5'] == 'X') && (pos['6'] == 'X')){
		document.getElementById('WIN').innerHTML = "X WINS";
		x = 1;
		document.getElementById('B4').style.backgroundColor = "lightskyblue";
		document.getElementById('B5').style.backgroundColor = "lightskyblue";
		document.getElementById('B6').style.backgroundColor = "lightskyblue";
		setTimeout("window.open('TTT2.html','_self')",1000);
	}

	else if((pos['7'] == 'X') && (pos['8'] == 'X') && (pos['9'] == 'X')){
		document.getElementById('WIN').innerHTML = "X WINS";
		x = 1;
		document.getElementById('B7').style.backgroundColor = "lightskyblue";
		document.getElementById('B8').style.backgroundColor = "lightskyblue";
		document.getElementById('B9').style.backgroundColor = "lightskyblue";
		setTimeout("window.open('TTT1.html','_self')",1000);
	}

	else if((pos['1'] == 'X') && (pos['4'] == 'X') && (pos['7'] == 'X')){
		document.getElementById('WIN').innerHTML = "X WINS";
		x = 1;
		document.getElementById('B1').style.backgroundColor = "lightskyblue";
		document.getElementById('B4').style.backgroundColor = "lightskyblue";
		document.getElementById('B7').style.backgroundColor = "lightskyblue";
		setTimeout("window.open('TTT1.html','_self')",1000);
	}

	else if((pos['2'] == 'X') && (pos['5'] == 'X') && (pos['8'] == 'X')){
		document.getElementById('WIN').innerHTML = "X WINS";
		x = 1;
		document.getElementById('B2').style.backgroundColor = "lightskyblue";
		document.getElementById('B5').style.backgroundColor = "lightskyblue";
		document.getElementById('B8').style.backgroundColor = "lightskyblue";
		setTimeout("window.open('TTT1.html','_self')",1000);
	}

	else if((pos['3'] == 'X') && (pos['6'] == 'X') && (pos['9'] == 'X')){
		document.getElementById('WIN').innerHTML = "X WINS";
		x = 1;
		document.getElementById('B3').style.backgroundColor = "lightskyblue";
		document.getElementById('B6').style.backgroundColor = "lightskyblue";
		document.getElementById('B9').style.backgroundColor = "lightskyblue";
		setTimeout("window.open('TTT1.html','_self')",1000);
	}

	else if((pos['1'] == 'X') && (pos['5'] == 'X') && (pos['9'] == 'X')){
		document.getElementById('WIN').innerHTML = "X WINS";
		x = 1;
		document.getElementById('B1').style.backgroundColor = "lightskyblue";
		document.getElementById('B5').style.backgroundColor = "lightskyblue";
		document.getElementById('B9').style.backgroundColor = "lightskyblue";
		setTimeout("window.open('TTT1.html','_self')",1000);
	}

	else if((pos['3'] == 'X') && (pos['5'] == 'X') && (pos['7'] == 'X')){
		document.getElementById('WIN').innerHTML = "X WINS";
		x = 1;
		document.getElementById('B3').style.backgroundColor = "lightskyblue";
		document.getElementById('B5').style.backgroundColor = "lightskyblue";
		document.getElementById('B7').style.backgroundColor = "lightskyblue";
		setTimeout("window.open('TTT1.html','_self')",1000);
	}
}

function ow(){

	if((pos['1'] == '0') && (pos['2'] == '0') && (pos['3'] == '0')){
		document.getElementById('WIN').innerHTML = "0 WINS";
		o = 1;
		document.getElementById('B1').style.backgroundColor = "lightskyblue";
		document.getElementById('B2').style.backgroundColor = "lightskyblue";
		document.getElementById('B3').style.backgroundColor = "lightskyblue";
		setTimeout("window.open('TTT1.html','_self')",1000);
	}

	else if((pos['4'] == '0') && (pos['5'] == '0') && (pos['6'] == '0')){
		document.getElementById('WIN').innerHTML = "0 WINS";
		o = 1;
		document.getElementById('B4').style.backgroundColor = "lightskyblue";
		document.getElementById('B5').style.backgroundColor = "lightskyblue";
		document.getElementById('B6').style.backgroundColor = "lightskyblue";
		setTimeout("window.open('TTT1.html','_self')",1000);
	}

	else if((pos['7'] == '0') && (pos['8'] == '0') && (pos['9'] == '0')){
		document.getElementById('WIN').innerHTML = "0 WINS";
		o = 1;
		document.getElementById('B7').style.backgroundColor = "lightskyblue";
		document.getElementById('B8').style.backgroundColor = "lightskyblue";
		document.getElementById('B9').style.backgroundColor = "lightskyblue";
		setTimeout("window.open('TTT1.html','_self')",1000);
	}

	else if((pos['1'] == '0') && (pos['4'] == '0') && (pos['7'] == '0')){
		document.getElementById('WIN').innerHTML = "0 WINS";
		o = 1;
		document.getElementById('B1').style.backgroundColor = "lightskyblue";
		document.getElementById('B4').style.backgroundColor = "lightskyblue";
		document.getElementById('B7').style.backgroundColor = "lightskyblue";
		setTimeout("window.open('TTT1.html','_self')",1000);
	}

	else if((pos['2'] == '0') && (pos['5'] == '0') && (pos['8'] == '0')){
		document.getElementById('WIN').innerHTML = "0 WINS";
		o = 1;
		document.getElementById('B2').style.backgroundColor = "lightskyblue";
		document.getElementById('B5').style.backgroundColor = "lightskyblue";
		document.getElementById('B8').style.backgroundColor = "lightskyblue";
		setTimeout("window.open('TTT1.html','_self')",1000);
	}

	else if((pos['3'] == '0') && (pos['6'] == '0') && (pos['9'] == '0')){
		document.getElementById('WIN').innerHTML = "0 WINS";
		o = 1;
		document.getElementById('B3').style.backgroundColor = "lightskyblue";
		document.getElementById('B6').style.backgroundColor = "lightskyblue";
		document.getElementById('B9').style.backgroundColor = "lightskyblue";
		setTimeout("window.open('TTT1.html','_self')",1000);
	}

	else if((pos['1'] == '0') && (pos['5'] == '0') && (pos['9'] == '0')){
		document.getElementById('WIN').innerHTML = "0 WINS";
		o = 1;
		document.getElementById('B1').style.backgroundColor = "lightskyblue";
		document.getElementById('B5').style.backgroundColor = "lightskyblue";
		document.getElementById('B9').style.backgroundColor = "lightskyblue";
		setTimeout("window.open('TTT1.html','_self')",1000);
	}

	else if((pos['3'] == '0') && (pos['5'] == '0') && (pos['7'] == '0')){
		document.getElementById('WIN').innerHTML = "0 WINS";
		o = 1;
		document.getElementById('B3').style.backgroundColor = "lightskyblue";
		document.getElementById('B5').style.backgroundColor = "lightskyblue";
		document.getElementById('B7').style.backgroundColor = "lightskyblue";
		setTimeout("window.open('TTT1.html','_self')",1000);
	}
}

function dw(){
	document.getElementById('WIN').innerHTML = "IT IS A DRAW";
	setTimeout("window.open('TTT1.html','_self')",1000);
}
