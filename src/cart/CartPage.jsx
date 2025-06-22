import PageHeader from './cart/PageHeader';
import './cart.scss';
import TableRow from './cart/TableRow';
import PageTitle from './cart/PageTitle';
import Summary from './cart/Summary';
import { useEffect, useState } from 'react';
import { api } from './Provider';
import CartLoading from './CartLoading';

function CartPage() {
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
            <CartLoading
            cart={cart}
            handleRemoveItem={handleRemoveItem}
            handleUpdateItem={handleUpdateItem}
            ></CartLoading>
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