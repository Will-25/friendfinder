Friend Finder
- this is a quick survey that, based on user input, will match them with a friend from a hard-coded API. While the user is matched with a friend, all inputs from the user will also be pushed into the API, therefore giving the user the ability to match with themselves.

- When the page is loaded, there is a splash screen that will show some brief instructions, and a button to get to the survey. When the button is clicked the survey shows and the user will be asked for their name, a photo URL, and then 10 questions with which to match against the API

- When the submit button is clicked, the users input is sent to API and is also matched against all other answers. A function is called to compare numbers between the user, and all the entries in the API. Depending on which answers were given, a friend will be given based on who had the least amount of difference in their numbers.

- As long as the server remains running (the window isn't closed out) the API including the users data will be persistent, meaning you can take the survey again and potentially match with yourself.


https://friend-finder122.herokuapp.com/