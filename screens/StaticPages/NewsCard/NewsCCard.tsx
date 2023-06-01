import React from 'react';
import { TouchableOpacity, Text, View , Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import styles from './Card.style';

type RootStackParamList = {
  NewsCScreen: undefined;
};

const NewsCCard: React.FC = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const handlePress = () => {
    navigation.navigate("NewsCScreen");
  };

  return (
    <TouchableOpacity style={styles.card} onPress={handlePress}>
      <Image 
                source={require('../../../assets/images/C.png')}
                style={styles.image}
            />
            <Text style={styles.newsTitle}>Kediler En Çok Nelerden Korkar?</Text>
    </TouchableOpacity>
  );
};

export default NewsCCard;