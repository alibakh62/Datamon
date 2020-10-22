import React from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'
import { Icon } from 'react-native-elements'


export default function NavBar() {

    return (
      //<View style={styles.container}>
        <View style={styles.navbar}>
          <Icon
          //  reverse
          //  raised
           name='home'
           type='font-awesome'
           color='#fca311'
           iconStyle={styles.icons}
           onPress={() => alert('Home')}
          />
          <Icon
          //  reverse
          //  raised
           name='sliders'
           type='feather'
           color='#e5e5e5'
           iconStyle={styles.icons}
           onPress={() => alert('Control Center')}
          />
          <Icon
          //  reverse
          //  raised
           name='dollar'
           type='font-awesome'
           color='#e5e5e5'
           iconStyle={styles.icons}
           onPress={() => alert('Earning Dashboard')}
          />
          <Icon
          //  reverse
          //  raised
           name='user'
           type='font-awesome'
           color='#e5e5e5'
           iconStyle={styles.icons}
           onPress={() => alert('Account')}
          />
        </View>
      //</View>
    )
  }


const styles = StyleSheet.create({
  navbar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'lightgrey',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    height: 70,
    padding: 10,
    marginTop: 20,
  },
  icons: {
    fontSize: 30,
  }
})