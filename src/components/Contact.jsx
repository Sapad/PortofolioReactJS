import React, { useRef } from 'react'
import {MdOutlineEmail } from 'react-icons/md'
import {AiFillGithub} from 'react-icons/ai'
import {BsWhatsapp} from 'react-icons/bs'
import '../layouts/contact.css'
import emailjs from '@emailjs/browser';

function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_5cvk07k', 'template_y40yce4', form.current, 'XcJidtYIDA6WAjkNV')

        e.target.reset()

          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
  return (
    <section id='contact'>
        <h2>Contact Me</h2>

        <div className="container contact__container">
            <div className="contact__options">
                <article className='contact__option'>
                    <MdOutlineEmail className='contact__option-icons'/>
                    <h4>Email</h4>
                    <h5>saptoadiyanto291@gmail.com</h5>
                    <a href="mailto:saptoadiyanto291@gmail.com" target="_blank"> Send A Massage</a>
                </article>
                <article className='contact__option'>
                    <AiFillGithub className='contact__option-icons' />
                    <h4>Github</h4>
                    <h5>Sapad</h5>
                    <a href="https://github.com/Sapad" target="_blank"> Github Me</a>
                </article>
                <article className='contact__option'>
                    <BsWhatsapp className='contact__option-icons' />
                    <h4>WhatsApp</h4>
                    <h5>0878-8837-3865</h5>
                    <a href="https://api.whatsapp.com/send?phone=087888375865" target="_blank"> Send A Massage</a>
                </article>
            </div>
            {/* Contact options*/}
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" name='name' placeholder='Your Full Name' required />
                <input type="email" name="email" placeholder='Your email' required />
                <textarea name="message" rows="7" placeholder='Your Massage' required></textarea>
                <button type='submit' className='btn btn-primary'> Send Message</button>
            </form>
        </div>
    </section>
    )
}

export default Contact