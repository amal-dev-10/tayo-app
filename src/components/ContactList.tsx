import React from 'react'
import { connect } from 'react-redux'
import { iContact } from '../interface/common'
import { deleteContactAction, setSelectedContactAction } from '../Redux/actions'

type props = {
  contacts: iContact[],
  deleteContact: any,
  editClicked: any,
  setSelectedContact: any
}


function ContactList({contacts, deleteContact, editClicked, setSelectedContact}: props) {

  return (
    <div className='contactList'>
      {
        contacts.map((x)=>{
          return (
            <div className='card'>
              <span>Name: {x.firstName + " " + x.lastName}</span>
              <span>Status: {x.active ? "Active" : "Inactive"}</span>
              <span className='btn' style={{backgroundColor: "green"}} onClick={()=>{setSelectedContact(x); editClicked()}}>Edit</span>
              <span className='btn' style={{backgroundColor: "crimson"}} onClick={()=>{deleteContact(x.id)}}>Delete</span>
            </div>
          )
        })
      }
    </div>
  )
}

const mapStateToProps = (state: any)=>({
  contacts: state.contacts.allContacts
})

const mapDispatchToProps = (dispatch: any)=>({
  deleteContact: (id: number)=>{dispatch(deleteContactAction(id))},
  setSelectedContact: (data: iContact)=>{dispatch(setSelectedContactAction(data))}
})

export default connect(mapStateToProps, mapDispatchToProps)(ContactList)