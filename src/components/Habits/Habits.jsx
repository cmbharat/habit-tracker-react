import React from "react";
import { useSelector } from "react-redux";
import Habit from "./Habit";

const Habits =()=>{
    
    const habitsList=useSelector(state=>state.habits);

    console.log(habitsList,"=====>Goalslist")

    return (        
    
    <div className='habits'>
      {habitsList.map((habit)=><Habit habit={habit} key={habit.id}/>)}
    </div>

    )

}

export default Habits;