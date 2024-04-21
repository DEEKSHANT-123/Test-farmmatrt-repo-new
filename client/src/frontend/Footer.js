import React from "react";
import styled from "styled-components";
import { FaFacebook,FaInstagram,FaYoutube } from "react-icons/fa";


const Footer=()=>{
    return(<Wrapper>
        <footer>

        <div className="container grid grid-four-column">
            <div className="footer-about">
                <h3>FARMART</h3>
                <p>Farmart is a website that provide the farms products and equipments</p>

            </div>
  
            <div className="footer-subscribe">
              <h3>Subscribe to get important updates</h3>
              <form action="#">
                <input type="email" name="email" placeholder="YOUR E-MAIL" />

                <input type="submit" value="subscribe" />
              </form>
            </div>

            <div className="footer-social">
      <h3>Follow Us</h3>
      <div className="footer-social--icons">
        <div>
          <a href="https://www.facebook.com/officialpage" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="icons" />
          </a>
        </div>
        <div>
          <a href="https://www.instagram.com/officialpage" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="icons" />
          </a>
        </div>
        <div>
          <a href="https://www.youtube.com/channel/officialpage" target="_blank" rel="noopener noreferrer">
            <FaYoutube className="icons" />
          </a>
        </div>
        <div>
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=farmartis062@gmail.com">
            <span className="icons">✉</span>
          </a>
          https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=new
        </div>
      </div>
    </div>
            <div className="footer-contact">
              <h3>Call Us</h3>
              <a href="tel:8827132824"> <h3>+91 8827132824</h3></a>
              <a href="tel:6265326362"> <h3>+91 6265326362</h3></a>
              <a href="tel:8765437970"> <h3>+91 8765437970</h3></a>
              <a href="tel:7249996016"> <h3>+91 7249996016</h3></a>
            </div>
        </div>
        <div className="footer-bottom--section">
            <hr />
            <div className="container grid grid-two-column ">
              <p>
                @{new Date().getFullYear()} FARMART. All Rights Reserved
              </p>
              <div>
                <p>PRIVACY POLICY</p>
                <p>TERMS & CONDITIONS</p>
              </div>
            </div>
          </div>

        </footer>
</Wrapper>);
}
const Wrapper=styled.section`
footer {
    padding: 7rem 0 1rem 0;
    background-color: ${({ theme }) => theme.colors.footer_bg};
    h3 {
      color: ${({ theme }) => theme.colors.hr};
      margin-bottom: 2.4rem;
    }
    p {
      color: ${({ theme }) => theme.colors.white};
    }
    .footer-social--icons {
      display: flex;
      gap: 2rem;

      div {
        padding: 1rem;
        border-radius: 50%;
        border: 2px solid ${({ theme }) => theme.colors.white};

        .icons {
          color: ${({ theme }) => theme.colors.white};
          font-size: 2.4rem;
          position: relative;
          cursor: pointer;
        }
      }
    }
  }

  .footer-bottom--section {
    padding-top: 9rem;

    hr {
      margin-bottom: 2rem;
      color: ${({ theme }) => theme.colors.hr};
      height: 0.1px;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {

    footer {
      padding: 9rem 0 9rem 0;
    }

    .footer-bottom--section {
      padding-top: 4.8rem;
    }



`;
export default Footer;