import {View, Text, TouchableOpacity, Image} from "react-native";
import styles from "./Card.Style";


const SittersCard = ({sitter} :any) => {

    const navigateSitterProfile = () =>{}

    return(
        <TouchableOpacity onPress={navigateSitterProfile}>
            <View style={styles.sitterContainer}>
            <Image source={require("../../../assets/images/icon.png")} style={styles.imageContainer}/>
                <View style={styles.textView}>
                    <Text style={styles.sitterText}>{sitter.name} {sitter.surname}</Text> 
                    <Text style={styles.sitterText}>{sitter.age}</Text>
                    <Text style={styles.sitterText}>{sitter.location}</Text>
                </View>
                </View>
        </TouchableOpacity>
        
    );
}

export default SittersCard;