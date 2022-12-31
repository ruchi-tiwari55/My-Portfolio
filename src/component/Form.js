import "./Form.css";
import React from 'react'

const Form = () => {
  return (
    <div className="form">
        <form>
            <label>Name</label>
            <input type="text"></input>
            <label>Email</label>
            <input type="text"></input>
            <label>text</label>
             <input type="text"></input>
            <label>message</label>
            <textarea rows="6" placeholder="type your message here"/>
           <button className="btn"> submit</button>

        </form>
      
    </div>
  )
}

export default Form
