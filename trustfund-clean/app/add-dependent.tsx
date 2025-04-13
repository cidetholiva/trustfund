import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, Image } from 'react-native';

export default function AddDependent() {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require('../assets/images/Trustlogo.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.header}>Add Dependent</Text>

      {['First Name', 'Last Name', 'State', 'Zip Code', 'Account Number'].map((label) => (
        <View key={label}>
          <Text style={styles.label}>{label}</Text>
          <TextInput
            style={styles.input}
            placeholder={label}
            placeholderTextColor="#ccc"
          />
        </View>
      ))}

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
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
    width: 800,
    height: 300,
    marginTop: -60,
    marginBottom: 20,
  },
  header: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: -60,
    marginBottom: 4,
  },
  label: { //first,last, etc.
    alignSelf: 'flex-start',
    color: '#fff',
    marginBottom: 5,
    marginTop: 10,
    fontSize: 14,
    marginLeft: 10,
  },
  input: { //text box
    backgroundColor: '#fff',
    width: 280,
    height: 45,
    borderRadius: 10,
    paddingHorizontal: 90,
    marginBottom: 10,
  },
  button: { //yellow button
    backgroundColor: '#e3aa29',
    width: 280,
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
});
