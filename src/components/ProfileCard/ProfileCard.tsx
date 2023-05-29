import {View, Text, Image, StyleSheet} from "react-native";
import { horizontalScale, moderateScale, verticalScale } from "../../../style/Metrics";
import Colors from "../../../style/Colors";

const ProfileCard = () => {
    return(
        <View style={styles.container}>
            <View style={styles.image}></View>
            <View style={styles.textContainer}>
                <Text style={styles.title}>Melike Kızılcık</Text>
                <Text style={styles.description}>İstanbul, Türkiye</Text>
                <Text style={styles.description}>1 evcil hayvan</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        //backgroundColor: Colors.infoCardPurple,
        marginTop: verticalScale(50),
        marginHorizontal: horizontalScale(30),
        flexDirection: "row",
        padding: 20

    },
    textContainer: {
        marginLeft: horizontalScale(20),
        flexDirection: "column",
        marginTop: verticalScale(10),
    },
    title: {
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
    }
});

export default ProfileCard;