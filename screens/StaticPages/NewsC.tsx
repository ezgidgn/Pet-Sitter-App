import React from "react";
import {SafeAreaView, Text, Image, } from "react-native";
import BackButton from "../../src/components/BackButton/BackButton";
import styles from "./News.style";

const NewsC = () =>{
    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}>Kediler En Çok Nelerden Korkar?</Text>
            <Image 
                style={styles.image}
                source={require('../../assets/images/C.png')}/>
            <Text style={styles.text}>
            Evcil kediler, vahşi atalarının aksine oldukça tedirgin ve her an tetikte hayvanlardır. En güvende oldukları anda bile duydukları ufacık farklı bir ses ya da bulundukları ortama gelen yeni bir canlı, onları uykularından dehşetle uyanıp saklanmaya iter. Kapının çalması, evin önündeki yoldan geçen bir araba, yere düşen bir eşya gibi bize normal gelen her şey kedilerin aşırı derecede korkmasına neden olabilir. Kediler, özellikle de veteriner muayenesi için ya da başka bir nedenle onları kedi taşıma çantası içine yerleştirip evden çıkaracağınız zaman büyük bir korkuya kapılırlar. Her ne sebeple olursa olsun korktukları anda kedileri sakinleştirmek çok zordur ve bu korku onları paniklemeye, saklanmaya ve hatta agresif davranışlar göstermeye iter. Kedilerin en çok nelerden korktuğunu bilmek ise kedi sahiplerinin önlem almasını sağlamak açısından önemli ve yararlıdır.

                <Text style={styles.title}>Yüksek Ses</Text>
                <Text style={styles.text}>Kediler, seslere çok duyarlı canlılardır. Çünkü duyum eşikleri insanlara göre çok yüksektir. Bu özellik onların en düşük frekanstaki sesleri bile duymalarını sağlar. Araba freni, saç kurutma makinesi, elektrik süpürgesi gibi fazla ses çıkaran aletlerden çok korkan kediler, ani seslere de aşırı tepki verirler. Bardak kırılması ve yüksekten düşen bir eşya kedilerin hemen saklanmasına neden olurken ev kapısının çalması da kediler için fazlaca tedirgin edicidir.</Text>

                <Text style={styles.title}>Ne Olduğunu Bilmedikleri Eşyalar</Text>
                <Text style={styles.text}>Kediler, kendilerine tanıdık olmayan her nesnenin onları tehdit ettiğini düşünürler. Hayatta kalma içgüdüleri ile bilmedikleri her nesneye korkuyla tepki veren bu sevimli canlılar ilkin eve getirdiğiniz eşyaları ve nesneleri uzaktan gözleyerek yavaşça yaklaşıp koklar ve tehlikeli olmadıklarına karar verdikten sonra rahatlarlar. Rutinin dışına çıkmaktan hiç hoşlanmayan kediler için yeni her şey bilinmezdir ve bu yeniliğe alışmaları zaman alır.</Text>

                <Text style={styles.title}>Yeni İnsanlar, Yeni Ortamlar ve Diğer Evciller</Text>
                <Text style={styles.text}>Alışkanlıklarına bağlı ve rahatına düşkün olan kediler, yeni olan hiçbir şeye hemen alışamazlar. Buna yaşam alanlarına gelen yeni bir canlı da dahildir. Sahiplerinden ve aşina oldukları insanlardan başka kimseye güvenmeyen kediler tanımadıkları bir insanla karşılaştıklarında başlarına ne geleceğinden emin olamadıkları için korkuya kapılırlar. Yeni bir ortama girmek konusunda da ürkek olan kediler alışıncaya kadar ilk kez girdikleri mekanlarda çok tedirgin davranırlar. Diğer evciller ise kedilerin adeta kabusudur. Başka evcil hayvanların kendi alanlarını işgal etmesi onları korkmanın da ötesinde aşırı rahatsız ve tedirgin eder.</Text>

                <Text style={styles.title}>Evin Dışına Çıkarılmak ve Veteriner Kliniğine Gitmek</Text>
                <Text style={styles.text}>Kediler, konfor düşkünü canlılardır ve rahatlarının bozulmasını istemezler. Dolayısıyla yuvalarından ayrılmak onları çok korkutur. Yaşadıkları evin dışında kendilerini nasıl tehlikelerin beklediğinden bihaber olmaları bu korkunun nedenidir. Ama kedilerin belki de en çok korktukları şey veterinere gitmektir. Çünkü veteriner ziyaretleri kediler için hem evlerinden ayrılmak hem de kötü anıların canlanması demektir. Tanımadıkları insanlar ve diğer evcillerin bulunduğu veteriner klinikleri kedilerin her defasında canının acıdığı ve travmaların yaşandığı bir yer olarak zihinlerine kodlanır.</Text>

                <Text style={styles.title}>Kedilerin Korkmasını Önlemek İçin Yapılması Gerekenler</Text>
                <Text style={styles.text}>Korku, kediler için çok güçlü bir duygudur ve bu duygu sayesinde hayatta kalmaları olasıdır. Dolayısıyla kedinizin korkması doğal bir tepki olduğu kadar gereklidir de. Doğal yaşam alanlarında kediler korkuya kapıldıkları zaman kendilerini korumaya alarak yaşamlarını devam ettirmenin yolunu ararlar. Fakat aşırı korku onları strese sokarak belli davranış bozukluklarına da neden olabilir. Bu nedenle kediniz herhangi bir şeyden korktuğunda onu zorlamayın ve kaçıp saklanmasına izin verin. Daha sonra yanına giderek yumuşak bir sesle onunla konuşun ve okşayarak sakinleştirmeye çalışın. Hala korkusu geçmezse ona ödül maması ya da yaş mama verebilir, en sevdiği oyuncağı ile dikkatini dağıtmayı deneyebilirsiniz.</Text>
                
            </Text>
            <BackButton />
        </SafeAreaView>
    );
}

export default NewsC;