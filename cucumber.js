//This is sample cucumber configuration file for Playwright tests, we can modify it as per your needs. This can be used for BDD formate
//for demo perpose i am not using this is concept to show you otherway of writing test cases. only added for second approach of writing test cases 
module.exports = {
  default: {
    require: ["features/step-definitions/*.ts", "support/*.ts"],
    requireModule: ["ts-node/register"],
    format: ["progress"],
    publishQuiet: true
  }
};
