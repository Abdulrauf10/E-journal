'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.bulkInsert('portals', [
        {
        title: "A User-Centric Platform PRINTEPS to Develop Integrated Intelligent Applications and Application to Robot Teahouse",
        author: "Kodai Nakamura",
        abstract: "We are developing PRactical INTEligent aPplicationS (PRINTEPS), which is a user-centric platform to develop integrated ...",
        content: "https://reader.elsevier.com/reader/sd/pii/S1877050917316757?token=ECC4FBC407AFEDBA08FA3E304E6E443E5968E68029A40E2561307ACE51C3C3A85F88EB95E0BB3B3A6E0830634149E72F&originRegion=eu-west-1&originCreation=20211124065911",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Artificial Intelligence trends in education: a narrative overview",
        author: "Maud Chassignol",
        abstract: "Digital technologies have already become an internal part of our life. They change the way we are looking for information ...",
        content: "https://reader.elsevier.com/reader/sd/pii/S1877050918315382?token=45C60FF277A5252DD919E10828A816612CB34ACEEBCAF52739F8C2776A6A7C7F84ACB5C789F40E46CBC425C1414D9140&originRegion=eu-west-1&originCreation=20211124070120",
        createdAt: new Date(),
        updatedAt: new Date()
      },
       {
        title: "GO-CAD: Virtual Reality Simulation",
        author: "Tomas Sebo",
        abstract: "GO-CAD brings some novel functions and features to the intelligent building design and virtual reality simulation. This ...",
        content: "https://reader.elsevier.com/reader/sd/pii/S147466701734716X?token=B831CCA8B437BD20CAA33A6AD5FE4FE4B2827D8B9B443D11DC89829CD1CA71441E24099617902EF3AB0C3C997327AF8A&originRegion=eu-west-1&originCreation=20211124070221",
        createdAt: new Date(),
        updatedAt: new Date()  
      },
      {
        title: "Literature review on Cyber Physical Systems Design",
        author: "Carolina Villarreal Lozano",
        abstract: "Cyber Physical Systems (CPS) are a disruptive technology currently in trend across many industries consisting of both computational and physical ...",
        content: "https://reader.elsevier.com/reader/sd/pii/S2351978920310581?token=FA43027CA51114A35982464E7AB3815A017820F453E0B69C577D239FC85EEF5D2C5D2DCA53AFC1866FFA418F7DFDC8E6&originRegion=eu-west-1&originCreation=20211124070257",
        createdAt: new Date(),
        updatedAt: new Date()  
      },
      {
        title: "How can we predict the impact of the social media messages on the value of cryptocurrency? Insights from big data analytics",
        author: "Chahat Tandon",
        abstract: "Cryptocurrency and blockchain are one of the most beautiful digital transformations occurring around the world. They have  ...",
        content: "https://reader.elsevier.com/reader/sd/pii/S2667096821000288?token=EBBC7847805B389F628A68730748DB4D9BD05A1C5C6D0752CA7DB09213C55D556F91E5DD491F29C349A2024172E1A6E8&originRegion=eu-west-1&originCreation=20211124070338",
        createdAt: new Date(),
        updatedAt: new Date()  
      },
      {
        title: "A Learning Approach for On-Line Robotic Assembly Tasks",
        author: "M. Pena",
        abstract: "The acquisition of assembly skills by robots is greatly supported by the efective use of contact force sensing and object recognition vision systems. In this paper, we  ...",
        content: "https://reader.elsevier.com/reader/sd/pii/S147466701531212X?token=ED42F0BDF135D1C87DD800764EEAB6039ADABA1C97D3A0123844A2494F01607ECEFA788ABAC09FF1C255F4C5F5ED4C93&originRegion=eu-west-1&originCreation=20211124070433",
        createdAt: new Date(),
        updatedAt: new Date()  
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
      await queryInterface.bulkDelete('portals', null, {});
  }
};
