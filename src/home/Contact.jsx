import React from 'react'

export const Contact = () => {
  return (
    <>
    <h1 id='contato' className='contact-title'>Contato</h1>

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
};
