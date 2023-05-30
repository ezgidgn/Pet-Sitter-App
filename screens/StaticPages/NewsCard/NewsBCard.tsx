import React from "react";
import { TouchableOpacity, Image, Text,  } from "react-native";
import styles from "./Card.style";

const NewsBCard = ({navigation}: any) => {

    function handlePage({page}:any){
        navigation.navigate(page);
    }

    return(
        <TouchableOpacity style={styles.card} onPress={handlePage}>
            <Image 
                source={require('../../../assets/images/B.png')}
                style={styles.image}
            />
            <Text style={styles.newsTitle}>Yavru Köpek Maması Seçimi</Text>
        </TouchableOpacity>
    );
}


export default NewsBCard;