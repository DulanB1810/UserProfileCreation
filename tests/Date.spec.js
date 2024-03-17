// Validate Date field

const { test, expect } = require('@playwright/test');
import { accessurl } from '../Pages/Accessurl'
import { filldata } from '../Pages/Inputdata'

test.describe('Verify Date field', async () => {

    test('Valid date value', async ({ page }) => {

        //Declaring variables inorder to access the class and functions 
        const Access = new accessurl(page, expect);
        const Fill = new filldata(page, expect);

        //Open the website url by calling the class
        await Access.openurl();
        await page.getByRole('heading', { name: 'User Profile Creation' }).isVisible();

        //Fill correct date value
        await page.getByText('Date ofBirth (optional):').isVisible();
        await page.getByLabel('Date ofBirth (optional):').fill('2024-03-13');

    })

    test('Invalid date value 1', async ({ page }) => {

        //Declaring variables inorder to access the class and functions 
        const Access = new accessurl(page, expect);
        const Fill = new filldata(page, expect);

        //Open the website url by calling the class
        await Access.openurl();
        await page.getByRole('heading', { name: 'User Profile Creation' }).isVisible();

        //Fill incorrect date value
        await page.getByText('Date ofBirth (optional):').isVisible();
        await page.getByLabel('Date ofBirth (optional):').fill('13-03-2024');

    })

    test('Invalid date value 2', async ({ page }) => {

        //Declaring variables inorder to access the class and functions 
        const Access = new accessurl(page, expect);
        const Fill = new filldata(page, expect);

        //Open the website url by calling the class
        await Access.openurl();
        await page.getByRole('heading', { name: 'User Profile Creation' }).isVisible();

        //Fill incorrect date value
        await page.getByText('Date ofBirth (optional):').isVisible();
        await page.getByLabel('Date ofBirth (optional):').fill('03-13-2024');

    })

    test('Invalid future date value', async ({ page }) => {

        //Declaring variables inorder to access the class and functions 
        const Access = new accessurl(page, expect);
        const Fill = new filldata(page, expect);

        //Open the website url by calling the class
        await Access.openurl();
        await page.getByRole('heading', { name: 'User Profile Creation' }).isVisible();

        //Fill incorrect date value
        await page.getByText('Date ofBirth (optional):').isVisible();
        await page.getByLabel('Date ofBirth (optional):').fill('13-05-2024');

    })



})