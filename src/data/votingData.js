export const countryData = {
  India: {
    minAge: 18,
    steps: [
      {
        id: 1,
        title: "Check Eligibility",
        details: [
          "Must be 18+",
          "Must be Indian citizen",
          "Must have valid address proof"
        ]
      },
      {
        id: 2,
        title: "Register to Vote",
        details: [
          "Go to voters.eci.gov.in",
          "Fill Form 6",
          "Upload documents"
        ]
      },
      {
        id: 3,
        title: "Verify Registration",
        details: [
          "Visit electoralsearch.eci.gov.in",
          "Check your name in voter list"
        ]
      },
      {
        id: 4,
        title: "Voting Day",
        details: [
          "Carry Voter ID or Aadhaar",
          "Go to polling booth",
          "Vote using EVM"
        ]
      }
    ]
  },

  "United States": {
    minAge: 18,
    steps: [
      {
        id: 1,
        title: "Check Eligibility",
        details: ["Must be US citizen", "Must be 18+"]
      },
      {
        id: 2,
        title: "Register",
        details: ["Visit vote.gov", "Fill registration form"]
      },
      {
        id: 3,
        title: "Verify",
        details: ["Check voter status online"]
      },
      {
        id: 4,
        title: "Vote",
        details: ["Go to polling place", "Cast ballot"]
      }
    ]
  }
}

export const getCountryData = (country) => countryData[country]
