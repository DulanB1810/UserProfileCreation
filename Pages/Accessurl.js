exports.accessurl = class accessurl {

    constructor(page, expect) {

        this.page = page;
        this.expect = expect;
    }

    async openurl() {

        await this.page.waitForTimeout(3000);
        await this.page.goto('https://qa-assessment.pages.dev/');
        
    }
}


