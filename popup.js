import { getCurrentTab } from "./utils.js";

document.addEventListener('DOMContentLoaded', async () => {
    const activeTab = await getCurrentTab();

    if (activeTab.url.includes('mail.google.com')) {
        console.log('Kindly check the email you would like to auto reply and click the extension icon')
        // update to check for a conversation page
    }
})

