import React from "react";
import {SafeAreaView,  Text, Image, } from "react-native";
import BackButton from "../../src/components/BackButton/BackButton";
import styles from "./News.style";

const NewsA = () =>{
    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}>Evcil Hayvan Bakımı Zor Mu?</Text>
            <Image 
                style={styles.image}
                source={require('../../assets/images/A.png')}/>
            <Text style={styles.text}>
                Evcil hayvan bakımı temel olarak düşünüldüğünde bir hayvanın ihtiyaç duyacağı en temel ihtiyaçları kapsar. Bunlar yemek yeme, su içme, tuvaletini yapma ve uyuma olarak sayılabilir. Her hayvan kendi doğasına uygun olarak bir barınma ve beslenme ihtiyacına sahiptir. Kediler ve köpekler, genel olarak evlerde benzer şekillerde bakılırlar. Yeme ve içme konusunda bakımları benzeyen kediler ve köpekler, temel olarak mama, su ve tuvalet ihtiyaçlarını giderdiklerinde bir günü rahatlıkla geçirebilirler. Kuşlar için de genel olarak kafeslerinde yem ve su bulunması durumunda günlük temel bakımlarının yapıldığı söylenebilir. Onların temizlikleri, tırnaklarının kesilmesi, tuvaletlerinin ve kafeslerinin temizlenmesi ayrıca ruh sağlıkları ve mutlu olmaları açısından önemlidir. Balıklar ise onları hayatta tutacak temizlikte ve ideal ısıda su içinde aşırı yemlenmeden her gün yaşamalarına yetecek kadar beslenmelidir. Bu durumda her hayvanın özel bir bakım ihtiyacı olduğunu da düşünebilirsiniz. Aslında bir rutine bağlandığında ve severek yapıldığında evcil hayvan bakımı o kadar da zor değildir. Hatta evinizde arkadaşınız ve çocuğunuz gibi gördüğünüz dostlarınızın bakımını üstlenmek, size kendinizi iyi bile hissettirecektir.
            </Text>
            <BackButton />
        </SafeAreaView>
    );
}

export default NewsA;