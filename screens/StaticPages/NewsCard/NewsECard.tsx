import React from 'react';
import { TouchableOpacity, Text, View , Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import styles from './Card.style';

type RootStackParamList = {
  NewsEScreen: undefined;
};

const NewsECard: React.FC = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const handlePress = () => {
    navigation.navigate("NewsEScreen");
  };

  return (
    <TouchableOpacity style={styles.card} onPress={handlePress}>
      <Image 
                source={require('../../../assets/images/E.png')}
                style={styles.image}
            />
            <Text style={styles.newsTitle}>A'dan Z'ye Muhabbet Kuşu Bakımı</Text>
    </TouchableOpacity>
  );
};

export default NewsECard;