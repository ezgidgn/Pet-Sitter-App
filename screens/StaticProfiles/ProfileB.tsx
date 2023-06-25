import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import SwitchButton from '../../src/components/SwitchButton/SwitchButton';
import CommunicationButton from '../../src/components/CommunicationButton/CommunicationButton';
import { horizontalScale, verticalScale, moderateScale } from '../../style/Metrics';
import Colors from '../../style/Colors';


export default function ProfileB() {

  return (
    <View style={styles.body}>
      <View style={styles.container}>
            <View style={styles.image}></View>
            <View style={styles.textContainer}>
                <Text style={styles.titleUser}>Ezgi Doğan</Text>
                <Text style={styles.description}>Kırklareli, Türkiye</Text>
                <Text style={styles.description}>1 evcil hayvan</Text>
            </View>
        </View>
        <View style={styles.userInfoContainer}>
            <Text style={styles.userInfoTitle}>Kullanıcı Bilgileri</Text>
            <View style={styles.userInfoTextContainer}>
                <Text style={styles.userInfoText}>Ezgi Doğan</Text>
                <Text style={styles.userInfoText}>23</Text>
                <Text style={styles.userInfoText}>Merkez, Kırklareli</Text>
                <Text style={styles.userInfoText}>Bilgisayar mühendisi</Text>
                <Text style={styles.userInfoText}>Köpek bakımında tecrübeliyim, hayvanları çok seviyorum</Text>
            </View>
        </View>
        <View style={styles.petInfoContainer}>
            <Text style={styles.petInfoTitle}>Evcil Hayvan Bilgileri</Text>
            <View style={styles.petInfoTextContainer}>
                <Text style={styles.petInfoText}>Lokum</Text>
                <Text style={styles.petInfoText}>Cocker Spaniel</Text>
                <Text style={styles.petInfoText}>3</Text>
                <Text style={styles.petInfoText}>Hastalık: Yok</Text>
                <Text style={styles.petInfoText}>Oyun oynamayı ve uyumayı sever</Text>
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