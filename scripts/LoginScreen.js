import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';

export default function LoginScreen() {
  const handleLogin = (userType) => {
    alert(`Logged in as ${userType}`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require('./assets/trustfund-logo.png')} // Add your logo to assets folder
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.title}>TRUSTFUND</Text>
      </View>

      <Text style={styles.loginText}>LOGIN</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => handleLogin('Parent')}>
        <Text style={styles.buttonText}>Parent</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => handleLogin('Dependent')}>
        <Text style={styles.buttonText}>Dependent</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003314',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  logo: {
    width: 150,
    height: 100,
    marginBottom: 10,
  },
  title: {
    color: '#D4AF37',
    fontSize: 24,
    fontWeight: 'bold',
    letterSpacing: 2,
  },
  loginText: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 20,
    fontWeight: '600',
  },
  button: {
    backgroundColor: '#fff',
    paddingVertical: 15,
    paddingHorizontal: 60,
    borderRadius: 10,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: '500',
  },
});
