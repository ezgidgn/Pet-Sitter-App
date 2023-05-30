import {View, Text, StyleSheet} from "react-native";
import { horizontalScale, moderateScale, verticalScale } from "../../../style/Metrics";
import Colors from "../../../style/Colors";

const PetInfoCard = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Evcil Hayvan Bilgileri</Text>
            <Text style={styles.text}>Karamel</Text>
            <Text style={styles.text}>Tekir</Text>
            <Text style={styles.text}>3</Text>
            <Text style={styles.text}>Hastalık: Yok</Text>
            <Text style={styles.text}>Sevilmekten hoşlanmaz, mutlaka günde 2 defa yaş mama yer, oyun oynamayı ve uyumayı sever</Text>
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

export default PetInfoCard;