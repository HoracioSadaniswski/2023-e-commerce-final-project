import React from "react";
import './Card.css';
import BtnAdd from './bt_add_to_cart.svg';
import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context'

const Card = () => {
  const context = useContext(ShoppingCartContext);

  const showProduct = (product) => {
    context.setProductShow(product);
    context.openProductDetail();
  }

// Product Data
const products = [
  //Informatica
  {
    title: 'Notebook',
    image: 'https://images.pexels.com/photos/40185/mac-freelancer-macintosh-macbook-40185.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    price: '$1200',
    description: 'Potencia y portabilidad se fusionan en nuestra laptop de última generación. Diseñada para brindar un rendimiento excepcional en un formato compacto, esta laptop te ofrece la velocidad y eficiencia que necesitas para tus tareas diarias.',
  },
  {
    title: 'Mouse',
    image: 'https://images.pexels.com/photos/5082559/pexels-photo-5082559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    price: '$15',
    description: 'Su diseño ergonómico se adapta cómodamente a tu mano, evitando la fatiga y permitiéndote trabajar o jugar durante horas sin molestias. Descubre la combinación perfecta de funcionalidad y estilo en este mouse imprescindible para tu experiencia informática.',
  },
  {
    title: 'GPU',
    image: 'https://images.pexels.com/photos/8622912/pexels-photo-8622912.jpeg',
    price: '$700',
    description: 'Nuestra GPU de última generación proporciona un rendimiento gráfico excepcional. Diseñada para potenciar tus experiencias visuales, esta GPU ofrece una capacidad de procesamiento y una calidad de imagen asombrosas. Ya sea que estés inmerso en juegos intensos o trabajando en tareas de diseño exigentes, esta GPU te brindará un rendimiento fluido y una representación visual impresionante. Descubre un nivel superior de realismo y rendimiento con nuestra potente GPU.',
  },
  {
    title: 'Motherboard',
    image: 'https://images.pexels.com/photos/3520694/pexels-photo-3520694.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    price: '$450',
    description: 'Con características de vanguardia, como soporte para los últimos procesadores y una gran capacidad de expansión, esta placa madre te brinda la base sólida para construir un sistema potente y versátil. Experimenta un rendimiento y una confiabilidad extraordinarios con nuestra placa madre de calidad superior.',
  },
  
  //audio y video
  {
    title: 'Auriculares',
    image: 'https://images.pexels.com/photos/3587478/pexels-photo-3587478.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    price: '$40',
    description: 'Sumérgete en un mundo de sonido excepcional con nuestros auriculares de última generación. Diseñados con comodidad y calidad de sonido en mente, disfrutarás de una experiencia envolvente con graves potentes y agudos cristalinos. Con conectividad inalámbrica, cancelación de ruido activa y controles intuitivos, estos auriculares te brindan libertad y comodidad para disfrutar de tu música favorita en cualquier momento y lugar.',
  },

  {
    title: 'Radio Vintage',
    image: 'https://images.pexels.com/photos/16964394/pexels-photo-16964394/free-photo-of-vintage-tecnologia-antiguo-sonar.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    price: '$50',
    description: 'Revive la nostalgia de la radio clásica con nuestro encantador y auténtico modelo vintage. Con un diseño retro y detalles cuidadosamente restaurados, esta radio añade un toque de elegancia a cualquier espacio. Sintoniza tus emisoras favoritas y disfruta de la calidez del sonido analógico en esta joya atemporal.',
  },
  {
    title: 'Camara',
    image: 'https://images.pexels.com/photos/1002638/pexels-photo-1002638.jpeg',
    price: '$400',
    description: 'Nuestra cámara de fotos captura momentos inolvidables con una calidad excepcional. Con su lente de alta resolución y funciones avanzadas, obtendrás imágenes nítidas y vibrantes. Su diseño compacto y fácil de usar te permite capturar tus mejores momentos con facilidad.',
  },

  // Electronica
  {
    title: 'Pen-drive',
    image: 'https://images.pexels.com/photos/4792751/pexels-photo-4792751.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    price: '$10',
    description: 'Con capacidades generosas y una conexión USB confiable, este pendrive te permite llevar contigo tus archivos importantes y multimedia dondequiera que vayas.',
  },
  {
    title: 'Cable MicroUSB',
    image: 'https://images.pexels.com/photos/4219862/pexels-photo-4219862.jpeg',
    price: '$5',
    description: 'Nuestro cable micro USB te ofrece una conexión confiable y rápida para cargar y sincronizar tus dispositivos.',
  },

  //Conectividad 
  {
    title: 'Router WI-FI',
    image: 'https://images.pexels.com/photos/4218546/pexels-photo-4218546.jpeg',
    price: '$30',
    description: 'Disfruta de una experiencia de navegación fluida, transmisión de contenido sin interrupciones y juegos en línea sin retrasos. Configurar y administrar tu red nunca ha sido tan fácil gracias a su interfaz intuitiva y funciones de seguridad avanzadas. Con nuestro router Wi-Fi, obtén un rendimiento excepcional y una conectividad estable para todos tus dispositivos.',
  },

  //Iluminaicon
  {
    title: 'Luces RGB',
    image: 'https://images.pexels.com/photos/13988975/pexels-photo-13988975.jpeg',
    price: '$25',
    description: 'Nuestra luz RGB te permite crear ambientes cautivadores con su amplia gama de colores y efectos. Con su tecnología LED de alta calidad, puedes personalizar la iluminación según tus preferencias y crear atmósferas únicas en cualquier espacio.',
  },
  {
    title: 'Lampara de lava',
    image: 'https://images.pexels.com/photos/5677999/pexels-photo-5677999.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    price: '$55',
    description: 'Nuestra lámpara de lava te transporta a un viaje hipnótico de colores y formas en constante movimiento. Con su diseño retro y fluido, esta lámpara agrega un toque de estilo y nostalgia a cualquier espacio.',
  },

];


  return (
    <section className='main-container'>
      <div className='cards-container'>
      {products.map((product,index) =>(
        <div className='product-card'>
          <img onClick={() => showProduct(product)} src= {product.image} alt={product.title}/>
          <div className="product-info">
            <div>
              <p>{product.price}</p>
              <p>{product.title}</p>
            </div>
            <figure onClick={ () => context.setCount(context.count + 1)}>
              <img src={ BtnAdd } alt="Agregar"/>
            </figure>
          </div>
        </div>
      ))}
      </div>

  </section>
  )
};

export { Card };