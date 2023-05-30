import { StyleSheet } from "react-native";
import Colors from "../../../style/Colors";
import { horizontalScale, moderateScale, verticalScale } from "../../../style/Metrics";

const styles = StyleSheet.create({
    button: {
        backgroundColor: Colors.buttonPurple,
        width: horizontalScale(110),
        height: verticalScale(40),
        marginHorizontal: moderateScale(25),
        borderRadius: moderateScale(10),
    },
    title:{
        alignSelf: "center",
        marginTop: moderateScale(10),
        color: Colors.white,
        fontSize: moderateScale(15),
    }
});

export default styles;