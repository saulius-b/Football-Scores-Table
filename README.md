# Football match calculator


## How to run

In the project directory, you can run:
* `npm install`
* `npm start`




## General overview

* The user can add teams and scores. 
* Once there are atleast two teams, they are rendered into a pair. Each other team will be paired and added to the list instantly. 
* Once a team pair (a match) has both scores entered, this will be reflected at the score table. 
* Scores can be changed and the score table will be updated.
* New teams can be added to the existing tournament.
* All data is saved at localstorage, so the user can refresh/leave the page at any point and come back to the results.

## How to clear localStorage

Open the "Inspect element console", navigate to "Application" > "Local Storage", select the "persist:root" key and delete it.
![image](https://user-images.githubusercontent.com/67793926/205253287-c5e15e2a-4b0a-4548-b72b-1b8a7394067c.png)
