import React from 'react';

const Summary = ({total}) => {
    return (
        <>
            <div className="box">
                <header>Resumo da Compra</header>
                <div className="info">
                    <div><span>Subtotal</span><span>R$ {total}</span></div>
                    <div><span>Frete</span><span>Gratuito</span></div>
                    <div>
                        <button>
                            Adicionar cupom de desconto
                            <i className="bx bx-arrow-right-stroke"></i>
                        </button>
                    </div>
                </div>
                <footer>
                    <span>Total</span>
                    <span>R$ {total}</span>
                </footer>
            </div>
            <button>Finalizar Compra</button>
        </>
    );
};

export default Summary;



