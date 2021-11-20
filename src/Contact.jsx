import React, { useState} from 'react';
import web from "./1.gif";

const Contact = () => {
  const [data, setData] = useState({
    fullname: '',
    phone: '',
    email: '',
    message: '',
  });

  const InputEvent = (event) => {
    const {name, value} = event.target;

    setData((preVal) => {
      return {
        ...preVal,
        [name] : value,
      }
    }
    )}

  const formSubmit = (e) => {
    
    e.preventDefault();
    alert(`My name is ${data.fullname}. My mobile no. is ${data.phone} and my email is ${data.email}. And here is what I want to say ${data.message}.`);
  };

 
  return (<>
    <div className="my-3">
      <h3 className="text-center">
        Contact Us
      </h3>
    </div>
    <div className="connect contact_div">
      <div className="row">
        <div className="col-md-5 col-10 mx-auto">
          <form onSubmit={formSubmit}>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">Full Name</label>
              <input type="text" className="form-control" id="exampleFormControlInput1" name="fullname" value={data.fullname} onChange={InputEvent} placeholder="Enter your name" />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">Phone</label>
              <input type="number" className="form-control" id="exampleFormControlInput1" name="phone" value={data.phone} onChange={InputEvent} placeholder="Mobile no." />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
              <input type="email" className="form-control" id="exampleFormControlInput1" name="email" value={data.email} onChange={InputEvent} placeholder="name@example.com" />
            </div>

            <div className="mb-3">
              <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
              <textarea className="form-control" id="exampleFormControlTextarea1"  name="message" value={data.message} onChange={InputEvent}  rows="3"></textarea>
            </div>
            <div className="col-12">
              <button className="btn btn-outline-primary mb-3" type="submit">Submit form</button>
            </div>
          </form>
        </div>
       
      </div>
    </div>
  </>
  )
}

export default Contact;