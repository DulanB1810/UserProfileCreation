//Verify First and Last name fields donot accept Alphanumeric values

const { test, expect } = require('@playwright/test');
import { accessurl } from '../Pages/Accessurl'
import { filldata } from '../Pages/Inputdata'

test.describe('Alphanumeric values', async () => {

    test('First name Numeric value', async ({ page }) => {

        //Declaring variables inorder to access the class and functions 
        const Access = new accessurl(page, expect);
        const Fill = new filldata(page, expect);

        //Open the website url by calling the class
        await Access.openurl();
        await page.getByRole('heading', { name: 'User Profile Creation' }).isVisible();

        //Fill firstname with numeric characters
        await Fill.enterfirstname('98783');
        await Fill.submitalert('First name must contain alphabetical characters only');

    })

    test('First name special characters', async ({ page }) => {

        //Declaring variables inorder to access the class and functions 
        const Access = new accessurl(page, expect);
        const Fill = new filldata(page, expect);

        //Open the website url by calling the class
        await Access.openurl();
        await page.getByRole('heading', { name: 'User Profile Creation' }).isVisible();

        //Fill firstname with special characters
        await Fill.enterfirstname('St@cy');
        await Fill.submitalert('First name must contain alphabetical characters only');

    })

    test('First name alphanumeric characters', async ({ page }) => {

        //Declaring variables inorder to access the class and functions 
        const Access = new accessurl(page, expect);
        const Fill = new filldata(page, expect);

        //Open the website url by calling the class
        await Access.openurl();
        await page.getByRole('heading', { name: 'User Profile Creation' }).isVisible();

        //Fill firstname with alphanumeric characters
        await Fill.enterfirstname('St@cy123');
        await Fill.submitalert('First name must contain alphabetical characters only');

    })

    test('Last name Numeric value', async ({ page }) => {

        //Declaring variables inorder to access the class and functions 
        const Access = new accessurl(page, expect);
        const Fill = new filldata(page, expect);

        //Open the website url by calling the class
        await Access.openurl();
        await page.getByRole('heading', { name: 'User Profile Creation' }).isVisible();

        //Fill firstname 
        await Fill.enterfirstname('Helen');

        //Fill last name with numeric characters
        await Fill.enterlastname('093782');
        await Fill.submitalert('Last name must contain alphabetical characters only');

    })

    test('Last name special characters', async ({ page }) => {

        //Declaring variables inorder to access the class and functions 
        const Access = new accessurl(page, expect);
        const Fill = new filldata(page, expect);

        //Open the website url by calling the class
        await Access.openurl();
        await page.getByRole('heading', { name: 'User Profile Creation' }).isVisible();

        //Fill firstname 
        await Fill.enterfirstname('Helen');

        //Fill last name with special characters
        await Fill.enterlastname('J@hn');
        await Fill.submitalert('Last name must contain alphabetical characters only');


    })

    test('Last name alphanumeric characters', async ({ page }) => {

        //Declaring variables inorder to access the class and functions 
        const Access = new accessurl(page, expect);
        const Fill = new filldata(page, expect);

        //Open the website url by calling the class
        await Access.openurl();
        await page.getByRole('heading', { name: 'User Profile Creation' }).isVisible();

        //Fill firstname 
        await Fill.enterfirstname('Helen');

        //Fill last name with alphanumeric characters
        await Fill.enterlastname('J@hn 34');
        await Fill.submitalert('Last name must contain alphabetical characters only');

    })

})