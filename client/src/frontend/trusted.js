import styled from "styled-components";

const Trusted = () => {
  return (
    <Wrapper className="brand-section">
      <div className="container">
        <h3>Over 100+ Top Brands</h3>
        <div className="brand-section-slider">
          {/* my 1st img  */}
          <div className="slide">
            <img
              src="https://t3.ftcdn.net/jpg/04/79/73/52/360_F_479735241_O3jHvE8zCMZTr0BdL7DPIKV102GvNBcD.jpg"
              alt="trusted-brands"
            />
          </div>
          <div className="slide">
            <img
              src="https://www.designmantic.com/images/dm-agri-05.png"
              alt="trusted-brands"
            />
          </div>
          <div className="slide">
            <img
              src="https://www.designmantic.com/images/dm-agri-10.png"
              alt="trusted-brands"
            />
          </div>
          <div className="slide">
            <img
              src="https://i.etsystatic.com/5676658/r/il/1eb48f/4399796938/il_fullxfull.4399796938_t6jg.jpg"
              alt="trusted-brands"
            />
          </div>
          <div className="slide">
            <img
              src="https://i.pinimg.com/564x/0a/5d/ef/0a5defae38bb6685b5338f17d2ee011d.jpg"
              alt="trusted-brands"
            />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;
  background-color: ${({ theme }) => theme.colors.bg1};
  .brand-section {
    padding: 12rem 0 0 0;
  }
  h3 {
    text-align: center;
    text-transform: capitalize;
    color: ${({ theme }) => theme.colors.text};
    font-size: 2rem;
    font-weight: bold;
  }
  img {
    min-width: 10rem;
    height: 10rem;
  }
  .brand-section-slider {
    margin-top: 3.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .brand-section-slider {
      margin-top: 3.2rem;
      display: grid;
      grid-template-columns: 1fr 1fr;
      /* background-color: red; */
      text-align: center;
    }
  }
`;

export default Trusted;