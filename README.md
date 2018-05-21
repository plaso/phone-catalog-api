## Introduction
This project consists in a simple phone catalog app. It has been develop with React in the client-side and NodeJS in the back-end. It is very simple to use, you will see some phone cards with information and you are able to click in "See details" to get more information.

The project has been published [here](https://plaso.github.io/phone-catalog-web/).

## Localhost
If you want to try it in local, just fork the project or download it and run `npm run dev`.
You can get the client-side in [this repo](https://github.com/plaso/phone-catalog-web/).

## Endpoints

What you get | HTTP Verb | Endpoint
--- | --- | ---
*All phones* | `GET` | /phones
*One phone* | `GET` | /phones/:id
*Create phone* | `POST` | /phones
