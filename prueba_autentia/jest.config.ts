import type {Config} from '@jest/types';

// Or async function
export default async (): Promise<Config.InitialOptions> => {
  return {
    verbose: true,
    "bail": 1,
    "testEnvironment": "jsdom",
    "setupFilesAfterEnv": [
      "<rootDir>/jest.config.ts"
    ],
    "moduleNameMapper": {
        "\\.(css|scss)$": "<rootDir>/src/__test__/SignIn.test.tsx"
      }
  };
};