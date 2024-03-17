//Checking the alert if mandatory fields are not filled out

const { test, expect } = require('@playwright/test');
import { accessurl } from '../Pages/Accessurl'
import { filldata } from '../Pages/Inputdata'

test.describe('Verify mandatory fields', async () => {

    test('Verify First name mandatory field', async ({ page }) => {

        //Declaring variables inorder to access the class and functions 
        const Access = new accessurl(page, expect);
        const Fill = new filldata(page, expect);


        //Open the website url by calling the class
        await Access.openurl();
        await page.getByRole('heading', { name: 'User Profile Creation' }).isVisible();

        //Verify firstname mandatory alert by calling the function from the class
        await Fill.submitalert('First name must be filled out');


    })

    test('Verify Last name mandatory field', async ({ page }) => {

        //Declaring variables inorder to access the class and functions 
        const Access = new accessurl(page, expect);
        const Fill = new filldata(page, expect);


        //Open the website url by calling the class
        await Access.openurl();
        await page.getByRole('heading', { name: 'User Profile Creation' }).isVisible();

        //Fill firstname
        await page.getByText('First Name (mandatory):').isVisible();
        await Fill.enterfirstname('Helen');

        //Verify lastname mandatory alert by calling the function from the class
        await Fill.submitalert('Last name must be filled out');


    })

    test('Verify Email mandatory field', async ({ page }) => {

        //Declaring variables inorder to access the class and functions 
        const Access = new accessurl(page, expect);
        const Fill = new filldata(page, expect);


        //Open the website url by calling the class
        await Access.openurl();
        await page.getByRole('heading', { name: 'User Profile Creation' }).isVisible();

        //Fill firstname & Last name
        await page.getByText('First Name (mandatory):').isVisible();
        await Fill.enterfirstname('Helen');

        await page.getByText('Last Name (mandatory):').isVisible();
        await Fill.enterlastname('Fisher');


        //Verify email mandatory alert by calling the function from the class
        await Fill.submitalert('Email must be filled out');

    })

    test('Verify Password mandatory field', async ({ page }) => {

        //Declaring variables inorder to access the class and functions 
        const Access = new accessurl(page, expect);
        const Fill = new filldata(page, expect);


        //Open the website url by calling the class
        await Access.openurl();
        await page.getByRole('heading', { name: 'User Profile Creation' }).isVisible();

        //Fill firstname, Last name & Email
        await page.getByText('First Name (mandatory):').isVisible();
        await Fill.enterfirstname('Helen');

        await page.getByText('Last Name (mandatory):').isVisible();
        await Fill.enterlastname('Fisher');

        await page.getByText('Email (mandatory):').isVisible();
        await Fill.enteremail('helenfisher@gmail.com');

        //Verify Password mandatory alert by calling the function from the class
        await Fill.submitalert('Password must be filled out');

    })

    test('Verify Confirm Password mandatory field', async ({ page }) => {

        //Declaring variables inorder to access the class and functions 
        const Access = new accessurl(page, expect);
        const Fill = new filldata(page, expect);


        //Open the website url by calling the class
        await Access.openurl();
        await page.getByRole('heading', { name: 'User Profile Creation' }).isVisible();

        //Fill firstname, Last name, Email & Password
        await page.getByText('First Name (mandatory):').isVisible();
        await Fill.enterfirstname('Helen');

        await page.getByText('Last Name (mandatory):').isVisible();
        await Fill.enterlastname('Fisher');

        await page.getByText('Email (mandatory):').isVisible();
        await Fill.enteremail('helenfisher@gmail.com');

        await page.getByText('Password (mandatory):', { exact: true }).isVisible();
        await Fill.enterpassword('123Qwe!');

        //Verify Confirm password mandatory alert by calling the function from the class
        await Fill.submitalert('Confirm password must be filled out');

    })


})