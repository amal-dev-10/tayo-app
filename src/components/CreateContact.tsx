import React, { useEffect, useState } from 'react'
import Input from './Input'
import { iContact } from '../interface/common';
import { connect } from 'react-redux/es/exports'
import { addContactAction, updateContactAction } from '../Redux/actions';

type input = {
  label: string,
  value: string,
  type: string,
  id: number,
  name: string
}

type props = { 
  updateContact: any,
  addContact: any,
  cancelClicked: any,
  mode: string,
  selectedContact: iContact
}

function CreateContact({updateContact, addContact, cancelClicked, mode, selectedContact}: props) {

  const [active, setActive] = useState(false as boolean);
  const [inputList, setInputList] = useState([
    {
      name: "firstName",
      label: "First Name",
      type: "text",
      value: "",
      id: 1
    },
    {
      name: "lastName",
      label: "Last Name",
      type: "text",
      value: "",
      id: 2
    },
  ] as input[]);

  const handleInputChange = (id: number, value: string)=>{
    let temp = inputList.map((x)=>{
      if(x.id === id){
        x.value = value
      }
      return x
    });
    setInputList([...temp])
  }

  const saveContact = ()=>{
    let data = {
      active: active,
      firstName: inputList[0].value,
      lastName: inputList[1].value,
    } as iContact;
    if(data.firstName && data.lastName){
      if(mode === "edit"){
        data.id = selectedContact.id;
        updateContact(data);
      }else if(mode === "add"){
        data.id = Math.floor(Math.random() * 1000);
        addContact(data);
      }
      cancelClicked();
    }else{
      alert("Fill all fields.")
    }
  }

  useEffect(()=>{
    if(mode === "edit"){
      Object.entries(selectedContact).forEach(([key, value])=>{
        let temp = inputList.map((x)=>{
          if(x.name === key){
            x.value = value as string
          }
          return x
        })
        setInputList([...temp])
      })
      setActive(selectedContact.active);
    }
  }, [])

  return (
    <div className='inputsDiv'>
      <span>CREATE CONTACT SCREEN</span>
      {
        inputList.map((x)=>{
          return (
            <Input 
              label={x.label} 
              onChange={(val: string)=>{handleInputChange(x.id, val)}} 
              type={x.type} 
              value={x.value}
              key={x.id}
            />
          )
        })
      }
      <div className='statusDiv'>
        <span className='statusTitle'>Status : </span>
        <div className='radioDiv'>
          {
            ["Active", "Inactive"].map((x, i:number)=>{
              return (
                <label htmlFor={x} className='radioLabel' key={"radio" + i}>
                  <input 
                    type="radio" 
                    checked={x === "Active" ? active : !active} 
                    id='active' 
                    className='radio' 
                    name='active'
                    onChange={()=>{setActive(!active)}}
                  />  
                  {x}
                </label>
              )
            })
          }
        </div>
      </div>
      <div className="buttonDiv">
        {
          mode === "edit" ? 
          <span className='btn' onClick={()=>{saveContact()}}>Save Edited Contact</span>
          : 
          <span className='btn' onClick={()=>{saveContact()}}>Save Contact</span>
        }
        <span className='btn' onClick={()=>{cancelClicked()}}>Cancel</span>
      </div>
    </div>
  )
}

const mapDispatchToProps = (dispatch: any)=>({
  updateContact: (data: iContact)=>{dispatch(updateContactAction(data))},
  addContact: (data: iContact)=>{dispatch(addContactAction(data))},
});

const mapStateToProps = (state: any)=>({
  selectedContact: state.contacts.selectedContact
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateContact)