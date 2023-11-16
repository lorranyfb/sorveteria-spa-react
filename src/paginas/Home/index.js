import React from 'react';
import Header from '../../componentes/Header';
import Footer from '../../componentes/Footer';
import './style.css';

const Home = () => (
      <div>

        <Header />

        <main>
          <section>
            <div className='box-background-image'> 
              <h1>SORVETE ARTESANAL</h1>
            </div>
          </section>

          <section className='box-home'>
            <img src='assets/banner-sabores.jpg' alt="sorvetes diversos"/>
            <div>
              <h2 className='title-home'>NOSSOS SABORES</h2>
              <span className='sub-title-home'>Novos e delicioso!</span>
              <p className='paragraph-home'> Sorvete bom é aquele feito com os melhores ingredientes! Aqui na gelateria todos os nossos produtos são naturais, à base de frutas e sem nenhum conservante! Também temos opções sem lactose e sem açúcar. Venha conhecer e perceber que tem como o sorvete ser delicioso e saudável ao mesmo tempo!</p>
            </div>
          </section>
        
          <section className='box-home'>
            <div>
              <h2 className='title-home'>NOSSO EVENTOS</h2>
              <span className='sub-title-home'>Delicias com sorvete!</span>
              <p className='paragraph-home'>Mais do que uma sorveteria, uma extensão da sua casa! Estamos aqui prontinhos para te atender e oferecer os melhores eventos com os melhores sorvete da sua vida! Venha nos conhecer e passar um tempo aqui com a gente.</p>
            </div>
            <img src='assets/eventos-image.jpg'/>
          </section>

          <section className='box-home'>
            <img src='assets/sobre-image.jpg'/>
            <div>
              <h2 className='title-home'>SOBRE NÓS</h2>
              <span className='sub-title-home'>Alegria em cada casquinha!</span>
              <p className='paragraph-home'>Venha tomar o melhor sorvete da região aqui com a gente! Nós estamos há anos no mercado produzindo o que tem de melhor para o nosso cliente e você não pode ficar fora dessa. Venha nos fazer uma visita e aproveite o melhor atendimento e o melhor sorvete da cidade.</p>
            </div>
          </section>
        </main>

        <Footer/>

      </div>
    );
  
    export default Home;