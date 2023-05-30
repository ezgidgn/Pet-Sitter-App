import React from "react";
import { TouchableOpacity, Image, Text,  } from "react-native";
import styles from "./Card.style";

const NewsECard = ({navigation}: any) => {

    function handlePage({page}:any){
        navigation.navigate(page);
    }

    return(
        <TouchableOpacity style={styles.card} onPress={handlePage}>
            <Image 
                source={require('../../../assets/images/E.png')}
                style={styles.image}
            />
            <Text style={styles.newsTitle}>A'dan Z'ye Muhabbet Kuşu Bakımı</Text>
        </TouchableOpacity>
    );
}


export default NewsECard;