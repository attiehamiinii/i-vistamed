import { ChakraProvider } from '@chakra-ui/react'
import { AnimatePresence } from 'framer-motion';
import './App.css';
import Main from './component/Main';
import QrCode from './component/Qrcode';
function App() {
  return (
    <div className="App">
      <AnimatePresence>
       <ChakraProvider>
      <Main />
      <QrCode/>
    </ChakraProvider>
    </AnimatePresence>

    </div>
  );
}

export default App;
