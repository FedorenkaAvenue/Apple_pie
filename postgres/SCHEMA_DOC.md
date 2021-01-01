## users

|key         |type        |required|unique|condition                      |description                     |
|:-:         |:-:         |:-:     |:-:   |--                             |--                              |
|id          |String      |+       |+     |                               |                                |
|name        |String      |+       |+     |                               |                                |
|password    |String      |+       |      |                               |                                |
|email       |String      |        |+     |                               |                                |
|role        |Number      |+       |      |                               |**1** customer<br/> **2** artist|
|verify      |Bolean      |+       |      |                               |                                |
|created_at  |Number      |+       |      |                               |                                |
|photo       |String      |        |      |                               |user photo url                  |
|applications|Array       |        |      |                               |                                |
|sketches    |Array       |        |      |                               |                                |

## applications

|key         |type        |required|unique|condition                      |description                 |
|:-:         |:-:         |:-:     |:-:   |--                             |--                          |
|id          |String      |+       |+     |                               |                            |
|author      |String      |+       |      |                               |user id                     |
|title       |String      |+       |      |                               |                            |
|descr       |String      |        |      |                               |                            |
|images      |Array       |        |      |                               |array of image's paths      |
|created_at  |Number      |        |      |                               |                            |
