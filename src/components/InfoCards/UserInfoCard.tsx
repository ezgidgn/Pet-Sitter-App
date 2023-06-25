import {View, Text, StyleSheet} from "react-native";
import { horizontalScale, moderateScale, verticalScale } from "../../../style/Metrics";
import Colors from "../../../style/Colors";

const UserInfoCard = () => {
    return(
        <View style={styles.userInfoContainer}>
            <Text style={styles.userInfoTitle}>Kullanıcı Bilgileri</Text>
            <View style={styles.userInfoTextContainer}>
                <Text style={styles.userInfoText}>Melike Kızılcık</Text>
                <Text style={styles.userInfoText}>22</Text>
                <Text style={styles.userInfoText}>Büyükçekmece, İstanbul</Text>
                <Text style={styles.userInfoText}>Bilgisayar mühendisi</Text>
                <Text style={styles.userInfoText}>3 yaşında bir kedim var, kedi bakımında tecrübeliyim</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
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
    }
});

export default UserInfoCard;