import type { test,PlaywrightTestConfig } from '@playwright/test';
import { devices } from '@playwright/test';


const config: PlaywrightTestConfig = {
  testDir: './tests',
  reporter:[['allure-playwright',{outputFolder:'test-results'}],['line']],
  /* Maximum time one test can run for. */
  /*
  timeout: 100 * 1000,
   expect: {
    
     timeout: 30 * 1000,
   },
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: 1,
//reporter:'html',
  
  use: {
    /* Maximum time each action such as `click()` can take. Defaults to 0 (no limit). */
    actionTimeout: 0,
    headless:false,
    trace: 'on',
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      
        use: {

          browserName : 'chromium',
          headless : false,
          screenshot : 'on',
          
          //trace : 'on',//off,on
        },
      
      },
    

  ]
};

export default config;
