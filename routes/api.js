var express = require('express');
var router = express.Router();
const axios = require('axios');

/* GET input listing. */
router.get('/input/:text', function (req, res, next) {
  const API_KEY = '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'
  const prompt = req.params.text;

  const data = {
    model: "text-davinci-003",
    prompt: `Summarize this into 3 bullet points to be added to my resume:\n\n${prompt}`,
    temperature: 0.7,
    max_tokens: 256,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  }

  axios.post('https://api.openai.com/v1/completions', data, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${API_KEY}`
    }
  })
    .then((response) => {
      console.log(response.data)
      res.send(response.data.choices[0].text)
    })
    .catch((error) => {
      console.log(error)
      res.send(error)
    })
});

module.exports = router;
