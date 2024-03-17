//Verify password fields

const { test, expect } = require('@playwright/test');
import { accessurl } from '../Pages/Accessurl'
import { filldata } from '../Pages/Inputdata'

test('Verify password donot match', async ({ page }) => {

    //Declaring variables inorder to access the class and functions 
    const Access = new accessurl(page, expect);
    const Fill = new filldata(page, expect);

    //Open the website url by calling the class
    await Access.openurl();
    await page.getByRole('heading', { name: 'User Profile Creation' }).isVisible();

    //Fill firstname
    await page.getByText('First Name (mandatory):').isVisible();
    await Fill.enterfirstname('Gwen');

    //Fill lastname
    await page.getByText('Last Name (mandatory):').isVisible();
    await Fill.enterlastname('Stacy');

    //Fill email
    await page.getByText('Email (mandatory):').isVisible();
    await Fill.enteremail('gwenstacy@gmail.com');

    //Fill password
    await page.getByText('Password (mandatory):', { exact: true }).isVisible();
    await Fill.enterpassword('!@#qweBNM098');

    //Fill confirm password
    await page.getByText('Confirm Password (mandatory):').isVisible();
    await Fill.enterconfirmpassword('1234567890');

    //Submit the form to check the passwords match
    await Fill.submitalert('Passwords do not match');

})

