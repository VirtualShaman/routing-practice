import React from "react";
import { useParams } from "react-router";
import {
  BrowserRouter,
  Switch,
  Route,
  Link 
} from "react-router-dom";
    
const Home = (props) => {
  return (
    <h1>Welcome</h1>
  );
}

const Input = (props) => {
  const { input } = useParams();
  if(isNaN(input)==false){
    return (
      <h1>The number is: { input }</h1>
    )
  } else {
    return (
      <h1>The word is: { input }</h1>
    )
  }
}

const Style =  (props) => {
  const { input, color1, color2 }= useParams();
  if(isNaN(input)==false){
    return (
      <h1 style={{color: color1, backgroundColor: color2}}>The number is: { input }</h1>
    )
  } else {
    return (
      <h1 style={{color: color1, backgroundColor: color2}}>The word is: { input }</h1>
    )
  }
}
    
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/:input">
          <Input />
        </Route>
        <Route exact path="/:input/:color1/:color2">
          <Style />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
    
export default App;
