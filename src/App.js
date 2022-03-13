import { ChakraProvider } from '@chakra-ui/react';
import { AnimatePresence } from 'framer-motion';

import Header from './component/Header';

const App = () => {
  return (
    <div style={{height:"auto" , width:"100%",  top:"0", left:"0" }}>
      <AnimatePresence>
        <ChakraProvider>
          <Header />
        </ChakraProvider>
      </AnimatePresence>
    </div>
  );
};

export default App;
