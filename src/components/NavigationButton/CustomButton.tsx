import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  NewsAScreen: undefined;
  NewsBScreen: undefined;
  NewsCScreen: undefined;
  NewsDScreen: undefined;
  NewsEScreen: undefined;
};

type CustomButtonProps = {
  destination: keyof RootStackParamList;
  buttonText: string;
};

const CustomButton: React.FC<CustomButtonProps> = ({ destination, buttonText }) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const handlePress = () => {
    navigation.navigate(destination);
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <Text>{buttonText}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;