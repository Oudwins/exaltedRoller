# General TODO

- Add host settings
  - Kick -> cambia contraseña
  - Puede ver contraseña en todo momento
- Tooltip dice rolled.
- Get favicon
- How to deal with showing different things to admin? idk

# POSSIBLE FUTURE APPROACH FOR COLORS

- Create a Users array in which we store all current users (need to make events for join and leave so that we can store a copy of each user that is currently in the room).
- Then we make messages reference one of those users, that way all the colors change when they do for the users
- However if a user has left we need a default color for them.
- This whole thing just allows us to change the color in only one place rather than having to loop through the entire fucking list.

# NEED SOME WAY TO DISPLAY ERRORS SO USER KNOWS WHY HE IS BEING REDIRECTED

- on socket.on('error')
- on emit else
