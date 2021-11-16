import {useState} from 'react';
import axios from 'axios';
import {Form,FloatingLabel}  from 'react-bootstrap';
import '../../assets/css/styles.scss';


export default () => {

    const [formData, setFormData] = useState({
        name : "",
        email : "",
        phone :"",
        message : ""
    });

    const handleChange = (event) => {
        const clave  = event.target.name;
        const valor  = event.target.value;

        setFormData({...formData,[clave]:valor});
    }; 

    const handleSubmit = ()=>{
      console.log(formData);
      const sendData = async () => {
        try{
          console.log(formData);
          const response = await axios.post(
            //"https://back-25watts.herokuapp.com/public/api/altausuario",
            //"http://127.0.0.1:8000/api/altausuario",            
            formData
          );
          console.log(response);
          }catch(err){
           console.log(err);
          }
        };

         sendData();
         setFormData({
             name : "",
             email : "",
             phone :"",
             message : ""
         });
    };

    console.log(formData);

    return (
        <div>
            <div id="contact" className="contact">
              <div className="contact__bgsecondary">
              </div>
              <div className="contact__image">
              </div>
              <div> 
                <h2>Get in touch <br/><b>We are hiring!</b></h2>
              </div>
              <div className="datos__contacto">
                <FloatingLabel
                  controlId="floating-inp"
                  label="Name"
                  lassName="tt mb-4"
                >
                  <Form.Control
                   type="text"
                   placeholder="###"
                   name="name"
                   onChange={handleChange}
                   />
                </FloatingLabel>
                <FloatingLabel
                    controlId="floating-inp"
                    label="Email"
                    className="mb-4"
                >
                  <Form.Control
                    type="email"
                    placeholder="###"
                    name="email"
                    onChange={handleChange}
                    />
                </FloatingLabel>
                <FloatingLabel
                   controlId="floating-inp"
                   label="Phone"
                   className="mb-4"
                >
                  <Form.Control
                    type="phone"
                    placeholder="###"
                    name="phone"
                    onChange={handleChange}
                  />
                </FloatingLabel>
                <FloatingLabel
                  controlId="floating-inp"
                  label="Message"
                  className="mb-4"
                >
                  <Form.Control
                     as="textarea"
                     placeholder="###"
                     style={{ height: "10rem", paddingTop: "2rem" }}
                     name="message"
                     onChange={handleChange}
                  />
                </FloatingLabel> 
                <button className="contact__button" onClick={handleSubmit} >Send</button>
              </div> 
            </div>
        </div>        
    );
};