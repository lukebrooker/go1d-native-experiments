import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { Platform, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import {
  Image,
  Text,
  Heading,
  HStack,
  VStack,
  Spacer,
  TouchableOpacity,
  View,
} from "../go1d";

const SlatMini = () => (
  <HStack gap={4} css={{ alignItems: "center" }}>
    <View
      css={{
        bg: "faded",
        size: 64,
        borderRadius: 2,
      }}
    />
    <VStack gap={3}>
      <Text variant="heading">This is an article</Text>
      <Text variant="meta">This is some meta data</Text>
    </VStack>
  </HStack>
);

export default function HomeScreen() {
  return (
    <View
      css={{
        bg: "background",
        flex: 1,
      }}
    >
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <HStack gap={5}>
          <Heading variant="headingScreen">For You</Heading>
        </HStack>
        <VStack gap={4}>
          <SlatMini />
          <SlatMini />

        </VStack>
      </ScrollView>
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 30,
    paddingHorizontal: 16
  }
});
