const express = require('express');
const redis = require('redis');
const process = require('process');

const app = express();
const client = redis.createClient({
  host: 'redis-server1',
  port: 6379,
});
const client2 = redis.createClient({
  host: 'redis-server2',
  port: 6379,
});
client.set('visits', 0);
client2.set('visits', 0);
var client1Visits = 0;
var client2Visits = 0;

app.get('/', (req, res) => {
	
	let resData = {};
	let rand = Math.floor(Math.random() * 10);
	if( rand%2 ==0)
	{
		client.get('visits', (err, visits) => {
			client.set('visits', parseInt(visits) + 1);
			client1Visits = visits;
		});
		client2.get('visits', (err, visits) => {
			client2Visits = visits
		});
	}
	else 
	{
		client2.get('visits', (err, visits) => {
			client2.set('visits', parseInt(visits) + 1);
			client2Visits = visits;
		});
		client.get('visits', (err, visits) => {
			client1Visits = visits;	
		});	
	}
	
	if(client1Visits >15 && client2Visits > 15)
		process.exit(1);
	
	resData = {"rand": rand, "client1": client1Visits, "client2" : client2Visits};
	res.send('Number of visits ' + JSON.stringify(resData));
});

app.listen(8081, () => {
  console.log('listening on port 8081');
});
