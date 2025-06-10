import PageHeader from './layout/PageHeader';
import './cart.scss';
import TableRow from './layout/TableRow';
import PageTitle from './layout/PageTitle';
import Summary from './layout/Summary';
import { useEffect, useState } from 'react';
import { api } from './Provider';



function App() {
  const [cart, setCart] = useState([]);

  const fetchData = () => {
    api.get('/cart').then((response) => setCart(response.data));
  }

  //Remove item

    //Criando um estado para controlar o carregamento

  const [isLoading, setIsLoading] = useState(false);
  
  const handleRemoveItem = (item) => {

    setIsLoading(true);

    console.log('disparou handleRemoveItem');
    console.log({ item });
    api.delete(`/cart/${item.id}`).then(response => {
      console.log(response);
      fetchData();

      setIsLoading(false);
    });
  };

  //Altera a quantidade
  const handleUpdateItem = (item, action) => {
    let newQuantity = item.quantity;

    if (action === 'increase') {
      newQuantity += 1;
    }
    if (action === 'decrease') {
      if (newQuantity === 1) {
        return;
      }
      newQuantity -= 1;
    }

    const newData = { ...item, quantity: newQuantity }
    delete newData.id;
    console.log(newData);
    api.put(`/cart/${item.id}`, newData).then((response) => {
      console.log(response);
      fetchData();
    }
    )
  };

  //Altera o total em aside
  const getTotal = () => {
    let sum = 0;

    console.log('Get total');

    for (let item of cart) {
      sum += item.price * item.quantity;
    }
    return sum;
  };

const overlayStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 9999
};

const spinnerStyle = {
  width: '60px',
  height: '60px',
  border: '6px solid #ccc',
  borderTop: '6px solid #09f',
  borderRadius: '50%',
  animation: 'spin 1s linear infinite'
};

  const cartTotal = getTotal();

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <PageHeader />
      <main>
        <PageTitle />
        <div className="content">
          {isLoading && (
                  <div style={overlayStyle}>
                    <div style={spinnerStyle}></div>
                  </div>
                )}
          <section>
            <table>
              <thead>
                <tr>
                  <th>Produto</th>
                  <th>Preco</th>
                  <th>Quantidade</th>
                  <th>Total</th>
                  <th>-</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item, index) => (
                  <TableRow key={index} item={item}
                    handleRemoveItem={handleRemoveItem}
                    handleUpdateItem={handleUpdateItem}
                  />
                ))}
                {cart.length === 0 && (
                  <tr>
                    <td colSpan='5' style={{ textAlign: 'center', fontFamily: 'Arial' }}>
                      <b>Carrinho de compras vazio.</b>
                    </td>
                  </tr>
                )}

              </tbody>
            </table>
          </section>
          <aside>
            <Summary total={cartTotal} />
          </aside>
        </div>
      </main>
    </>
  );
}

export default App;