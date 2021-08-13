import styled from "styled-components";

export const HeaderCont = styled.div`
  display: flex;
  align-items: center;
padding: 0 2%;
  height: 10vh;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
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
    font-size: 16px;
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
    background: #6161e1;
    font-size: 12px;
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
      padding: 6px 13px;
        font-size: 12px;
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


export const HomeCont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 60vh;
  padding: 5%;

  .logo {
    width: 270px;
    margin-bottom: 3vh;

    img {
      width: 100%;
    }
  }

  .lang_offered {
    margin-top: 20px;
     font-size: 12px;
    a {
      margin: 0 5px;
    }
  }

  @media (max-width: 900px) {
    .logo {
      width: 150px;
    }

    .lang_offered {
      margin-top: 10px;
      font-size: 10px;


    }
  }
`;
export const SearchCont = styled.form`
width: 45%;
margin:0 auto;

@media (max-width: 900px) {
  width: 90%;
}
`;
export const SearchInput = styled.div`
  border: 1px solid #d1cece6a;
  display: flex;
  align-items: center;
  
  border-radius: 50px;
  transition: .5s;

  &:hover {
    box-shadow: 0 1px 2px 1px rgba(0, 0, 0, 0.3);
  }

  input {
    flex: 1;
    padding: 10px 2px;
    margin: 5px 5px;
    border: none;
    outline: none;
    font-size: 16px;
  }

  .search_icon {
    font-size: 20px;
    color: #333333a6;
    margin: 10px 15px;

    @media (max-width: 900px) {
      font-size: 30px;
    }
  }

  img {
    width: 15px;
    margin: 10px 15px;
  }
`;
export const SearchBtn = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-top: 5vh;

button {
  margin: 0 10px;
  padding: 10px 25px;
  border: none;
  background: #f7f7f7a9;
  border-radius: 5px;

  &:hover {
    box-shadow: 0 1px 2px 1px rgba(0, 0, 0, 0.3);
    

  }
}

@media (max-width: 900px) {

  button {
    padding: 7px 15px;
    margin:0  10px;
  }
  
}
`;


export const FooterCont = styled.div`
background: #ededed;
position: absolute;
bottom: 0;
left: 0;
width: 100%;
font-size: 12px;

hr {
  border: 1px solid #d4d4d4;
}

.country {
  padding: 0.6% 5%;
}
`;
export const FooterLinks = styled.div`
  padding: 0.6% 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 12px;
    margin-right: 3px;
  }

  a {
    color: #222;
  }

  ul li {
    display: inline-block;
    margin: 0 10px;
  }

  @media (max-width: 900px) {
    flex-direction: column-reverse;
    justify-content: center;
    text-align: center;
    .copyright {
      display: none;
    }

    ul {
      margin-bottom: 10px;
    }
  }
`;