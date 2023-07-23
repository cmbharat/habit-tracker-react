import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addHabit } from "../redux/HabitsSlice";
import { styled } from "styled-components";
import Modal from "react-responsive-modal";
import { Link } from "react-router-dom";


const ModalContentContainer=styled.div`
display:flex;
flex-direction:column;
width:375px`;

const ModalTitle = styled.div`
font-size:30px;
margin-bottom:20px;
`;

const InputSection= styled.div`
display:flex;
flex-direction:column;
margin-bottom:15px;
label{
margin-bottom:15px;
}

input{
    padding: 5px;
    border: 2px solid #9da631;
    :focus{
        outline:2px solid #9da631;
        border:none;
    }
}
`;


const ButtonContainer=styled.div`
display:flex;
justify-content:flex-start;
margin-bottom:15px;
`
const SubmitButton=styled.div`
background-color:#9da631;
border:none;
border-radius:2px;
padding:8px 10px 8px 10px;
color:white;
font-family:inherit;
font-size:inherit;
cursor:pointer;
:focus{
    outline:none;
    border:none;
}
`


const Navbar = ({ name }) => {


  const dispatch=useDispatch();
const [open, setOpen] = useState(false);

const [habitName, setHabitName] = useState("");

  // function for add habit 
  const handleSave=()=>{
    const habitName=document.getElementById("habitName").value;
    dispatch(addHabit(habitName));
    setHabitName("");
    setOpen(false);
  }

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  return (
    <>

<header id="header" className="header fixed-top d-flex align-items-center">
    <div className="container-fluid d-flex align-items-center justify-content-between">

      <a href="index.html" className="logo d-flex align-items-center me-auto me-xl-0">
        <h1>Habit Tracker</h1>
        <span>.</span>
      </a>
      <nav id="navmenu" className="navmenu">
        <ul>
          <li><Link to="/weeklyView" className="active">{name}</Link></li>
          {/* <li><a href="index.html#contact">{name}</a></li> */}
        </ul>
      </nav>
      <a className="btn-getstarted" onClick={onOpenModal}>Add Habit</a>

      <Modal open={open} onClose={onCloseModal} center>
                <ModalContentContainer>
                    <ModalTitle>
                            Create a new Habit
                    </ModalTitle>
                    <InputSection>
                        <label htmlFor="createGoal">Enter a Habit Name</label>
                        <input type="text" value={habitName} id="habitName" placeholder="Habit Name" maxLength="60" onChange={(e)=>{
                            setHabitName(e.target.value)
                        }} />
          
                    </InputSection>
                    
                    <ButtonContainer>
                        <SubmitButton type="submit" onClick={handleSave}>
                            Add Habit
                        </SubmitButton>
                    </ButtonContainer>
                </ModalContentContainer>
                </Modal>


    </div>
  </header>

    </>
  );
};

export default Navbar;