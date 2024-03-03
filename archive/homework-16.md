У нас есть список постов на сервере. И наша задача отрисовать текст этих постов на странице.

API - 'https://jsonplaceholder.typicode.com/posts/id  (вместо id номер поста)

Но по каким то необъяснимым причинам, нам требуются посты номер 3, 7, 15, 23. Выглядит просто. Но есть нюанс 🐒 
Посты должны загружаться в определенном порядке. Сначала 15, потом 23, потом 7 и только потом 3. А если какой-то из постов не загрузиться, нам тогда необходимо  вывести в консоль ошибку, а остальные посты без ошибки отрендерить.

Наша задача должна иметь универсальное решение. В любой момент может потребоваться загрузить другие посты, или больше постов или меньше.

Решение должно корректно работать с:
renderPosts(1,2,3,4,5,6)
renderPosts(1,2)
renderPosts([1,2,3,4,5,6])
renderPosts([1,2])
renderPosts({})
renderPosts(true, false)

###### Реализуйте задачу двумя способами:
- Promise chaining
- Async / await