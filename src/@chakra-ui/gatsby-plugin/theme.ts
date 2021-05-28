import {extendTheme, theme as defaultTheme} from '@chakra-ui/react';

const theme = extendTheme({
  radii: {
    pill: '3em',
  },
  styles: {
    global: props => ({
      html: {
        maxW: '100vw',
        overflowX: 'hidden',
      },
    }),
  },
  colors: {
    lightBlue: '#04A5D8',
    darkBlue: '#0B52A0',
    darkestBlue: '#003a58',
    lightestBlue: '#cbe1ef',
  },
});

export default theme;
