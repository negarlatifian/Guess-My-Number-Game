1. Adding shadow:
   ---in android: elevation property which takes values
   ---in ios: shadow
2. you can use maxLength property on TextInput component to control the number of characters user can enter
3. keyboardType property controls which keyboard opens
4. expo has an extra package called expo-linear-gradient
   --- expo install expo-linear-gradient
5. For the background image you can use a component from react called ImageBackground. ImageBackground is under the hood a combination of View and Image component which is it can take a style and image style prop.
6. What we get from the TextInput will always be a string
7. React Native has an Alert API
8. SafeAreaView detects the device and adds the needed space from the top of the screen
9. expo has a package that allows us to use icons:
   --- import {} from '@expo/vector-icons'
10. In order to use custom fonnts you have to install a package:
    --- expo install expo-font
    --- import { useFonts } from "expo-font";
11. In order to show a loading screen :
    --- expo install expo-app-loading
