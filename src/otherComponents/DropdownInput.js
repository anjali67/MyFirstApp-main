import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Dimensions } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const { width } = Dimensions.get('window');

const DropdownInput = () => {
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [isFocused, setIsFocused] = useState(false);
    const [selectedValue, setSelectedValue] = useState(null);

    const options = [
        { label: 'Option 1', value: 'option1' },
        { label: 'Option 2', value: 'option2' },
    ];

    const handleOptionSelect = (item) => {
        setSelectedValue(item.value);
        setDropdownVisible(false);
    };

    return (
        <View style={{ width: '95%', alignSelf: 'center' }}>
            <TouchableOpacity
                onPress={() => setDropdownVisible(!dropdownVisible)}
                onFocus={() => setIsFocused(!isFocused)}
                style={[styles.inputContainer, { borderWidth: dropdownVisible ? 2 : 0 }]}
            >
                <View style={styles.leftIconContainer}>
                    <Ionicons name="person-circle-sharp" size={38} color={'#CCCCCC'} />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.label}>STUDENT NAME</Text>
                    <Text style={[styles.label, { fontSize: 12, color: "#8F9A98" }]}>+91-1234567890</Text>
                </View>
                <View style={{ right: 12 }}>
                    <Ionicons name="chevron-down" size={18} />
                </View>
            </TouchableOpacity>
            {dropdownVisible && (
                <FlatList
                    data={options}
                    keyExtractor={(item) => item.value}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => handleOptionSelect(item)} style={styles.optionContainer}>
                            <Text style={styles.optionText}>{item.label}</Text>
                        </TouchableOpacity>
                    )}
                    style={[styles.dropdown, { width: width * 0.9 }]}
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderRadius: 10,
        marginBottom: 20,
        borderColor: "#1B83E3",
        backgroundColor: 'rgba(27, 131, 227, 0.1)',
        paddingHorizontal: 15,
        paddingVertical: 11

    },
    leftIconContainer: {
        marginRight: 7,

    },
    textContainer: {
        width: "80%",


    },
    label: {
        fontSize: 14,
        color: '#626262',
        fontFamily: 'Poppins-Regular',
        fontWeight: '500',
    },
    dropdown: {
        zIndex: 1000,
        backgroundColor: '#fff',
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 10,
    },
    optionContainer: {
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    optionText: {
        fontSize: 14,
        color: '#333',
    },
});

export default DropdownInput;

