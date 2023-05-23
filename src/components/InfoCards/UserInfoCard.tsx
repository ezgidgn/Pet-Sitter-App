import {View, Text, StyleSheet} from "react-native";
import { horizontalScale, moderateScale, verticalScale } from "../../../style/Metrics";
import Colors from "../../../style/Colors";

const UserInfoCard = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Kullanıcı Bilgileri</Text>
            <Text style={styles.text}>Melike Kızılcık</Text>
            <Text style={styles.text}>22</Text>
            <Text style={styles.text}>Büyükçekmece, İstanbul</Text>
            <Text style={styles.text}>Bilgisayar mühendisi</Text>
            <Text style={styles.text}>3 yaşında bir kedim var, kedi bakımında tecrübeliyim</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        height: verticalScale(100),
        width: horizontalScale(100),
        color: Colors.infoCardPurple
    },
    title: {
        fontSize: moderateScale(24),
        color: Colors.white
    },
    text:{
        fontSize: moderateScale(17),
        color: Colors.white
    }
});

export default UserInfoCard;