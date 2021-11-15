import '../../assets/css/styles.css'
import { Form } from 'react-bootstrap'

export default({onChangeName, onChangeEmail, onChangePhone, onChangeMessage, onClick}) => {

  
    return (
    <div id="contact" className="contact">
      <div className="contact__rectangulo">
      </div>
      <div className="contact__image">
      </div>
      <div> 
        <h2>Get in touch <br/><b>We are hiring!</b></h2>
      </div>
      <div className="datos__contacto">
        <Form>
          <Form.Label>Nombre completo</Form.Label>
          <Form.Control type="text" placeholder="Name" onChange={onChangeName}/>
          <Form.Group>
            <Form.Label>Direccion email</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" onChange={onChangeEmail} />
          </Form.Group>
          <Form.Label>Numero de celular</Form.Label>
          <Form.Control type="text" placeholder="Enter Number Phone" onChange={onChangePhone} />
          <Form.Group>
            <Form.Label>Mensaje</Form.Label>
            <Form.Control as="textarea" rows={3} onChange={onChangeMessage} />
          </Form.Group>
        </Form> 
      </div> 
      <button className="contact__button" onClick={onClick} >Send</button>
    </div>

    )
}