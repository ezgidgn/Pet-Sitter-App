import React from "react";
import { StyleSheet } from "react-native";
import { horizontalScale } from "../../style/Metrics";

const styles = StyleSheet.create({
    container:{
        margin: 20,
    },
    header:{
        fontSize: 25,
        fontFamily: "Inter_500Medium",
    },
    image:{
        width: horizontalScale(340),
        height: 200,
        marginVertical: 20,
        borderRadius: 10,
    },
    title:{
        fontFamily: "Inter_600SemiBold",
        fontSize: 18,
    },
    text:{
        fontFamily: "Inter_400Regular",
        fontSize: 15,
        alignSelf: "center",
    }
});

export default styles;