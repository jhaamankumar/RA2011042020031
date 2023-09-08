const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 4000;

app.use(bodyParser.json());


const userData = {
  full_name: 'Aman kumar Jha',
  dob: '07062002',
  email: 'am2992@srmist.edu.in',
  roll_number: 'RA2011042020031',
};


app.post('/bfhl', (req, res) => {
  const { data } = req.body;

 
  const alphabets = data.filter((item) => /[a-zA-Z]/.test(item));
  const numbers = data.filter((item) => /[0-9]/.test(item));

  
  const highestAlphabet = alphabets.sort((a, b) => b.localeCompare(a))[0];

  const response = {
    is_success: true,
    user_id: `${userData.full_name}_${userData.dob}`,
    email: userData.email,
    roll_number: userData.roll_number,
    numbers,
    alphabets,
    highest_alphabet: highestAlphabet ? [highestAlphabet] : [],
  };

  res.json(response);
});


app.get('/bfhl', (req, res) => {

  res.status(200).json({ operation_code: 1 });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
