import React from 'react';
import { View } from 'react-native';
import { Copyright } from '../Copyright';
import { Option } from '../Option';

import { feedbackTypes } from '../../utils/feedbackTypes';
import { styles } from './styles';

export function Options() {
  return (
    <View style={styles.container}>
      <View style={styles.options}>
        {
          Object.entries(feedbackTypes).map(([key, value]) => (
            <Option
              key={key}
              title={value.title}
              image={value.image} />
          ))
        }
      </View>
      <Copyright />
    </View>
  )
}