
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
/users -> post request to create user -> take 'name' and 'email'
/users -> get request to get all users
/user/:id -> get request to get user by id

# .env variadles

- PORT
- DATABASE_URL
