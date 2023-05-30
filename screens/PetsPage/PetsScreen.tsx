import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  StyleSheet,
  Dimensions,
} from "react-native";
import PetsCard from "../../src/components/Card/PetsCard";
import { moderateScale, verticalScale } from "../../style/Metrics";
import SearchBar from "../../src/components/SearchBar/SearchBar";

// FAKE DATA TANIMI
type PetData = {
  id: string;
  name: string;
  type: string;
  gender: string;
  age: number;
  disease: string;
  description: string;
  location: string;
};

const DATA: PetData[] = [
  {
    id: "1",
    name: "Karamel",
    type: "Tekir",
    gender: "dişi",
    age: 3,
    disease: "Yok",
    description:
      "Sevilmekten hoşlanmaz, mutlaka günde 2 defa yaş mama yer, oyun oynamayı ve uyumayı sever",
    location: "Büyükçekmece/İstanbul",
  },
  {
    id: "2",
    name: "Kivi",
    type: "Shitzu",
    gender: "erkek",
    age: 7,
    disease: "Yok",
    description: "Uysal, oyuncu, günde 3 defa tuvalete çıkar",
    location: "Büyükçekmece/İstanbul",
  },
  {
    id: "3",
    name: "Çilek",
    type: "Shitzu",
    gender: "dişi",
    age: 2,
    disease: "Yok",
    description: "Yaramaz, saldırgan, tuvalet eğitimi yok",
    location: "Büyükçekmece/İstanbul",
  },
  {
    id: "4",
    name: "Maviş",
    type: "Muhabbet kuşu",
    gender: "erkek",
    age: 4,
    disease: "Yok",
    description: "Konuşmayı sever",
    location: "Merkez/Bolu",
  },
  {
    id: "5",
    name: "Gölge",
    type: "Mavi rus kedisi",
    gender: "dişi",
    age: 1,
    disease: "Yok",
    description: "Oyuncu, sevilmeyi, uyumayı ve yaş mamayı sever",
    location: "Merkez/Bolu",
  },
];

//EKRAN
const PetsScreen = ({ navigation }: any) => {
  const renderPet = ({ item }: any) => <PetsCard pet={item} />;

  return (
    <SafeAreaView style={styles.screen}>
      <SearchBar />
      <Text style={styles.title}>Sevimli dostlarımız bakıcı arıyor!</Text>
      <FlatList
        keyExtractor={(item, index) => item.id.toString()}
        data={DATA}
        renderItem={renderPet}
        numColumns={1}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: moderateScale(17),
    marginLeft: moderateScale(26),
    marginTop: moderateScale(15),
  },
  screen: {
    flex: 1,
  },
});

export default PetsScreen;
