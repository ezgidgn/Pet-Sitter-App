import React, {useState} from 'react';
import {View, Switch, StyleSheet} from 'react-native';
import Colors from '../../../style/Colors';

const SwitchButton = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);

    //backende bilgi gitmesi gerekiyor
  }
  

  return (
      <Switch
        trackColor={{false: Colors.switchGrey, true: Colors.switchPurple}}
        thumbColor={isEnabled ? Colors.grey : Colors.grey}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
  );
};


export default SwitchButton;