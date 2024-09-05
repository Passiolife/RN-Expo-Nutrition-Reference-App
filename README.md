# Welcome to Passio Expo Reference Application 👋

This project reference of the Passio SDK to be configured or accessed in an Expo project.

In the HomeScreen, we configured the Passio SDK to display the status.

I recommend to use yarn 1.2.22 latest version before following the below instructions.

## Run

Step 1:

Open `.npmrc` file

Add your github token.

Step 2:

```
yarn
```

Step 3:

```
npx expo prebuild --clean
```

Step 4:

```
npx pod-install
```

or

```
cd ios && pod install && cd ..
```

## IOS

Step 5:

```
yarn ios
```

## Android

```
yarn add expo-build-properties
```

open app.json and add `minSdkVersion`  in android

```
 "android": {
      ...,
      "minSdkVersion": 26,
    }
```

manually enter below line in dependencies `android/app/build.gradle`

```
dependencies {
    ...,
 implementation files("$rootDir/../node_modules/@passiolife/nutritionai-react-native-sdk-v3/android/libs/passiolib-release.aar")
}
```

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
