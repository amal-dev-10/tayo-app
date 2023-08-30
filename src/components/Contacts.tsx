import React, { useEffect, useState } from 'react'
import '../styles/contact.css'
import {ImCancelCircle} from 'react-icons/im'
import CreateContact from './CreateContact'
import { connect } from 'react-redux'
import { iContact } from '../interface/common'
import ContactList from './ContactList'

type props = {
    contacts: iContact[]
}

function Contacts({contacts}: props) {
    const [showForm, setShowForm] = useState(false as boolean);
    const [mode, setMode] = useState("" as string);
  return (
    <div className='contact'>
        {
            !showForm &&
            <span className="btn" onClick={()=>{setMode("add"); setShowForm(true)}}>Create Contact</span>
        }
        {
            showForm &&
            <CreateContact cancelClicked={()=>{setShowForm(false)}} mode={mode}/>
        }
        {
            (!showForm && !contacts.length) ?
            <div className='noContactDiv'>
                <ImCancelCircle color='crimson' size={30}/>
                <span>{"No Contact Found. Please add contact from create contact Button."}</span>
            </div>
            : !showForm && <ContactList editClicked={()=>{setShowForm(true); setMode("edit")}}/>
        }
    </div>
  )
}

const mapStateToProps = (state: any)=>({
    contacts: state.contacts.allContacts
})

export default connect(mapStateToProps)(Contacts)