import {View, StyleSheet, TouchableOpacity, Text} from "react-native";
import styles from "./ButtonStyle";

const NavigateSittersButton = ({navigation}:any) => {
    
    return(
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Sitters")}>
            <Text style={styles.title}>Bakıcılar</Text>
        </TouchableOpacity>
    );
}


export default NavigateSittersButton;