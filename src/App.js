import { ChakraProvider } from '@chakra-ui/react';
import { AnimatePresence } from 'framer-motion';
import './App.css';
import Header from './component/Header';

function App() {
  return (
    <div className="App">
      <AnimatePresence>
        <ChakraProvider>
          <Header />
        </ChakraProvider>
      </AnimatePresence>
    </div>
  );
}

export default App;
