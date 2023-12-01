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

// export type TypicalDayOption = '_4_to_8_weeks' | '_8_to_16_weeks';
export enum TypicalDayOption {
  _4_to_8_weeks = '_4_to_8_weeks',
  _8_to_16_weeks = '_8_to_16_weeks',
}

export function get_days_from_option(
  option: TypicalDayOption
): TypicalDayItem[] {
  switch (option) {
    case '_4_to_8_weeks':
      return _4_to_8_weeks;
    case '_8_to_16_weeks':
      return _8_to_16_weeks;
  }
  return [];
}

export function get_formatted_name(option: TypicalDayOption): string {
  switch (option) {
    case TypicalDayOption._4_to_8_weeks:
      return '4 To 8 Weeks';
    case TypicalDayOption._8_to_16_weeks:
      return '8 To 16 Weeks';
  }
}

export const _4_to_8_weeks: TypicalDayItem[] = [
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

export const _8_to_16_weeks: TypicalDayItem[] = [
  {duration_min: 30, activity_type: 'feed'},
  {duration_min: 60, activity_type: 'play'},
  {duration_min: 90, activity_type: 'nap'},
  {duration_min: 30, activity_type: 'feed'},
  {duration_min: 60, activity_type: 'play'},
  {duration_min: 90, activity_type: 'nap'},
  {duration_min: 30, activity_type: 'feed'},
  {duration_min: 60, activity_type: 'play'},
  {duration_min: 90, activity_type: 'nap'},
  {duration_min: 30, activity_type: 'feed'},
  {duration_min: 60, activity_type: 'play'},
  {duration_min: 60, activity_type: 'nap'},
  {duration_min: 30, activity_type: 'bath'},
  {duration_min: 30, activity_type: 'feed'},
  {duration_min: 240, activity_type: 'nap'},
];

export interface ICalendarComponentInput {
  row_start: number;
  span: number;
  name: string;
}

export function get_calendar_info(
  data: TypicalDayItem[],
  hour_offset: number
): ICalendarComponentInput[] {
  const items: ICalendarComponentInput[] = [];

  const row_offset = hour_offset * 2;
  let current_row = 0 + row_offset;
  for (const item of data) {
    const duration_hours = (item.duration_min / 60) * 2;
    const span = duration_hours;
    items.push({
      name: item.activity_type,
      span: span,
      row_start: current_row,
    });

    const new_current_row = current_row + span;
    current_row = new_current_row;
  }

  console.log(items);
  return items;
}
