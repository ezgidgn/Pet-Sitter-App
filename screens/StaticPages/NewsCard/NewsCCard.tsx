import React from "react";
import { TouchableOpacity, Image, Text,  } from "react-native";
import styles from "./Card.style";

const NewsACard = ({navigation}: any) => {

    function handlePage({page}:any){
        navigation.navigate(page);
    }

    return(
        <TouchableOpacity style={styles.card} onPress={handlePage}>
            <Image 
                source={require('../../../assets/images/C.png')}
                style={styles.image}
            />
            <Text style={styles.newsTitle}>Evcil Hayvan Bakımı Zor Mu?</Text>
        </TouchableOpacity>
    );
}


export default NewsACard;