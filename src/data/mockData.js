export const healthMetrics = {
  steps: { value: 8547, goal: 10000, unit: 'steps' },
  calories: { value: 2120, goal: 2500, unit: 'kcal' },
  activeTime: { value: 52, goal: 60, unit: 'min' },
  hydration: { value: 7, goal: 8, unit: 'glasses' },
  sleep: { value: 6.8, goal: 8, unit: 'hours' },
  heartRate: { value: 76, goal: 80, unit: 'bpm' }
};

export const weeklyActivity = [
  { day: 'Mon', steps: 9200, calories: 2200 },
  { day: 'Tue', steps: 10500, calories: 2450 },
  { day: 'Wed', steps: 8600, calories: 2000 },
  { day: 'Thu', steps: 11200, calories: 2700 },
  { day: 'Fri', steps: 9800, calories: 2350 },
  { day: 'Sat', steps: 12500, calories: 2850 },
  { day: 'Sun', steps: 8547, calories: 2120 }
];

export const nutritionData = [
  { name: 'Carbs', value: 50, color: '#1976d2' },
  { name: 'Protein', value: 28, color: '#4caf50' },
  { name: 'Fat', value: 22, color: '#ff9800' }
];

export const reminders = [
  { id: 1, title: 'Take Vitamin B12', time: '08:30 AM', type: 'medication' },
  { id: 2, title: 'Drink Coconut Water', time: '11:00 AM', type: 'hydration' },
  { id: 3, title: 'Evening Yoga', time: '06:30 PM', type: 'fitness' },
  { id: 4, title: 'Walk after Dinner', time: '08:00 PM', type: 'activity' }
];

export const healthRecords = [
  { id: 1, name: 'Blood Sugar Test', date: '2025-01-15', type: 'Lab Report', size: '2.1 MB' },
  { id: 2, name: 'Chest X-Ray', date: '2025-01-12', type: 'Imaging', size: '4.9 MB' },
  { id: 3, name: 'Prescription - Dr. Mehta', date: '2025-01-10', type: 'Medication', size: '0.7 MB' },
  { id: 4, name: 'Covid-19 Vaccination Certificate', date: '2025-01-05', type: 'Immunization', size: '1.3 MB' }
];

export const communityPosts = [
  { id: 1, user: 'Yagnik Patel', content: 'Completed my 5K morning run today! 🏃‍♂️', likes: 35, time: '1h ago' },
  { id: 2, user: 'Sachin Sharma', content: 'Homemade protein shake recipes anyone? 💪', likes: 21, time: '3h ago' },
  { id: 3, user: 'Solanki Bhavesh', content: 'Hit my 10,000 steps goal for the whole week! 🎉', likes: 40, time: '5h ago' }
];

export const leaderboard = [
  { rank: 1, name: 'Soniya Saini', points: 3850, avatar: 'SS' },
   { rank: 2, name: 'Solanki Bhavesh', points: 3200, avatar: 'SB' },
  { rank: 3, name: 'Yagnik Patel', points: 3100, avatar: 'YP' },
  { rank: 4, name: 'Sachin Sharma', points: 2880, avatar: 'SS' },
   
 
  { rank: 5, name: 'You', points: 2200, avatar: 'YU' }
];
