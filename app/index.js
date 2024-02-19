import { StyleSheet, Text, View } from 'react-native';
import { Link  } from 'expo-router';

export default function Index() {
  return (
    <View style={styles.container}>
      <Text>
				Index
			</Text>
			<Link href="/home">home</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
