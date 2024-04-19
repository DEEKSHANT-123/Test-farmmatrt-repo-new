
import styled from "styled-components";
// import Header from "./Header";

const Contact = () => {

  const Wrapper = styled.section`
    padding: 2rem 0 3rem 0;
    text-align: center;
    .container {
      margin-top: 3rem;
      .contact-form {
        max-width: 50rem;
        margin: auto;
        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;
          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;
            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  return (
   <>
   {/* <Header /> */}
    <Wrapper>
    
    <h2 className="common-heading">Contact page</h2>

    <iframe
       src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14404.786670569949!2d81.85997142571472!3d25.498486741786625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399ab516c6cc5c7f%3A0x6bc36ec5a9d78263!2sTagore%20Hostel%20MNNIT%20Allahabad!5e0!3m2!1sen!2sin!4v1710332173180!5m2!1sen!2sin"
      width="100%"
      height="400"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"></iframe>

    <div className="container">
      <div className="contact-form">
        <h3><b>Feel Free To Contact Us</b></h3>
        <form
          action="https://formspree.io/f/xjvnozgz"
          method="POST"
          className="contact-inputs">
          <input
            type="text"
            placeholder="username"
            name="username"
          
            required
            autoComplete="off"
          />

          <input
            type="email"
            name="Email"
            placeholder="Email"
            autoComplete="off"
          
            required
          />

          <textarea
            name="Message"
            cols="30"
            rows="10"
            required
            autoComplete="off"
            placeholder="Enter you message"></textarea>

          <input type="submit" value="send" />
        </form>
      </div>
    </div>
  </Wrapper>
   
   
   </>
  );
};

export default Contact;