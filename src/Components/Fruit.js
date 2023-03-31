import React from 'react';
import { useState } from 'react';
import { TextField } from '@mui/material';
import { Autocomplete } from '@mui/material';
import { Button } from '@mui/material';
const FRUITS = ['Apple', 'Banana', 'Cherry', 'Durian', 'Elderberry'];

function FruitSurvey() {
  const [name, setName] = useState('');
  const [fruit, setFruit] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Hello, ${name}! Your favorite fruit is ${fruit}.`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Name"
        data-testid="name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <Autocomplete
        data-testid="autocomplete"
        options={FRUITS}
        getOptionLabel={(option) => option}
        renderInput={(params) => (
          <TextField
            {...params}
            label="CHOOSE YOUR JUICY FRUIT"
            variant="outlined"
          />
        )}
        value={fruit}
        onChange={(event, value) => setFruit(value)}
      />
      <Button
        data-testid="button"
        type="submit"
        variant="contained"
        color="primary"
      >
        SUBMIT
      </Button>
    </form>
  );
}

export default FruitSurvey;