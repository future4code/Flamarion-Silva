import {Switch, Route} from 'react-router-dom'
import GlobalState from '../global/GlobalState'
import Login from '../pages/Login/Login'
import Signup from '../pages/Signup/Signup'
import Home from '../pages/Home/Home'


const Routes = ()=>{
  return<Switch>
         <GlobalState>
          <Route exact path='/'>
            <Login/>
          </Route>
          <Route exact path='/signup'>
            <Signup/>
          </Route>
          <Route exact path='/home'>
            <Home/>
          </Route>
         </GlobalState>
        </Switch>
}
export default Routes
