import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  View,
  KeyboardAvoidingView,
  ActivityIndicator,
} from "react-native";
import React, { useState, FC } from "react";
import { FIREBASE_AUTH } from "../../src/config/firebase";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { initializeApp } from "firebase/app";
import NavigationConstants from "../../navigation/NavigationConstants";
import BottomTabsNavigator from "../../navigation/BottomTabsNavigator";
import SignUpScreen from "./SignUpScreen";

const Stack = createStackNavigator();

export type BottomTabParams = {
  // navigate(arg0: string): unknown;
  HomePage: any;
  ProfilePage: any;
  MessagePage: any;
};

const LoginScreen: FC = () => {
  const navigation = useNavigation<any>();
  

  const goToSignUpScreen = () => {
    navigation.navigate(NavigationConstants.signUp);
  };
  const signIn = async () => {
    setLoading(false);
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      console.log(response);
      alert("Check your emails!");
      navigation.navigate(NavigationConstants.home);
    } catch (error: any) {
      console.log(error);
      alert("Sign in failed: " + error.message);
    } finally {
      setLoading(false);
    }
  };
  

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const auth = FIREBASE_AUTH;

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          style={styles.input}
          secureTextEntry
        />
      </View>

      <View style={styles.buttonContainer}>
        <ActivityIndicator size="large" color="#BD90F1" />

        <>
          <TouchableOpacity onPress={signIn} style={styles.button}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={goToSignUpScreen}
            style={[styles.button, styles.buttonOutline]}
          >
            <Text style={styles.buttonOutlineText}>Register</Text>
          </TouchableOpacity>
        </>
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    width: "80%",
  },
  input: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
    borderColor: "#BD90F1",
    borderWidth: 2,
  },
  buttonContainer: {
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  button: {
    backgroundColor: "#BD90F1",
    width: "100%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
  buttonOutline: {
    backgroundColor: "white",
    marginTop: 5,
    borderRadius: 10,
    borderColor: "#BD90F1",
    borderWidth: 2,
  },

  buttonOutlineText: {
    color: "#BD90F1",
    fontWeight: "700",
    fontSize: 16,
  },
});
