import React from 'react';
import { TouchableOpacity, Text, View , Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import styles from './Card.style';

type RootStackParamList = {
  NewsAScreen: undefined;
};

const NewsACard: React.FC = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const handlePress = () => {
    navigation.navigate("NewsAScreen");
  };

  return (
    <TouchableOpacity style={styles.card} onPress={handlePress}>
      <Image 
                source={require('../../../assets/images/A.png')}
                style={styles.image}
            />
            <Text style={styles.newsTitle}>Evcil Hayvan Bakımı Zor Mu?</Text>
    </TouchableOpacity>
  );
};

export default NewsACard;