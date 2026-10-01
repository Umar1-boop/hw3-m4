

// const usersJSON = `[
//       {
//         "id": 1,
//         "name": "Анна",
//         "age": 25,
//         "address": {
//           "city": "Бишкек",
//           "street": "Советская"
//         },
//         "hobbies": ["чтение", "плавание", "фотография"]
//       },
//       {
//         "id": 2,
//         "name": "Иван",
//         "age": 30,
//         "address": {
//           "city": "Ош",
//           "street": "Ленина"
//         },
//         "hobbies": ["футбол", "программирование"]
//       },
//       {
//         "id": 3,
//         "name": "Мария",
//         "age": 22,
//         "address": {
//           "city": "Каракол",
//           "street": "Абдрахманова"
//         },
//         "hobbies": ["рисование", "музыка", "путешествия"]
//       }
//     ]`;

//     function renderUsers(users) {
//       const app = document.getElementById("app");

//       users.forEach(user => {
//         const block = document.createElement("div");

//         block.innerHTML = `
//           <h2>${user.name}, ${user.age} лет</h2>
//           <p>Город: ${user.address.city}</p>
//           <p>Улица: ${user.address.street}</p>
//           <h3>Хобби:</h3>
//           <ul>
//             ${user.hobbies.map(hobby => `<li>${hobby}</li>`).join("")}
//           </ul>
//         `;

//         app.appendChild(block);
//       });
//     }

//     try {
//       const users = JSON.parse(usersJSON);
//       renderUsers(users);
//     } catch (error) {
//       console.error("Ошибка при обработке JSON:", error);
//     }


const usersJSON = `[
  {
    "id": 1,
    "name": Анна,
    "age": 25,
    "address": {
      "city": "Бишкек",
      "street": "Советская"
    },
    "hobbies": ["чтение", "плавание", "фотография"],
    "orders": [
      {
        "id": 101,
        "items": [
          { "name": "Ноутбук", "price": 75000 },
          { "name": "Мышь", "price": 1500 }
        ]
      },
      {
        "id": 102,
        "items": [
          { "name": "Клавиатура", "price": 3000 },
          { "name": "Наушники", "price": 5000 }
        ]
      }
    ]
  },
  {
    "id": 2,
    "name": "Иван",
    "age": 30,
    "address": {
      "city": "Ош",
      "street": "Ленина"
    },
    "hobbies": ["футбол", "программирование"],
    "orders": [
      {
        "id": 103,
        "items": [
          { "name": "Монитор", "price": 25000 },
          { "name": "Коврик для мыши", "price": 800 }
        ]
      }
    ]
  }
]`;

function renderUsersWithOrders(users) {
  const app = document.getElementById("new_app");

  users.forEach(user => {
    const userCard = document.createElement("div");

    userCard.innerHTML = `
      <div class="user-card">
        <h2>${user.name}, ${user.age} лет</h2>
        <p>Город: ${user.address.city}</p>
        <p>Улица: ${user.address.street}</p>

        <h3>Хобби:</h3>
        <ul>
          ${user.hobbies
            .map(hobby => `<li>${hobby}</li>`)
            .join("")}
        </ul>

        <h3>Заказы:</h3>
        <div class="orders"></div>
      </div>
    `;

    const ordersContainer = userCard.querySelector(".orders");

    user.orders.forEach(order => {
      const orderBlock = document.createElement("div");

      const total = order.items.reduce(
        (sum, item) => sum + item.price,
        0
      );

      orderBlock.innerHTML = `
        <h4>Заказ №${order.id}</h4>
        <ul>
          ${order.items
            .map(item => `
              <li>
                ${item.name} — ${item.price.toLocaleString("ru-RU")} сом
              </li>
            `)
            .join("")}
        </ul>
        <strong>
          Сумма заказа: ${total.toLocaleString("ru-RU")} сом
        </strong>
        <hr>
      `;

      ordersContainer.appendChild(orderBlock);
    });

    app.appendChild(userCard);
  });
}

try {
  const users = JSON.parse(usersJSON);
  renderUsersWithOrders(users);
} catch (error) {
  console.error("Ошибка при обработке JSON:", error);

  const app = document.getElementById("new_app");
  app.textContent = "Не удалось загрузить пользователей";
}
