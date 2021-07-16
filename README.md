# 

To run this project, you should have
- NodeJS
- Yarn (installed globally)



1. Clone this project from the repo
2. Install the required dependencies by running `yarn install`.
3. Create an `.env.local` file in the root directory of the project. Declare `NEXT_PUBLIC_AUTH_KEY` variable and assign the All out deepl `auth_key` to it. e.g:
```js
// .env.local
NEXT_PUBLIC_AUTH_KEY=your_deepl_auth_key
```
3. Navigate into the project's root directory in your terminal and run the command `yarn dev`. The app should start up on `localhost:3000`.
4. To run tests, run `yarn test`
