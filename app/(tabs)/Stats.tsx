import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { AppColors } from '@/constants/Colors';
import React, { useState } from 'react';
import { StyleSheet, View, Dimensions, TouchableOpacity } from 'react-native';
import { LineChart, BarChart } from 'react-native-chart-kit';
import { Ionicons } from "@expo/vector-icons";

const screenWidth = Dimensions.get('window').width;

export default function StatsScreen() {
  const [isBarChart, setIsBarChart] = useState(true);
  
  // Mock data for the last 7 days
  const labels = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
  const data = {
    labels,
    datasets: [{
      data: [20, 45, 28, 80, 99, 43, 50],
    }]
  };

  const chartConfig = {
    backgroundColor: 'transparent',
    backgroundGradientFrom: 'transparent',
    backgroundGradientTo: 'transparent',
    decimalPlaces: 0,
    color: (opacity = 1) => `rgba(57, 255, 20, 1)`, // Solid green color
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    propsForBackgroundLines: {
      strokeWidth: 0,
    },
    propsForLabels: {
      fontSize: 10,
      fontWeight: 'bold',
    },
    barPercentage: 0.7,
    fillShadowGradient: AppColors.accent,
    fillShadowGradientOpacity: 1,
    useShadowColorFromDataset: false,
  };

  return (
    <ThemedView style={styles.container}>
      <View style={styles.header}>
        <ThemedText type="title">Statistics</ThemedText>
        <TouchableOpacity
          style={styles.toggleButton}
          onPress={() => setIsBarChart(!isBarChart)}
        >
          <Ionicons 
            name={isBarChart ? "stats-chart" : "analytics"} 
            size={24} 
            color={AppColors.accent}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.chartWrapper}>
        {isBarChart ? (
          <BarChart
            data={data}
            width={screenWidth - 15}
            height={220}
            yAxisSuffix=""
            yAxisLabel=""
            chartConfig={chartConfig}
            style={styles.chart}
            showValuesOnTopOfBars
            fromZero
            withInnerLines={false}
            flatColor={true}
            segments={4}
          />
        ) : (
          <LineChart
            data={data}
            width={screenWidth - 15}
            height={220}
            yAxisSuffix=""
            chartConfig={chartConfig}
            style={styles.chart}
            bezier
            withInnerLines={false}
            withVerticalLines={false}
            withHorizontalLines={false}
            withDots={false}
            fromZero
            segments={4}
          />
        )}
      </View>

      <View style={styles.statsInfo}>
        <ThemedText>Weekly Progress</ThemedText>
        <View style={styles.statsRow}>
          <View style={styles.statItem}>
            <ThemedText style={styles.statValue}>365</ThemedText>
            <ThemedText style={styles.statLabel}>Total Reps</ThemedText>
          </View>
          <View style={styles.statItem}>
            <ThemedText style={styles.statValue}>52</ThemedText>
            <ThemedText style={styles.statLabel}>Daily Avg</ThemedText>
          </View>
        </View>
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    marginTop: 48,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  toggleButton: {
    padding: 8,
    borderRadius: 8,
    backgroundColor: AppColors.darkGrey,
  },
  chartWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  chart: {
    borderRadius: 16,
    marginLeft: -20, // Adjust for better centering
  },
  statsInfo: {
    marginTop: 20,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 16,
  },
  statItem: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: AppColors.accent,
  },
  statLabel: {
    fontSize: 14,
    marginTop: 4,
  },
});
