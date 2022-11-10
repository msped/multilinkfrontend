import { createTheme, responsiveFontSizes } from '@mui/material';

export default function CustomTheme(){
    const theme = createTheme({
        palette: {
            type: 'dark',
            primary: {
              main: '#3f51b5',
            },
            secondary: {
              main: '#9c0cc1',
            },
            error: {
              main: '#ed474a',
            },
            success: {
              main: '#0BE876',
              contrastText: 'rgba(255,255,255,0.87)',
            },
            background: {
              default: '#25282C',
              paper: '#191C20528',
            },
            warning: {
              main: '#ffb427',
              contrastText: '#ffffff',
            },
            link: '#C5C6C7',
            text: {
              primary: '#CCCCCC',
            },
            info: {
              main: '#2196f3',
            },
          },
          overrides: {
            MuiAppBar: {
              colorInherit: {
                backgroundColor: '#111417',
                color: '#fff',
              },
            },
            MuiOutlinedInput: {
              input: {
                background: '#303337',
              },
            },
          },
          props: {
            MuiAppBar: {
              color: 'inherit',
            },
          },
    })

    return responsiveFontSizes(theme)
}