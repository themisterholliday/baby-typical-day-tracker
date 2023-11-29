// - hours since beginning
// - duration
// - activity type

// ask when to start
// show start time at whatever that is
// display items starting from date, percentages to the end of durations

type ActivityType = 'feed' | 'nap' | 'play' | 'bath';

interface TypicalDayItem {
  duration_min: number;
  activity_type: ActivityType;
}

const typical_day_data: TypicalDayItem[] = [
  {
    duration_min: 30,
    activity_type: 'feed',
  },
  {
    duration_min: 90,
    activity_type: 'nap',
  },
  {
    duration_min: 30,
    activity_type: 'feed',
  },
  {
    duration_min: 30,
    activity_type: 'play',
  },
  {
    duration_min: 120,
    activity_type: 'nap',
  },
  {
    duration_min: 30,
    activity_type: 'feed',
  },
  {
    duration_min: 30,
    activity_type: 'play',
  },
  {
    duration_min: 120,
    activity_type: 'nap',
  },
  {
    duration_min: 30,
    activity_type: 'feed',
  },
  {
    duration_min: 30,
    activity_type: 'play',
  },
  {
    duration_min: 120,
    activity_type: 'nap',
  },
  {
    duration_min: 30,
    activity_type: 'feed',
  },
  {
    duration_min: 30,
    activity_type: 'play',
  },
  {
    duration_min: 90,
    activity_type: 'nap',
  },
  {
    duration_min: 30,
    activity_type: 'bath',
  },
  {
    duration_min: 30,
    activity_type: 'feed',
  },
  {
    duration_min: 240,
    activity_type: 'nap',
  },
];
