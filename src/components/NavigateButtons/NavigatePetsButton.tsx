import {View, StyleSheet, TouchableOpacity, Text} from "react-native";
import styles from "./ButtonStyle";


const NavigatePetsButton = ({navigation}:any) => {
    
    return(
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Pets")}>
            <Text style={styles.title}>Evcil Hayvanlar</Text>
        </TouchableOpacity>
    );
}


export default NavigatePetsButton;