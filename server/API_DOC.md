# RestAPI list

📌 Last update: 18/12/2020 10:46
📌 Эмоджи 👓 возле **API** указывает на требование предоставления **access** токена

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

 * ##### res⛔️ 403 (неверные данные)

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

 * ##### res⛔️ 406 (простроченый refresh токен)

 * ##### res⛔️ 418 (взломаный токен)

</details>

## Customer🧑‍💻

<a name="customer_application_list"></a>

<details>
<summary><b>application list👓 (GET <code>api/customer/applist</code>)</b></summary>

 * ##### res🆗 200

       appList: Array

 * ##### res⛔️ 401 (не авторизирован)

 * ##### res⛔️ 406 (неверная роль)

</details>

<a name="add_application"></a>

<details>
<summary><b>add application👓 (POST <code>api/customer/addapp</code>)</b></summary>

 * ##### req

       appName: String
       description: String
       images: Array<Binary>
       city: UNKNOWN // пока хз

 * ##### res🆗 201

 * ##### res⛔️ 401 (не авторизирован)

 * ##### res⛔️ 406 (неверная роль)

</details>

## Artist👩‍🎓

<a name="artist_sketch_list"></a>

<details>
<summary><b>sketch list👓 (GET <code>api/artist/sketchlist</code>)</b></summary>

 * ##### res🆗 200

       sketchList: Array

 * ##### res⛔️ 401 (не авторизирован)

 * ##### res⛔️ 406 (неверная роль)

</details>

## User👥

<a name="exist"></a>

<details>
<summary><b>exist (GET <code>api/user/exist</code>)</b></summary>

 * ##### query params (только один)

    - name: String
    - email: String

 * ##### res🆗 200

       exists: Boolean

</details>
