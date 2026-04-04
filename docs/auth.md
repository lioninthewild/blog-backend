# How Authentication Works

---

## Registering

When someone registers, they give their email and password.
The password is never saved as it is.
It gets scrambled using bcrypt before saving to the database.
The scrambled version is what gets stored.

---

## Logging In

The user gives their email and password.
The backend looks up the user by email.
Then it checks if the password matches the scrambled version in the database.
If it matches, a token is created and sent back to the user.

The token contains:

- The user id
- The user role

The token expires after 7 days.

---

## How the token is used

After login, the token is saved in the browser.
Every time the user makes a request to a protected endpoint,
the token is sent in the request header like this:

Authorization: Bearer <token>

The backend reads the token, checks if it is valid,
and then decides if the request is allowed or not.

---

## Why the error message is the same for wrong email and wrong password

If someone types a wrong email or wrong password they get the same error.
This is on purpose. If we said email not found, someone could use that
to figure out which emails are registered in the system. Keeping it vague is safer.
