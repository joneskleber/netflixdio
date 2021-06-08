import styled from 'styled-components';

export const FooterBase = styled.footer`
  background: var(--black);
  border-top: 2px solid var(--primary);
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 32px;
  padding-bottom: 32px;
  color: var(--white);
  text-align: left;
  @media (max-width: 800px) {
    margin-bottom: 50px;
  }

 
  .Footer-conhecer{
    display: flex;
    width : 100%;
    align-itens: center;
    justify-content: start;
    padding-bottom: 15px;

  }

  .Footer-conhecer p{
    text-decoration: none;
    font-size: 25px;    
    font-weight: bold;
  }
 
  .Footer-mida-social-group{
  }

  .Footer-mida-social-group p{
    text-decoration: none;
    font-size: 15px;    
    font-weight: bold;
    padding-bottom: 15px;
  }
 
  .copyright{
    text-decoration: none;
    font-size: 15px; 
    color: white;     
    padding-bottom: 15px;
  }
 

  
  .social-icons a:hover {
    color: var(--primary);
}

  `;
