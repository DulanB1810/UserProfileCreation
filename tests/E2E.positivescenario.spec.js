// Fill in all the fields and submit the User Profile creation

const { test, expect } = require('@playwright/test');
import { accessurl } from '../Pages/Accessurl'
import { filldata } from '../Pages/Inputdata'

test('Fill all fields', async ({ page }) => {

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
    await Fill.enterconfirmpassword('!@#qweBNM098');

    //Fill gender
    await page.getByText('Gender (optional):').isVisible();
    await page.getByLabel('Female').check();
    await expect(page.getByLabel('Female')).toBeChecked();

    //Fill Date of Birth
    await page.getByText('Date ofBirth (optional):').isVisible();
    await page.getByLabel('Date ofBirth (optional):').fill('2024-03-13');

    //Fill phone number
    await page.getByText('Phone Number (optional):').isVisible();
    await Fill.enterphonenumber('1234567890');

    //Fill address
    await page.getByText('Address (optioal):').isVisible();
    await Fill.enteraddress('12, Daisy Avenue, LA, USA');

    //Fill Linkedin
    await page.getByText('LinkedIn URL (optional):').isVisible();
    await Fill.enterlinkedin('https://www.linkedin.com/in/gwenstacy');

    //Fill github
    await page.getByText('GitHub URL (optional):').isVisible();
    await Fill.entergithub('https://github.com/gwenstacy');

    //Submit form
    await Fill.submit();

    //Check if the form is submitted and loads again
    await expect(page.getByLabel('First Name (mandatory):')).toHaveValue('');
    await expect(page.getByLabel('Last Name (mandatory):')).toHaveValue('');
    await expect(page.getByLabel('Email (mandatory):')).toHaveValue('');
    await expect(page.getByLabel('Password (mandatory):', { exact: true })).toHaveValue('');
    await expect(page.getByLabel('Confirm Password (mandatory):')).toHaveValue('');
    await expect(await page.getByLabel('Male', { exact: true }).isChecked()).toBeFalsy();
    await expect(await page.getByLabel('Female').isChecked()).toBeFalsy();
    await expect(await page.getByLabel('Prefer not to say').isChecked()).toBeFalsy();
    await expect(page.getByLabel('Phone Number (optional):')).toHaveValue('');
    await expect(page.getByLabel('Address (optioal):')).toHaveValue('');
    await expect(page.getByLabel('LinkedIn URL (optional):')).toHaveValue('');
    await expect(page.getByLabel('GitHub URL (optional):')).toHaveValue('');


})