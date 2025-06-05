import PageHeader from './layout/PageHeader';
import './styles.scss';
import TableRow from './TableRow';
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
  const handleRemoveItem = (item) => {
    console.log('disparou handleRemoveItem');
    console.log({item});
    api.delete(`/cart/${item.id}`).then(response => {
      console.log(response);
      fetchData();
    });
  };
  
  //Altera a quantidade
  const handleUpdateItem = (item, action) => {
    let newQuantity = item.quantity;

    if(action === 'increase'){
      newQuantity += 1; 
    }
    if (action === 'decrease') {
      if(newQuantity === 1){
        return;
      }
      newQuantity -= 1;
    }

    const newData = {...item, quantity: newQuantity}
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
                    <td colSpan='5' style={{textAlign: 'center', fontFamily: 'Arial'}}>
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