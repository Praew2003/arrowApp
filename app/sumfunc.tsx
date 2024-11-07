import React, { useState } from "react";
import { Button } from "react-native";

export const Fatname =()=>{
    return(
        <div>
            นาย A.
        </div>
    );
}
export const Motname =()=>{
    return(
        <div>
            นาง B.
        </div>
    );
}

export const Age = ({ age ="",year =""}) =>{
    console.log("Age: ", age);
    console.log("Year: ", year);

    return(
        <div>
            อายุ : {age}<br />
            พ.ศ. : {year}
        </div>
    );
}
export const Testcount =()=>{
    const [count, setCount]=useState(0);
    const Inc =()=>setCount(count+1);
    const Dec =()=>setCount(count-1);


    return(
        <div>
            Count:{count}<br />
            <Button title="เพิ่ม" onPress={Inc}/>
            <Button title="ลด" onPress={Dec}/>
        </div>
    );
}