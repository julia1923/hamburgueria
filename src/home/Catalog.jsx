import React from 'react'
import { api } from '/src/Provider';
import { useEffect, useRef} from 'react';
import Swal from 'sweetalert2';

export const Catalog = ({setCartCount}) => {

    // Adiciona a contagem no símbolo do carrinho
    const handleAddtoCart = () => {
        setCartCount(prev => prev + 1);
    }

// Meus produtos
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
    ]

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

  return (
    <div id='cardapio' className="catalog">
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
                                <button onClick={() => {handleBuy(product); handleAddtoCart();}}>Comprar</button>
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
  );
};
