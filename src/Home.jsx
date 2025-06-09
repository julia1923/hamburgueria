import './home.scss';
import { api } from './Provider';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useEffect, useRef } from 'react';

function Home() {

    //Lógica para a movimentação do carrossel
    const trackRef = useRef(null);
    const dotsRef = useRef([]);

    useEffect(() => {
        const track = trackRef.current;
        const dots = dotsRef.current;

        const cardsPerSlide = 4;
        const cardWidth = 300;
        const moveAmount = cardsPerSlide * cardWidth;

        dots.forEach((dot, index) => {
            if (!dot) return;
            dot.onclick = () => {
                if (track) {
                    track.style.transform = `translateX(-${index * moveAmount}px)`;
                    dots.forEach(d => d?.classList.remove('active'));
                    dot.classList.add('active');
                }
            };
        });
}, []);

    const products = [
        {
            name: "Burguer Buzz",
            price: 20.00,
            quantity: 1,
            image: '/img/card1.jpg',
        },
        {
            name: "Burguer Buzz",
            price: 20.00,
            quantity: 1,
            image: '/img/card2.jpg',
        },
        {
            name: "Burguer Buzz",
            price: 20.00,
            quantity: 1,
            image: '/img/card3.jpg',
        },
        {
            name: "Burguer Buzz",
            price: 20.00,
            quantity: 1,
            image: '/img/card4.jpg',
        },
        {
            name: "Burguer Buzz",
            price: 20.00,
            quantity: 1,
            image: '/img/card5.jpg',
        },
        {
            name: "Burguer Buzz",
            price: 20.00,
            quantity: 1,
            image: '/img/card6.jpg',
        },
        {
            name: "Burguer Buzz",
            price: 20.00,
            quantity: 1,
            image: '/img/card7.jpg',
        },
        {
            name: "Burguer Buzz",
            price: 20.00,
            quantity: 1,
            image: '/img/card8.jpg',
        }
    ] //meus produtos

    //Inserção do produto para o carrinho
    const handleBuy = async (product) => {
        try {
            await api.post('/cart', {
                name: product.name,
                price: product.price,
                quantity: 1,
                image: product.image
            });

            showAlert();
        } catch (error) {
            console.error("Erro ao adicionar produto no carrinho", error);
            alert("Não foi possível adicionar o produto no carrinho.");
        }
    }

    //Alerta com sweetalert2
    const showAlert = () => {
        Swal.fire({
            title: 'Item adicionado ao carrinho!',
            icon: 'success',
            confirmButtonText: 'Ok',
            background: '#f0f0f0',
            color: '#333',
            confirmButtonColor: '#ffebcd',
            customClass: {
                confirmButton: 'swal-confirm-text',
            }
        });
    };

    return (
        <>
            <header className="header">
                <div className="container">
                    <div className="logo">
                        <img id="img-logo" src="/public/img/logo.png" alt="" />
                        <p id="name-logo">Burguer & Co.</p>
                    </div>

                    <nav className="nav">
                        <ul>
                            <li><a href="#">Cardápio</a></li>
                            <li><a href="#">Sobre</a></li>
                            <li><a href="#">Contato</a></li>
                            <li>
                                <Link to="/cart">
                                    <button className="cart-btn">🛒<span id="cart-count">0</span></button>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    {/* <div className="icon"></div> */}
                </div>
            </header>

            <div className="main-img">
                <h1>HAMBÚRGUERES FEITOS<br />COM EXCELÊNCIA</h1>
            </div>

            {/* catalogo */}
            <div className="catalog">
                <div className="row">
                    <h1>Nosso catálogo</h1>
                    <p>Os melhores hambúrgueres artesanais estão apenas a um telefonema de distância de você!</p>
                </div>

                <div className="carousel-window">
                    <div className="stick-track" ref={trackRef}>

                        {products.map((product, index) => (
                            <div className="card" key={index}>
                                <img src={product.image} alt={product.name} />
                                <h5>{product.name}</h5>
                                <p>Best makers gonna make patties, romaine</p>
                                <p><a href="#">Ler mais</a></p>
                                <p><b>R$ {product.price.toFixed(2)}</b></p>
                                <button onClick={() => handleBuy(product)}>Comprar</button>
                            </div>
                        ))}

                    </div>
                </div>

                <div className="carousel-dots">
                    {[0, 1].map((i) => (
                        <button
                            key={i}
                            className={`dot ${i === 0 ? 'active' : ''}`}
                            data-index={i}
                            ref={el => {
                                if (el) dotsRef.current[i] = el;
                            }}

                        />
                    ))}
                </div>
            </div>

            <div className="about-us">
                <img className="about-image" src="/img/about.png" alt="" />
                <div className="text">
                    <h6>Preparando os <em>melhores</em> sanduíches, hot dogs e pastéis</h6>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi temporibus quia dolorum,
                        unde perspiciatis totam dolor iusto vero alias molestiae quos soluta! Provident unde asperiores hic iusto iste,
                        maxime saepe. Fuga quis perspiciatis est.
                        Maiores nemo repellat ex illum. Minus? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Eius a ullam atque, laboriosam culpa quod, possimus inventore cumque magnam obcaecati corrupti hic quis,
                        doloremque quae fugiat perspiciatis incidunt eum voluptatibus? <br /><br />
                        Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit. Rem nobis laboriosam explicabo? Cupiditate, reprehenderit nisi. Doloremque
                        illum itaque suscipit tenetur pariatur omnis qui mollitia facilis,
                        perferendis iusto vel expedita quaerat repellat ab officia distinctio placeat ducimus inventore
                        dignissimos similique consectetur! Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Labore repudiandae eos suscipit optio consequuntur facilis ipsam praesentium sapiente deserunt quos.
                    </p>
                </div>
            </div>

            <h1 className='contact-title'>Contato</h1>

            <div className="contact">
                <div className="info-contact">
                    <h6>Informaçõs de Contato</h6>
                    <span><i className="fa-solid fa-phone"></i> (+990) 698 598 631 </span>
                    <span><i className="fa-solid fa-envelope"></i> demo@example.com </span>
                </div>

                <div className="address">
                    <h6>Endereço</h6>
                    <span><i className="fa-solid fa-location-dot"></i> 378 FA Tower, William SBl 2123, IL, US </span>
                    <span><i className="fa-solid fa-map-location-dot"></i> Location </span>
                </div>

                <div className="working-hours">
                    <h6>Horário de Funcionamento</h6>
                    <div className="sub-table">
                        <span>Tuesday - Friday</span>
                        <span>08:00 - 20:00</span>
                    </div>
                    <div className="sub-table">
                        <span>Saturday</span>
                        <span>09:00 - 18:00</span>
                    </div>
                    <div className="sub-table">
                        <span>Sunday</span>
                        <span>09:00 - 18:00</span>
                    </div>
                    <div className="sub-table">
                        <span>Monday</span>
                        <span>09:00 - 18:00</span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
