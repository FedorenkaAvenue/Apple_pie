## users

|key         |type        |required|unique|condition                      |description                 |
|:-:         |:-:         |:-:     |:-:   |--                             |--                          |
|id          |String      |+       |+     |length: **< 32**               |                            |
|name        |String      |+       |+     |length: **3** - **20**         |                            |
|password    |String      |+       |      |length: **< 50**               |                            |
|email       |String      |        |+     |                               |                            |
|role        |Number      |+       |      |                               |**1** user<br/> **2** master|

## applications

|key         |type        |required|unique|condition                      |description                 |
|:-:         |:-:         |:-:     |:-:   |--                             |--                          |
|id          |String      |+       |+     |                               |                            |
|author      |String      |+       |      |                               |                            |
|title       |String      |+       |      |                               |                            |
|descr       |String      |        |      |                               |                            |
|images      |Array       |        |      |                               |                            |
|offers      |Array       |        |      |                               |                            |
