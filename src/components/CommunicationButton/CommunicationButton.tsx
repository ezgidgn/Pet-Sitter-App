import React from "react";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import Colors from "../../../style/Colors";
import { horizontalScale, verticalScale } from "../../../style/Metrics";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

type RootStackParamList = {
    MeetingPage: undefined;
};


const CommunicationButton : React.FC = ()  => {
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
    const handlePress = () => {
      navigation.navigate("MeetingPage");
    };

    return(
        <TouchableOpacity style={styles.container} onPress={handlePress} >
            <Text style={styles.title}>Randevu oluştur</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: Colors.buttonPurple,
        borderRadius: 10,
        width: horizontalScale(110),
        height: verticalScale(30),
        marginTop: verticalScale(-10)
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