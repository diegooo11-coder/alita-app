import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import hellok from './assets/hellok.png';
import { FeelingPage } from './pages/FeelingPage';


function App() {
  const [secretKey, setSecretKey] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const correctKey = 'alitademicorazon';

  const handleInputChange = (event) => {
    setSecretKey(event.target.value);
  };

  const handleButtonClick = () => {
    if (secretKey === correctKey) {
      setIsAuthenticated(true);
    } else {
      alert('Clave incorrecta. Inténtalo de nuevo.');
    }
  };

  return (
    <div className='container-page-1'>
      {!isAuthenticated ? (
        <div className="form">
          <img src={hellok} alt="" />
          <h2>¡Hola! Por favor, escribe tu clave secreta:</h2>
          <TextField 
            type='password'
            label="Clave Secreta" 
            variant="outlined" 
            size='small' 
            fullWidth 
            value={secretKey}
            onChange={handleInputChange}
          />
          <Button sx={{ mt: 2 }} variant="contained" fullWidth onClick={handleButtonClick}>
            Ingresar
          </Button>
        </div>
      ) : (
        <FeelingPage />
      )}
    </div>
  );
}

export default App;
