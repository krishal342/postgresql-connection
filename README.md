
This is the backend program to connect postgreSQL in node.js using prisma.

# link
- api: https://postgresql-connection.onrender.com
- code: https://github.com/krishal342/postgresql-connection

# dependencies
- "@prisma/adapter-pg": "^7.2.0",
- "@prisma/client": "^7.2.0",
- "dotenv": "^17.2.3",
- "express": "^5.2.1",
- "pg": "^8.17.1"

# dev-dependiencies
- "prisma": "^7.2.0"

# routes
/users -> POST request to create user -> take 'name' and 'email'
/users -> GET request to get all users
/users/:id -> GET request to get user by id
/users/:id -> PUT request to update user by id
/users/:id -> DELETE request to delete user by id


# .env variadles

- PORT
- DATABASE_URL

# steps
- step 1: npm install @prisma/client @prisma/adapter-pg pg dotenv
- step 2: npm install prisma --save-dev
- step 3: npx prisma init
- step 4: define data model
- step 5: npx prisma migrate dev --name init
- step 6: npx prisma generate
