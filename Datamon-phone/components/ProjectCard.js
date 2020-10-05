import React, { useState } from 'react'
import { StyleSheet, 
  View, 
  Text, 
  TouchableOpacity,
  TouchableHighlight,
  Modal } from 'react-native'
import { Card } from 'react-native-elements'
import { Overlay, Button } from 'react-native-elements'
import { AppLoading } from 'expo';
import {
  useFonts,
  Nunito_200ExtraLight,
  Nunito_200ExtraLight_Italic,
  Nunito_300Light,
  Nunito_300Light_Italic,
  Nunito_400Regular,
  Nunito_400Regular_Italic,
  Nunito_600SemiBold,
  Nunito_600SemiBold_Italic,
  Nunito_700Bold,
  Nunito_700Bold_Italic,
  Nunito_800ExtraBold,
  Nunito_800ExtraBold_Italic,
  Nunito_900Black,
  Nunito_900Black_Italic,
} from '@expo-google-fonts/nunito'

const ProjectCard = ({name, title, description}) => {

  const fontsLoaded = useFonts({
    Nunito_200ExtraLight,
    Nunito_200ExtraLight_Italic,
    Nunito_300Light,
    Nunito_300Light_Italic,
    Nunito_400Regular,
    Nunito_400Regular_Italic,
    Nunito_600SemiBold,
    Nunito_600SemiBold_Italic,
    Nunito_700Bold,
    Nunito_700Bold_Italic,
    Nunito_800ExtraBold,
    Nunito_800ExtraBold_Italic,
    Nunito_900Black,
    Nunito_900Black_Italic,
  })

  const [modalVisible, setModalVisible] = useState(false)

  const [visible, setVisible] = useState(false)

  const expandCard = () => {
    setModalVisible(!modalVisible)
    console.log(`modal visible: ${ modalVisible }`)
    console.log(`name: ${ name }`)
  }

  const toggleOverlay = () => {
    setVisible(!visible);
  }  

  const signUp = () => {
    alert('Navigate to sign up')
  }

  if (!fontsLoaded) {
    <AppLoading />
  } else {
    return (
      <View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={false}//{modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={{...styles.modalName, fontFamily: 'Nunito_700Bold'}}>{name}</Text>
              <Text style={{...styles.modalTitle, fontFamily: 'Nunito_400Regular'}}>{title}</Text>
              <Text style={{...styles.modalDescription, fontFamily: 'Nunito_300Light'}}>{description}</Text>

              <View style={styles.buttonGroup}>
                <TouchableHighlight
                  style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                  onPress={() => {
                    setModalVisible(!modalVisible);
                  }}
                >
                  <Text style={styles.textStyle}>Back</Text>
                </TouchableHighlight>
                <TouchableHighlight
                  style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                  onPress={signUp}
                >
                  <Text style={styles.textStyle}>Join</Text>
                </TouchableHighlight>
              </View>
            </View>
          </View>
        </Modal>
        <TouchableOpacity onPress={toggleOverlay}>
          <Card containerStyle={styles.card}>
            <Card.Title style={{...styles.name, fontFamily: 'Nunito_700Bold'}}>{name}</Card.Title>
            <Text style={{...styles.title, fontFamily: 'Nunito_400Regular'}}>{title}</Text>
            <Text style={{...styles.description, fontFamily: 'Nunito_300Light_Italic'}}
                  numberOfLines='3'>{description}
            </Text>
          </Card>
        </TouchableOpacity>
        <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
          <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={{...styles.modalName, fontFamily: 'Nunito_700Bold'}}>{name}</Text>
                <Text style={{...styles.modalTitle, fontFamily: 'Nunito_400Regular'}}>{title}</Text>
                <Text style={{...styles.modalDescription, fontFamily: 'Nunito_300Light'}}
                      numberOfLines='20'>{description}
                </Text>

                <View style={styles.buttonGroup}>
                  <TouchableHighlight
                    style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                    onPress={() => {
                      setVisible(!visible);
                    }}
                  >
                    <Text style={styles.textStyle}>Back</Text>
                  </TouchableHighlight>
                  <TouchableHighlight
                    style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                    onPress={signUp}
                  >
                    <Text style={styles.textStyle}>Join</Text>
                  </TouchableHighlight>
                </View>
              </View>
            </View>
        </Overlay>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#DCE3E3',
    width: 350,
    borderRadius: 25,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  name: {
    marginBottom: 2,
    marginLeft: 5,
    textAlign: 'left',
    fontSize: 24,
  },
  title: {
    textAlign: 'left',
    marginBottom: 15,
    marginLeft: 5,
    fontSize: 20,
  },
  description: {
    fontStyle: 'italic',
    marginLeft: 5,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    backgroundColor: 'lightgrey',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    width: '90%',
    height: '70%',
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "flex-start",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "left",
  },
  modalName: {
    marginBottom: 15,
    marginLeft: 5,
    textAlign: "left",
    fontSize: 24,
  },
  modalTitle: {
    marginBottom: 15,
    marginLeft: 5,
    textAlign: "left",
    fontSize: 20,
  },
  modalDescription: {
    marginBottom: 15,
    marginLeft: 5,
    textAlign: "left",
    fontStyle: "italic",
  },
  buttonGroup: {
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'flex-end',
    padding: 10,
    marginBottom: 15,
  }
})

export default ProjectCard