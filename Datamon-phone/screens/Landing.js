import React from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet
} from 'react-native'
import Constants from 'expo-constants'
import NavBar from '../components/NavBar'

export default function Landing() {
  return (
    <SafeAreaView style={styles.safearea}>
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={styles.title__text}>
            This is the title
          </Text>
        </View>
        <View style={styles.paragraph}>
          <Text style={styles.paragraph__text}>
            This is the paragraph
          </Text>
        </View>
        <View style={styles.buttons}>
          <TouchableOpacity
          style={styles.buttons__learnmore}
          onPress={() => alert('Learn more')}>
            <Text style={styles.buttons__text}>Learn More</Text>
          </TouchableOpacity>
          <TouchableOpacity
          style={styles.buttons__getstarted}
          onPress={() => alert('Learn more')}>
            <Text style={styles.buttons__text}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </View>
      <NavBar />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safearea: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    marginTop: Constants.statusBarHeight,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    marginTop: '50%'
  },
  title__text: {
    fontSize: 34,
    fontWeight: 'bold'
  },
  paragraph: {
    marginTop: 30
  },
  paragraph__text: {
    fontSize: 24
  },
  buttons: {
    marginTop: 200,
    width: 200,
    flex: 1,
    flexDirection: 'column',
  },
  buttons__learnmore: {
    backgroundColor: '#e5e5e5',
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttons__getstarted: {
    marginTop: 20,
    backgroundColor: '#fca311',
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttons__text: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
})