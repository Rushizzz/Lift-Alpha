import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { AppColors } from '@/constants/Colors';
import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View, ScrollView } from 'react-native';

const formatHeaderDate = (date: Date) => {
  return date.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  });
};

const getDayName = (date: Date) => {
  return date.toLocaleDateString('en-US', { weekday: 'short' });
};

const getDateNumber = (date: Date) => {
  return date.getDate().toString();
};

export default function HistoryScreen() {
  const currentDate = new Date('2024-12-20T11:51:55+05:30');
  const [selectedDate, setSelectedDate] = useState(currentDate);

  // Generate last 7 days
  const dates = Array.from({ length: 7 }, (_, i) => {
    const date = new Date(currentDate);
    date.setDate(currentDate.getDate() - i);
    return date;
  });

  return (
    <ThemedView style={styles.container}>
      <View style={styles.header}>
        <ThemedText type="title">{formatHeaderDate(selectedDate)}</ThemedText>
      </View>
      
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.dateScroller}>
        {dates.map((date) => (
          <TouchableOpacity
            key={date.toISOString()}
            style={[
              styles.dateButton,
              date.toDateString() === selectedDate.toDateString() && styles.selectedDateButton
            ]}
            onPress={() => setSelectedDate(date)}
          >
            <ThemedText 
              style={[
                styles.dayText,
                date.toDateString() === selectedDate.toDateString() && styles.selectedText
              ]}
            >
              {getDayName(date)}
            </ThemedText>
            <View 
              style={[
                styles.dateNumberBox,
                date.toDateString() === selectedDate.toDateString() && styles.selectedDateNumberBox
              ]}
            >
              <ThemedText 
                style={[
                  styles.dateNumber,
                  date.toDateString() === selectedDate.toDateString() && styles.selectedText
                ]}
              >
                {getDateNumber(date)}
              </ThemedText>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <View style={styles.content}>
        <ThemedText>Workout history for {formatHeaderDate(selectedDate)}</ThemedText>
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
    marginBottom: 20,
  },
  dateScroller: {
    marginBottom: 20,
  },
  dateButton: {
    padding: 4,
    marginRight: 10,
    borderRadius: 12,
    backgroundColor: AppColors.darkGrey,
    alignItems: 'center',
    width: 48,
    height: 70,
  },
  selectedDateButton: {
    backgroundColor: AppColors.accent,
  },
  dayText: {
    fontSize: 14,
  },
  dateNumberBox: {
    backgroundColor: AppColors.black,
    borderRadius: 8,
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedDateNumberBox: {
    backgroundColor: AppColors.white,
  },
  dateNumber: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  selectedText: {
    color: AppColors.black,
  },
  content: {
    flex: 1,
  },
});
