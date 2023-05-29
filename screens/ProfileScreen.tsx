import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import UserInfoCard from '../src/components/InfoCards/UserInfoCard';
import PetInfoCard from '../src/components/InfoCards/PetInfoCard';
import SwitchButton from '../src/components/SwitchButton/SwitchButton';
import { horizontalScale, verticalScale } from '../style/Metrics';
import ProfileCard from '../src/components/ProfileCard/ProfileCard';
import CommunicationButton from '../src/components/CommunicationButton/CommunicationButton';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <ProfileCard />
      <UserInfoCard />
      <PetInfoCard />
      <View style={styles.switchContainer}>
        <View style={styles.switchButtonContainer}>
          <Text style={styles.text}>Bakıcı arıyorum</Text>
          <SwitchButton />
        </View>
        <View style={styles.switchButtonContainer}>
          <Text style={styles.text}>Bakıcınız olabilirim</Text>
          <SwitchButton />
        </View>
      </View>
      <View style={styles.comButton}>
        <CommunicationButton />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    switchContainer:{
      flexDirection: "column",
      marginTop: verticalScale(10),
      alignSelf: 'center',
      width: horizontalScale(-700)
    },
    text:{
      marginTop: verticalScale(5),
      marginRight: horizontalScale(20),
      fontSize: 16,
      fontFamily: 'Inter_400Regular',
    },
    switchButtonContainer:{
      flexDirection: "row",
      marginTop: verticalScale(10),
      alignContent: 'space-between',
    },
    comButton:{
      alignSelf: "center",
      marginTop: 30
    }
});