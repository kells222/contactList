import React from 'react'
import { useState,useEffect } from 'react'


function SelectedContact({setSelectedContactId}) {
// const [selectedContactId, setSelectedContactId] = useState(null)
const [contact,setContact] = useState('')

  useEffect (()=>{
    async function fetchSelectedContact (){
      try {
        const response = await fetch (`http://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/1`);
        const result = await response.json();
        setContact(result);
        
      } catch (error) {
         console.error('error rendering selected contact', error)
      }
    }
    fetchSelectedContact();
  },[setSelectedContactId])

  
  return (
    <>
    <div>
      <h2>{contact.name}</h2>
      <p>{contact.email}</p>
      <p>{contact.phone}</p>
      <button onClick={() => setSelectedContactId(null)}>Back to Contact List</button>
    </div>
    </>
  )
}

export default SelectedContact