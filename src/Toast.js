import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Toast = ({ message, type }) => {
    return (
        <View style={[styles.container, styles[type]]}>
            <Text style={styles.text}>{message}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 50,
        left: 20,
        right: 20,
        padding: 15,
        borderRadius: 8,
    },
    text: {
        color: '#fff',
    },
    success: { backgroundColor: 'green' },
    error: { backgroundColor: 'red' },
    info: { backgroundColor: 'blue' },
});

export default Toast;