import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
 } from 'react-native';
 import { useRouter } from 'expo-router';
 import { useState } from 'react';
 import { createAccount } from '../../service';
 
 
 export default function CreateAccount() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    'first_name': '',
    'last_name': '',
    'state': '',
    'zip_code': '',
    'account_number': '',
    'type': 'Parent',
  });
 
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={60}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
        >
          <Image
            source={require('../../assets/images/Trustlogo.png')}
            style={styles.logo}
            resizeMode="contain"
          />
          <Text style={styles.header}>Create an account</Text>
 
 
          {[
            { label: 'First Name', key: 'first_name' },
            { label: 'Last Name', key: 'last_name' },
            { label: 'State', key: 'state' },
            { label: 'Zip Code', key: 'zip_code' },
            { label: 'Account Number', key: 'account_number' },
          ].map(({ label, key }) => (
            <View key={key}>
              <Text style={styles.label}>{label}</Text>
              <TextInput
                style={styles.input}
                placeholder={label}
                placeholderTextColor="#ccc"
                value={formData[key]}
                onChangeText={(text) =>
                  setFormData((prev) => ({ ...prev, [key]: text }))
                }
              />
            </View>
          ))}

          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              console.log("here")
              createAccount(formData).then((account_details) =>{
                console.log("working")
                router.push(`/add-dependent?customer_id=${account_details.customer_id}` as any)
                console.log(account_details.customer_id)
              })
              }}
          >
            <Text style={styles.buttonText}>Continue</Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
 }
 
 
 const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#002f1f',
  },
  scrollContent: {
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
  label: {
    alignSelf: 'flex-start',
    color: '#fff',
    marginBottom: 5,
    marginTop: 10,
    fontSize: 14,
    marginLeft: 10,
  },
  input: {
    backgroundColor: '#fff',
    width: 280,
    height: 45,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 10,
  },
  button: {
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
 
 
 
 
 