import React from "react";
import Menu2 from "./Menu2";
import Heading from "./Heading";
import Wallet from "./Wallet";
import DashBoard from "./DashBoard";
import Profile from "./Profile";
import Submitwork from "./Submitwork";
import Findwork from "./Findwork";

import { BrowserRouter,Route,Switch} from "react-router-dom";


function App2()
{
    return (
        <BrowserRouter>
        <>
        <Heading/>
        <Menu2/>

    <Route  exact path="/dashboard" component={DashBoard}/>
    <Route exact path="/profile" component={Profile}/>
    <Route exact path="/Wallet" component={Wallet}/>
    <Route exact path="/Submitwork" component={Submitwork}/>
    <Route exact path="/Findwork" component={Findwork}/>
    </>
    </BrowserRouter>
    )
}
export  default App2; 