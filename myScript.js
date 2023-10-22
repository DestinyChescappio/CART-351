/* making the home-tab interactive */
//this tabButtons variable will hold all the buttons//
var tabButtons=document.querySelectorAll(".tabContainer .buttonContainer button");
//query selector is returning all the panels; tabPanels holding all panels// 
var tabPanels=tabButtons=document.querySelectorAll(".tabContainer .tabPanel");
//
function showPanel(panelIndex, colorCode) { ////the click 'off' is the showPanel and panelIndex is 0 to 3
    tabButtons.forEach (function (node) {
        //resetting previous selection in the button
        //looping all the data that within the the tabButtons variable
        node.style.backgroundColor= ""; //background and colors is set to null
        node.style.color= "";
    });
    //it applies for each panels//
    tabButtons[panelIndex].style.backgroundColor=colorCode;
    tabButtons[panelIndex].style.color="white";
    tabPanels.forEach (function (node) {
    node.style.display="none";
    });
    //selector tabs 
    tabPanels[panelIndex].style.display="block";
    tabPanels[panelIndex].style.backgroundColor="colorCode";
}
//to show the panels//
showPanel (0, '#D3ECDA');

//for upcoming to do's: 
//Have the tab content disappear after clicking onto the next tab and/or outside the content box
//update the tab names' content. Put clickable illustratrations of week2, week,3,etc..
//add more visual features and make it prettier 
//add social media, clickable links for contacts 
//figure out how to put your codes/urls of upcoming projects 

//References: 
// https://www.youtube.com/watch?v=PzSxehu4G78&list=LL&index=1&t=294s