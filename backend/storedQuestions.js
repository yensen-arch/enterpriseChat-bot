const storedQuestions = [
  {
    keywords: ["hello", "hi", "hey"],
    response: "Hello! How can I assist you today?",
  },
  {
    keywords: ["bye", "goodbye", "see you"],
    response: "Goodbye! Feel free to reach out anytime.",
  },
  {
    keywords: ["help", "support", "assist"],
    response: "I'm here to help! What do you need assistance with?",
  },
  {
    keywords: ["thanks", "thank you"],
    response: "You're very welcome!",
  },
  {
    keywords: ["corover", "ai", "what", "intro"],
    response:
      "Corover is an AI-driven platform designed to enhance customer interactions and streamline business processes through intelligent automation.",
  },
  {
    keywords: ["products", "features", "what features?"],
    response:
      "Corover offers features such as AI chatbots, customer support automation, analytics, integration with various platforms, and customizable workflows.",
  },
  {
    keywords: ["integration", "how", "to", "connect"],
    response:
      "Corover can be integrated with existing systems through APIs and SDKs, allowing seamless connectivity with your business tools.",
  },
  {
    keywords: ["small businesses", "business", "scale"],
    response:
      "Yes, Corover is designed to be scalable, making it suitable for businesses of all sizes, including small and medium enterprises.",
  },
  {
    keywords: ["corover industries", "industries", "benefit from corover?"],
    response:
      "Corover can benefit various industries including e-commerce, finance, healthcare, and customer service by enhancing engagement and automating processes.",
  },
  {
    keywords: ["data", "security", "how does", "privacy"],
    response:
      "Corover employs industry-standard security measures, including data encryption, secure access controls, and compliance with data protection regulations.",
  },
  {
    keywords: ["customize", "personalize", "experience"],
    response:
      "Yes, Corover allows users to customize chatbots and workflows to fit their specific business needs and branding.",
  },
  {
    keywords: ["started", "starting", "sign up"],
    response:
      "To get started with Corover, visit our website and sign up for a free trial to explore our features and capabilities.",
  },
  {
    keywords: ["support", "helpline", "customer"],
    response:
      "Corover offers 24/7 customer support through various channels including live chat, email, and a comprehensive knowledge base.",
  },
  {
    keywords: ["multimedia", "rich media", "videos"],
    response:
      "Corover's chatbot supports multimedia, handling text, images, audio, and video for an enriched user experience.",
  },
  {
    keywords: ["analytics", "dashboard", "insights"],
    response:
      "Corover offers an analytics dashboard with sentiment analysis, user feedback, and behavior tracking tools to refine interactions.",
  },
  {
    keywords: ["geolocation", "location-based", "ads"],
    response:
      "Corover can serve contextual, geo-targeted ads directly within the chatbot based on user location.",
  },
  {
    keywords: ["user", "onboarding", "KYC"],
    response:
      "For secure onboarding, Corover uses KYC verification, supporting video and voice-based processes linked with Aadhaar.",
  },
  {
    keywords: ["generative AI", "LLM", "text generation"],
    response:
      "Corover's BharatGPT offers text, voice, and video generation using its proprietary large language model.",
  },
  {
    keywords: ["payment", "gateway", "transaction"],
    response:
      "Integrated payment gateways in Corover's chatbot allow users to complete end-to-end transactions seamlessly.",
  },
  {
    keywords: ["API", "integration", "ERP"],
    response:
      "Corover's chatbot offers easy API integration, scalable ERP connectivity, and multi-channel support.",
  },
  {
    keywords: ["advertising", "monetization", "platform"],
    response:
      "Corover provides an advertising platform within the chatbot, enabling revenue generation through integrated ad services.",
  },
  {
    keywords: ["chatbot", "continuous learning", "improvement"],
    response:
      "Corover's chatbot is AI-driven and continuously improves through customer interaction monitoring and model adaptation.",
  },
  {
    keywords: ["industries", "serve"],
    response:
      "CoRover.ai serves industries such as healthcare, banking, insurance, education, and government sectors.",
  },

  {
    keywords: ["What", "main", "product"],
    response:
      "CoRover.ai's main product is an AI-based conversational platform that provides chatbot solutions for enterprises.",
  },

  {
    keywords: ["makes", " unique"],
    response:
      "CoRover.ai stands out for its multi-lingual support, scalability, and real-time interactive capabilities.",
  },

  {
    keywords: ["security", "encryption", "privacy", "storage"],
    response:
      "CoRover.ai offers end-to-end encryption, compliance with data privacy laws, and secure storage solutions.",
  },
  {
    keywords: ["integration", "CRM", "ERP", "social", "third-party"],
    response:
      "Yes, CoRover.ai's chatbots can integrate with CRM, ERP, social media, and third-party systems.",
  },
  {
    keywords: ["multilingual", "languages", "dialects"],
    response:
      "Yes, CoRover.ai offers support for multiple languages, including regional languages and dialects.",
  },
  {
    keywords: ["clients", "government", "healthcare", "financial"],
    response:
      "CoRover.ai's main clients include government bodies, healthcare institutions, and large financial corporations.",
  },
  {
    keywords: ["engagement", "personalized", "real-time", "communication"],
    response:
      "CoRover.ai improves engagement through personalized responses, real-time interactions, and proactive communication.",
  },
  {
    keywords: ["healthcare", "chatbots", "patient", "appointments"],
    response:
      "CoRover.ai provides chatbots to healthcare institutions to handle patient queries, appointment scheduling, and health information.",
  },
  {
    keywords: ["voice", "interactions", "text", "communication"],
    response:
      "Yes, CoRover.ai supports voice-based interactions, allowing users to communicate via text and voice seamlessly.",
  },
  {
    keywords: ["mobile", "deployment", "apps", "web", "social"],
    response:
      "Yes, CoRover.ai can be deployed on mobile apps, web platforms, and social media channels.",
  },
  {
    keywords: ["analytics", "engagement", "accuracy", "satisfaction"],
    response:
      "CoRover.ai provides analytics on user engagement, response accuracy, customer satisfaction, and more.",
  },
  {
    keywords: ["AI", "natural language", "accuracy", "adaptation"],
    response:
      "CoRover.ai uses AI to understand natural language, provide accurate responses, and adapt to user needs over time.",
  },
  {
    keywords: ["privacy", "GDPR", "HIPAA", "regulations"],
    response:
      "CoRover.ai complies with GDPR, HIPAA, and other data protection regulations to ensure privacy.",
  },
  {
    keywords: ["queries", "NLP", "complex", "context"],
    response:
      "Yes, CoRover.ai's chatbots are equipped with advanced NLP to understand and handle complex, context-based queries.",
  },
  {
    keywords: ["costs", "automation", "customer", "agents"],
    response:
      "By automating customer interactions, CoRover.ai helps reduce the need for human agents, thereby lowering operational costs.",
  },
  {
    keywords: ["scalability", "volume", "growth", "company"],
    response:
      "CoRover.ai offers scalable solutions that can handle high volumes of queries and grow with the company's needs.",
  },
  {
    keywords: ["productivity", "tasks", "employees", "focus"],
    response:
      "CoRover.ai helps reduce repetitive tasks, allowing employees to focus on higher-value work.",
  },
  {
    keywords: ["support", "technical", "updates", "optimization"],
    response:
      "CoRover.ai offers technical support, regular updates, and optimization services post-deployment.",
  },
];

module.exports = storedQuestions;
