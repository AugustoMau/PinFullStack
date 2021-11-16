import {useState, useEffect} from 'react';
import axios from 'axios';
import Contact from './contact';

export default () => {

    const [formData, setFormData] = useState({
        name : "",
        email : "",
        phone :"",
        message : "",
    });

    /* const handleChange = (event) => {
        const property  = event.target.name
        const value  = event.target.value
        setFormData({...formData,[property]:value})
    } */

    const handleChangeName = (event) => {
        const name = event.target.value
        setFormData({...formData, name})
     }  
     
     const handleChangeEmail = (event) => {
         const email = event.target.value
         setFormData({...formData, email})
      } 
 
      const handleChangePhone = (event) => {
         const phone = event.target.value
         setFormData({...formData, phone})
      } 
 
      const handleChangeMessage = (event) => {
         const message = event.target.value
         setFormData({...formData, message})
      }  

      //console.log(formData)

      const handleSubmit = ()=>{
        const sendData = async () => {
            console.log(formData)
            try{
             const response = await axios({
                method: 'POST',
                formData,    
                //url:  `http://127.0.0.1:8000/api/grabando`

             })
             console.log(response)
            }catch(err){
             console.log(err)
            }
        }
         sendData()
         setFormData({
             name : "",
             email : "",
             phone :"",
             message : ""
         })
    }

    return (
        <div>
        <Contact
        onChangeName = {handleChangeName}
        onChangeEmail = {handleChangeEmail}
        onChangePhone = {handleChangePhone}
        onChangeMessage = {handleChangeMessage}
        onClick = {handleSubmit}
        />
        </div>
    )

    
}