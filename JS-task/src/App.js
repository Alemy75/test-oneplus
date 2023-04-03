import { useEffect, useState } from 'react';
import './App.css';

function App() {
  // Состояние для валют
  const [items, setItems] = useState([])


  // При первой загрузке фетчим валюты
  useEffect(() => {
    fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1')
      .then(res => res.json())
      // Присваиваем состоянию валют выгруженные данные
      .then(data => setItems(data))
  }, [])

  return (
    <div className="App">
      <div className='container'>
        <table className="iksweb">
          <thead>
            <tr>
              <th>id</th>
              <th>symbol</th>
              <th>name</th>
            </tr>
          </thead>
          <tbody>
            { 
              // Отрисовка шаблона для валюты (строка таблицы)
              items.map((item, index) => (
                <tr className={
                  // Если символ usdt, то красим строку в зеленый.
                  item.symbol === "usdt" 
                    ? 'usdt' 
                    // Иначе проверяем, если индекс < 5 то красим в синий 
                    : index < 5 
                      ? 'first-five' 
                      // Иначе className отсутствует
                      : ''
                }>
                  <td>{item.id}</td>
                  <td>{item.symbol}</td>
                  <td>{item.name}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
