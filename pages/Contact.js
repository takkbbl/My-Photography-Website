import Layout from '../components/Layout'
import styles from "./Contact.module.scss";
import photo from "../public/assets/felixmelchner-contact.jpg"

const Index = () => (
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
              <a href="https://reactjs.org/docs/forms.html" target="_blank">Continue here</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default Index
