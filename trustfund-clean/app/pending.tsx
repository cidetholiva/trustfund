
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    ScrollView,
  } from 'react-native';
  
  export default function PendingPage() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.header}>Hello, Username!</Text> 
        <Text style={styles.subtext}>Welcome to TrustFund</Text>
  
        <ScrollView style={styles.requests}>
          {[...Array(5)].map((_, i) => (
            <View key={i} style={styles.requestCard}>
              <View>
                <Text style={styles.requestTitle}>Requesting $20</Text> 
                <Text style={styles.reason}>Snacks for field trip</Text> 
                <Text style={styles.date}>April 12, 2025</Text> 
              </View>
            </View>
          ))}
        </ScrollView>
      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#002f1f',
      padding: 20,
    },
    header: {
      color: 'white',
      fontSize: 20,
      fontWeight: 'bold',
    },
    subtext: {
      color: 'white',
      fontSize: 14,
      marginBottom: 20,
    },
    requests: {
      marginTop: 10,
    },
    requestCard: {
      backgroundColor: '#0a3c24',
      borderRadius: 10,
      padding: 15,
      marginBottom: 15,
    },
    requestTitle: {
      color: '#ffc107',
      fontSize: 16,
      fontWeight: 'bold',
    },
    reason: {
      color: '#fff',
      marginTop: 5,
    },
    date: {
      color: '#ccc',
      fontSize: 12,
      marginTop: 4,
    },
  });
  