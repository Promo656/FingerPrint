# Счетчик оригинальных посетителей сайта.
### Используемые библиотеки:
`fingerprintjs`
### Используемые API:
`https://extreme-ip-lookup.com` - информация о текущем IP.\
`https://ipinfo.io` - информация об использовании TOR, PROXY, VPN.\
`https://firebase.google.com/` - Firebase служит базой данных, которая изменяется в реальном времени и хранит данные в JSON.
### Принцип работы:
При первом посещении сайта происходит идентификация пользовательского IP адреса и ID. После чего эти данные сохраняются в базу данных для последующего сравнения. В случае если пользователь перешел на другой браузер, то происходит проверка текущего IP с теми, которые ранее были сохранены в базе данных. А если пользователем был изменен IP (переключение мобильного интернета на WI-FI), то происходит сравнение текущего ID с теми, которые ранее были сохранены в базе данных. Таким образом данный сайт предоставляет возможность считывать количество оригинальных посетителей. 
