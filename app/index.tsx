import React from "react";
import UserInfo from "./userInfo";
import { Fatname,Motname,Age,TestCount} from "./sumfunc";

const App =()=> {
    return (
        <div>
            <h1 style={{color:'blue'}}>สวัสดี</h1>
            <font size= '3' color='#ff0099'>มะม่วง สุกดี</font>
            <UserInfo />
            <h1><u><Fatname /></u></h1>
            <h1><u><Motname /></u></h1>
            <Age age='30' year='1997'/>
            <TestCount />

        </div>
    );
}

export default App;


