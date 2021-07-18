module.exports = {
  siteTitle: 'Hien Nguyen | Mobile App Developer in Java/Android/React Native/Flutter',
  siteDescription:
    'Hien Nguyen is a Mobile App Developer in Java | Android | React Native | Flutter',
  siteKeywords:
    'Hien Nguyen, Hien, Nguyen, software engineer, flutter, android, react native, java, typescript, javascript',
  siteUrl: 'https://hioennguyen92.github.io/',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'G-C4BFBJWXHV',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
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
      url: 'https://www.linkedin.com/in/hiennv/',
    },
    {
      name: 'Codepen',
      url: 'https://codepen.io/hiennv',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/hien.nvan',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/hiennvan',
    },
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
      name: 'Projects',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
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
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
