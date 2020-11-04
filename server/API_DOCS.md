# RestAPI list

 * ##### auth🔑
 
    - [signup](#signup)
    - [login](#login)

 * ##### user🧑‍💻

    - [exist](#exist) (проверить существующие данные юзеров)

***

## Auth🔑

<a name="signup"></a>

#### signup (POST `api/auth/signup`)

 * ##### req

       name: String
       password: String
       email: String
       role: String
    
 * ##### res🆗 201 + token

 * ##### res⛔️ 409 (такие данные уже существуют в DB)

       existed: String (имя существующего поля)

#### login (POST `api/auth/login`)

 * ##### req

       email: String
       password: String

 * ##### res🆗 200 + token

 * ##### res⛔️ 403 (неверные данные)

## User🧑‍💻

<a name="exist"></a>

#### exist (GET `api/user/exist`)

 * ##### query params (только один)

    - name: String
    - email: String

 * ##### res🆗 200

       exists: Boolean
