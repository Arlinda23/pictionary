var http = require('http');//deklarojme protokollin http 
var express = require('express');//deklarojme librarine expresit ..e therrasim dmth pasi e kemi intaluar t
var socket_io = require('socket.io');//deklarojme socketin ... etherrasim pasi kete e kemi intaluar tek folderi dhe npm install 

var app = express();//perseri expresi si funsionn 
app.use(express.static('public'));//permes app.use marrim dokumentin html nga front endi e therrasim dmth permes folderit  public 

var server = http.Server(app);//japim komanden per nisjen e serverit
var io = socket_io(server);//io i dergojm e serverit nje kerkeese 

var canvasKey = true;
var arr = [];
var user;

// Keeps count of online users
var counter = 0;
var absoluteCounter = 0;
var isDrawerOnline = false;


io.on("connection", function(socket) { //inicializon sockets.io
	
socket.on("draw", function(position) { //e dergon vizatimin te te gjithe userat
		socket.broadcast.emit('msg' , position);//e drg te gjitheve pervec userit qe e ka drg
		});
	
	});

server.listen(process.env.PORT || 8080);//kjo eshte porta qe do te bej te mundur ekzekutimin e programit tone 