import {View, Text, StyleSheet} from "react-native";
import { horizontalScale, moderateScale, verticalScale } from "../../../style/Metrics";
import Colors from "../../../style/Colors";

const PetInfoCard = () => {
    return(
        <View style={styles.petInfoContainer}>
            <Text style={styles.petInfoTitle}>Evcil Hayvan Bilgileri</Text>
            <View style={styles.petInfoTextContainer}>
                <Text style={styles.petInfoText}>Karamel</Text>
                <Text style={styles.petInfoText}>Tekir</Text>
                <Text style={styles.petInfoText}>3</Text>
                <Text style={styles.petInfoText}>Hastalık: Yok</Text>
                <Text style={styles.petInfoText}>Sevilmekten hoşlanmaz, mutlaka günde 2 defa yaş mama yer, oyun oynamayı ve uyumayı sever</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
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

export default PetInfoCard;