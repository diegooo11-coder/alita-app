import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    palette: {
        primary: {
          main: '#ff5722', // Color primario (para botones, por ejemplo)
        },
        text: {
          primary: '#ff6289', // Color del texto principal
        },
      },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#ff6289', // Color del borde por defecto
            },
            '&:hover fieldset': {
              borderColor: '#ff6289', // Color del borde cuando se pasa el mouse
            },
            '&.Mui-focused fieldset': {
              borderColor: '#ff6289', // Color del borde cuando está enfocado
            },
            '& input': {
                color: '#ff6289', // Color del texto dentro del TextField
              },
          },
          '& .MuiInputLabel-root': {
            color: '#ff6289', // Color del label por defecto
          },
          '& .MuiInputLabel-root.Mui-focused': {
            color: '#ff6289', // Color del label cuando está enfocado
          },
        },
      },
    },
    MuiButton: {
        styleOverrides: {
          root: {
            color: '#ffffff', // Color del texto del botón
          },
          containedPrimary: {
            backgroundColor: '#ff6289', // Color de fondo del botón contenido primario
            '&:hover': {
              backgroundColor: '#ff6289', // Color de fondo cuando se pasa el mouse
            },
          },
        },
      },
  },
});
