import React from 'react';
import './style.css';

const Footer = () => (
    <footer className='box-footer'>
        <div>
            <div className='box-secao'>
                <img src='assets/logo.png'/>

                <div className='box-information'>
                    <h3 className='title-footer'>ENDEREÇO</h3>
                    <p className='paragraph-footer'>Av. Bernardinho de Campos, 98</p>
                    <p className='paragraph-footer'>São Paulo, SP 12345-678</p>
                </div>
                <div className='box-information'>
                    <h3 className='title-footer'>CONTATO</h3>
                    <p className='paragraph-footer'>info@meusite.com</p>
                    <p className='paragraph-footer'>Tel.: (11) 3456-7890</p>
                </div>
                <div className='box-information'>
                    <h3 className='title-footer'>HORÁRIOS</h3>
                    <p className='paragraph-footer'>ABERTO TODOS OS DIAS</p>
                    <p className='paragraph-footer'>10:00 - 22:00</p>
                </div>
            </div>
            <div className='box-creation'>
                <p>Gelateria. Orgulhosamente desenvolvida por "Lorrany Furtado"</p>
            </div>
        </div>
    </footer>
);

export default Footer;