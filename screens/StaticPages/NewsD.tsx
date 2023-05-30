import React from "react";
import {SafeAreaView, Text, Image, } from "react-native";
import BackButton from "../../src/components/BackButton/BackButton";
import styles from "./News.style";

const NewsD = () =>{
    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}>Evcil Tavşan Bakımı Hakkında Her Şey!</Text>
            <Image 
                style={styles.image}
                source={require('../../assets/images/D.png')}/>
            <Text style={styles.text}>
            Tavşanlar eşsiz evcil hayvanlardır. Uzun, mutlu ve sağlıklı bir yaşam sürmek için özel ihtiyaçları vardır. Bir evcil tavşan için bakım konusunda temel bir genel bakış için bu yazıya göz atabilirsiniz. Tavşan bakımı hakkında tüm detayları ele aldığımız yazımızı okumaya devam edin…</Text>

                <Text style={styles.title}>Tavşanınıza Bir Oda Verin</Text>
                <Text style={styles.text}>Evde tavşan bakımı ve tavşan beslenmesi için pek çok farklı seçenek vardır. Tavşanlar için güvenli hale getirilmiş bir odada ya da odalara yaşayabilirler; ya da bir tavşan yuvasını kedi evleri belleyebilirler. Eğer bir tavşan evleri olacaksa, bu evin yeterince büyük olduğundan ve tavşanın rahatça gezinebileceği kadar büyük bir alana sahip olduğunsan emin olmanız gerekir. Eğer tavşanınızı minik tavşan evinde tutacaksanız, günde birkaç saat egzersiz yapması için onu dışarıya çıkarmayı unutmayın. Tavşan bakımı için temel nitelikteki konulardan bir tanesi egzersizdir.
                Eğer hayatınıza bir tavşan dahil etmeyi düşünüyorsanız ve onun yaşayabileceği bir bahçeniz yoksa, onu mutlaka aile yaşantınız içerisine de dahil etmeniz gerekir. Tavşanınızı kullanılmayan bir köşeye hapsetmemelisiniz! Tavşan bakımı için onun aile üyelerine yakın bir yerde olması önemlidir. Bu nedenle tavşan evini salona ya da oturma odasına yakın bir yere yerleştirmeye çalışın.</Text>

                <Text style={styles.title}>Evinizi Tavşanla Yaşanabilir Hale Getirin</Text>
                <Text style={styles.text}>Tavşanlar dolaşmak ve keşfetmek için alana ihtiyaç duyarlar. Tavşanınız için güvenli bir alan oluşturmak ve eşyalarınızı korumak için, tavşan alanını iyice dikkatle incelemeniz gerek. gerekir. Bunun için tüm kabloları plastik kaplamalar veya esnek borularla kaplamayı deneyebilirsiniz. Eğer mümkünse kablolarınızı tavşanın ulaşamayacağı kadar yukarı kaldırmaya ve duvara sabitlemeye çalışın.</Text>

                <Text style={styles.title}>Tavşan Bakımı için Önemli: Samanı Eksik Etmeyin</Text>
                <Text style={styles.text}>Ekmek, yoğurt, süt, yumurta… Artık alışveriş listenizin bir unsuru daha var: Saman! Bir tavşanın diyeti temel olarak samandan oluşmalıdır. Tavşanlara her zaman taze saman sağlanmalıdır. Bebek tavşanlara yonca verilmeli ve yetişkin tavşanlara timot şaman, ot şamanı ya da yulaf samanı verilmelidir. Tavşan bakımı için beslenme düzeni büyük önem taşımaktadır.
                Tavşan bakımı için tavşanınızın samanını kuru, temiz ve erişilebilir tutmak önemlidir. Bunun için samanları onun genel olarak gezindiği alana yakın bir yere, büyük bir beslenme kabı içerisinde yerleştirmenizi öneririz. Tavşanınızın samanını sık sık yenilemelisiniz.</Text>

                <Text style={styles.title}>Tırnaklar ve Kürk: Tavşanınızın Bakımını Sağlayın</Text>
                <Text style={styles.text}>Tavşanlar doğal olarak temiz hayvanlardır ve kendilerini sık sık yıkarlar. Ama yine de tavşanı düzenli aralıklarla bakıma almanız gerekebilir. Tavşanlar yılda birkaç kez dökülme döngülerinden geçer. Bu süreçte tüyleri dökülür. Tüm fazla kürkleri gidermek için tavşanı fırçalamanız önemlidir. Aksi takdirde, tavşanınız onu yutabilir ve ciddi sindirim sorunları yaşayabilir. Yumuşak bir fırça ile onu fırçalayın ve daha sağlıklı bir kürke kavuşması için yardımcı olun.</Text>
                
        
            <BackButton />
        </SafeAreaView>
    );
}

export default NewsD;