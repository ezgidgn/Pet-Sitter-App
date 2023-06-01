import React from 'react';
import { TouchableOpacity, Text, View , Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import styles from './Card.style';

type RootStackParamList = {
  NewsDScreen: undefined;
};

const NewsDCard: React.FC = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const handlePress = () => {
    navigation.navigate("NewsDScreen");
  };

  return (
    <TouchableOpacity style={styles.card} onPress={handlePress}>
      <Image 
                source={require('../../../assets/images/D.png')}
                style={styles.image}
            />
            <Text style={styles.newsTitle}>Evcil Tavşan Bakımı Hakkında Her Şey!</Text>
    </TouchableOpacity>
  );
};

export default NewsDCard;