import React, { useState, useEffect } from "react";

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';


function TabTodo(){
// This is the parent's state hook. It says that tab will be updated with a title and assigned an ID when a setTab has been used to receive that information.
    const [tabs, setTabs] = useState([{ title: "Title", id: 1 }]);

// This is a child. It will receive information about a newly created list and change it's information to a string then save it to local storage.  
    const saveTabsData = (latestTabs) => {
        localStorage.setItem('todoTabs', JSON.stringify(latestTabs))
    }

// This hook checks if there is tab info in local storage. If there is, that information goes to setTabs. It will put that information in an array.
    useEffect(() => {
        if (localStorage.getItem("todoTabs")) {
            setTabs(JSON.parse(localStorage.getItem("todoTabs")));
        }

      }, []);

// This is the function that creates the new tab. It says all new tabs will be in an array, assigned a string for a title, then assigned a date for ID. That information goes to setTabs as well as saveTabsData. 
    const addNewTab = () => {
        let newTab = [...tabs, {title:'New Tab', id: Date.now()}]
        setTabs(newTab)
        saveTabsData(newTab)
    }
    
// This function deletes a tab. The splice method will be applied to the tab that is to be deleted and that information is passed to setTabs and saveTabsData so they may update the array in local storage which will update the parent.
    const closeTab = (index) => {
        tabs.splice(index, 1)
        setTabs([...tabs]) 
        saveTabsData([...tabs])
    }

// This function changes the title of the tab. It uses and event handler such that, when the event happens, a tab title will be the value that's received and that information will be sent to setTabs and saveTabsData so that they may update the parent
    const changeTabName = (e, tab) => {
        tab.title= e.target.value
        setTabs([...tabs]) 
        saveTabsData([...tabs])
    }


// 
    return (
        <>
            <button onClick={() => addNewTab()}>
                Create New Tab
            </button>
            <Tabs forceRenderTabPanel={true}>
                <TabList>
                {tabs.map((tab, index) => (
                <Tab key={tab.id}>
                {tab.title}
                <button onClick={() => closeTab(index)}>X</button>
                </Tab>
                ))}
                </TabList>

                {tabs.map(tab => (
                <TabPanel key={tab.id}>
                    <input type="text" value={tab.title} onChange={(e) =>  changeTabName(e, tab)}/>
                    <TabList tabs={tab.id}/>
                </TabPanel>
                ))}
        
            </Tabs>
        </>
    )

}

export default TabTodo;