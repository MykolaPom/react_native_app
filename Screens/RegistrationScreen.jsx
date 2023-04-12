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

export const RegistrationScreen = () => {
  return (
    <View style={styles.form}>
      <Text style={styles.header}>REGISTRATION</Text>
      <View style={{ marginBottom: 16 }}>
        <TextInput style={styles.input} placeholder="Login" />
      </View>
      <View style={{ marginBottom: 16 }}>
        <TextInput style={styles.input} placeholder="Email" />
      </View>
      <View>
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
        />
      </View>
      <TouchableOpacity activeOpacity={0.8} style={styles.btn}>
        <Text style={styles.btnTitle}>SIGN IN</Text>
      </TouchableOpacity>
      <View style={styles.loginContainer}>
        <TouchableOpacity>
          <Text style={styles.link}>Already have an account? Log in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

//onPress={() => {}}

const styles = StyleSheet.create({
  header: {
    color: "#212121",
    fontSize: 30,
    fontWeight: 500,
    textAlign: "center",
    marginBottom: 30,
  },
  input: {
    borderWidth: 1,
    borderColor: "#f0f8ff",
    backgroundColor: "#E8E8E8",
    height: 50,
    borderRadius: 8,
    padding: 16,
    fontSize: 16,
    color: "#212121",
    // marginBottom: 16,
  },
  form: {
    marginTop: 90,
    marginHorizontal: 16,
  },
  inputTitle: {
    color: "#f0f8ff",
    marginBottom: 10,
    fontSize: 18,
  },
  btn: {
    backgroundColor: "#FF6C00",
    height: 50,
    borderRadius: 100,
    marginTop: 40,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
  },
  btnTitle: {
    color: "#FFFFFF",
    fontSize: 16,
    paddingTop: 16,
    paddingBottom: 32,
  },
  loginContainer: {
    marginBottom: 78,
    alignItems: "center",
  },
  link: {
    fontSize: 16,
    color: "#1B4371",
    lineHeight: 19,
  },
});
