const express = require('express');
const router = express.Router();
const axios  = require('axios');

router.route('/webhook')
	.get( async (req, res) => {

		try{

			const API = `https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_joke`
			let response = await axios.get(API)
			console.log(response.data)
			res.send(response.data)
			res.end()

		}catch(err){

			res.json({"messsage":"something went wrong"})
		}

	})

module.exports = router