To run this:

1. run  ```npm install axios```
2. run  ```npm install express```


3. If the game is manually determined (pitting against another player):
    3a. Comment out line: 13 & 16 of the index.js
    3b. Uncomment lines: 14 of the index.js
    3c. edit gameId to the relevant Game Id
    
4. If the game is against the default bot, 
    4a. Uncomment lines 13 & 16 of the index.js
    4b. Comment out line 14 of the index.js


5. run ```node index.js```
6. Navigate to the following link and replace <ID> with the corresponding game id (will be output to the console)

http://battleship-smackdown.club/games/<ID>


***NOTE: Additional documentation found at http://battleship-smackdown.club

Google Doc with extra info on the requests and responses:
https://docs.google.com/document/d/1NpUPbJF-UHaQk_7VQrVxbLNQ9JVFtUcSxZDw3pg3My8/edit#