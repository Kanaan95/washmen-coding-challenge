/**
 * Create and export configutation variables
 *
 */

// Container for all the environments
const environments = {};

// Staging default environments
environments.staging = {
  port: 3000,
  envName: "staging",
};

// Production environment
environments.production = {
  port: 5000,
  envName: "production",
};

// Determine which environment was passed as a command line argument
const currentEnvironment =
  typeof process.env.NODE_ENV == "string"
    ? process.env.NODE_ENV.toLocaleLowerCase()
    : "";

// Check that the currentEnvironment is one of the environments above. If not, default to staging
const environmentToExport =
  typeof environments[currentEnvironment] == "object"
    ? environments[currentEnvironment]
    : environments.staging;

// Export the module
module.exports = environmentToExport;
