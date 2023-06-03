import { View, Text, TouchableOpacity,StyleSheet } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import NavigationConstants from '../../navigation/NavigationConstants';
//import styles from '../../src/components/NavigateButtons/ButtonStyle'



const SignUpNextScreen: React.FC = () => {

  const navigation = useNavigation<any>();
  const goToHomeScreen = () => {
    navigation.navigate(NavigationConstants.home);
  };
  return (
    <View>
      <Text>SignupNextScreen</Text>

      <TouchableOpacity
          onPress={goToHomeScreen}
          style={[styles.button, styles.buttonOutline]}
        >
          <Text style={styles.buttonOutlineText}>Go to Home</Text>
        </TouchableOpacity>
     
    </View>
  )
}

export default SignUpNextScreen

const styles = StyleSheet.create({
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
})

