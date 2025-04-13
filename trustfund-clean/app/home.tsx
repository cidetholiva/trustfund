import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    ScrollView,
  } from 'react-native';
  import { useRouter } from 'expo-router';
  
  export default function HomeScreen() {
    const router = useRouter();
  
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.greeting}>Hello, username</Text>
        <Text style={styles.subtitle}>Welcome to TrustFund</Text>
  
        <View style={styles.balanceCard}>
          <Text style={styles.balanceLabel}>Total Balance</Text>
          <Text style={styles.balance}>$45,678.90</Text> 
  
          <Text style={styles.categoryLabel}>Categories</Text>
          <View style={styles.categoryButtons}>
            <TouchableOpacity>
              <Text style={styles.category}>Self</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={[styles.category, styles.selectedCategory]}>Dependent</Text>
            </TouchableOpacity>
          </View>
        </View>
  
        <View style={styles.actionButtons}>
          <TouchableOpacity
            style={styles.moneyTransfer}
            onPress={() => router.push('/money-transfer' as any)}
          >
            <Text style={styles.buttonText}>Money Transfer</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.pending}
            onPress={() => router.push('/pending' as any)}
          >
            <Text style={styles.buttonText}>Pending</Text>
          </TouchableOpacity>
        </View>
  
        <ScrollView style={styles.expenses}>
          {[...Array(5)].map((_, i) => (
            <View key={i} style={styles.expenseItem}>
              <View>
                <Text style={styles.expenseTitle}>Expense Name</Text> 
                <Text style={styles.expenseDate}>Date</Text> 
              </View>
              <Text style={styles.expenseAmount}>- $69</Text>
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
    greeting: {
      color: 'white',
      fontSize: 20,
      fontWeight: 'bold',
    },
    subtitle: {
      color: 'white',
      fontSize: 14,
      marginBottom: 20,
    },
    balanceCard: {
      backgroundColor: 'white',
      borderRadius: 10,
      padding: 20,
      marginBottom: 20,
    },
    balanceLabel: {
      fontSize: 12,
      color: '#444',
    },
    balance: {
      fontSize: 28,
      fontWeight: 'bold',
      marginVertical: 10,
    },
    categoryLabel: {
      fontSize: 12,
      color: '#444',
      marginBottom: 5,
    },
    categoryButtons: {
      flexDirection: 'row',
      gap: 10,
    },
    category: {
      backgroundColor: '#eee',
      paddingVertical: 4,
      paddingHorizontal: 12,
      borderRadius: 20,
      color: '#333',
    },
    selectedCategory: {
      backgroundColor: '#000',
      color: 'white',
    },
    actionButtons: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 10,
    },
    moneyTransfer: {
      backgroundColor: '#007a32',
      flex: 1,
      padding: 14,
      marginRight: 10,
      borderRadius: 10,
      alignItems: 'center',
    },
    pending: {
      backgroundColor: '#c9a032',
      flex: 1,
      padding: 14,
      borderRadius: 10,
      alignItems: 'center',
    },
    buttonText: {
      color: 'white',
      fontWeight: 'bold',
    },
    expenses: {
      marginTop: 10,
    },
    expenseItem: {
      backgroundColor: '#0a3c24',
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 15,
      borderRadius: 8,
      marginBottom: 10,
    },
    expenseTitle: {
      color: 'white',
      fontWeight: 'bold',
    },
    expenseDate: {
      color: '#ccc',
      fontSize: 12,
    },
    expenseAmount: {
      color: '#ffce47',
      fontWeight: 'bold',
    },
  });
  