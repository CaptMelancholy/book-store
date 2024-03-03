
## Complete exercise

#### Task 1 💻

+ Создайте ветку на github `name-fetch-training`
+ Далее создайте папку `fetch-training` и добавьте файлы `index.html` `index.js`
+ Реализуйте приложение:

    + Перейдите по ссылке `https://jsonplaceholder.typicode.com/`
    + Во вкладке `Resources` лежит ключ `/todos` - Это именно те данные которые нам нужны
    + Далее напишите две функции `getTodos` & `printTodos`
        + Функция `getTodos` делает запрос по указанному адресу и забирает данные. 
        + Функция `printTodos` создает список `ul`, и в каждый елемент `li` добавляет данные из полученного объекта с делом. Нам нужны ключи из объекта `id` `title`.

Example:
---
        1 delectus aut autem
        2 quis ut nam facilis et officia qui
        3 fugiat veniam minus
        ...
        200 ipsam aperiam voluptates qui

### Доп. материалы обязательные к изучению
+ HTTP methods - https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods
+ HTTP response codes - https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
+ CORS - https://developer.mozilla.org/ru/docs/Web/HTTP/CORS
+ HTTP vs HTTPS - https://www.cloud4y.ru/blog/http-https/
+ TCP / UDP - https://selectel.ru/blog/tcp-vs-udp/