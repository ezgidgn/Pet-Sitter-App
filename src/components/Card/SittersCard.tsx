import {View, Text, StyleSheet} from "react-native";
import styles from "./Card.Style";


const SittersCard = ({sitter} :any) => {
    return(
        <View style={styles.container}>
            <View style={styles.imageContainer}></View>
            <View style={styles.textView}>
                <Text style={styles.text}>{sitter.name}</Text> 
                <Text style={styles.text}>{sitter.age}</Text>
                <Text style={styles.text}>{sitter.location}</Text>
            </View>
        </View>
    );
}

export default SittersCard;