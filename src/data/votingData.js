// Voting data by country
export const countryData = {
  India: {
    minAge: 18,
    eligibilityNote: 'Indian citizens aged 18+ are eligible under the Representation of the People Act, 1950.',
    registrationUrl: 'https://voters.eci.gov.in',
    verifyUrl: 'https://electoralsearch.eci.gov.in',
    officialSite: 'https://eci.gov.in',
    steps: [
      {
        id: 1,
        title: 'Eligibility confirmation',
        icon: 'shield-check',
        color: 'sky',
        requirements: [
          'Must be 18 years or older',
          'Must be an Indian citizen',
          'Must be ordinarily resident at an address in India',
          'Must not be disqualified under any law',
        ],
        nextAction: 'Gather your Aadhaar card, birth certificate, or passport as proof of age and address.',
      },
      {
        id: 2,
        title: 'Voter registration (Form 6)',
        icon: 'file-text',
        color: 'saffron',
        methods: [
          {
            label: 'Online (fastest)',
            steps: [
              'Visit voters.eci.gov.in or download the Voter Helpline App',
              'Click "New voter registration" → fill Form 6',
              'Upload photo, age proof, and address proof',
              'Submit — you get an application reference number',
            ],
          },
          {
            label: 'Offline option',
            steps: [
              'Visit your local Electoral Registration Officer (ERO) office',
              'Fill Form 6 in person and submit physical documents',
            ],
          },
        ],
        documents: [
          'Aadhaar card OR passport OR birth certificate (age proof)',
          'Aadhaar OR utility bill OR bank passbook (address proof)',
          'Recent passport-size photograph',
        ],
        nextAction: 'Go to voters.eci.gov.in and start Form 6 today — it takes about 10 minutes.',
      },
      {
        id: 3,
        title: 'Verify your voter status',
        icon: 'search',
        color: 'leaf',
        details: [
          'Visit electoralsearch.eci.gov.in',
          'Search by name, EPIC number (Voter ID), or mobile number',
          'Check your name, polling booth number, and constituency',
          'Download e-EPIC (digital Voter ID) from the Voter Helpline App',
        ],
        nextAction: 'After submitting Form 6, wait 2–4 weeks then verify at electoralsearch.eci.gov.in.',
      },
      {
        id: 4,
        title: 'Important dates & deadlines',
        icon: 'calendar',
        color: 'saffron',
        dates: [
          { label: 'Registration deadline', value: '~30 days before election', note: 'Check ECI website for current cycle' },
          { label: 'Voter list revision', value: 'January each year', note: 'Draft rolls published for correction' },
          { label: 'Voter slip issued', value: '5–7 days before polling', note: 'Sent to your registered address' },
          { label: 'Election day', value: 'Varies by election', note: 'Announced by Election Commission of India' },
        ],
        nextAction: 'Bookmark eci.gov.in to track the latest election schedule and deadlines for your state.',
      },
      {
        id: 5,
        title: 'Voting day — what to expect',
        icon: 'vote',
        color: 'leaf',
        details: [
          'Find your polling booth on voter slip or electoralsearch.eci.gov.in',
          'Carry Voter ID (EPIC) or any of 12 approved alternatives (Aadhaar, PAN, passport, etc.)',
          'Polling hours: typically 7 AM – 6 PM',
          'Show ID to presiding officer — finger gets inked',
          'Press button next to your candidate on the EVM (Electronic Voting Machine)',
          'VVPAT shows a paper slip confirming your vote for 7 seconds',
          'Exit — your vote is cast and completely secret!',
        ],
        nextAction: 'On election day, carry a valid photo ID and arrive early to avoid long queues.',
      },
    ],
    faqs: [
      { q: 'How do I fill Form 6 for voter registration?', topic: 'Form 6 registration India' },
      { q: 'What are the 12 alternative IDs accepted on voting day?', topic: 'alternative IDs India voting' },
      { q: 'How does the EVM voting machine work?', topic: 'EVM voting machine India' },
      { q: 'What if my name is not on the voter list?', topic: 'name not on voter list India' },
    ],
  },

  'United States': {
    minAge: 18,
    eligibilityNote: 'U.S. citizens aged 18+ who meet their state's residency requirements are eligible to vote.',
    registrationUrl: 'https://vote.gov',
    verifyUrl: 'https://vote.gov/register/verify/',
    officialSite: 'https://vote.gov',
    steps: [
      {
        id: 1,
        title: 'Eligibility confirmation',
        icon: 'shield-check',
        color: 'sky',
        requirements: [
          'Must be a U.S. citizen (by birth or naturalization)',
          'Must be 18 years old by Election Day',
          'Must be a resident of the state where you register',
          'Must not be a convicted felon (rules vary by state)',
          'Must not have been declared mentally incompetent by a court',
        ],
        nextAction: 'Check your state's specific eligibility rules at vote.gov since laws vary by state.',
      },
      {
        id: 2,
        title: 'Voter registration',
        icon: 'file-text',
        color: 'saffron',
        methods: [
          {
            label: 'Online',
            steps: [
              'Visit vote.gov and select your state',
              'Fill out the online registration form',
              'Submit — you'll receive a confirmation',
            ],
          },
          {
            label: 'By mail',
            steps: [
              'Download the National Voter Registration Form',
              'Fill it out and mail to your local election office',
            ],
          },
          {
            label: 'In person',
            steps: [
              'Visit your local DMV, election office, or public library',
              'Fill out and submit registration form on the spot',
            ],
          },
        ],
        documents: [
          'State-issued Driver\'s License or ID number',
          'Last 4 digits of Social Security Number',
          'Proof of citizenship (may be required in some states)',
        ],
        nextAction: 'Register at vote.gov — most states have deadlines 15–30 days before the election.',
      },
      {
        id: 3,
        title: 'Verify your voter registration',
        icon: 'search',
        color: 'leaf',
        details: [
          'Visit vote.gov/register/verify/ or your state's election website',
          'Enter your name, date of birth, and address',
          'Check your registration status and polling location',
          'Update your registration if you moved or changed your name',
        ],
        nextAction: 'Verify your registration 2–4 weeks before the election to ensure everything is correct.',
      },
      {
        id: 4,
        title: 'Important dates & deadlines',
        icon: 'calendar',
        color: 'saffron',
        dates: [
          { label: 'Registration deadline', value: '15–30 days before election', note: 'Varies by state — check vote.gov' },
          { label: 'Absentee ballot request', value: 'Varies by state', note: 'Some states allow same-day registration' },
          { label: 'Early voting', value: 'Varies by state', note: 'Many states offer early in-person voting' },
          { label: 'Election Day', value: 'First Tuesday after first Monday in November', note: 'Federal elections' },
        ],
        nextAction: 'Check your state's specific deadlines at vote.gov — they vary significantly.',
      },
      {
        id: 5,
        title: 'Voting day — what to expect',
        icon: 'vote',
        color: 'leaf',
        details: [
          'Find your polling place at vote.gov or your state's election website',
          'Bring required ID (varies by state — some require photo ID, others do not)',
          'Polling hours vary by state, typically 6 AM – 8 PM',
          'Check in with poll workers — they'll verify your registration',
          'Use the voting machine or paper ballot to cast your vote',
          'You may be offered a provisional ballot if there are issues',
          'Your vote is completely private and secret',
        ],
        nextAction: 'Look up your polling place and required ID at vote.gov before Election Day.',
      },
    ],
    faqs: [
      { q: 'Can I vote if I missed the registration deadline?', topic: 'same day voter registration US' },
      { q: 'How do I request an absentee ballot?', topic: 'absentee ballot request United States' },
      { q: 'What ID do I need to bring on election day?', topic: 'voter ID requirements United States by state' },
      { q: 'What is early voting and how does it work?', topic: 'early voting United States' },
    ],
  },

  'United Kingdom': {
    minAge: 18,
    eligibilityNote: 'British, qualifying Commonwealth, or EU citizens aged 18+ who are registered can vote in UK elections.',
    registrationUrl: 'https://www.gov.uk/register-to-vote',
    verifyUrl: 'https://www.gov.uk/contact-electoral-registration-office',
    officialSite: 'https://www.electoralcommission.org.uk',
    steps: [
      {
        id: 1,
        title: 'Eligibility confirmation',
        icon: 'shield-check',
        color: 'sky',
        requirements: [
          'Must be 18 or older on polling day',
          'Must be a British citizen, qualifying Commonwealth citizen, or EU citizen',
          'Must be resident at an address in the UK',
          'Must not be legally excluded from voting',
        ],
        nextAction: 'Check gov.uk/register-to-vote to confirm your eligibility and start registration.',
      },
      {
        id: 2,
        title: 'Voter registration',
        icon: 'file-text',
        color: 'saffron',
        methods: [
          {
            label: 'Online (fastest — 5 minutes)',
            steps: [
              'Visit gov.uk/register-to-vote',
              'Enter your name, address, date of birth, and National Insurance number',
              'Submit — you\'ll receive a confirmation',
            ],
          },
          {
            label: 'By post',
            steps: [
              'Contact your local Electoral Registration Office for a paper form',
              'Complete and return the form',
            ],
          },
        ],
        documents: [
          'National Insurance number (if you have one)',
          'Passport or birth certificate (if no NI number)',
        ],
        nextAction: 'Register at gov.uk/register-to-vote — it takes about 5 minutes online.',
      },
      {
        id: 3,
        title: 'Verify your registration',
        icon: 'search',
        color: 'leaf',
        details: [
          'Contact your local Electoral Registration Office to confirm',
          'You\'ll receive a poll card in the post before elections',
          'Your poll card shows your polling station address',
          'You don\'t need to bring your poll card to vote, but it helps',
        ],
        nextAction: 'If you don\'t receive a poll card before an election, contact your local Electoral Registration Office.',
      },
      {
        id: 4,
        title: 'Important dates & deadlines',
        icon: 'calendar',
        color: 'saffron',
        dates: [
          { label: 'Registration deadline', value: '12 working days before polling day', note: 'For most elections' },
          { label: 'Postal vote application', value: '11 working days before polling day', note: 'If voting by post' },
          { label: 'Poll card arrival', value: '~3 weeks before election', note: 'Sent to registered address' },
          { label: 'Polling day', value: 'Usually a Thursday', note: 'Announced by the government' },
        ],
        nextAction: 'Register as soon as possible — the 12-working-day deadline comes fast.',
      },
      {
        id: 5,
        title: 'Voting day — what to expect',
        icon: 'vote',
        color: 'leaf',
        details: [
          'Go to your polling station (shown on your poll card)',
          'Bring valid photo ID — required since 2023 (passport, driving licence, or approved alternative)',
          'Polling hours: 7 AM – 10 PM',
          'Give your name and address to the poll clerk',
          'Receive your ballot paper — mark your choice with an X',
          'Fold the ballot paper and put it in the ballot box',
          'Your vote is completely secret',
        ],
        nextAction: 'Check what photo ID is accepted at electoralcommission.org.uk before polling day.',
      },
    ],
    faqs: [
      { q: 'What photo ID is accepted at UK polling stations?', topic: 'accepted photo ID UK polling station' },
      { q: 'How do I apply for a postal vote in the UK?', topic: 'postal vote application UK' },
      { q: 'Can I vote if I live abroad?', topic: 'overseas voter registration UK' },
      { q: 'What is the difference between general and local elections?', topic: 'general vs local elections UK' },
    ],
  },

  Canada: {
    minAge: 18,
    eligibilityNote: 'Canadian citizens aged 18+ are eligible to vote in federal elections under the Canada Elections Act.',
    registrationUrl: 'https://www.elections.ca/content.aspx?section=vot&dir=reg&document=index&lang=e',
    verifyUrl: 'https://ereg.elections.ca/CWelcome.aspx',
    officialSite: 'https://www.elections.ca',
    steps: [
      {
        id: 1,
        title: 'Eligibility confirmation',
        icon: 'shield-check',
        color: 'sky',
        requirements: [
          'Must be a Canadian citizen',
          'Must be 18 years or older on election day',
          'Must be a resident of the electoral district where you vote',
        ],
        nextAction: 'Confirm your citizenship and residency, then check elections.ca to register.',
      },
      {
        id: 2,
        title: 'Voter registration',
        icon: 'file-text',
        color: 'saffron',
        methods: [
          {
            label: 'Online',
            steps: [
              'Visit elections.ca and click "Update or confirm your voter registration"',
              'Enter your name, date of birth, address, and citizenship',
              'Submit your registration',
            ],
          },
          {
            label: 'By phone or mail',
            steps: [
              'Call 1-800-463-6868 or use the paper form included with your tax return',
            ],
          },
          {
            label: 'At the polls',
            steps: [
              'Register in person on election day with proof of identity and address',
            ],
          },
        ],
        documents: [
          'Any ID showing your name and address (utility bill, bank statement)',
          'Government-issued photo ID (driver\'s licence, passport)',
        ],
        nextAction: 'Register at elections.ca — you can also register in person on election day.',
      },
      {
        id: 3,
        title: 'Verify your registration',
        icon: 'search',
        color: 'leaf',
        details: [
          'Visit ereg.elections.ca to confirm your voter registration',
          'Check your name, address, and electoral district',
          'Update if you\'ve moved recently',
          'You\'ll receive a voter information card in the mail before the election',
        ],
        nextAction: 'Confirm your registration at elections.ca, especially if you\'ve moved recently.',
      },
      {
        id: 4,
        title: 'Important dates & deadlines',
        icon: 'calendar',
        color: 'saffron',
        dates: [
          { label: 'Registration deadline', value: '6 days before election', note: 'Can also register on election day' },
          { label: 'Advance polling', value: '4 days over the election period', note: 'Typically Friday–Monday before election' },
          { label: 'Voter info card', value: '~2 weeks before election', note: 'Mailed to registered address' },
          { label: 'Federal election day', value: 'Third Monday in October', note: 'Fixed-date elections every ~4 years' },
        ],
        nextAction: 'Track election dates and deadlines at elections.ca.',
      },
      {
        id: 5,
        title: 'Voting day — what to expect',
        icon: 'vote',
        color: 'leaf',
        details: [
          'Find your polling station on your voter information card or elections.ca',
          'Bring your voter information card + one piece of ID showing name and address',
          'OR bring two pieces of ID that together show your name and address',
          'Polling hours: 9.5 hours, times vary by time zone',
          'Give your name to the election official — get your ballot',
          'Mark an X beside your candidate\'s name in the private voting booth',
          'Fold and hand in your ballot — done!',
        ],
        nextAction: 'Check what ID is acceptable at elections.ca before voting day.',
      },
    ],
    faqs: [
      { q: 'Can I vote if I\'m a permanent resident of Canada?', topic: 'permanent resident voting Canada' },
      { q: 'How do advance polls work in Canada?', topic: 'advance polling Canada federal election' },
      { q: 'What is a special ballot in Canada?', topic: 'special ballot Canada elections' },
      { q: 'How are Canadian ridings and constituencies determined?', topic: 'Canadian electoral ridings' },
    ],
  },

  Australia: {
    minAge: 18,
    eligibilityNote: 'Australian citizens aged 18+ are required by law to enrol and vote in federal elections.',
    registrationUrl: 'https://www.aec.gov.au/enrol/',
    verifyUrl: 'https://my.aec.gov.au/',
    officialSite: 'https://www.aec.gov.au',
    steps: [
      {
        id: 1,
        title: 'Eligibility confirmation',
        icon: 'shield-check',
        color: 'sky',
        requirements: [
          'Must be an Australian citizen',
          'Must be 18 years or older',
          'Must have lived at your current address for at least one month',
          'Note: Voting is compulsory in Australia — you can be fined for not voting',
        ],
        nextAction: 'Confirm your citizenship and check your enrolment status at aec.gov.au.',
      },
      {
        id: 2,
        title: 'Electoral enrolment',
        icon: 'file-text',
        color: 'saffron',
        methods: [
          {
            label: 'Online (easiest)',
            steps: [
              'Visit aec.gov.au/enrol',
              'Enter your details — the AEC may already have you enrolled via automatic enrolment',
              'Confirm or update your address and submit',
            ],
          },
          {
            label: 'Paper form',
            steps: [
              'Download and print the enrolment form from aec.gov.au',
              'Fill in and mail or deliver to the AEC',
            ],
          },
        ],
        documents: [
          'Australian citizenship proof if required',
          'Driver\'s licence or passport number (for online enrolment)',
        ],
        nextAction: 'Check and update your enrolment now at aec.gov.au — it only takes 2 minutes.',
      },
      {
        id: 3,
        title: 'Verify your enrolment',
        icon: 'search',
        color: 'leaf',
        details: [
          'Visit my.aec.gov.au to check your enrolment details',
          'Confirm your name, address, and enrolled division',
          'Update your address if you\'ve moved (important for correct polling booth)',
          'You\'ll receive an enrolment confirmation notice',
        ],
        nextAction: 'Verify your details at my.aec.gov.au, especially if you\'ve recently moved.',
      },
      {
        id: 4,
        title: 'Important dates & deadlines',
        icon: 'calendar',
        color: 'saffron',
        dates: [
          { label: 'Enrolment close', value: '7 days after election writs issued', note: 'Usually ~3–4 weeks before polling day' },
          { label: 'Pre-poll voting opens', value: '~2 weeks before election day', note: 'Vote early in person' },
          { label: 'Postal vote application', value: 'Closes Wednesday before election', note: 'Apply via aec.gov.au' },
          { label: 'Federal election day', value: 'Typically a Saturday', note: 'Date set by the Prime Minister' },
        ],
        nextAction: 'Track all deadlines at aec.gov.au once an election is called.',
      },
      {
        id: 5,
        title: 'Voting day — what to expect',
        icon: 'vote',
        color: 'leaf',
        details: [
          'Find your polling place at aec.gov.au (or any polling place in your state for House of Reps)',
          'Bring your enrolment card or just state your name and address',
          'No specific ID required, but it helps to have some',
          'Polling hours: 8 AM – 6 PM',
          'Receive two ballots: green (House of Reps) and white (Senate)',
          'Number ALL boxes on the green ballot (preferential voting)',
          'Mark at least 6 preferences on the Senate white ballot (above the line) or all below',
          'Fold and place in the ballot box — voting is compulsory!',
        ],
        nextAction: 'Familiarise yourself with Australia\'s preferential voting system at aec.gov.au.',
      },
    ],
    faqs: [
      { q: 'What happens if I don\'t vote in Australia?', topic: 'compulsory voting fine Australia' },
      { q: 'How does preferential voting work in Australia?', topic: 'preferential voting Australia how it works' },
      { q: 'How do I apply for a postal vote in Australia?', topic: 'postal vote application Australia AEC' },
      { q: 'Can I vote at any polling booth in Australia?', topic: 'voting at any polling booth Australia' },
    ],
  },
}

export const getCountryData = (country) => {
  return countryData[country] || null
}

export const isEligible = (country, ageGroup) => {
  if (ageGroup === 'Under 18') return false
  const data = getCountryData(country)
  return data !== null
}