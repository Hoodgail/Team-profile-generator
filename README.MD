# Team Profile Generator

## Summary

This is a node-based command-line application that allows the user to create a basic HTML page based off of information provided by the user. The user will be prompted with a series of questions, and when complete, an HTML page will be generated that contains information about the user's team. The team is comprised of an arbitrary amount of managers, engineers and interns.

https://drive.google.com/file/d/1eWmsrCzVetYSZ2BgEk6IqWs1VcnxAcEZ/view?usp=share_link

## User Story

```
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to emails and GitHub profiles
```

## Business Context

When creating a new team, you want to quickly get information about each team member. In order to do this, you will
need to generate an HTML page that displays all the basic information about your team members.

## Dependencies

-   [Inquirer](https://www.npmjs.com/package/inquirer)
-   [Jest](https://jestjs.io/)
-   [fs](https://www.npmjs.com/package/fs)
-   [util](https://www.npmjs.com/package/util)

## Install

    $ npm install

## Usage

    $ npm run start

## Tests

    $ npm run test
