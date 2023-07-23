import React,{ useState} from "react";
import { Modal } from 'react-responsive-modal';
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { addHabit } from "../../redux/HabitsSlice";

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

const AddHabitButton=()=>{
    
const dispatch=useDispatch();
const [open, setOpen] = useState(false);

const [habitName, setHabitName] = useState("");

  // function for add habit 
  const handleSave=()=>{
    const habitName=document.getElementById("habitName").value;
    dispatch(addHabit(habitName));
    alert("Your habit added successfully");
    setHabitName("");
    setOpen(false);
  }

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

    return (
        <>
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
        </>
              
  )
}

export default AddHabitButton;