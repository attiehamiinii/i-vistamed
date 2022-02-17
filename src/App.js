import { ChakraProvider } from '@chakra-ui/react'
import './App.css';
import Main from './component/Main';
function App() {
  return (
    <div className="App">
       <ChakraProvider>
      <Main />
    </ChakraProvider>
 

    </div>
  );
}

export default App;
