# React/Redux/Next.js frontend project for Tribe challenge

This frontend project is built for *Tribe Code Challenge* which will use this [NestJS backend](https://github.com/adminha/tribe) as a service provider.

So before running this project, make sure the backend is installed & running.

## Installation & Usage

```bash
npm install
```
or 
```bash
yarn
```

After that, 
```bash
npm run dev
```

## Idea behind this project

As a code challenge, I tried to make a very simple app by creating both backend & frontend parts. 

This app uses `Jwt` as authorization. When a user logs-in a Cookie with the Jwt token value will be set. On every request, the backend service will verify that `Jwt` token to return what user requested.

There are 6 different pages:

1. Auth (login & register) pages.
2. Dashboard (recent posts of the community on Tribe)
3. Single page of the post
4. Wallet page (Where user can set or generate ethereum wallets as many as they want, and choose the default one)
5. Rewards page (Where user can see the rewards he gained for his reactions on community posts)
6. Tribe user setting page (Where user can update his information on Tribe platform) *didn't have enough time to complete this one*

On every reaction a logged-in user makes on posts (Like or Comment), the user will receive `100 TRT` or `Tribe Reward Token` in his wallet immediately.

These rewards with corresponding transaction Id on ethereum network will then be available in `rewards` page.

## Please Note

In order to not facing any errors, please first generate a new wallet and set the default one, then do the reaction (like or comment). You may face errors if you don't have any wallets in case of reaction and the transaction may fail.


