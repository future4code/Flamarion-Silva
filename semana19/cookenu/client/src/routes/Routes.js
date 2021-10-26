import {Switch, Route} from 'react-router-dom'
import GlobalState from '../global/GlobalState'
import Login from '../pages/Login/Login'
import Signup from '../pages/Signup/Signup'
import Home from '../pages/Home/Home'
import RescueKey from '../pages/RescueKey/RescueKey'
import Rescue from '../pages/RescueKey/Rescue'
import Recipe from '../pages/Recipe/Recipe'
import UserProfile from '../pages/UserProfile/UserProfile'


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
          <Route exact path='/rescuekey'>
            <RescueKey/>
          </Route>
          <Route exact path='/rescue'>
            <Rescue/>
          </Route>
          <Route exact path='/recipe'>
            <Recipe/>
          </Route>
          <Route exact path='/profile'>
            <UserProfile/>
          </Route>
         </GlobalState>
        </Switch>
}
export default Routes
