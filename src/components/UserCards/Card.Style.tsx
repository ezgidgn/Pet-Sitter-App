import { StyleSheet } from "react-native";
import Colors from "../../../style/Colors";
import {horizontalScale, verticalScale, moderateScale} from "../../../style/Metrics";

const styles = StyleSheet.create({
    sitterContainer:{
        backgroundColor: Colors.flatListPurple,
        height: verticalScale(100),
        width: horizontalScale(330),
        borderRadius: moderateScale(20),
        flexDirection: "row",
        marginTop: moderateScale(15),
        marginHorizontal: moderateScale(20),
        alignSelf: "center"
    },
    imageContainer:{
        backgroundColor: Colors.grey,
        width: horizontalScale(70),
        height: verticalScale(70),
        borderRadius: moderateScale(35),
        marginLeft: horizontalScale(10),
        marginTop: horizontalScale(10)
    },
    textView: {
        marginLeft: horizontalScale(10),
        marginTop: horizontalScale(15),
    },
    sitterText: {
        color: Colors.white,
        fontSize: moderateScale(17),
        fontFamily: "Inter_400Regular",
    },
    
});

export default styles;