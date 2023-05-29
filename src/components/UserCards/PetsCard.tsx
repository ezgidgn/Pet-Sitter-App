import {View, Text, TouchableOpacity} from "react-native";
import styles from "./Card.Style";


const PetsCard = ({pet} : any) => {

    const navigatePetProfile = () =>{}

    return(
        <TouchableOpacity onPress={navigatePetProfile}>
            <View style={styles.container}>
                <View style={styles.imageContainer}></View>
                <View style={styles.textView}>
                    <Text style={styles.text}>{pet.name}</Text>
                    <Text style={styles.text}>{pet.age}</Text>
                    <Text style={styles.text}>{pet.location}</Text>
                </View>
                </View>
        </TouchableOpacity>
    );
}


export default PetsCard;