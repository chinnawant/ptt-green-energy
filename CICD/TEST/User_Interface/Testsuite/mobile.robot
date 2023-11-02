*** Settings ***
Library     SeleniumLibrary
Resource    ../variables.robot


*** Test Cases ***
How To Handle Multiple Window

    Open Browser    http://localhost:3000      Chrome
    Maximize Browser Window
    Wait Until Page Contains     Opening a new window
    Click Element   xpath://a[text()='Click Here']  # This will open a Child Window
    ${window1}=   Switch Window  locator=NEW  # switch to new tab and get original tab handle
    Wait Until Page Contains     New Window   # Validating element in Child Window
    Sleep  10000                           # do stuff in new tab
    # Close Window
    # Switch Window       ${window1}           # switch back to original tab
    # Wait Until Page Contains     Opening a new window

# *** Test Cases ***
# Test in Mobile device Mobile
#     Open Website in Size    375    812
#     # Verify Element Text    root>div>div>h1    PTT Green Energy Pte. Ltd. 
#     Verify Element Text    root>div>div>div>div    งบการเงินล่าสุด
#     Verify Element Text    root>div>div>div>div>div>div>div>div:nth-child(2)    งบการเงินประจำปี 2565
#     Click Button And Validate New Tab   root>div>div>div>div>div>div>div>div>a   
#     Capture Page Screenshot
#     Close Window


# *** Test Cases ***
# Test in Mobile device Desktop
#     Open Website in Size    375    812
#     # Verify Element Text    root>div>div>h1    PTT Green Energy Pte. Ltd. 
#     Verify Element Text    root>div>div>div>div    งบการเงินล่าสุด
#     Verify Element Text    root>div>div>div>div>div>div>div>div:nth-child(2)    งบการเงินประจำปี 2565
#     Click Button And Validate New Tab   root>div>div>div>div>div>div>div>div>a   
#     Capture Page Screenshot

# *** Test Cases ***
# Test in Mobile device Tables
#     Open Website in Size    768    1023
#     # Verify Element Text    root>div>div>h1    PTT Green Energy Pte. Ltd. 
#     Verify Element Text    root>div>div>div>div    งบการเงินล่าสุด
#     Verify Element Text    root>div>div>div>div>div>div>div>div:nth-child(2)    งบการเงินประจำปี 2565
#     Click Button And Validate New Tab   root>div>div>div>div>div>div>div>div>a   
#     Capture Page Screenshot








*** Keywords ***
Open Website in Size
    [Arguments]    ${w}    ${h}
    ${chrome_options}=    Evaluate    sys.modules['selenium.webdriver'].ChromeOptions()    sys, selenium.webdriver
    Call Method    ${chrome_options}    add_argument    --no-sandbox
    Call Method    ${chrome_options}    add_argument    --headless
    Call Method    ${chrome_options}    add_argument    --disable-dev-shm-usage
    Open Browser    ${PROTOCOL}://${HOSTNAME}${PATH}    ${browser}    options=${chrome_options}
    Set Window Size    ${w}    ${h}




*** Keywords ***
Verify Element Text
    [Arguments]    ${div_id}    ${expected_text}
    ${actual_text}=    Get Text    css:#${div_id}
    Should Be Equal    ${actual_text}    ${expected_text}


*** Keywords ***
Click Button And Validate New Tab
    [Arguments]    ${button_css_selector}   
    Click Element    css:#${button_css_selector}



