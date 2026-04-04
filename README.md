# Blog App - Backend

This is the backend for the blog app.
It is a REST API built with Node.js and Express.
It handles authentication, posts, comments, and role-based access control.

---

## What it does

- Lets users register and log in
- Issues JWT tokens for authentication
- Lets users create, edit and delete their own posts
- Lets users add and delete their own comments
- Gives admins the ability to delete any post or comment
- Enforces all permissions on the server side

---

## Docs

- [How to run the backend](./docs/setup.md)
- [How authentication works](./docs/auth.md)
- [How roles and permissions work](./docs/rbac.md)
- [All API endpoints](./docs/api.md)
- [Decisions and assumptions](./docs/decisions.md)

---

## Folder Structure

backend/
src/
controllers/ → handles requests and sends responses
routes/ → defines the API endpoints
middleware/ → auth and ownership checks
models/ → prisma client
config/ → environment variables
app.js → sets up express
server.js → starts the server
prisma/ → database schema and migrations
docs/ → documentation

---

## Tech Stack

- Node.js
- Express
- PostgreSQL
- Prisma
- JWT
- bcrypt
