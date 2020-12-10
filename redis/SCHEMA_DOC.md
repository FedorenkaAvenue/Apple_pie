# Redis DB models

## db №0 (sessions)

|key         |type        |description                 |
|:-:         |:-:         |--                          |
|userId      |String      |                            |
|refreshToken|String      |                            |
|ua          |String      |**user agent**              |
|fingerprint |String      |**browser "ip"**            |
|ip          |Number      |**user ip**                 |
|expiresIn   |Number      |**session live time**       |
|createdAt   |Number      |                            |
