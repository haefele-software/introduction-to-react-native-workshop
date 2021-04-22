import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, Platform, Share } from 'react-native';

export default function App() {
  React.useEffect(() => {
    console.log(Platform.OS);
  }, []);

  const onShare = async () => {
    await Share.share({
      message: 'React Native Workshop',
    });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity><Text style={styles.title}>The Breakdown</Text></TouchableOpacity>
      <TextInput placeholder="Email" style={styles.input} />
      <TextInput placeholder="Password" secureTextEntry={true} style={styles.input} />
      <Button onPress={onShare} title="Click Me" color="#000" accessibilityLabel="Learn more" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F16281',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: '5%',
  },
  input: {
    backgroundColor: '#FFF',
    borderColor: '#000',
    width: '60%',
    padding: '10px',
    color: '#000',
    marginBottom: '5%'
  }
});
