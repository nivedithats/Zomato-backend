const express = require('express');
const app = express();
const port = 3008;


app.get('/', (req, res)=>{
    res.send(`
        	getStatusCode,
} from 'http-status-codes';

response
	.status(StatusCodes.OK)
	.send(ReasonPhrases.OK);

response
	.status(StatusCodes.INTERNAL_SERVER_ERROR)
	.send({
		error: getReasonPhrase(StatusCodes.INTERNAL_SERVER_ERROR)
	});

response
	.status(getStatusCode('Internal Server Error'))
	.send({
		error: 'Internal Server Error'
	});
        `)
})


app.listen(port, ()=>{
    console.log('app is running..');
})