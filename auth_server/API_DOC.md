# Auth server RestAPI list
 
 - [signup](#signup)🔑 (**redirect** от `/api/sign/signup`, недоступен клиенту)
 - [refresh](#refresh)💉

<a name="pairtoken"></a>

#### sign up (POST `api/auth/signup`)

 * ##### query params

       userId: String

 * ##### req

       role: Number
    
 * ##### res🆗 201 + cookie(refresh token)

       accessToken: String

 * ##### res⛔️ 501 (сессия не сохранена)

--

#### refresh tokens (GET `api/auth/refresh`)

 * ##### res🆗 201 + cookie (refresh токен)

       accessToken: String

 * ##### res⛔️ 403 (простроченый refresh токен)

 * ##### res⛔️ 418 (взломаный токен)

 * ##### res⛔️ 501 (неизвестная ошибка сервера)

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

-- -->
