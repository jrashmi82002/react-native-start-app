npx create-expo-app@latest
npx expo install react-native@0.71.8
expo init start-app ./ 
npm i expo-cli react-native-web
npm i expo-font axios react-native-dotenv
npm install @react-navigation/native @react-navigation/native-stack 
npm i react-native-screens react-native-safe-area-context
//To create routes for different components
npm install --save-dev typescript@^4.9.4 @types/react@~18.0.27 @types/react-native
//to add typescript
expo doctor --fix-dependencies
npm install react-native-image-slider-box  
npm i deprecated-react-native-prop-types  
cd start-app
expo-cli start --tunnel
//use expo cli app in phone and scan qr code to see results. 
//create components folder and add files in it. use rnfes abbreviation for boiler code template.
npm i firebase
npm i @react-native-firebase/firestore @react-native-firebase/app
//goto firebase.com and create a new project and the web type content. Enable build authentication. In project add a new file - FirebaseConfig.ts with site content
npx expo customize metro.config.js 
//update this file