exports.filldata = class filldata {

    constructor(page, expect) {

        this.page = page;
        this.expect = expect;
        this.firstname_textbox = page.getByLabel('First Name (mandatory):');
        this.lastname_textbox = page.getByLabel('Last Name (mandatory):');
        this.email_textbox = page.getByLabel('Email (mandatory):');
        this.password_texbox = page.getByLabel('Password (mandatory):', { exact: true });
        this.confirmpassword_textbox = page.getByLabel('Confirm Password (mandatory):');
        this.phonenumber_textbox = page.getByLabel('Phone Number (optional):');
        this.address_textbox = page.getByLabel('Address (optioal):');
        this.linkedin_textbox = page.getByLabel('LinkedIn URL (optional):');
        this.github_textbox = page.getByLabel('GitHub URL (optional):');

    }

    async enterfirstname(firstname) {

        await this.firstname_textbox.click();
        await this.firstname_textbox.fill(firstname);

    }

    async enterlastname(lastname) {

        await this.lastname_textbox.click();
        await this.lastname_textbox.fill(lastname);

    }

    async enteremail(email) {

        await this.email_textbox.click();
        await this.email_textbox.fill(email);

    }

    async enterpassword(password) {

        await this.password_texbox.click();
        await this.password_texbox.fill(password);

    }

    async enterconfirmpassword(confirmpassword) {

        await this.confirmpassword_textbox.click();
        await this.confirmpassword_textbox.fill(confirmpassword);

    }

    async enterphonenumber(phone) {

        await this.phonenumber_textbox.click();
        await this.phonenumber_textbox.fill(phone);

    }

    async enteraddress(address) {

        await this.address_textbox.click();
        await this.address_textbox.fill(address);
    }

    async enterlinkedin(linkedin) {

        await this.linkedin_textbox.click();
        await this.linkedin_textbox.fill(linkedin);

    }

    async entergithub(github) {

        await this.github_textbox.click();
        await this.github_textbox.fill(github);

    }

    async submitalert(alert) {

        this.page.on('dialog', async (d) => {

            this.expect(d.type()).toContain("alert");
            this.expect(d.message()).toContain(alert);
            await d.accept();

        })
        await this.page.getByRole('button', { name: 'Submit' }).click();

    }

    async submit() {

        this.page.on('dialog', async (d) => {

            this.expect(d.type()).toContain("alert");
            await d.accept();

        })
        await this.page.getByRole('button', { name: 'Submit' }).click();

    }

}
