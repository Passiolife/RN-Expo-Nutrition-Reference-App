# Welcome to Passio Expo Reference Application 👋

This project reference of the Passio SDK to be configured or accessed in an Expo project.

In the HomeScreen, we configured the Passio SDK to display the status.

I recommend to use yarn 1.2.22 latest version before following the below instructions.

## Run

Step 1:

Open `.yarnrc.yml` file

Add your github token.

Step 2:

```
yarn
```

Step 3:

```
npx expo prebuild --clean
```

## IOS

```
cd ios && pod install && cd ..
```

```
yarn ios
```

## Android

```
yarn android
```

# Troubleshooting

ERROR PassioSDK Error: TypeError: Cannot read property 'configure' of null
->  Make sure to run the project after completing the prebuild and pod install steps, or ensure that you're running the project from an Expo rebuild.

Step 1:  

```
npx expo prebuild --clean
```

Step 2:

```
cd ios && pod install && cd ..
```

Step 3:  

```
yarn ios
```

🚀 Happy coding
