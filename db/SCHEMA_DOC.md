## users

|key         |type        |required|condition                      |description                 |
|:-:         |:-:         |:-:     |--                             |--                          |
|id          |Number      |+       |                               |                            |
|name        |String      |+       |length: **3** - **20**         |                            |
|password    |String      |+       |length **< 20**                |                            |
|email       |String      |        |                               |                            |
|role        |Number      |+       |                               |**1** user<br/> **2** master|
