# RestAPI list

 * ##### auth🔑
 
    - [sign up](#signup)
    - [log in](#login)
    - [log out](#logout)

 * ##### user🧑‍💻

    - [exist](#exist) (проверить существующие данные юзеров)

## Auth🔑

<a name="signup"></a>

#### sign up (POST `api/auth/signup`)

 * ##### req

       name: String
       password: String
       email: String
       role: String
    
 * ##### res🆗 201 + token

 * ##### res⛔️ 409 (такие данные уже существуют в DB)

       existed: String (имя существующего поля)

--

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

 * ##### res🆗 200 (с удалением кук токена)

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