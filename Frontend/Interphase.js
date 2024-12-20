import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Interphase = () => {
  const navigation = useNavigation();

  const handleDoctorLogin = () => {
    navigation.navigate('Doctorlogin');
  };

  const handlePatientLogin = () => {
    navigation.navigate('Patientlogin');
  };

  return (
    <View style={styles.outerContainer}>
      <View style={styles.innerContainer}>
        <Image 
          source={require('./assets/Doct.png')} 
          style={styles.image} 
        />
        <View style={styles.buttonContainer}>
          <View>
            <TouchableOpacity style={styles.button} onPress={handleDoctorLogin}>
              <Text style={styles.buttonText}>Doctor Login</Text>
            </TouchableOpacity>
          </View>
          <Image 
            source={require('./assets/pat4.png')} 
            style={styles.patientImage} 
          />
          <View>
            <TouchableOpacity style={styles.button} onPress={handlePatientLogin}>
              <Text style={styles.buttonText}>Patient Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  innerContainer: {
    width: '90%',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    elevation: 5,
  },
  image: {
    width: Dimensions.get('window').width * 0.5,
    height: Dimensions.get('window').width * 0.5,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  patientImage: {
    width: Dimensions.get('window').width * 0.5,
    height: Dimensions.get('window').width * 0.5,
    resizeMode: 'contain',
    marginVertical: 20,
  },
});

export default Interphase;
