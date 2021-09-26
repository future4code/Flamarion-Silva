import {BrowserRouter} from 'react-router-dom'
import Routes from './routes/Routes'
import {createGlobalStyle} from 'styled-components'


const GlobalStyle = createGlobalStyle`
	body{
		background-image: url('https://notion-emojis.s3-us-west-2.amazonaws.com/v0/svg-twitter/1f3e6.svg');
		background-size: cover;
		background-repeat: no-repeat;
	}

`

function App() {
  return (
    <BrowserRouter>
    	<GlobalStyle/>
   		<Routes/>   		
    </BrowserRouter>
  );
}

export default App;
