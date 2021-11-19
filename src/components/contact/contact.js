import '../../assets/css/styles.scss';
import React, { Component} from 'react';
import imagen from '../../assets/images/contact-image.png';
import footer_logo from '../../assets/images/footer-logo.png';
import axios from 'axios';
import swal from 'sweetalert';
class Contact extends Component {

    state = {
        name: '',
        email: '',
        phone: '',
        message: '',
        error_list: [],
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    saveContact = async (e) => {
        e.preventDefault();

        const response = await axios.post('https://augustomau-laravel.herokuapp.com/api/usuarionuevo', this.state);
        if (response.data.status === 200) {
            //console.log(response.data.message);
            swal("Success!", response.data.message, "success");
            this.setState({
                name: '',
                email: '',
                phone: '',
                message: '',
            });
        } else {
            this.setState({
                error_list: response.data.validate_err,
            });
        }
    }
    render() {
        return (
            <div className="Contact__container" id="contact">
                <img src={imagen} alt="Imagen" className="Contact__image"></img>
                <div className="Contact__tittles">
                    <p className="contact__title-1">Get in touch </p>
                    <p className="contact__title-2"> We are hiring!</p>
                </div>

                <form className="contact__form" onSubmit={this.saveContact}>
                    <label>
                        Name
                        <br /> <input type="text" name="name" onChange={this.handleInput} value={this.state.name} className="contact__form__input-name" />
                        <br/><span className="text-danger">{this.state.error_list.name}</span>
                    </label>
                    <br />
                    <label>
                        Email
                        <br /> <input type="text" name="email" onChange={this.handleInput} value={this.state.email} className="contact__form__input-email" />
                        <br/><span className="text-danger">{this.state.error_list.email}</span>
                    </label>
                    <br />
                    <label>
                        Phone
                        <br /> <input type="text" name="phone" onChange={this.handleInput} value={this.state.phone} className="contact__form__input-phone" />
                        <br/><span className="text-danger">{this.state.error_list.phone}</span>
                    </label>
                    <br />
                    <label>
                        Message
                        <br /> <input type="text" name="message" onChange={this.handleInput} value={this.state.message} className="contact__form__input-message" />
                        <br/><span className="text-danger">{this.state.error_list.message}</span>
                    </label>
                    <br /><input type="submit" value="Send" className="contact__form__input-submit" />
                </form>

                <div className="contact__footer">
                    <img src={footer_logo} alt="Imagen" className="footer__logo"></img>
                    <p className="contact__footer__text">2020 © All rights reserved.</p>

                </div>

            </div>

        );
    }
}
export default Contact;