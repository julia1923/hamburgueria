import React from 'react';

const PageTitle = ({data}) => {
    return <div className="page-title">{data || 'Seu carrinho'}</div>
};

export default PageTitle;