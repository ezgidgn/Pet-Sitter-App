import React from "react";
import {TouchableOpacity, Text, StyleSheet} from "react-native";
import Colors from "../../../style/Colors";
import { horizontalScale, verticalScale } from "../../../style/Metrics";

const BackButton = ({navigation}:any) =>{

    function goBack(){
        navigation.goBack();
    }


    return(
        <TouchableOpacity style={styles.container} onPress={goBack}>
            <Text style={styles.title}>Geri dön</Text>
        </TouchableOpacity>
    )
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

export default BackButton;