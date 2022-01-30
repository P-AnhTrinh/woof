# Woofmee from the Caring Hackers

Web app made for dogs owners seeking to find play dates for their dogs.
Project built for ConUHacks VI.

## Demo

To try a demo deployment, visit this [link]()

## Table Of Contents

-   [Introduction](#introduction)
-   [Use Cases](#use-cases)
-   [Setup](#setup)
-   [Disclaimer](#disclaimer)
-   [Credits](#credits)
-   [License](#license)

## Introduction

The inspiration for this project is none other than the well being of our dogs; our beloved best friends. We wanted to make it easier to find a play date in your city with a dog that has similar size and/or characteristics. With the current reopening going on, this will serve numerous people whose dog would need to be left home alone for long hours. 

## Use Cases

When signing up, the user is asked to input a couple of characteristics of his dog and a profile picture of it. Then, once logged in, the user can see a feed with other dogs and can filter accordingly based on location and characteritics. Once he thinks he has a match, he can open the chat function and get the conversation going!

## Setup
This project assumes that you already have `Node ^14.17.6` & `npm ^6.14.15`. If you do not, please download them from [the official website](https://nodejs.org/en/download/)
Here are a couple of steps that you can follow to quickly get started with the project.

1. Clone the repository: `git clone https://github.com/mike1572/woof.git`
2. Install the project dependencies by running `npm install` inside the cloned directory
3. Run `npm start` to start your own local development environment! Alternatively, here are some more commands available:

| Commands        | Output
|-----------------|-------------------------------------------------------------------|
| `npm run build` | Creates a production-ready build of the project, ready for deployment |
| `npm update`    | Updates dependencies that require newer versions to keep functioning correctly|
| `serve -s`      | You *must* install serve (`npm install -g serve`) before running this command. This command makes the project accessible both locally and on your network, in the event that you want to test it on different devices or share it with your entourage.|

There are many more commands, which you can familiarise yourself with on the [Create a React App](https://create-react-app.dev/) website, or in [npm's](https://docs.npmjs.com/) documentation.

### Disclaimer

For privacy and security reasons, there is a file missing in this repository containing the firebase credentials. You will have to add it when creating your project using Firebase. The file should be named firebaseConfig.js, be placed in the src folder, and contain the following: 
import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage'
import {getAuth} from 'firebase/auth';
const firebaseConfig = <'Your credentials go here'>;
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const storage = getStorage(app)
export const db = getFirestore(app) 

## Credits

Many thanks to everyone who participated in the creation of this repository

## License
This project or parts of its code are licensed under AGPLv3. Furthermore, npm libraries are subject to their own copyright.