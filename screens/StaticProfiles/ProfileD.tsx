import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import SwitchButton from '../../src/components/SwitchButton/SwitchButton';
import CommunicationButton from '../../src/components/CommunicationButton/CommunicationButton';
import { horizontalScale, verticalScale, moderateScale } from '../../style/Metrics';
import Colors from '../../style/Colors';


export default function ProfileD() {

  return (
    <View style={styles.body}>
      <View style={styles.container}>
      <Image source={require("../../assets/images/icon.png")} style={styles.image}/>
            <View style={styles.textContainer}>
                <Text style={styles.titleUser}>Ali Bulut</Text>
                <Text style={styles.description}>İstanbul, Türkiye</Text>
                <Text style={styles.description}>0 evcil hayvan</Text>
            </View>
        </View>
        <View style={styles.userInfoContainer}>
            <Text style={styles.userInfoTitle}>Kullanıcı Bilgileri</Text>
            <View style={styles.userInfoTextContainer}>
                <Text style={styles.userInfoText}>Ali Bulut</Text>
                <Text style={styles.userInfoText}>35</Text>
                <Text style={styles.userInfoText}>Beşiktaş, İstanbul</Text>
                <Text style={styles.userInfoText}>Serbest meslek</Text>
                <Text style={styles.userInfoText}>Hayvanları çok severim, her türden hayvan bakımını sağlayabilirim</Text>
            </View>
        </View>
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
    body:{
        flex: 1,
        marginTop: 50
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
    },
    container:{
        //backgroundColor: Colors.infoCardPurple,
        //marginTop: verticalScale(25),
        marginHorizontal: horizontalScale(30),
        flexDirection: "row",
        padding: 20

    },
    textContainer: {
        marginLeft: horizontalScale(20),
        flexDirection: "column",
        marginTop: verticalScale(10),
    },
    titleUser: {
        fontSize: moderateScale(18),
        fontFamily: "Inter_500Medium",
        marginBottom: 8
    },
    description: {
        fontSize: moderateScale(15),
        fontFamily: "Inter_400Regular",
    },
    image: {
        height: verticalScale(80),
        width: horizontalScale(80),
        borderRadius: moderateScale(40),
        backgroundColor: Colors.switchPurple
    },
    userInfoContainer:{
        backgroundColor: Colors.infoCardPurple,
        marginHorizontal: horizontalScale(20),
        marginTop: verticalScale(10),
        borderRadius: 20,
    },
    userInfoTitle: {
        fontSize: moderateScale(24),
        fontFamily: "Inter_500Medium",
        color: Colors.white,
        paddingTop: 10,
        paddingLeft: 10,
    },
    userInfoText:{
        fontSize: moderateScale(16),
        fontFamily: "Inter_400Regular",
        color: Colors.white
    },
    userInfoTextContainer:{
        padding: 10,
    },
    petInfoContainer:{
        backgroundColor: Colors.infoCardPurple,
        marginHorizontal: horizontalScale(20),
        marginTop: verticalScale(20),
        borderRadius: 20,
    },
    petInfoTitle: {
        fontSize: moderateScale(24),
        fontFamily: "Inter_500Medium",
        color: Colors.white,
        paddingTop: 10,
        paddingLeft: 10,
    },
    petInfoText:{
        fontSize: moderateScale(16),
        fontFamily: "Inter_400Regular",
        color: Colors.white
    },
    petInfoTextContainer:{
        padding: 10,
    }
});