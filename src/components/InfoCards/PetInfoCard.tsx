import {View, Text, StyleSheet} from "react-native";
import { horizontalScale, moderateScale, verticalScale } from "../../../style/Metrics";
import Colors from "../../../style/Colors";

const PetInfoCard = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Evcil Hayvan Bilgileri</Text>
            <View style={styles.textContainer}>
                <Text style={styles.text}>Karamel</Text>
                <Text style={styles.text}>Tekir</Text>
                <Text style={styles.text}>3</Text>
                <Text style={styles.text}>Hastalık: Yok</Text>
                <Text style={styles.text}>Sevilmekten hoşlanmaz, mutlaka günde 2 defa yaş mama yer, oyun oynamayı ve uyumayı sever</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: Colors.infoCardPurple,
        marginHorizontal: horizontalScale(20),
        marginTop: verticalScale(20),
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

export default PetInfoCard;