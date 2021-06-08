import React from 'react';
import { FooterBase } from './styles';
import '../../../node_modules/font-awesome/css/font-awesome.min.css'; 

function Footer() {
  return (
    <FooterBase>

      <div class="Footer-conhecer">
        <p>Plataforma Empresarial Visão On-line</p>
      </div>

      <div class="Footer-mida-social">
        <div class="Footer-mida-social-group">
          <p>Mídias Sociais</p>
          <div class="social-icons">
              <a href="https://wa.me/5524988235033"><i class="fa fa-whatsapp"></i></a>          
              <a href="https://t.me/joneskleber"><i class="fa fa-telegram"></i></a>          
              <a href="https://www.linkedin.com/in/visaoonline/"><i class="fa fa-linkedin"></i></a>
              <a href="https://www.instagram.com/visao.online/"><i class="fa fa-instagram"></i></a>
              <a href="https://twitter.com/JonesKleber3"><i class="fa fa-twitter"></i></a>      
              <a href="https://www.youtube.com/channel/UCg6kvz6q4zeMRnIOVL0iUAQ/"><i class="fa fa-youtube"></i></a>      
              <a href="mailto:visao@visao-ol.com.br"><i class="fa fa-envelope"></i></a>          
            </div>


        </div>

        <div class="copyright">
          <p class="copyright"> Copyright © Visão On-line Assessoria e Informática Ltda. 2021. Todos os direitos reservados. </p>
        </div>  



      </div>



    




    </FooterBase>
  );
}

export default Footer;
