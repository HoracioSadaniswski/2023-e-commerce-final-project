import React from 'react';
import './aboutus.css';
import logo from './misiotronica1.png';
import misiones from './misiones.png';
import guarantee from './guarantee.png';
import confianza from './confianza.png';
import comunication from './telecomunication.png';


function AboutUs() {
  return (
    <>
      <div className="misiotronica-container">
        <header>
          <div className="logotipe">
            <img src={logo} alt="Logo de Misiotrónica" />
          </div>
          <div className='title-subtitle'>
            <h1>Misiotrónica</h1>
            <h2>Unleash Your Digital Potential</h2>
          </div>
        </header>
        <main>
          <section className='about-us'>
          <img src={ comunication } alt='comunications logo' />
            <div>
              <h2>Nuestra empresa</h2>
              <p>En Misiotrónica, nos enorgullecemos de ser líderes en la industria de la tecnología y electrónica. Ofrecemos una amplia gama de productos de alta calidad que satisfacen todas tus necesidades tecnológicas, desde lo último en informática hasta impresionantes soluciones de iluminación, audio y video.

              Nuestro catálogo incluye una emocionante selección de dispositivos electrónicos, computadoras de última generación, periféricos y accesorios informáticos que te mantendrán conectado y productivo en todo momento. Si buscas laptops potentes, computadoras de escritorio de alto rendimiento o tablets innovadoras, estamos aquí para proporcionarte lo mejor de lo mejor.</p>
            </div>
            </section>
          <section className='origins'>
            <div>
              <h2>Nuestros Orígenes</h2>
              <p>
                Misiotrónica tiene sus raíces profundamente arraigadas en la hermosa ciudad de Posadas, Misiones. Fundada por un apasionado equipo de emprendedores locales, nuestra empresa surgió con la visión de brindar a la comunidad acceso a lo último en tecnología y productos electrónicos de primera calidad. Desde nuestros humildes comienzos en un pequeño local hasta convertirnos en un referente en la industria, siempre hemos mantenido nuestro compromiso de ofrecer soluciones innovadoras y satisfacer las necesidades tecnológicas de nuestros clientes. Estamos orgullosos de ser una empresa misionera que contribuye al desarrollo tecnológico de nuestra región.
              </p>
            </div>
            <img src={misiones} alt='imagen Misiones' />
          </section>
          <section className='guaranteed-products'>
            <img src={guarantee} alt='imagen garantía' />
            <div>
              <h2>Productos garantizados</h2>
              <p>
                En Misiotrónica, la satisfacción de nuestros clientes es nuestra máxima prioridad. Es por ello que nos enorgullecemos de ofrecer productos de primera calidad y completamente originales. Nuestra sólida garantía cubre cualquier posible defecto de fabricación, garantizando que recibirá productos en perfectas condiciones. Estamos comprometidos a brindarle una experiencia de compra excepcional, respaldada por la certeza de que cada artículo que adquiera con nosotros es auténtico y de la más alta calidad. En Misiotrónica, su confianza y tranquilidad están garantizadas.
              </p>
            </div>
          </section>
          <section className="why-choose-us">
            <div>
              <h2>Por Qué Elegirnos</h2>
              <p>
                Elegir Misiotrónica es apostar por una experiencia única en tecnología y electrónica. Nuestro compromiso con la calidad, la innovación y el excelente servicio al cliente nos distingue como una empresa líder en el mercado.  Nuestro equipo altamente capacitado está siempre dispuesto a asesorar y brindar soluciones a medida para cada cliente. Además, respaldamos cada compra con garantías sólidas que ofrecen tranquilidad y confianza. En Misiotrónica, creemos en la satisfacción del cliente como nuestra prioridad, lo que nos impulsa a seguir mejorando y superando expectativas. Descubra una experiencia de compra incomparable, donde la innovación y la excelencia se encuentran en cada detalle.
              </p>
              </div>
              <img src={confianza} alt='confianza' />
          </section>
        </main>
      </div>
    </>
  );
}

export { AboutUs };
