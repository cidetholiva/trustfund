import 'dotenv/config'; 

export default {
  "expo": {
    "name": "trustfund-clean",
    "slug": "trustfund-clean",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/images/icon.png",
    "scheme": "myapp",
    "userInterfaceStyle": "automatic",
    "newArchEnabled": true,
    "ios": {
      "supportsTablet": true
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/images/adaptive-icon.png",
        "backgroundColor": "#ffffff"
      }
    },
    "web": {
      "bundler": "metro",
      "output": "static",
      "favicon": "./assets/images/favicon.png"
    },
    "plugins": [
      "expo-router",
      [
        "expo-splash-screen",
        {
          "image": "./assets/images/splash-icon.png",
          "imageWidth": 200,
          "resizeMode": "contain",
          "backgroundColor": "#ffffff"
        }
      ]
    ],
    "experiments": {
      "typedRoutes": true
    },
    "extra": {
      API_KEY: process.env.API_KEY,
      MONGO_DB_USERNAME: process.env.MONGO_DB_USERNAME,
      MONGO_DB_PASSWORD: process.env.MONGO_DB_PASSWORD,
      MONGO_DB_NAME: process.env.MONGO_DB_NAME,
      MONGO_COLLECTION: process.env.MONGO_COLLECTION
    }
  }
}
