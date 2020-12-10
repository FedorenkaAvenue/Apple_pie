# RestAPI list

 * ##### [auth](../auth_server/API_DOCS.md)🔬

 * ##### sign🔑
 
    - [sign up](#signup)
    <!-- - [log in](#login)
    - [log out](#logout) -->

 * ##### user🧑‍💻

    - [exist](#exist) (проверить существующие данные юзеров)

## Sign🔑

<a name="signup"></a>

#### sign up (POST `api/sign/signup`)

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

<!-- --

<a name="login"></a>

#### log in (POST `api/auth/login`)

 * ##### req

       email: String
       password: String

 * ##### res🆗 200 + token

 * ##### res⛔️ 403 (неверные данные)

--

<a name="logout"></a>

#### log out (GET `api/auth/logout`)

 * ##### res🆗 200 (с удалением кук токена) -->

--

## User🧑‍💻

<a name="exist"></a>

#### exist (GET `api/user/exist`)

 * ##### query params (только один)

    - name: String
    - email: String

 * ##### res🆗 200

       exists: Boolean

--
