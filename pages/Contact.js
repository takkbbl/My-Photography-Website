import Layout from '../components/Layout'
import styles from "./Contact.module.scss";
import photo from "../public/assets/felixmelchner-contact.jpg"
import React, { Component } from "react";
import axios from 'axios';


export default class Contact extends Component{  
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: ''
    };
  }
  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
  }

  mySubmitHandler = (event) => {
    event.preventDefault();
    alert("Name: " + this.state.name);
    alert("Email: " + this.state.email);
    alert("Message " + this.state.message);
  }

  handleSubmit(e){
    e.preventDefault();
    alert("handlesubmit");
    axios({
      method: "POST", 
      url:"https://agile-citadel-49078.herokuapp.com/send", 
      data:  this.state
    }).then((response)=>{
      if (response.data.status === 'success'){
        alert("Message Sent."); 
        this.resetForm()
      }else if(response.data.status === 'fail'){
        alert("Message failed to send.")
      }
    })
  }

  resetForm(){
    
    this.setState({name: '', email: '', message: ''})
 }

  render(){
    return(
      <Layout>
      <div>
        <div className={styles.wrapper}>
          <div className={styles.innerwrapper}>
            <div className={styles.portrait}>
              <img src={photo} alt="Felix Melchner"></img>
            </div>
            <div className={styles.contact}>
              <h1>Contact me</h1>
              <p>Are you interested in working together? Do you have any questions or just want to say hi? Drop me a line by filling out the contact form below and I will get back to you as soon as I can.</p>
              <div className={styles.form}>
              <form onSubmit={this.handleSubmit.bind(this)} method="POST">
                <p>Enter your name:</p>
                <input
                  type='text'
                  name='name'
                  onChange={this.myChangeHandler}
                />
                <p>Your email:</p>
                <input
                  type='text'
                  name='email'
                  onChange={this.myChangeHandler}
                />
                <p>Your Message:</p>
                <textarea name='message' type='text' value={this.state.message} onChange={this.myChangeHandler} />
                <input
                  type='submit'
                />
                </form>
                <a href="https://blog.mailtrap.io/react-contact-form/" target="_blank">Continue here</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
    );
  }
}
