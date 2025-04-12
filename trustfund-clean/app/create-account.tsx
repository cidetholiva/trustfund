import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, Image } from 'react-native';
import { useRouter } from 'expo-router';

export default function CreateAccount() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require('../assets/images/Trustlogo.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.header}>Create an account</Text>

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

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push('/add-dependent' as any)}
      >
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
    width: 120,
    height: 100,
    marginTop: 40,
    marginBottom: 10,
  },
  header: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  label: {
    alignSelf: 'flex-start',
    color: '#fff',
    marginBottom: 5,
    marginTop: 10,
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
});
