# How to Run the Backend

---

## What you need

- Node.js installed on your computer
- PostgreSQL installed and running
- A database created in PostgreSQL

---

## Steps

Go into the backend folder:

```bash
cd backend
```

Install the packages:

```bash
npm install
```

Create a file called .env and add these lines:

DATABASE_URL="postgresql://USER:PASSWORD@localhost:5432/blogdb"
PORT=5000
JWT_SECRET="anylongrandomstring"

Replace USER and PASSWORD with your postgres username and password.
Replace blogdb with the name of your database.

Set up the database:

```bash
npx prisma migrate dev
npx prisma generate
```

Start the backend:

```bash
npm run dev
```

It will run on http://localhost:5000

---

## How to create an admin user

Register a user normally using the API or the frontend.
Then open Prisma Studio:

```bash
npx prisma studio
```

Find the user in the User table and change their role to ADMIN. Save it.

---

## Checking if it works

Visit http://localhost:5000 in your browser.
You should see:

```json
{ "message": "API is running" }
```
