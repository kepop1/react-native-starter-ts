# React Native Starter v2 :rocket:

### Now with TypeScript & Contexts :coffee:

A React Native starter repo with the aim to implement "scalable gold star" standards from the get go giving some examples with a couple of screens.

## Intro / Motivation

This hopefully exists as a _"living document"_ in the sense that as popular patterns change and packages update, this starter app will also update.

To be honest it exists to fill that gap when you want to start a new side project / hobby project where you have that cracking idea but you say: **"I really can't be bothered setting everything up and putting boilerplate in... "**

## Quick Commands

Commands to run the app, for information see [Getting Started](#getting-started)

- In one terminal tab (for the metro bundler):

  ```bash
  yarn packager
  ```

- In the other terminal tab (to run the app):
  - iOS:
    ```
    yarn ios
    ```
  - Android:
    ```
    yarn android
    ```

## Getting Started

For the love of god, follow everything here: https://facebook.github.io/react-native/docs/getting-started

> Some helpful things you might forget to do:
>
> - iOS: `cd ios`, `pod install` - get your ios pods installed - sometimes `pod repo update` is required too.
> - Android: `cd android`, `./gradlew clean` - these are useful when Android bricks

You should be able to follow the getting started documents and then run the commands from the package.json to get going.

A nice workflow would be: `yarn ios` or `yarn android` in one terminal tab and then another tab running the packager `yarn packager`.

> Sometimes the simulators don't automatically start, so make sure they're definitely open!

You can also run the app through the respective IDEs in Android Studio and XCode which will look after the bundler, but they're both resource hogs for processing power.

For debugging life is going to be harder without [Flipper](https://fbflipper.com/)

> There's no extra plugins enabled / added for Flipper in this repo, that's for your to decide!

There's an basic auth server (no database, just JSON) in `server/` which is it's own express app (no TS here). To get that running it's the usual:

```bash
cd server && yarn
yarn dev
```

## Outline

This starter will setup you up with a project has:

1. Structure/Architecture with Prettier and ESLint and TSConfig
2. React Native (from TypeScript Template.)
3. React Context
4. Flipper
5. React Navigation
6. Axios
7. React Hook Form
8. Basic screens / Navigation
9. TypeScript (Nothing too scary)
10. TypeScript Jest & React Native Testing Library

In the future maybe? :thinking:

- Detox/Appium (E2E tests)
- Fastlane?
- Analytics?
- Crashes? Sentry?
- Deeplinks?
- Firebase? Push Notifications?
- React-Query / More complex opinionated state management.

## Reccomended VS Code Extensions

> These are the ones that I've found help with the dev workflow - you might equally find them not so helpful.

- Auto Close Tag _(Essential)_
- Auto Rename Tag _(Essential)_
- Babel JavaScript _(Essential)_
- ESLint _(Essential)_
- Prettier _(Essential)_
- Code Spell Checker _(Handy)_
- Color Highlight _(Handy)_
- Partial Diff _(Handy allows selection of text CTRL+C and then right click on another selection to - get a git like compare view)_
- Path Intellisense _(Handy)_
- Rainbow Brackets _(Depends on how much you like colours - but it's quicker nested function identification)_
- vscode-icons _(VSCode's icons have come along way but these are still a litle better)_
- GitLens _(This can be a bit resource intensive)_

## Assumptions

- You enjoy single line quotes, no semi-colon enforcement and pretty much all the auto-formatting from Prettier out of the box.
- You agree with the current ESLint ruling for both React / React Native / React Hooks / TypeScript
- You're ok with having a font added by default, as it can be a quirk to setup and it'll show you where it needs to go.
- You're ok with TypeScript / React Hook Form -> These are probably the most opinionated parts. TS is in here for a laundry list of reasons.
  - React Hook Form however is a lighter alternative to Formik which is kinda heavy - but has it's own downsides, this at the least makes it functional for basic forms.
- You're ok with ts-jest for TypeScript backed testing, and react-native-testing-library for rendering the components for tests.
  - The tests here are also focused on the behaviour of the components as opposed to strictly checking data / display rendering.

### Generating screenshots?

https://help.apple.com/app-store-connect/#/devd274dd925 Is useful for screenshot sizing

https://facebook.design/devices Is useful for getting device frames for the screenshots

### Want a splash screen?

It's worth looking at: https://github.com/zoontek/react-native-bootsplash, there's some good guides knocking about Medium
