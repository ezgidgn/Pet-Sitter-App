import React from "react";
import {SafeAreaView, Text, Image, } from "react-native";
import BackButton from "../../src/components/BackButton/BackButton";
import styles from "./News.style";

const NewsB = () =>{
    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}>Yavru Köpek Maması Seçimi</Text>
            <Image 
                style={styles.image}
                source={require('../../assets/images/B.png')}/>
            <Text style={styles.text}>
                Yavru köpeklerin çok hassas sindirim sistemleri vardır. Bu yüzden beslenmelerindeki ani değişiklikler sindirim rahatsızlıklarına neden olabilir ve hatta onların mamalarından uzak durmalarına neden olabilir. Bu nedenle, yerleştikleri ilk birkaç gün boyunca yavru köpekleri önceki sahiplerinin sunduğu mamanın aynısıyla beslemek en iyisidir. Daha sonra yavru köpeğinizin büyümesini desteklemesi gereken yavru köpek maması seçiminizi, yavaşça yavru köpeğinize sunabilirsiniz.
                Yavru köpek sağlığı, büyümesi ve gelişimi için doğru beslenme programına sahip olmak çok önemlidir. Her aşamada, ırk boyutlarına göre belirli miktarlarda belirli besin maddelerine ihtiyaç duyarlar. Bu nedenle, yavru köpeğinizin yaşına ve beklenen yetişkin boyutuna göre yüksek kaliteli yavru köpek maması seçmenizi öneririz.
            </Text>
            <BackButton />
        </SafeAreaView>
    );
}

export default NewsB;