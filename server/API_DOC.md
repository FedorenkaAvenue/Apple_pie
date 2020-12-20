# RestAPI list

📌 Last update: *20/12/2020 10:05*    
📌 Эмоджи 👓 возле **API** указывает на требование предоставления **access** токена    
📌 Эмоджи 📟 возле **API** указывает, что **API** недоступна для клиента    

--

 * <details>
      <summary><b>common errors🤬</b></summary>

      * `400` неправильно сформированый запрос
      * `401` не авторизован (не предоставлен валидный access токен)
      * `403` запрещен доступ
      * `406` неверные данных
      * `409` такие данные уже существуют и не могут иметь аналогов (уникальные)
      * `402` нет оплаченый аккаунт
      * `415` неверный формат данных
      * `418` эмейл не подтвержден
      * `520` пойманная ошибка сервера
      
   </details>

 * ##### sign🔑
 
      - [sign up](#signup)
      - [sign in](#signin)
      - [sign out](#signout)

 * ##### auth🔬

      - [refresh token](#refresh)

 * ##### customer🧑‍💻

      - [application list](#customer_application_list)
      - [add application](#add_application)

 * ##### artist👩‍🎓

      - [sketch list](#artist_sketch_list)

 * ##### user👥

      - [exist](#exist) (проверить существующие данные юзеров)
      - [verify](#verify) (подтвердить *email*)

--

## Sign🔑

<a name="signup"></a>

<details>
<summary><b>sign up (POST <code>api/sign/signup</code>)</b></summary>

 * ##### req

       name: String
       password: String
       email: String
       role: Number
    
 * ##### res🆗 201 + cookie (refresh_token)

       accessToken: String

 * ##### res⛔️ 406 (неверный формат данных)

       field: String (имя некорректного поля)

 * ##### res⛔️ 409 (такие данные уже существуют в DB)

       field: String (имя существующего поля)

</details>

<a name="signin"></a>

<details>
<summary><b>sign in (POST <code>api/sign/signin</code>)</b></summary>

 * ##### req

       email: String
       password: String

 * ##### res🆗 200 + cookie(refresh token)

       accessToken: String

 * ##### res⛔️ 406 (неверные данные)

</details>

<a name="signout"></a>

<details>
<summary><b>sign out👓 (GET <code>api/sign/signout</code>)</b></summary>

 * ##### res🆗 200 (с удалением куки refresh токена)

</details>

## Auth🔬

<a name="refresh"></a>

<details>
<summary><b>refresh token (GET <code>api/auth/refresh</code>)</b></summary>

 * ##### res🆗 201 + cookie (refresh токен)

       accessToken: String

 * ##### res⛔️ 406 (простроченый refresh токен или сессия не найдена)

</details>

## Customer🧑‍💻

<a name="customer_application_list"></a>

<details>
<summary><b>application list👓 (GET <code>api/customer/applist</code>)</b></summary>

 * ##### res🆗 200

       appList: Array

 * ##### res⛔️ 403 (неверная роль)

</details>

<a name="add_application"></a>

<details>
<summary><b>add application👓 (POST <code>api/customer/application</code>)</b></summary>

 * ##### req

       title: String
       descr: String
       images: Array<Binary>

 * ##### res🆗 201

 * ##### res⛔️ 403 (неверная роль)

</details>

## Artist👩‍🎓

<a name="artist_sketch_list"></a>

<details>
<summary><b>sketch list👓 (GET <code>api/artist/sketchlist</code>)</b></summary>

 * ##### res🆗 200

       sketchList: Array

 * ##### res⛔️ 403 (неверная роль)

</details>

## User👥

<a name="exist"></a>

<details>
<summary><b>exist (GET <code>api/user/exist</code>)</b></summary>

 * ##### query params (один из)

       name: String
       email: String

 * ##### res🆗 200

       exists: Boolean

</details>

<a name="verify"></a>

<details>
<summary><b>verify📟 (GET <code>api/user/verify</code>)</b></summary>

 * ##### query params

       key: String

 * ##### res🆗 200 + redirect to (`/`)

      * ##### res query paramns

            verify_email: Boolean

</details>
