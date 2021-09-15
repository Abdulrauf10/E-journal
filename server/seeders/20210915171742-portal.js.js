'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.bulkInsert('portals', [
        {
        title: "A User-Centric Platform PRINTEPS to Develop Integrated Intelligent Applications and Application to Robot Teahouse",
        author: "Kodai Nakamura",
        abstract: "We are developing PRactical INTEligent aPplicationS (PRINTEPS), which is a user-centric platform to develop integrated ...",
        content: "https://reader.elsevier.com/reader/sd/pii/S1877050917316757?token=3A0F0A4456AE4D2975E6D76DC0C79A48EC3CB75155A56407994E0F5A0B4C727EBAF03A4C759C525C0EE7F897220F017D&originRegion=eu-west-1&originCreation=20210914101222",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Artificial Intelligence trends in education: a narrative overview",
        author: "Maud Chassignol",
        abstract: "Digital technologies have already become an internal part of our life. They change the way we are looking for information ...",
        content: "https://reader.elsevier.com/reader/sd/pii/S1877050918315382?token=E74FC4DC9D9D8E41BF78723806572CF9F9BF93C71B266E76F5520802D7B37DEF16AAEC60AC50229451CCB5BE1E095B62&originRegion=eu-west-1&originCreation=20210914101642",
        createdAt: new Date(),
        updatedAt: new Date()
      },
       {
        title: "GO-CAD: Virtual Reality Simulation",
        author: "Tomas Sebo",
        abstract: "GO-CAD brings some novel functions and features to the intelligent building design and virtual reality simulation. This ...",
        content: "https://reader.elsevier.com/reader/sd/pii/S147466701734716X?token=B7675FB57A2B3A8AE9B5543A089CA1F0871E27DC169A03C5543D4316062E0B92BB8072234387EC1BBA7482BAEBF41FE4&originRegion=eu-west-1&originCreation=20210914101842",
        createdAt: new Date(),
        updatedAt: new Date()  
      },
      {
        title: "Literature review on Cyber Physical Systems Design",
        author: "Carolina Villarreal Lozano",
        abstract: "Cyber Physical Systems (CPS) are a disruptive technology currently in trend across many industries consisting of both computational and physical ...",
        content: "https://reader.elsevier.com/reader/sd/pii/S2351978920310581?token=86136505D51F6B24D825BB6057B7999996FA9E895844493321CF487DFE892AAF2B044FFD48C6551BF4A727D4670EFE5B&originRegion=eu-west-1&originCreation=20210914102104",
        createdAt: new Date(),
        updatedAt: new Date()  
      },
      {
        title: "How can we predict the impact of the social media messages on the value of cryptocurrency? Insights from big data analytics",
        author: "Chahat Tandon",
        abstract: "Cryptocurrency and blockchain are one of the most beautiful digital transformations occurring around the world. They have  ...",
        content: "https://reader.elsevier.com/reader/sd/pii/S2667096821000288?token=C8275DE33D143D5830F207B249614E7D95E21FA919B5D392BC320370AF3B53056F8B042531298B76BF11FFF45B43DC46&originRegion=eu-west-1&originCreation=20210914102451",
        createdAt: new Date(),
        updatedAt: new Date()  
      },
      {
        title: "A Learning Approach for On-Line Robotic Assembly Tasks",
        author: "M. Pena",
        abstract: "The acquisition of assembly skills by robots is greatly supported by the efective use of contact force sensing and object recognition vision systems. In this paper, we  ...",
        content: "https://reader.elsevier.com/reader/sd/pii/S147466701531212X?token=960C98213F5C4927E1EE92E84F352DA9C0162CCBAAB327EE1C1B1C8309B99CB3857A77588377A1EA22B5854C65E8DADC&originRegion=eu-west-1&originCreation=20210914102620",
        createdAt: new Date(),
        updatedAt: new Date()  
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
      await queryInterface.bulkDelete('portals', null, {});
  }
};
