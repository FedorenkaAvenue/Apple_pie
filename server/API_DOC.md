# RestAPI list

 * ##### sign🔑
 
    - [sign up](#signup)
    - [sign in](#signin)
    - [sign out](#signout)

 * ##### auth🔬

      - [refresh token](#refresh)

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

--

<a name="signin"></a>

#### sign in (POST `api/sign/signin`)

 * ##### req

       email: String
       password: String

 * ##### res🆗 200 + cookie(refresh token)

       accessToken: String

 * ##### res⛔️ 403 (неверные данные)

--

<a name="signout"></a>

#### sign out (POST `api/sign/signout`)

 * ##### req

       accessToken: String
 * ##### res🆗 200 (с удалением куки refresh токена)

--

## Auth🔬

<a name="refresh"></a>

#### refresh token (GET `api/auth/refresh`)

 * ##### res🆗 201 + cookie (refresh токен)

       accessToken: String

 * ##### res⛔️ 406 (простроченый refresh токен)

 * ##### res⛔️ 418 (взломаный токен)

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
