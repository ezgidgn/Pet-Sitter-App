import {View, Text, Image, StyleSheet} from "react-native";
import { horizontalScale, moderateScale, verticalScale } from "../../../style/Metrics";

const UserCard = () => {
    return(
        <View>
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
    container:{},
    textContainer: {
        marginLeft: horizontalScale(20),
        flexDirection: "column"
    },
    title: {
        fontSize: moderateScale(15),
    },
    description: {
        fontSize: moderateScale(15),
    },
    image: {
        height: verticalScale(70),
        width: horizontalScale(70),
        borderRadius: moderateScale(35),
    }
});

export default UserCard;