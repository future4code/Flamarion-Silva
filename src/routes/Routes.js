import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Login from '../pages/Login/Login'
import Register from '../pages/Register/Register'
import Feed from '../pages/Feed/Feed'
import Post from '../pages/Post/Post'
import Header from '../components/Header'
import GlobalState from '../global/GlobalState'



const Routes = ()=>{	
	
	return(
		<BrowserRouter>
			<Switch>
				<GlobalState>
				<Route exact path='/'>					
					<Login/>
				</Route>
				<Route exact path='/register'>
					<Register/>
				</Route>
				<Route exact path='/feed'>
					<Header/>
					<Feed />
				</Route>
				<Route exact path='/post'>
					<Header/>
					<Post />
				</Route>
				</GlobalState>
				<Route>
					<h1 style={{textAlign:'center'}}>Página não encontrada</h1>
				</Route>
			</Switch>
		</BrowserRouter>
	)
}
export default Routes