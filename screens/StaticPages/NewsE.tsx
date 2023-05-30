import React from "react";
import {SafeAreaView, Text, Image, } from "react-native";
import BackButton from "../../src/components/BackButton/BackButton";
import styles from "./News.style";

const NewsE = () =>{
    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}>A'dan Z'ye Muhabbet Kuşu Bakımı</Text>
            <Image 
                style={styles.image}
                source={require('../../assets/images/E.png')}/>
            
            <Text style={styles.text}>Bir muhabbet kuşu sahiplendiğiniz zaman onun gereksinimlerine uygun olarak tasarlanmış bir yaşam alanı sunmanız gerekir. Temel yaşam ihtiyaçları söz konusu olduğunda barınma ve beslenme ön plana çıkar. Bunların yanı sıra muhabbet kuşunun daha sağlıklı ve konforlu bir yaşam sürebilmesi için de bazı gereksinimleri olduğu unutulmamalıdır.</Text>
            
            <Text style={styles.title}>Doğru Kafes Seçimi</Text>
            <Text style={styles.text}>Muhabbet kuşu bakmaya karar verdiğiniz anda kuşunuz için doğru bir kafes seçmeniz gerekir. Kafes seçerken önemli olan kafesin kuşun boyutlarına uygun olmasıdır. Temelde mümkün olan en büyük kafesi almak önerilse de kuşun içerisinde rahatça dolaşabileceği, kanatlarını rahatça açabileceği ve çırpabileceği bir kafes yeterlidir. Eğer kafes içerisinde birden fazla kuş yaşayacaksa kafes boyutları da bu bilgi özelinde büyütülmelidir. Muhabbet kuşu kafes seçerken kafes çubuklarının aralıklarına da dikkat edilmesi gerekir. Kuşun parmaklıklar arasına sıkışmaması için ortalama 1,5 cm veya daha dar aralıklı kafesler tercih edilmelidir.</Text>

            <Text style={styles.title}>Kaliteli Kuş Yemi</Text>
            <Text style={styles.text}>Muhabbet kuşlarına zaman zaman elma, tatlı patates, havuç ya da üzüm gibi onların tüketmelerinde sorun olmayan besinleri de sunabilirsiniz. Bu besinleri güzelce yıkadıktan ve küçük parçalara ayırdıktan sonra ayrı bir kapta sunmanız gerekir. Muhabbet kuşlarının diyetlerini aniden değiştirmek mide sorunları yaşamalarına neden olabilir. Bu nedenle kuş yemi değişimi yaparken eski yem ile yeni yemi karıştırmak, oranları yavaş yavaş düzenlemek ve yem geçişini 1 hafta gibi bir sürede tamamlamak önerilir.</Text>

            <Text style={styles.title}>Taze Su Erişimi</Text>
            <Text style={styles.text}>Her canlıda olduğu gibi muhabbet kuşlarının da su tüketimine dikkat edilmesi gerekir. Muhabbet kuş kafesine tam uyum sağlayacak, dökülme ya da kirlenme sorunu yaşatmayacak tasarımlara sahip su kaplarını tercih etmek gerekir. Muhabbet kuşunun suyunun günlük olarak tazelenmesi de çok önemlidir. </Text>
            
            <Text style={styles.title}>Oyun ve Egzersiz</Text>
            <Text style={styles.text}>Muhabbet kuşu bakımı ve eğitimi dostlarımızın konforlu yaşamı için oldukça önemlidir. Muhabbet kuşlarının zihinlerini meşgul etmeleri önemlidir. Sevimli dostlarımızın oldukça aktif canlılar olduğunu da unutmamak gerekir. Kafes içerisinde hareketlerini engellemeyecek, kanatlarını açtıklarında onlara zarar vermeyecek özel oyuncaklar olması çok önemlidir. Muhabbet kuşları ister tek başlarına yaşasınlar isterlerse çift olarak aynı kafesi paylaşsınlar oyun oynamaya ve egzersiz yapmaya ihtiyaç duyarlar. Bu nedenle onlar için keyifli oyuncakların olması önemlidir.</Text>
            <BackButton />
        </SafeAreaView>
    );
}

export default NewsE;