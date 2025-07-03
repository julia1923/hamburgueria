import PageHeader from './cart/PageHeader';
import './cart.scss';
import PageTitle from './cart/PageTitle';
import Summary from './cart/Summary';
import { useEffect, useState } from 'react';
import { api } from './Provider';
import CartLoading from './cart/CartLoading';
import CartTable from './cart/CartTable';

function CartPage() {
  const [cart, setCart] = useState([]);

  const fetchData = () => {
    return api.get('/cart').then((response) => setCart(response.data));
  };

    //Criando um estado para controlar o carregamento
  const [isLoading, setIsLoading] = useState(false);

  //Remove item
  const handleRemoveItem = (item) => {

    setIsLoading(true);

    api.delete(`/cart/${item.id}`).then(() => {
      fetchData().then(() =>{
        setIsLoading(false);
      });
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

    api.put(`/cart/${item.id}`, newData).then(() => {
      fetchData().then(() =>{
        setIsLoading(false);
      });
    });
  };

  //Altera o total em aside
  const getTotal = () => {
    let sum = 0;

    for (let item of cart) {
      sum += item.price * item.quantity;
    }
    return sum;
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
                  <CartLoading/>
                )}
          <section>
            <CartTable
            cart={cart}
            handleRemoveItem={handleRemoveItem}
            handleUpdateItem={handleUpdateItem}
            ></CartTable>
          </section>
          <aside>
            <Summary total={cartTotal} />
          </aside>
        </div>
      </main>
    </>
  );
}

export default CartPage;