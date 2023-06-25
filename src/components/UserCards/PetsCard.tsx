import {View, Text, TouchableOpacity, Image} from "react-native";
import styles from "./Card.Style";


const PetsCard = ({pet} : any) => {

    const navigatePetProfile = () =>{}

    return(
        <TouchableOpacity onPress={navigatePetProfile}>
            <View style={styles.sitterContainer}>
            <Image source={require("../../../assets/images/icon.png")} style={styles.imageContainer}/>
                <View style={styles.textView}>
                    <Text style={styles.sitterText}>{pet.name}</Text>
                    <Text style={styles.sitterText}>{pet.age}</Text>
                    <Text style={styles.sitterText}>{pet.location}</Text>
                </View>
                </View>
        </TouchableOpacity>
    );
}


export default PetsCard;