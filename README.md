# Using User Session in Express.JS

This is a small demo of using user sessions (read cookies) with an Express.JS app. A sample cookie file is available in the `/tmp` folder in this repo.

This project uses two NPM Packages

`express-sessions` and `session-file-store`

> NOTE: `express-sessions` needs to be initiated and required before `session-file-store` otherwise the App will crash.

### How to Use

1. Clone this repository

   ```bash
   git clone https://github.com/nyukeit/ejssessions.git
   ```

2. Install packages

   ```bash
   npm i
   ```

3. Start the server

   ```bash
   npm run start
   ```

4. Go to the website

   ```http
   http://localhost:3000
   ```

This initiates a user session as soon as you land on the homepage. You can verify this by going to the project folder. There will be a `/tmp` folder created with a file inside. This is the cookie file.

5. Go the `session-in` page

   ```http
   http://localhost:3000/session-in
   ```

This step initializes the secret which will then be displayed on `session-out`

6. Go to `session-out` page to view the secret

   ```http
   http://localhost:3000/session-out
   ```

You should see the message **'be bop a lula'** which means the session worked correctly. 