import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, Image } from 'react-native';

export default function ParentLogin() {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require('../assets/images/Trustlogo.png')}
        style={styles.logo}
        resizeMode="contain"
      />

      <Text style={styles.header}>Parent</Text>

      <Text style={styles.label}>First Name</Text>
      <TextInput
        style={styles.input}
        placeholder="First Name"
        placeholderTextColor="#ccc"
      />

      <Text style={styles.label}>Last Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Last Name"
        placeholderTextColor="#ccc"
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>

      <View style={styles.separatorContainer}>
        <View style={styles.line} />
        <Text style={styles.orText}>or</Text>
        <View style={styles.line} />
      </View>

      <Text style={styles.createAccount}>Create Account</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#002f1f',
    padding: 30,
    alignItems: 'center',
  },
  logo: {
    width: 150,
    height: 120,
    marginTop: 40,
    marginBottom: 30,
  },
  header: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  label: {
    alignSelf: 'flex-start',
    color: '#fff',
    marginBottom: 5,
    marginTop: 10,
    fontSize: 14,
  },
  input: {
    backgroundColor: '#fff',
    width: '100%',
    height: 45,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#e3aa29',
    width: '100%',
    paddingVertical: 14,
    borderRadius: 10,
    marginTop: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  separatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
    width: '100%',
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#fff',
  },
  orText: {
    color: '#fff',
    marginHorizontal: 10,
  },
  createAccount: {
    color: '#fff',
    textAlign: 'center',
  },
});
