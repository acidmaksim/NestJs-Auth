import logo from './logo.svg';
import './App.css';
import Form from './component/Form';
import Registration from './component/Registration';
import Login from './component/Login';
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";

const json = JSON.stringify({"email": "ga@gmail",
"password": "strsing"})

const click = () => {
 (async () => {
   const res = await fetch('http://localhost:3000/authentication/login', {
     method: 'POST',
     headers: {
       'Content-type': 'application/json'
     },
     body: json
   }) 

   const data = await res.json();
   console.log(data);
 })()  
}



function App() {
  return (
    // <>
    // {/* <Form /> */}
    // <Registration />
    // <Login />
    // </>

    <BrowserRouter>
    <div className='app'>
    <button onClick={click} >Button</button>
        {/* <Navbar/> */}
        <div className="wrap">
            {/* {!isAuth ? */}
                <Switch>
                    <Route path="/registration" component={Registration}/>
                    <Route path="/login" component={Login}/>
                    <Redirect to='/login'/>
                </Switch>

        </div>
    </div>
</BrowserRouter>
  );
}

export default App;
