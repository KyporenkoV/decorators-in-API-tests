## A simple example of using TypeScript decorators in API tests.

Here, you can see an illustrative case of using decorators to add steps for controller methods. This approach reduces code duplication, makes the code and reports more readable, and enhances maintainability.

To run the tests, use
```sh
 npm run test
 ``` 
 or 

 ```sh
  npx playwright test
```

To generate a report (after running the tests), use
```sh 
npm run report
```

Here's an examples of the reports with the use of step decorators:

1) simple report

<h1 align="center"><img src="https://github.com/KyporenkoV/example-of-using-decorators-with-playwright/blob/main/screenshots/1.png?raw=true"></h1>

2) trace

<h1 align="center"><img src="https://github.com/KyporenkoV/example-of-using-decorators-with-playwright/blob/main/screenshots/2.png?raw=true"></h1>