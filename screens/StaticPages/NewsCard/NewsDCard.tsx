import React from "react";
import { TouchableOpacity, Image, Text,  } from "react-native";
import styles from "./Card.style";

const NewsDCard = ({navigation}: any) => {

    function handlePage({page}:any){
        navigation.navigate(page);
    }

    return(
        <TouchableOpacity style={styles.card} onPress={handlePage}>
            <Image 
                source={require('../../../assets/images/D.png')}
                style={styles.image}
            />
            <Text style={styles.newsTitle}>Evcil Tavşan Bakımı Hakkında Her Şey!</Text>
        </TouchableOpacity>
    );
}


export default NewsDCard;