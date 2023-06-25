import React from "react";
import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet } from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';
import Colors from "../../style/Colors";
import { horizontalScale, verticalScale } from "../../style/Metrics";


const MeetingPage : React.FC = () => {
    const handleButton = () => {
        alert("Randevu oluşturuldu");
    }

    return(
        <View style={styles.body}>
           
            <Text style={styles.title}>Randevu oluşturun</Text>
            <Text style={styles.text}>Randevu başlangıç tarihini seçin</Text>
            <DateTimePicker 
                mode = "date"
                display = "default"
                value = {new Date()}
                style={styles.datepicker}
            />
            <Text style={styles.text}>Randevu bitiş tarihini seçin</Text>
            <DateTimePicker 
                mode = "date"
                display = "default"
                value = {new Date()}
                style={styles.datepicker}
            />
            <TouchableOpacity style={styles.button} onPress={handleButton} >
                <Text style={styles.buttonTitle}>Onayla</Text>
            </TouchableOpacity>
            
        
        </View>
    );
}
const styles = StyleSheet.create({
    body: {marginTop: 60},
    title:{
        fontFamily:"Inter_500Medium",
        fontSize: 20,
        marginLeft: 30,
        marginTop: 20,
    },
    text:{
        fontSize: 17,
        marginLeft: 30,
        marginTop: 20,
    },
    button:{
        backgroundColor: Colors.buttonPurple,
        borderRadius: 10,
        width: horizontalScale(110),
        height: verticalScale(30),
        margin: 50,
        alignSelf: "center",
    },
    datepicker: {
    alignSelf: "center",
    margin: 15,   
    },
    buttonTitle:{
        color: Colors.white,
        fontSize: 15,
        alignSelf: "center",
        marginTop: 7,
        fontFamily: "Inter_400Regular",}
})

export default MeetingPage;