export type TimelineEvent = {
  time: string;
  title: string;
  color: string;
  tag: string;
};

export const timelineConfig = {
  heading: 'TIMELINE',
  dateLabel: 'SEPTEMBER 06, 2026',
  iconSrc: '/musiciconblue.svg',
  leftIconSrc: '/musicicon.svg',
  rightIconSrc: '/musicicon.svg',
  bottomTapeSrc: 'pixel.svg',
  timelinebottomTapeSrc: 'timelinebottomtape.svg',
  day1Events: [
    {
      time: 'FRI 6:00 PM',
      title: 'DOORS OPEN · WELCOME MIXTAPE PACK',
      color: '#A83320',
      tag: '#01',
    },
    {
      time: 'FRI 6:00 PM',
      title: 'DOORS OPEN · WELCOME MIXTAPE PACK',
      color: '#2A5266',
      tag: '#01',
    },
    {
      time: 'FRI 6:00 PM',
      title: 'DOORS OPEN · WELCOME MIXTAPE PACK',
      color: '#A83320',
      tag: '#01',
    },
    {
      time: 'FRI 6:00 PM',
      title: 'DOORS OPEN · WELCOME MIXTAPE PACK',
      color: '#2A5266',
      tag: '#01',
    },
    {
      time: 'FRI 6:00 PM',
      title: 'DOORS OPEN · WELCOME MIXTAPE PACK',
      color: '#A83320',
      tag: '#01',
    },
    {
      time: 'FRI 6:00 PM',
      title: 'DOORS OPEN · WELCOME MIXTAPE PACK',
      color: '#2A5266',
      tag: '#01',
    },
    {
      time: 'FRI 6:00 PM',
      title: 'DOORS OPEN · WELCOME MIXTAPE PACK',
      color: '#A83320',
      tag: '#01',
    },
    {
      time: 'FRI 6:00 PM',
      title: 'DOORS OPEN · WELCOME MIXTAPE PACK',
      color: '#2A5266',
      tag: '#01',
    },
  ] satisfies TimelineEvent[],
  day2Events: [
    {
      time: 'MON 6:00 PM',
      title: 'DOORS OPEN · WELCOME MIXTAPE PACK',
      color: '#A83320',
      tag: '#01',
    },
    {
      time: 'tues 6:00 PM',
      title: 'DOORS OPEN · WELCOME MIXTAPE PACK',
      color: '#2A5266',
      tag: '#01',
    },
    {
      time: 'WED 6:00 PM',
      title: 'DOORS OPEN · WELCOME MIXTAPE PACK',
      color: '#A83320',
      tag: '#01',
    },
    {
      time: 'FRI 6:00 PM',
      title: 'DOORS OPEN · WELCOME MIXTAPE PACK',
      color: '#2A5266',
      tag: '#01',
    },
    {
      time: 'FRI 6:00 PM',
      title: 'DOORS OPEN · WELCOME MIXTAPE PACK',
      color: '#A83320',
      tag: '#01',
    },
    {
      time: 'FRI 6:00 PM',
      title: 'DOORS OPEN · WELCOME MIXTAPE PACK',
      color: '#2A5266',
      tag: '#01',
    },
    {
      time: 'FRI 6:00 PM',
      title: 'DOORS OPEN · WELCOME MIXTAPE PACK',
      color: '#A83320',
      tag: '#01',
    },
    {
      time: 'FRI 6:00 PM',
      title: 'DOORS OPEN · WELCOME MIXTAPE PACK',
      color: '#2A5266',
      tag: '#01',
    },
  ] satisfies TimelineEvent[],
} as const;
