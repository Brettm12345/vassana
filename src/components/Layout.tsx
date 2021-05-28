import React from 'react';
import {MediaContextProvider} from './Media';
import Header from './Header';

const Layout = ({element}) => {
  return (
    <MediaContextProvider>
      <Header />
      {element}
    </MediaContextProvider>
  );
};

export default Layout;
