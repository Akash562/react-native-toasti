import { View, Text, StyleSheet, TouchableOpacity, useColorScheme } from 'react-native';

const Toast = ({ message, type, onClose, position = 'bottom', icon = null }) => {
    const colorScheme = useColorScheme();
    const isDark = colorScheme === 'dark';

    return (
        <View style={[
            styles.container,
            styles[type],
            isDark && styles.darkContainer,
            getPositionStyle(position)
        ]}>

            {/* Left Icon */}
            {icon ?
                <View style={styles.icon}>
                    {icon}
                </View>
                :
                <Text style={[styles.icon, getTextColor(type, isDark)]}> {getIcon(type)} </Text>
            }

            {/* Message */}
            <Text style={[
                styles.text,
                getTextColor(type, isDark)
            ]}>
                {message}
            </Text>

            {/* Close Icon */}
            <TouchableOpacity onPress={onClose}>
                <Text style={[
                    styles.closeIcon,
                    getTextColor(type, isDark)
                ]}>
                    ❌
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const getIcon = (type) => {
    switch (type) {
        case 'success':
            return '✔️';
        case 'error':
            return '❌';
        default:
            return 'ⓘ';
    }
};

const getTextColor = (type, isDark) => {
    if (isDark) {
        return { color: '#fff' };
    }

    switch (type) {
        case 'success': return { color: 'green' };
        case 'error': return { color: 'red' };
        default: return { color: 'skyblue' };
    }
};

const getPositionStyle = (position) => {
    switch (position) {
        case 'top':
            return { top: 50 };
        case 'center':
            return { top: '50%' };
        default:
            return { bottom: 50 };
    }
};

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        left: 20,
        right: 20,
        padding: 15,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
    },

    // Light mode
    success: { backgroundColor: '#fff', borderColor: 'green', borderWidth: 1 },
    error: { backgroundColor: '#fff', borderColor: 'red', borderWidth: 1 },
    info: { backgroundColor: '#fff', borderColor: 'skyblue', borderWidth: 1 },

    // Dark mode
    darkContainer: {
        backgroundColor: '#000',
        borderColor: '#444',
    },

    icon: {
        marginRight: 10,
        fontSize: 18,
    },

    text: {
        flex: 1,
        fontSize: 18,
    },

    closeIcon: {
        fontSize: 14,
        marginLeft: 10,
    },
});

export default Toast;