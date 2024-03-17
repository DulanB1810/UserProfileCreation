# UserProfileCreation
**Pre-requisites:**
1. Install Node.js
check in command prompt, npm --version - to check if installed
2. Install Visual Studio code
3. Create a folder in local system
4. Open the folder in VScode
5. Install playwright using the command 'npm init playwright@latest'

**Execution:**
> Test code are under./Tests folder
> Use command npx playwright test ./tests/....spec.js

**Allure report - To view the results of the execution**
1. Install npm i -D  @playwright/test allure-playwright from VS code
2. Run the command to execute the test and generate allure results
    >> npx playwright test --reporter=allure-playwright
3. Generate allure report with the below command
    >> allure generate allure-results -o allure-report --clean
4. To open the report use the command:
    >> allure open allure-report

**Challenges faced**
Challenge 1:
- Unable to identify the error message that pop up for the fields Phone numer, Linkedin and Github URL
- Tried to identify by inspect element, Xpath, debugger mode in website but the object was not identifiable

Challenge 2:
- Due to the network issue that is currently happening in west Africa, the execution on all 3 browsers simultaneously (Chrome, Firefox and Webkit) causes the scripts to fail at the intial part (on loading the website)
Tried solution: Tried adding more wait time and execute but the failure is more.
Hence ran the tests on chrome and attached the results (Allure report).


