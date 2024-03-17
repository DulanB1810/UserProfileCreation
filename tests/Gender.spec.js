//Gender field verification

const { test, expect } = require('@playwright/test');
import { accessurl } from '../Pages/Accessurl'
import { filldata } from '../Pages/Inputdata'

test.describe('Gender field', async () => {

    test('Valid gender options available', async ({ page }) => {

        //Declaring variables inorder to access the class and functions 
        const Access = new accessurl(page, expect);

        //Open the website url by calling the class
        await Access.openurl();
        await page.getByRole('heading', { name: 'User Profile Creation' }).isVisible();


        //Check the options available under Gender field
        await page.getByText('Gender (optional):').isVisible();
        await page.getByLabel('Male', { exact: true }).isVisible();
        await page.getByText('Male', { exact: true }).isVisible();
        await page.getByLabel('Female').isVisible();
        await page.getByText('Female').isVisible();
        await page.getByLabel('Prefer not to say').isVisible();
        await page.getByText('Prefer not to say').isVisible();
        await expect(await page.getByLabel('Non-binary')).isVisible();
        await expect(await page.getByText('Non-binary')).isVisible();

    })

    test('Select 1 value', async ({ page }) => {

        //Declaring variables inorder to access the class and functions 
        const Access = new accessurl(page, expect);

        //Open the website url by calling the class
        await Access.openurl();
        await page.getByRole('heading', { name: 'User Profile Creation' }).isVisible();


        //Check male option and verify if only 1 value is selected
        await page.getByLabel('Male', { exact: true }).check();
        await expect(page.getByLabel('Male', { exact: true })).toBeChecked();
        await expect(await page.getByLabel('Female').isChecked()).toBeFalsy();
        await expect(await page.getByLabel('Prefer not to say').isChecked()).toBeFalsy();

        //Check female option and verify if only 1 value is selected
        await page.getByLabel('Female').check();
        await expect(page.getByLabel('Female')).toBeChecked();
        await expect(await page.getByLabel('Male', { exact: true }).isChecked()).toBeFalsy();
        await expect(await page.getByLabel('Prefer not to say').isChecked()).toBeFalsy();

        //Check prefer not to say and verify if only 1 value is selected
        await page.getByLabel('Prefer not to say').check();
        await expect(page.getByLabel('Prefer not to say')).toBeChecked();
        await expect(await page.getByLabel('Male', { exact: true }).isChecked()).toBeFalsy();
        await expect(await page.getByLabel('Female').isChecked()).toBeFalsy();

    })


})