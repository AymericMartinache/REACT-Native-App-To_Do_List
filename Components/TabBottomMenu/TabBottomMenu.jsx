// REACT
import React, { useEffect, useState } from 'react';

// REACT NATIVE
import { Text, TouchableOpacity, View } from 'react-native';

// STYLES
import { styles } from './TabBottomMenu.style';

export default function TabBottomMenu({ activeTab, onPress, taskCounts }) {
    return (
        <View style={styles.container}>
            {/* Bouton "All" */}
            <TouchableOpacity
                style={[styles.item, activeTab === 'all' && styles.activeItem]}
                onPress={() => onPress('all')}
            >
                <Text
                    style={[
                        styles.text,
                        activeTab === 'all' && styles.activeItem,
                    ]}
                >
                    All ({taskCounts.all})
                </Text>
            </TouchableOpacity>

            {/* Bouton "In Progress" */}
            <TouchableOpacity
                style={[
                    styles.item,
                    activeTab === 'inProgress' && styles.activeItem,
                ]}
                onPress={() => onPress('inProgress')}
            >
                <Text
                    style={[
                        styles.text,
                        activeTab === 'inProgress' && styles.activeItem,
                    ]}
                >
                    In Progress ({taskCounts.inProgress})
                </Text>
            </TouchableOpacity>

            {/* Bouton "Done" */}
            <TouchableOpacity
                style={[styles.item, activeTab === 'done' && styles.activeItem]}
                onPress={() => onPress('done')}
            >
                <Text
                    style={[
                        styles.text,
                        activeTab === 'done' && styles.activeItem,
                    ]}
                >
                    Done ({taskCounts.done})
                </Text>
            </TouchableOpacity>
        </View>
    );
}
