import { Form, FloatingLabel, Container } from "react-bootstrap";
import "../../assets/css/styles.scss";
import Button from "./button";

export default ({
  onChangeName,
  onChangeEmail,
  onChangePhone,
  onChangeMessage,
  onClick,
  nameValid,
  emailValid,
  phoneValid,
  messageValid,
  valor,
}) => {
  return (
    <div className="my-container__h2-form">
      <h2 class="contact-h2">
        Get in touch<span> We are hiring!</span>
      </h2>
      <div className="my-form">
        <FloatingLabel
          controlId="floating-inp"
          label="Name"
          className="tt mb-4 "
        >
          <Form.Control
            className={nameValid ? "borde-verde" : "borde-rojo"}
            type="text"
            placeholder="###"
            name="name"
            onChange={onChangeName}
            autocomplete="off"
          />
        </FloatingLabel>

        <FloatingLabel controlId="floating-inp" label="Email" className="mb-4">
          <Form.Control
            className={emailValid ? "borde-verde" : "borde-rojo"}
            type="email"
            placeholder="###"
            name="email"
            onChange={onChangeEmail}
            autocomplete="off"
          />
        </FloatingLabel>

        <FloatingLabel controlId="floating-inp" label="Phone" className="mb-4">
          <Form.Control
            className={phoneValid ? "borde-verde" : "borde-rojo"}
            type="phone"
            placeholder="###"
            name="phone"
            onChange={onChangePhone}
            autocomplete="off"
          />
        </FloatingLabel>

        <FloatingLabel
          controlId="floating-inp"
          label="Message"
          className="mb-4"
        >
          <Form.Control
            className={messageValid ? "borde-verde" : "borde-rojo"}
            as="textarea"
            placeholder="###"
            style={{ height: "10rem", paddingTop: "2rem" }}
            name="message"
            onChange={onChangeMessage}
            autocomplete="off"
          />
        </FloatingLabel>

        <Container className="container-button">
          <Button type="submit" onClick={onClick} valor={valor} />
        </Container>
      </div>
    </div>
  );
};