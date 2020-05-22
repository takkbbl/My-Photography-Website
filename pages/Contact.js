import Layout from '../components/Layout'
import styles from "./Contact.module.scss";
import photo from "../public/assets/felixmelchner-contact.jpg"
import React, { Component } from "react";
import axios from 'axios';
import Link from "next/link";


export default class Contact extends Component{  
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
      sent: 'Send message'
    };
  }
  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
  }

  handleSubmit(e){
    e.preventDefault();
    this.setState({sent: 'Sending message...'});
    axios({
      method: "POST", 
      url:"https://agile-citadel-49078.herokuapp.com/send", 
      data:  this.state
    }).then((response)=>{
      if (response.data.status === 'success'){
        this.resetForm()
      }else if(response.data.status === 'fail'){
      }
    })
  }

  resetForm(){
    this.setState({message: '', email: '', name: '', sent: 'Message sent!'})
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
              <div className={styles.innercontact}>
                <h1>Contact me</h1>
                <p>Are you interested in working together? Do you have any questions or just want to say hi? Drop me a line by filling out the contact form below and I will get back to you as soon as I can.</p>
                <div className={styles.form}>
                <form onSubmit={this.handleSubmit.bind(this)} method="POST">
                  <input
                    type='text'
                    className={styles.inputname}
                    name='name'
                    required
                    placeholder='Name'
                    onChange={this.myChangeHandler}
                  />
                  <input
                    type='email'
                    name='email' 
                    required
                    className={styles.inputmail}
                    placeholder='Email'
                    onChange={this.myChangeHandler}
                  />
                  <textarea name='message' required className={styles.inputmessage} placeholder='Leave me a message' type='text' value={this.state.message} onChange={this.myChangeHandler} />
                  <input type="checkbox" id="gdpr" className={styles.gdpr} required name="gdpr" value="Gdkjsfkl"></input>
                  <label className={styles.gdprlabel} for="gdpr"> I consent to having this website store my submitted information so they can respond to my inquiry.
See my <Link href={"/privacy-policy"}>
                  <a target="_blank">Privacy Policy</a>
                </Link> to learn more about how I use data.</label><br></br>
                  <input
                    type='submit'
                    value={this.state.sent}
                    className={styles.submitbutton}
                  />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
    );
  }
}
