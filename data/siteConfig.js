module.exports = {
  siteTitle: 'Mat Sprehn',
  siteDescription: `Experienced Full Stack Engineer`,
  keyWords: ['java', 'react', 'node', 'nodejs'],
  authorName: 'Mat Sprehn',
  twitterUsername: null,
  resumePath: `./MatSprehnResume2018.pdf`,
  githubUsername: 'matsprehn',
  authorAvatar: 'images/profile.PNG',
  authorDescription: [
    `I am a software engineer with a passion for learning and development. I pride myself on problem solving, regardless if the solution is technical or not.`,
    `Recently, my passion has been growing teams in both technical expertise and in delivery maturity. My ultimate goal on any team is making myself replaceable.`,
  ],
  skills: [
    {
      name: 'Java',
      level: 80,
    },
    {
      name: 'Postgres',
      level: 75,
    },
    {
      name: 'Node.js',
      level: 60,
    },
    {
      name: 'React',
      level: 50,
    },
    {
      name: 'Devops',
      level: 50,
    },
    {
      name: 'REST APIS',
      level: 65,
    },
    {
      name: 'Git',
      level: 75,
    },
  ],
  jobs: [
    {
      company: 'Walt Disney Studios',
      begin: {
        month: 'apr',
        year: '2017',
      },
      duration: null,
      occupation: 'Staff Software Engineer',
      description:
        'Leading a team of 7 engineers in implementing a centralized, streamlined solution of media operations.',
      skills: [
        'node',
        'react',
        'postgres',
        'elasticsearch',
        'sqs',
        's3',
        'salesforce',
        'jenkins',
        'docker',
        'openshift',
        'git',
      ],
    },
    {
      company: 'Dell',
      begin: {
        month: 'May',
        year: '2016',
      },
      duration: '11 Months',
      occupation: 'Senior Software Engineer',
      description:
        'Led a team of 15 engineers in implementing a solution that monitors database activity and backups, and is capable of determining application consistency from a series of inconsistent partial backups',
      skills: ['java', 'spring', 'elasticsearch', 'golang', 'git'],
    },
    {
      company: 'EMC',
      begin: {
        month: 'Jan',
        year: '2014',
      },
      duration: '2 years 5 Months',
      occupation: 'Software Engineer',
      description:
        'Led a team of 7 in architecting and implementing authentication and authorization RESTfully using Spring Security, resulting in over 15 teams in 4 different locations using this service in production.',
      skills: [
        'java',
        'spring',
        'spring-security',
        'ldap',
        'jwt',
        'certificate management',
        'perforce',
        'git',
      ],
    },
  ],
  social: {
    twitter: null,
    linkedin: 'https://www.linkedin.com/in/matsprehn',
    github: 'https://github.com/matsprehn',
    email: 'mat@sprehn.io',
  },
  siteUrl: 'https://github.com/matsprehn/gatsby-starter-cv',
  pathPrefix: 'public', // Note: it must *not* have a trailing slash.
  siteCover: 'images/background.jpg',
  googleAnalyticsId: 'null',
  background_color: '#ffffff',
  theme_color: '#25303B',
  display: 'minimal-ui',
  icon: 'src/assets/profile.PNG',
  headerLinks: [
    {
      label: 'Mat Sprehn',
      url: '/',
    },
  ],
}
