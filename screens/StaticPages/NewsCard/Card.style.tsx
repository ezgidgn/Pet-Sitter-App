import { StyleSheet } from "react-native";
import Colors from "../../../style/Colors";
import { horizontalScale, moderateScale } from "../../../style/Metrics";

const styles = StyleSheet.create({
    card:{
        backgroundColor: Colors.flatListPurple,
        borderRadius: 10,
        marginHorizontal: 20,
        marginVertical: 10,
    },
    image:{
        width: horizontalScale(340),
        height: 200,
        alignSelf: "center",
        borderRadius: 10,
    },
    newsTitle:{
        marginTop: 10,
        marginLeft: 10,
        fontSize: moderateScale(17),
        marginBottom: 10,
        fontFamily:"Inter_500Medium"
    }
});

export default styles;