# API Endpoints

The base URL for all endpoints is http://localhost:5000/api

---

## Auth

These endpoints do not require a token.

### Register

- Method: POST
- URL: /auth/register
- Body: { "email": "test@example.com", "password": "123456" }
- What it does: Creates a new user account

### Login

- Method: POST
- URL: /auth/login
- Body: { "email": "test@example.com", "password": "123456" }
- What it does: Logs in and returns a token

### Me

- Method: GET
- URL: /auth/me
- Requires: Token
- What it does: Returns the logged in user's info

---

## Posts

All post endpoints require a token.

### Get all posts

- Method: GET
- URL: /posts
- Optional: ?page=1&limit=5
- Who can use it: Everyone logged in
- What it does: Returns a list of posts with pagination

### Create a post

- Method: POST
- URL: /posts
- Body: { "title": "My Post", "content": "Hello World" }
- Who can use it: Everyone logged in
- What it does: Creates a new post

### Update a post

- Method: PUT
- URL: /posts/:id
- Body: { "title": "Updated", "content": "Updated content" }
- Who can use it: Post owner only
- What it does: Updates the post title and content

### Delete a post

- Method: DELETE
- URL: /posts/:id
- Who can use it: Post owner or Admin
- What it does: Deletes the post

---

## Comments

All comment endpoints require a token.

### Add a comment

- Method: POST
- URL: /posts/:id/comments
- Body: { "content": "Nice post!" }
- Who can use it: Everyone logged in
- What it does: Adds a comment to a post

### Delete a comment

- Method: DELETE
- URL: /posts/:id/comments/:commentId
- Who can use it: Comment owner or Admin
- What it does: Deletes the comment
