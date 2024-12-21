import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { AppColors } from '@/constants/Colors';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Ionicons } from "@expo/vector-icons";

export default function RoutineScreen() {
  return (
    <ThemedView style={styles.container}>
      <View style={styles.header}>
        <ThemedText type="title">Routine</ThemedText>
        <TouchableOpacity 
          style={styles.createButton}
          onPress={() => {
            // Handle create routine
            console.log('Create routine pressed');
          }}
        >
          <Ionicons name="add-circle" size={24} color={AppColors.accent} />
          <ThemedText style={styles.buttonText}>Create Routine</ThemedText>
        </TouchableOpacity>
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 48,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  createButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: AppColors.darkGrey,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    gap: 8,
  },
  buttonText: {
    color: AppColors.accent,
    fontWeight: '600',
  },
});
