chrome.commands.onCommand.addListener((command) => {
    if (command === "next-tab") {
        chrome.tabs.query({ currentWindow: true}, (tabs) => {
            const activeTab = tabs.findIndex(tab => tab.active);
            const nextTabIndex = (activeTab + 1) % tabs.length;
            chrome.tabs.update(tabs[nextTabIndex].id, { active: true });
        });
    }

    if (command === "previous-tab") {
        chrome.tabs.query({ currentWindow: true}, (tabs) => {
            const activeTab = tabs.findIndex(tab => tab.active);
            const previousTabIndex = (activeTab - 1) % tabs.length;
            chrome.tabs.update(tabs[previousTabIndex].id, { active: true });
        });
    }
});