import styled from "styled-components";

export const HeaderCont = styled.div`
  display: flex;
  align-items: center;
padding: 0 5%;
  height: 10vh;
`;



export const HeaderNav = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;

  .toggle {
    display: none;
    font-size: 20px;
  }

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
   
  }

  .nav li {
margin-right: 20px;
  }

  .user_info  li{
      margin-left: 20px;
  }

  ul li {
    display: flex;
    align-items: center;
    
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
    width: 100%;
    .toggle {
      display: block;
    }


  

    ul li {
      display: inline-block;
    }

 

    .user_info .cta {
      padding: 4px 10px;
        font-size: 15px;
    }

    .all {
      display: inline-block;
    }

    .gmail {
      display: none;
    }
  }
`;


export const SideNavCont = styled.div`
  width: auto;
  height: 100%;
  padding: 30px 20px;
  position: fixed;
  top: 0;
  left: -100vw;
  background: #f4f4f4;
  transition: .5s;

&.active {
    left: 0;
}

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
