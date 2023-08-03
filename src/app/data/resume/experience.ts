export interface TExperience {
  jobTitle: string;
  company: string;
  date: string;
  companyDescription: string;
  responsibilities: string[];
}

const experience: TExperience[] = [
  {
    jobTitle: 'Software Engineer Intern',
    company: 'Hatcher+',
    date: 'May 2023 - Aug 2023',
    companyDescription: 'AI Driven Venture Capital',
    responsibilities: [
      'Data Parsing Microservice: Engineered a Python-based microservice on AWS EC2 that parses company capitalization documents from target investments, extracts and analyzes key data, then converts it into a standardized JSON format for use in the main Hatcher application.',
      'Employee Leave Management System: Implemented a comprehensive employee leave management system using VueJS, Laravel, and MySQL, efficiently handling employee details and leave records.',
      'Web Scraping Slack Bot: Created a Slack Bot in Python that monitors and provides summaries on the health and activity of the main web scraping bot, enhancing system oversight.',
      'Investment Information Smart Contract: Authored a custom smart contract in Golang for storing investor information on a private hyperledger fabric network, deployed using AWS Blockchain, securing investment data.',
      'Database and Log Management: Utilized Laravel to conduct a cleanup job, migrating queue job logs to a separate MySQL database instance, and subsequently transferring this database to a dedicated AWS RDS instance.',
    ],
  },
  {
    jobTitle: 'Software Engineer Intern',
    company: 'Switcheo Labs',
    date: 'November 2022 - December 2022',
    companyDescription: 'Cryptocurrency Exchange in Singapore',
    responsibilities: [
      'Search API: Developed a comprehensive search API in Golang that queries multiple databases on the Carbon blockchain, consolidating results into a single API call and streamlining data retrieval for over 95,000 users.',
      'Market-Pool Linkage: Implemented an automated linkage system using Golang for markets and liquidity pools, safeguarding the correct allocation of USD $130 million across the exchange, eliminating the need for manual intervention.',
      'Transaction Service & UI: Designed a new service to query Switcheo’s Nitron DEX and record collateralized debt position transactions, utilizing Typescript and Redis. Additionally, developed a user-friendly interface with React to visualize and summarize exchange activities.',
      'Blockchain Monitor: Built a responsive Telegram Bot in Typescript and Redis to monitor Carbon blockchain transactions, promptly alerting the team about long-pending transactions, thereby enhancing operational efficiency.',
      'Quality Assurance: Promptly addressed hotfixes and bugs, while establishing extensive unit testing mechanisms using Jest, bolstering software reliability and performance.'
      
    ],
  },
  {
    jobTitle: 'Software Engineer Intern',
    company: 'Investree',
    date: 'May 2022 - August 2022',
    companyDescription: 'Peer-to-Peer Lending Platform in Indonesia',
    responsibilities: [
      'Investment Dashboard: Leveraged VueJS and Kotlin to design and implement a dynamic, visually enhanced investment dashboard, integrating complex financial calculations that transformed user experience by providing accessible data and deeper insights into their investment portfolio.',
      'Loan Covenant: Developed an intuitive covenant page using VueJS and Kotlin, facilitating the process for over 59,000 loan investments and reducing transaction cost.',
      'Data Validation: Developed and deployed RESTful APIs using Kotlin, delivering and validating data based on dynamic user inputs for over 100,000 users.',
      'Email Handler: Implemented a reliable email notification system using Kotlin and RabbitMQ, delivering timely updates and crucial investment information to users, enhancing customer engagement.',
      'Quality Assurance: Leveraged Jest to devise comprehensive unit tests, ensuring ≥80% code coverage across all components, which led to a 32% reduction in user-reported bugs and enhanced overall product stability and user satisfaction.',
    ],
  },
];

export default experience;