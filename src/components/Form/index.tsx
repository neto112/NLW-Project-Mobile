import React from 'react';
import { View, TextInput, Image, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { ArrowLeft } from 'phosphor-react-native';
import { theme } from '../../theme';
import { FeedbackType } from '../../components/Widget'
import { ScreenshotButton } from '../../components/ScreenshotButton'
import { feedbackTypes } from '../../utils/feedbackTypes';

interface Props {
  feedbackType: FeedbackType;
}

export function Form({ feedbackType }: Props) {
  const feedbackTypeInfo = feedbackTypes[feedbackType];
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <ArrowLeft
            size={24}
            weight="bold"
            color={theme.colors.text_secondary}
          />
        </TouchableOpacity>
        <Image
          source={feedbackTypeInfo.image} />
        style={styles.image}
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>
            {feedbackTypeInfo.title}
          </Text>
        </View>
      </View>

      <TextInput
        multiline
        style={styles.input}
        placeholder="Algo não está funcionando bem? Queremos corrigir. Conte com detalheso que está acontecendo..."
        placeholderTextColor={theme.colors.text_secondary}
      />

      <View style={styles.footer}>
        <ScreenshotButton
          onTakeShot={() => { }}
          onRemoveShot={() => { }}
          screenshot=""
        />
      </View>
    </View>
  )
}