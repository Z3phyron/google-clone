import styled from "styled-components";

export const HeaderCont = styled.div`
  display: flex;
  align-items: center;
  padding: 0 5%;
  height: 10vh;
`;

export const HeaderToggle = styled.div`
  display: none;
  font-size: 20px;

  @media (max-width: 900px) {
      display: block;
  }
`;

export const HeaderNav = styled.div`
  margin-left: auto;
display: flex;
width: 80%;
  align-items: center;

  .all {
    display: none;
  }

  a {
    color: #343434;
    font-size: 18px;
    font-weight: 500;
  }

  ul {
    display: flex;
    align-items: center;
    margin-left: 20px;
  }
  ul li {
    display: flex;
    align-items: center;
    margin-left: 20px;
  }

  .user_info img {
    width: 20px;
  }

  .user_info .cta {
    padding: 8px 25px;
    background: blue;
    font-size: 17px;
    /* text-transform: uppercase; */
    color: #fff;
    border-radius: 5px;
  }

  @media (max-width: 900px) {
    justify-content: space-between;
    margin-left: 0;
  }
`;

export const SideNav = styled.div``;


export const SideNavCont = styled.div`
  width: auto;
  height: 100%;
  padding:30px 20px;
  position: fixed;
  top: 0;
  left: 0;
  display: none;

  background: #5c5b5b8f;

  .logo {
    width: 80px;
    margin-bottom: 30px;

    img {
      width: 100%;
    }
  }

  .links li {
      margin-bottom: 30px;

      a {
          color: #333;
          font-size: 18px;
          font-weight: 500;
          display: flex;
          align-items: center;

          .icon {
              margin-right: 10px;
                font-size: 20px;
          }
      }
  }
`;
