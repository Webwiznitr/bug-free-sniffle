export type TimelineEvent = {
  time: string;
  title: string;
  color: string;
  tag: string;
};

export const timelineConfig = {
  heading: 'TIMELINE',
  dateLabelday1: 'OCTOBER 31, 2026',
  dateLabelday2: 'NOVEMBER 1, 2026',
  iconSrc: '/musiciconblue.svg',
  leftIconSrc: '/musicicon.svg',
  rightIconSrc: '/musicicon.svg',
  bottomTapeSrc: 'pixel.svg',
  timelinebottomTapeSrc: 'timelinebottomtape.svg',
  day1Events: [
    {
      time: 'SAT 7:30 AM',
      title: 'CHECK-IN STARTS',
      color: '#A83320',
      tag: '#01',
    },
    {
      time: 'SAT 7:30 AM',
      title: 'DOORS OPEN · WELCOME MIXTAPE PACK',
      color: '#2A5266',
      tag: '#01',
    },
    {
      time: 'SAT 8:00 AM',
      title: 'OPENING CEREMONY',
      color: '#A83320',
      tag: '#01',
    },
    {
      time: 'SAT 8:30 AM',
      title: 'HACKING STARTS',
      color: '#2A5266',
      tag: '#01',
    },
    {
      time: 'SAT 9:00 AM',
      title: 'TEAM BUILDING EVENT',
      color: '#A83320',
      tag: '#01',
    },
    {
      time: 'SAT 12:00 PM',
      title: 'LUNCH BREAK',
      color: '#2A5266',
      tag: '#01',
    },
    {
      time: 'SAT 3:30 PM',
      title: 'FUN EVENT 1',
      color: '#A83320',
      tag: '#01',
    },
    {
      time: 'SAT 5:00 PM',
      title: 'HACKER HANGOUT',
      color: '#2A5266',
      tag: '#01',
    },
  ] satisfies TimelineEvent[],
  day2Events: [
    {
      time: 'SUN 12:00 AM',
      title: 'DISCORD CATCH-UP SESSION',
      color: '#A83320',
      tag: '#01',
    },
    {
      time: 'SUN 12:00 PM',
      title: 'LUNCH BREAK',
      color: '#2A5266',
      tag: '#01',
    },
    {
      time: 'SUN 2:00 PM',
      title: 'FUNEVENT 2',
      color: '#A83320',
      tag: '#01',
    },
    {
      time: 'SUN 6:00 PM',
      title: 'INITIAL SUBMISSION DUE HACKING ENDS',
      color: '#2A5266',
      tag: '#01',
    },
    {
      time: 'SUN 9:00 PM',
      title: '(SUBMISSION HARD DEADLINE)',
      color: '#A83320',
      tag: '#01',
    },
    {
      time: 'SUN 9:20 PM',
      title: 'CLOSING CEREMONY',
      color: '#2A5266',
      tag: '#01',
    },
    {
      time: 'SUN 10:00 PM',
      title: 'DEMO STARTS',
      color: '#A83320',
      tag: '#01',
    },
    {
      time: 'SUN 10:00 PM',
      title: 'EVENT ENDS',
      color: '#2A5266',
      tag: '#01',
    },
  ] satisfies TimelineEvent[],
} as const;
