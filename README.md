# Ngrx101

> Демо-проект для демонстрации работы с *ngrx/store*, *ngrx/effects* в Angular. 

Приложение предоставляет список пользователей и их дел.

Каждая ветка - это определённый шаг работы над подключением к проекту ngrx/store.

- *master* - базовый проект без ngrx/store
- *final* - финальная версия проекта с ngrx/store

## API

Для получения необходимых данных используется сервис https://jsonplaceholder.typicode.com/

> https://jsonplaceholder.typicode.com/users/<user_id> - получение данных пользователя

> https://jsonplaceholder.typicode.com/todos?userId=<user_id> - получение всех дел пользователя

> https://jsonplaceholder.typicode.com/todos - получение списка всех дел

> https://jsonplaceholder.typicode.com/users - получение списка всех пользователей

## Презентация

[Управление состоянием в Angular 101](./Managing_state_Angular_101.pdf)
