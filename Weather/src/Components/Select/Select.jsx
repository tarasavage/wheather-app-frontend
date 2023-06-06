import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect() {
  const [city, setCity] = React.useState('');

  const handleChange = (event) => {
    setCity(event.target.value);
    window.location.href=`http://127.0.0.1:5173/weather/${event.target.value}`
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth >
        <InputLabel id="demo-simple-select-label">Місто</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={city}
          label="Місто"
          
        
          onChange={handleChange}
        >
          <MenuItem value={'Kyiv'}>Київ</MenuItem>
          <MenuItem value={'Харків'}>Харків</MenuItem>
          <MenuItem value={'Odesa'}>Одеса</MenuItem>
          <MenuItem value={'Dnipro'}>Дніпро</MenuItem>
          <MenuItem value={'Donetsk'}>Донецьк</MenuItem>
          <MenuItem value={'Zaporizha'}>Запоріжжя</MenuItem>
         
          <MenuItem value={'Mykolayiv'}>Миколаїв</MenuItem>
          <MenuItem value={'Mariupol'}>Маріуполь</MenuItem>
          <MenuItem value={'Luhansk'}>Луганськ</MenuItem>
          <MenuItem value={'Vinnytsya'}>Вінниця</MenuItem>
         
        </Select>
      </FormControl>
    </Box>
  );
}











