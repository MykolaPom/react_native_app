// import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TextInput,
  SectionList,
  ImageBackground,
  Button,
  TouchableOpacity,
} from "react-native";

import { RegistrationScreen } from "./Screens/RegistrationScreen";
import { LoginScreen } from "./Screens/LoginScreen";

export default function App() {
  return (
    // <View style={styles.container}>
    //   <SectionList
    //     sections={[
    //       { title: "D", data: ["Devin", "Dan", "Dominic"] },
    //       {
    //         title: "J",
    //         data: [
    //           "Jackson",
    //           "James",
    //           "Jillian",
    //           "Jimmy",
    //           "Joel",
    //           "John",
    //           "Julie",
    //         ],
    //       },
    //     ]}
    //     renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
    //     renderSectionHeader={({ section }) => (
    //       <Text style={styles.sectionHeader}>{section.title}</Text>
    //     )}
    //     keyExtractor={(item) => `basicListEntry-${item}`}
    //   />
    // </View>
    //---------------------------------//
    <ScrollView>
      <View style={styles.container}>
        <ImageBackground
          source={require("./assets/images/background.jpg")}
          style={styles.BGimage}
        >
          <View style={styles.innerBox}>
            <Text style={styles.text}>Hello, Mykola</Text>
            <Image
              // source={require("./assets/images/react_native.png")}
              source={{
                uri: "https://reactnative.dev/docs/assets/p_cat2.png",
              }}
              style={styles.image}
            />
          </View>
          <View style={styles.inputContainer}>
            {/* <LoginScreen /> */}
            <RegistrationScreen />
            {/* <TextInput
            style={styles.textInput}
            textAlign={"center"}
            placeholder="You can type in me"
          />
          <Button title="Sign in" /> */}
          </View>
        </ImageBackground>
      </View>
    </ScrollView>

    // -----------------------------------//
    // <View style={styles.container}>
    //   <Text>Hello, Mykola! This is your first Mobile Application.</Text>
    //   <StatusBar style="auto" />
    // </View>
    //----------------------------------//
  );
}

const styles = StyleSheet.create({
  container: {
    ...Platform.select({
      ios: {
        backgroundColor: "white",
      },
      android: {
        backgroundColor: "black",
      },
      // default: {
      //   // other platforms, web for example
      //   backgroundColor: "blue",
      // },
    }),
    flex: 1,
    paddingTop: 22,
  },
  innerBox: {
    padding: 20,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    padding: 10,
    fontSize: 30,
  },
  // textInput: {
  //   height: 40,
  //   borderColor: "#808080",
  //   borderWidth: 1,
  //   borderRadius: 5,
  //   paddingLeft: 10,
  //   paddingRight: 10,
  //   // marginLeft: 10,
  //   // marginRight: 10,
  //   // marginHorizontal: 10,
  // },
  inputContainer: {
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  image: {
    width: 200,
    height: 200,
  },
  BGimage: {
    flex: 1,
    resizeMode: "cover",
  },
  // sectionHeader: {
  //   paddingTop: 2,
  //   paddingLeft: 10,
  //   paddingRight: 10,
  //   paddingBottom: 2,
  //   fontSize: 14,
  //   fontWeight: "bold",
  //   backgroundColor: "rgba(247,247,247,1.0)",
  // },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
