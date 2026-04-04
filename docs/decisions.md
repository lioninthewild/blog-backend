# Decisions and Assumptions

---

## There are only two roles

We kept it simple with USER and ADMIN.
Adding more roles would make things more complicated without adding much value for this project.

---

## Admins are created manually

There is no way to register as an admin from the app.
This is a security decision. If anyone could sign up as admin,
the whole permission system would be pointless.

---

## Passwords are never stored as plain text

We use bcrypt to scramble passwords before saving them.
Even if someone got access to the database, they would not be able to read the passwords.

---

## JWT instead of sessions

We use tokens instead of sessions.
Tokens do not need to be stored on the server which keeps things simpler.
The server just checks if the token is valid when a request comes in.

---

## app.js and server.js are separate files

app.js sets up express and all the routes.
server.js just starts the server and listens on a port.
Keeping them separate makes the code cleaner and easier to manage.

---

## Ownership check is its own middleware

Instead of writing the same check inside every controller,
we made it a middleware called checkOwnership.
This means we write it once and reuse it on any route that needs it.

---

## Comments are nested under posts in the URL

The URL looks like this: /api/posts/:id/comments
This makes it clear that comments belong to a specific post.

---

## No forgot password feature

This was left out to keep the scope small.
It can be added later if needed.
