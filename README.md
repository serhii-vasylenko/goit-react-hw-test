### Description
An application for tracking tweets

### Built With
- [React](https://reactjs.org/e) - The web framework used
- [Redux](https://redux.js.org/) - A Predictable State Container for JS Apps
- [Redux Toolkit](https://redux-toolkit.js.org/) - Toolset for efficient Redux development
- [React Router](https://reactrouter.com/)
- [Axios](https://axios-http.com/) - Axios is a promised-based HTTP client for JavaScript. It has the ability to make HTTP requests from the browser and handle the transformation of request and response data
- [MockAPI](https://mockapi.io/) - simple tool that lets you easily mock up APIs, generate custom data, and preform operations on it using RESTful interface.
- [Styled Components - Emotion](https://emotion.sh/docs/styled) - styled is a way to create React components that have styles attached to them
- [React Icons](https://react-icons.github.io/react-icons/)
- [react-dropdown](https://www.npmjs.com/package/react-dropdown)
- [react-scroll-to-top](https://www.npmjs.com/package/react-scroll-to-top)

### Технічне завдання
Відповідно до макету потрібно реалізувати картки юзера.
При клікові на кнопку Follow - текст змінюється на Following. Також змінюється колір кнопки. А до кількості фоловерів додається і ваш. Тобто, початкова кількість складає 100,500 фоловерів. При клікові на кнопку буде 100,501.
При оновлені сторінки має фіксуватись кінцевий результат дій юзера. Тобто, якщо клікнути по кнопці і оновити сторінку - то кнопка все рівно залишається в стані Following із відповідним кольором, а кількість фоловерів НЕ зменшується до початкового значення.
При повторному клікові на кнопку її текст та колір змінюються до початкового стану. Також змінюється і кількість фоловерів. Вона зменшується на 1 (100,500).
В коді цифра 100,500 має бути прописана одним значенням (100500). В UI - виведено через кому (100,500).
Створи свій персональний бекенд для розробки за допомогою UI-сервісу mockapi.io. Створи ресурс users. Використай конструктор ресурсу та опиши об'єкт юзера, як описано нижче.

### Юзер

Створюєте юзера в Mockapi з наступними полями: id, user, tweets, followers, avatar (див скріншот нижче).
Зображення аватарів мають бути прописані окремими url у властивості “avatar”. Можете підібрати їх самостійно.
Має бути від 12 юзерів з різними значеннями(на ваш розсуд) в базі. Зроби пагінацію. На одній сторінці пагінації має відображатися від 3 твітів, решта підгружатись при натисканні Load More
Решта вимог аналогічні до вищеописаного технічного завдання.
Follow та Following
Макет: https://www.figma.com/file/zun1oP6NmS2Lmgbcj6e1IG/Test?node-id=0%3A1&t=VoiYTfiXggVItgVd-1

### Додаткове завдання
За виконання вам будуть нараховані додаткові бали! Без виконання додаткового завдання ви не зможете отримати максимальний бал.

Створи маршрутизацію, використовуючи React Router.

У застосунку повинні бути такі маршрути. Якщо користувач зайшов за неіснуючим маршрутом, його необхідно перенаправляти на домашню сторінку. '/' – компонент Home, домашня сторінка. Стилізація та оформлення на ваш розсуд '/tweets' - компонент tweets, сторінка із відображенням твітів На сторінці tweets має бути кнопка Back, яка веде на головну сторінку.

### Завдання із зірочкою

Додай фільтрацію. Це має бути Dropdown із 3 опціями(оформлення на ваш розсуд): show all, follow, followings show all - показати всі твіти. follow - показати твіти, у яких стан follow. followings - показати твіти, у яких стан following