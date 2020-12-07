# Auth server RestAPI list
 
 - [get pair token](#pairtoken)

---

<a name="pairtoken"></a>

#### get pair token (POST `api/auth/token_pair`)

 * ##### req

       id: String
       role: Number
    
 * ##### res🆗 201

       accessToken: String
       refreshToken: String

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
