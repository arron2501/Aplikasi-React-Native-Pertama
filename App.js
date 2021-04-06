/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  ImageBackground,
  Linking,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Avatar} from 'react-native-elements';
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <ImageBackground
          accessibilityRole={'image'}
          style={styles.background}
          imageStyle={styles.logo}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Avatar
              size="xlarge"
              rounded
              source={require('./assets/img/avatar.jpg')}
            />
          </View>
          <Text style={styles.text}>Rivaltino Arron</Text>
          <Text style={styles.subText}>Newbie Developer</Text>
        </ImageBackground>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="Hello World!">
            First time running my first{' '}
            <Text style={styles.highlight}>React Native App</Text>
          </Section>
          <Section title="Instagram">
            <Text>
              Check out my <Text style={styles.highlight}>Instagram</Text>{' '}
              profile!{'\n\n'}
            </Text>
            <Button
              title=" Instagram"
              type="solid"
              icon={<Icon name="instagram" size={15} color="white" />}
              onPress={() => {
                Linking.openURL('https://instagram.com/arronrivaltino');
              }}
            />
          </Section>
          <Section title="GitHub">
            <Text>
              Check out my <Text style={styles.highlight}>GitHub</Text> profile!
              {'\n\n'}
            </Text>
            <Button
              title=" GitHub"
              type="solid"
              icon={<Icon name="github" size={15} color="white" />}
              onPress={() => {
                Linking.openURL('https://github.com/arron2501');
              }}
            />
          </Section>
          <Section title="LinkedIn">
            <Text>
              Check out my <Text style={styles.highlight}>LinkedIn</Text>{' '}
              profile!{'\n\n'}
            </Text>
            <Button
              title=" LinkedIn"
              type="solid"
              icon={<Icon name="linkedin" size={15} color="white" />}
              onPress={() => {
                Linking.openURL('https://www.linkedin.com/in/arron2501/');
              }}
            />
          </Section>
          <Section></Section>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 5,
    marginBottom: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  background: {
    paddingBottom: 30,
    paddingTop: 50,
    paddingHorizontal: 32,
    backgroundColor: Colors.darker,
  },
  logo: {
    opacity: 0.2,
    overflow: 'visible',
    resizeMode: 'cover',
    /*
     * These negative margins allow the image to be offset similarly across screen sizes and component sizes.
     *
     * The source logo.png image is 512x512px, so as such, these margins attempt to be relative to the
     * source image's size.
     */
  },
  text: {
    fontFamily: 'Poppins-Bold',
    paddingTop: 10,
    fontSize: 28,
    textAlign: 'center',
    color: Colors.lighter,
  },
  subText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    fontWeight: '400',
    textAlign: 'center',
    color: Colors.lighter,
  },
});

export default App;
