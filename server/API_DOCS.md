# RestAPI list

 * ##### auth🔑
 
    - [signup](#signup)

 * ##### user🧑‍💻

    - [exist](#exist) (проверить существующие данные юзеров)

***

## Auth🔑

<a name="signup"></a>

#### signup (POST `api/auth/signup`)

 * ###### req

       name: String
       password: String
       email: String
       role: String
    
 * ###### res success **201** + token

 * ###### res error **409**

       existed: String (имя существующего поля)

## User🧑‍💻

<a name="exist"></a>

#### exist (GET `api/user/exist`)

 * ###### query params (только один)

    - name: String
    - email: String

 * ###### res

       exists: Boolean
