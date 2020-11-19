# Разработка сервера проверки анонимности пользователя

## Usecase

У вас есть некоторый веб-сайт который хочет отслеживать, кто заходит на него и сколько раз. При этом на сайте нет авторизации. Соответственно веб-сайту необходимо реализовать функционал такой, чтобы можно было выявить повторный заход пользователя вне зависимости от его окружения (перечислены в порядке возрастания сложности деанонимизации):

1. Браузер - веб-сайт умеет определять, что один и тот же пользователь в одной ОС зашел с разных браузеров.
2. Сеть - веб-сайту все равно на браузер и на сеть, из которой заходит клиент (например, смена Wi-Fi на мобильную сеть или другой на Wi-Fi с течением времени).
3. ОС - веб-сайту все равно на ОС, сеть и браузер.

> Подсказка: технология называется "фингерпринтинг" или веб-трекинг.

## Requirements

1. Идентификация пользователя после смены IP и/или браузера и/или ОС (чем больше, тем лучше).
2. Обнаружение использования proxy/VPN/TOR.
3. Обнаружение «сливаемых» заголовков прокси-серверов (зависит от типа анонимности прокси-сервера).
4. Хранение идентификаторов пользователя для последующего сравнения в любой БД (SQL или NoSQL; соответственно PostgreSQL или MongoDB вполне сойдут).
5. Язык программирования сервера: **Golang**/Python/Node.js (Golang предпочтителен, но не обязателен). Можно использовать любые библиотеки. 
6. Интерфейс клиент: достаточно сделать базовый веб с выводом информации о деанонимизирующих параметрах.
7. Язык программирования клиента: понятное дело, на JavaScript.
8. Выложить сервер на Google Cloud или аналог (У гугла в Compute Engine на базовой виртуалке бесплатно можно разместить).