import {View, Text, StyleSheet} from "react-native";
import { horizontalScale, moderateScale, verticalScale } from "../../../style/Metrics";
import Colors from "../../../style/Colors";

const UserInfoCard = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Kullanıcı Bilgileri</Text>
            <View style={styles.textContainer}>
                <Text style={styles.text}>Melike Kızılcık</Text>
                <Text style={styles.text}>22</Text>
                <Text style={styles.text}>Büyükçekmece, İstanbul</Text>
                <Text style={styles.text}>Bilgisayar mühendisi</Text>
                <Text style={styles.text}>3 yaşında bir kedim var, kedi bakımında tecrübeliyim</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: Colors.infoCardPurple,
        marginHorizontal: horizontalScale(20),
        marginTop: verticalScale(10),
        borderRadius: 20,
    },
    title: {
        fontSize: moderateScale(24),
        fontFamily: "Inter_500Medium",
        color: Colors.white,
        paddingTop: 10,
        paddingLeft: 10,
    },
    text:{
        fontSize: moderateScale(16),
        fontFamily: "Inter_400Regular",
        color: Colors.white
    },
    textContainer:{
        padding: 10,
    }
});

export default UserInfoCard;