module.exports = {
  siteTitle: 'Hien Nguyen | Mobile App Developer',
  siteDescription:
    'Hien Nguyen is a Mobile App Developer in Java | Android | React Native | Flutter',
  siteKeywords:
    'Hien Nguyen, Hien, Nguyen, software engineer, flutter, android, react native, java',
  siteUrl: 'https://hiennguyen92.github.io',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'G-C4BFBJWXHV',
  googleVerification: 'J-6Kyh8KOlaoq8YAqi0ZB74FRe3lp2LJivRHfQx7FqY',
  name: 'Hien Nguyen',
  location: 'Ho Chi Minh, Viet Nam',
  email: 'hien@hiennv.com',
  github: 'https://github.com/hiennguyen92',
  twitterHandle: '@hiennvan',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/hiennguyen92',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/hiennv',
    },
    {
      name: 'Codepen',
      url: 'https://codepen.io/hiennv',
    },
    {
      name: 'Medium',
      url: 'https://medium.com/@hiennv',
    }
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200, viewFactor = 0.25) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
