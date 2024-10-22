chrome.commands.onCommand.addListener((command) => {
    chrome.tabs.query({ currentWindow: true }, (tabs) => {
        if (tabs.length === 0) return; //keine Tabs offen

        const activeTab = tabs.findIndex(tab => tab.active);
        
        if (command === "next-tab") {
            const nextTabIndex = (activeTab + 1) % tabs.length;
            if (tabs[nextTabIndex] && tabs[nextTabIndex].id) {
                chrome.tabs.update(tabs[nextTabIndex].id, { active: true});
            }
        }
        
        if (command === "previous-tab") {
            const previousTabIndex = (activeTab - 1 + tabs.length) % tabs.length;
            if (tabs[previousTabIndex] && tabs[previousTabIndex].id) {
                chrome.tabs.update(tabs[previousTabIndex].id, { active: true });
            }
        }
    });
});