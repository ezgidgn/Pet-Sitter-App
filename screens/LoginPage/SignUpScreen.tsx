import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    KeyboardAvoidingView,
    TextInput,
    ActivityIndicator,
  } from "react-native";
  import React, { useState } from "react";
  import { useNavigation } from "@react-navigation/native";
  import { FIREBASE_AUTH } from "../../src/config/firebase";
  import { createUserWithEmailAndPassword } from "firebase/auth";
  import NavigationConstants from "../../navigation/NavigationConstants";
  
  const SignUpScreen: React.FC = () => {
    const navigation = useNavigation<any>();
  
   
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [name, setName] = useState<string>("");
    const [surname, setSurname] = useState<string>("");
    const [location, setLocation] = useState<string>("");
  
    const [loading, setLoading] = useState(false);
    const auth = FIREBASE_AUTH;
  
    const goToSignUpNextScreen = () => {
      navigation.navigate(NavigationConstants.signUpNext);
    };
  
    const signUp = async () => {
      setLoading(true);
      try {
        const response = await createUserWithEmailAndPassword(
          auth,
          email,
          password,
       
        );
        console.log(response);
        alert("Check your emails!");
      } catch (error: any) {
        console.log(error);
        alert("Signup in failed: " + error.message);
      } finally {
        setLoading(false);
      }
      navigation.navigate(NavigationConstants.signUpNext)
    };
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
          <TouchableOpacity
            onPress={signUp}
            style={[styles.button, styles.buttonOutline]}
          >
            <Text style={styles.buttonOutlineText}>Register</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  };
  
  export default SignUpScreen;
  
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
  });