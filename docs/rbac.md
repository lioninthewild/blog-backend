# How Roles and Permissions Work

There are two types of users in this app: USER and ADMIN.

---

## What each role can do

| Action                   | USER | ADMIN |
| ------------------------ | ---- | ----- |
| Register and Login       | yes  | yes   |
| See all posts            | yes  | yes   |
| Create a post            | yes  | yes   |
| Edit their own post      | yes  | yes   |
| Delete their own post    | yes  | yes   |
| Edit anyone's post       | no   | yes   |
| Delete anyone's post     | no   | yes   |
| Add a comment            | yes  | yes   |
| Delete their own comment | yes  | yes   |
| Delete anyone's comment  | no   | yes   |

---

## How it is checked

Every protected route goes through the auth middleware first.
The middleware reads the token and figures out who the user is and what role they have.

If the route needs a specific role, the authorize middleware checks that too.
If the user does not have the right role, they get a 403 error which means access denied.

For posts and comments, there is also an ownership check.
This checks if the user is the one who created the post or comment.
Admins skip this check and can delete anything.

---

## How admins are created

There is no admin registration page.
Admins are created by registering normally and then manually
changing the role to ADMIN in the database using Prisma Studio.

This is intentional. Letting anyone register as an admin would be a security risk.
