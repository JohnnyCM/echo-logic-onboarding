export const levels = [
  {
    id: 1,
    type: 'info',
    title: 'Welcome to Echo Logic',
    content: 'Embark on your 90-day journey to mastering Conversational AI and Natural Language Processing. Let\'s begin by reviewing the core foundation of our company.',
    buttonText: 'Start Onboarding Quest'
  },
  {
    id: 2,
    type: 'checklist',
    title: 'Company Policies',
    content: 'Before diving into the tech, please confirm you have read and understood our core company policies.',
    items: [
      'Code of Conduct & Ethics',
      'Data Privacy & Security Policy',
      'Remote Work Guidelines',
      'Anti-Harassment Policy'
    ]
  },
  {
    id: 3,
    type: 'checklist',
    title: 'Department Meetings',
    content: 'To fully integrate into Echo Logic, you must complete your introductory syncs with key departments.',
    items: [
      'IT setup & Access Provisioning',
      'HR Onboarding & Benefits Overview',
      'Engineering Team Meet & Greet',
      'Product & Design Sync'
    ]
  },
  {
    id: 4,
    type: 'quiz',
    title: 'Mission Statement Verification',
    content: 'What is the core mission of Echo Logic?',
    options: [
      'To build the fastest search engine in the world.',
      'To empower businesses with intelligent language solutions that transform how they engage with customers.',
      'To replace human customer service entirely using AI.',
      'To create video generation models for marketing.'
    ],
    answer: 1
  },
  {
    id: 5,
    type: 'matching',
    title: 'Values Alignment',
    content: 'Match the correct definition to our core value: "Integrity".',
    options: [
      'Pushing the boundaries of what\'s possible in NLP.',
      'Building solutions that are smart and adaptive.',
      'Delivering reliable, transparent, and ethical AI systems our clients can trust.',
      'Shipping code faster than our competitors.'
    ],
    answer: 2
  },
  {
    id: 6,
    type: 'pipeline',
    title: 'NLP Pipeline Basics',
    content: 'Assemble the fundamental NLP pipeline in the correct order.',
    options: ['Sentiment Models', 'Tokenization', 'Entity Recognition'],
    answer: ['Tokenization', 'Entity Recognition', 'Sentiment Models']
  },
  {
    id: 7,
    type: 'quiz',
    title: 'Tokenization Fundamentals',
    content: 'In NLP, what is the primary purpose of Tokenization?',
    options: [
      'To encrypt data for security.',
      'To break down text into smaller units (words/subwords) for processing.',
      'To determine the emotional tone of the text.',
      'To translate text to another language.'
    ],
    answer: 1
  },
  {
    id: 8,
    type: 'matching',
    title: 'Entity Recognition Challenge',
    content: 'In the sentence "Echo Logic is based in New York", which phrase is the Location Entity?',
    options: [
      'Echo Logic',
      'is based in',
      'New York',
      'None of the above'
    ],
    answer: 2
  },
  {
    id: 9,
    type: 'optimization',
    title: 'Sentiment Analysis Tuning',
    content: 'Our base sentiment classifier is at 70% accuracy. Apply optimizations to reach the 95% target!',
    target: 95,
    startValue: 70
  },
  {
    id: 10,
    type: 'matching',
    title: 'Client Scenario: Support Ticket',
    content: 'A client needs a system to automatically categorize and route 10,000 daily support emails. Which Echo Logic solution fits best?',
    options: [
      'Voice Synthesis API',
      'Automated Ticket Routing Engine',
      'Real-time Translation Module',
      'Image Generation Bot'
    ],
    answer: 1
  },
  {
    id: 11,
    type: 'matching',
    title: 'Client Scenario: Sales Lead Gen',
    content: 'A client wants a website widget to engage visitors, answer FAQs, and collect contact info 24/7.',
    options: [
      'Conversational Chatbot Solution',
      'Sentiment Analysis API',
      'Document Parsing AI',
      'Speech-to-Text Transcription'
    ],
    answer: 0
  },
  {
    id: 12,
    type: 'quiz',
    title: 'Data Privacy & Ethics',
    content: 'When training models on client data, what is our most critical privacy step?',
    options: [
      'Selling the data to third parties.',
      'Storing the data in plain text for easy access.',
      'Anonymizing and stripping Personally Identifiable Information (PII).',
      'Using the data on public open-source models.'
    ],
    answer: 2
  },
  {
    id: 13,
    type: 'quiz',
    title: 'The Echo Logic Tech Stack',
    content: 'Which deep learning framework does Echo Logic primarily use for large language models?',
    options: [
      'PyTorch',
      'jQuery',
      'Bootstrap',
      'MySQL'
    ],
    answer: 0
  },
  {
    id: 14,
    type: 'pipeline',
    title: 'Model Deployment Strategies',
    content: 'Arrange the MLOps deployment stages in the correct order.',
    options: ['Continuous Monitoring', 'Model Training', 'Staging Validation'],
    answer: ['Model Training', 'Staging Validation', 'Continuous Monitoring']
  },
  {
    id: 15,
    type: 'optimization',
    title: 'Latency Optimization',
    content: 'Our inference latency is currently 200ms. Apply model quantization and caching to drop it below 50ms!',
    target: 40,
    startValue: 200,
    reverse: true // Decrease to win
  },
  {
    id: 16,
    type: 'capstone',
    title: 'Final Capstone Selection',
    content: 'Choose an industry vertical for your final capstone project at Echo Logic.',
    options: ['Healthcare Assistant', 'Financial Advisor Bot', 'E-Commerce Support']
  },
  {
    id: 17,
    type: 'quiz',
    title: 'The Final Boss: 360 Client Review',
    content: 'A client complains that the chatbot didn\'t understand a sarcastic comment. How do you respond?',
    options: [
      'Ignore the feedback.',
      'Blame the client for using sarcasm.',
      'Acknowledge the limitation, explain that sentiment models struggle with sarcasm, and propose fine-tuning the model with sarcastic edge-cases.',
      'Delete the chatbot.'
    ],
    answer: 2
  },
  {
    id: 18,
    type: 'info',
    title: 'Onboarding Complete!',
    content: 'Congratulations! You\'ve successfully completed the 90-day Echo Logic Onboarding Quest. You have mastered our tech stack, aligned with our values, and are ready to deliver intelligent language solutions.',
    buttonText: 'Finish Journey'
  }
];
