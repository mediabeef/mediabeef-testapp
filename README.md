Sample Background Geolocation app.
=============================================

![MainUI](/res/mainui.png)
![Settings](/res/settings.png)

## Description

This sample app shows usage of [cordova-plugin-background-geolocation](https://github.com/saralweb/cordova-plugin-background-geolocation) plugin.

## How to build

Replace platform with one of supported platforms: android, ios. In this example we will build for Android.

```
$ cordova platform add android
$ cordova build android
```

There is *after_platform_add* hook in config.xml which runs script that install all required plugins.

## Run on device

### iOS
You will need to install ios-deploy package.

```
$ npm -g install ios-deploy
```

```
cordova run ios --device
```

### Android
```
cordova run android --device
```

## Run in simulator

### iOS
You will need to install ios-sim package first
```
$ npm -g install ios-sim
```

Run in default emulator
```
$ cordova emulate ios
```

You can use cordova run ios --list to see all available targets and cordova run ios --target=target_name to run application on a specific device or emulator (for example, cordova run ios --target="iPhone-6").


### Android
To deploy the app on a default Android emulator.

```
$ cordova emulate android
```

You can use cordova run android --list to see all available targets and cordova run android --target=target_name to run application on a specific device or emulator (for example, cordova run android --target="Nexus4_emulator").

## Development

All plugins will be installed from npm at their latest version. However if you want to install your local version on cordova-plugin-background-geolocation, you can do that:

```
$ cordova plugin rm cordova-plugin-saralweb-background-geolocation
$ cordova plugin add file:///absolute_path_to_your/cordova-plugin-background-geolocation/
$ cordova build
```

### iOS quirks

If you're using XCode, boot the SampleApp in the iOS Simulator and enable ```Debug->Location->City Drive```.

## Credits

This sample app is using some codes from mauron85 [cordova-plugin-background-geolocation-example](https://github.com/mauron85/cordova-plugin-background-geolocation-example).
