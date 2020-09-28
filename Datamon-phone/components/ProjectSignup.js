import React from 'react'
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native'
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
} from '@expo-google-fonts/nunito';

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    width: '80%',
    height: '80%',
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
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
    textAlign: "center"
  },
  modalName: {
    marginBottom: 15,
    marginLeft: 5,
    textAlign: "left",
    fontFamily: 'Nunito_700Bold',
  },
  modalTitle: {
    marginBottom: 15,
    marginLeft: 5,
    textAlign: "left",
    fontFamily: 'Nunito_400Regular',
  },
  modalDescription: {
    marginBottom: 15,
    marginLeft: 5,
    textAlign: "left",
    fontFamily: "Nunito_300Light_Italic",
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

const ProjectSignup = ({name, title, description, modalVisible}) => {

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
  const signUp = () => {
    alert('Navigate to sign up')
  }

  if (!fontsLoaded) {
    <AppLoading />
  } else {
    return (
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalName}>{name}</Text>
              <Text style={styles.modalTitle}>{title}</Text>
              <Text style={styles.modalDescription}>{description}</Text>

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
                  onPress={() => {signUp}}
                >
                  <Text style={styles.textStyle}>Join</Text>
                </TouchableHighlight>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    )
  }
}

export default ProjectSignup