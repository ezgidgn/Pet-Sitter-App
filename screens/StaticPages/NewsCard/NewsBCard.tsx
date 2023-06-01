import React from 'react';
import { TouchableOpacity, Text, View , Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import styles from './Card.style';

type RootStackParamList = {
  NewsBScreen: undefined;
};

const NewsBCard: React.FC = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const handlePress = () => {
    navigation.navigate("NewsBScreen");
  };

  return (
    <TouchableOpacity style={styles.card} onPress={handlePress}>
      <Image 
                source={require('../../../assets/images/B.png')}
                style={styles.image}
            />
            <Text style={styles.newsTitle}>Yavru Köpek Maması Seçimi</Text>
    </TouchableOpacity>
  );
};

export default NewsBCard;