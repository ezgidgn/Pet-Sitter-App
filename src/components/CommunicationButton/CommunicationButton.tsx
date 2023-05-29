import React from "react";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import Colors from "../../../style/Colors";
import { horizontalScale, verticalScale } from "../../../style/Metrics";

const CommunicationButton = () => {

    const navigateMessagePage = () =>{
        
    }

    return(
        <TouchableOpacity style={styles.container} onPress={navigateMessagePage} >
            <Text style={styles.title}>İletişime geç</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: Colors.buttonPurple,
        borderRadius: 10,
        width: horizontalScale(110),
        height: verticalScale(30),
    },
    title:{
        color: Colors.white,
        fontSize: 15,
        alignSelf: "center",
        marginTop: 7,
        fontFamily: "Inter_400Regular",
    }
});

export default CommunicationButton;