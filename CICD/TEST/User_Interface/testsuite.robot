*** Settings ***
Library     SeleniumLibrary
Resource    variables.robot


*** Test Cases ***
Test in Mobile device Mobile
    Open Website in Size    375    812
    Verify Element Text    root>div>div>div>div    แผนการจัดหาล่าสุด
    Verify Element Text    root>div>div>div>div>div>div>div>div:nth-child(2)    แผนการจัดหาประจำปี 2565
    Check New Tab Has PDF    pdfPresentYear
    Capture Page Screenshot
    Close Window

*** Test Cases ***
Test in Mobile device Mobile and Click pdfPresentYear
    Open Website in Size    375    812
    Verify Element Text    root>div>div>div>div    แผนการจัดหาล่าสุด
    Verify Element Text    root>div>div>div>div>div>div>div>div:nth-child(2)    แผนการจัดหาประจำปี 2565
    Check New Tab Has PDF    pdfPresentYear
    Capture Page Screenshot
    Close Window


*** Test Cases ***
Test in Mobile device Mobile and Click Select and Download
    Open Website in Size    375    812
    Verify Element Text    root>div>div>div>div    แผนการจัดหาล่าสุด
    Verify Element Text    root>div>div>div>div>div>div>div>div:nth-child(2)    แผนการจัดหาประจำปี 2565

    Click Element    id:select-year
    Click Element    select-year-option-2565
    Verify Element Text     select-year    2565
    
    Click Element    id:select-year
    Click Element    select-year-option-2565
    Verify Element Text     select-year    2565

    Click Element    id:pdfSelected
    Capture Page Screenshot
    Close Window



*** Test Cases ***
Test in Mobile device Tablet
    Open Website in Size    768    812
    Verify Element Text    root>div>div>div>div    แผนการจัดหาล่าสุด
    Verify Element Text    root>div>div>div>div>div>div>div>div:nth-child(2)    แผนการจัดหาประจำปี 2565
    Check New Tab Has PDF    pdfPresentYear
    Capture Page Screenshot
    Close Window

*** Test Cases ***
Test in Mobile device Tablet and Click pdfPresentYear
    Open Website in Size    768    812
    Verify Element Text    root>div>div>div>div    แผนการจัดหาล่าสุด
    Verify Element Text    root>div>div>div>div>div>div>div>div:nth-child(2)    แผนการจัดหาประจำปี 2565
    Check New Tab Has PDF    pdfPresentYear
    Capture Page Screenshot
    Close Window


*** Test Cases ***
Test in Mobile device Tablet and Click Select and Download
    Open Website in Size    768    812
    Verify Element Text    root>div>div>div>div    แผนการจัดหาล่าสุด
    Verify Element Text    root>div>div>div>div>div>div>div>div:nth-child(2)    แผนการจัดหาประจำปี 2565

    Click Element    id:select-year
    Click Element    select-year-option-2565
    Verify Element Text     select-year    2565
    
    Click Element    id:select-year
    Click Element    select-year-option-2565
    Verify Element Text     select-year    2565

    Click Element    id:pdfSelected
    Capture Page Screenshot
    Close Window



*** Test Cases ***
Test in Mobile device Desktop
    Open Website in Size    1200    1023
    Verify Element Text    root>div>div>div>div    แผนการจัดหาล่าสุด
    Verify Element Text    root>div>div>div>div>div>div>div>div:nth-child(2)    แผนการจัดหาประจำปี 2565
    Check New Tab Has PDF    pdfPresentYear
    Capture Page Screenshot
    Close Window

*** Test Cases ***
Test in Mobile device Desktop and Click pdfPresentYear
    Open Website in Size    1200    1023
    Verify Element Text    root>div>div>div>div    แผนการจัดหาล่าสุด
    Verify Element Text    root>div>div>div>div>div>div>div>div:nth-child(2)    แผนการจัดหาประจำปี 2565
    Check New Tab Has PDF    pdfPresentYear
    Capture Page Screenshot
    Close Window


*** Test Cases ***
Test in Mobile device Desktop and Click Select and Download
    Open Website in Size    1200    1023
    Verify Element Text    root>div>div>div>div    แผนการจัดหาล่าสุด
    Verify Element Text    root>div>div>div>div>div>div>div>div:nth-child(2)    แผนการจัดหาประจำปี 2565

    Click Element    id:select-year
    Click Element    select-year-option-2565
    Verify Element Text     select-year    2565
    
    Click Element    id:select-year
    Click Element    select-year-option-2565
    Verify Element Text     select-year    2565    

    Click Element    id:pdfSelected
    Capture Page Screenshot
    Close Window


*** Keywords ***
Open Website in Size
    [Arguments]    ${w}    ${h}
    ${chrome_options}=    Evaluate    sys.modules['selenium.webdriver'].ChromeOptions()    sys, selenium.webdriver
    Call Method    ${chrome_options}    add_argument    --no-sandbox
    Call Method    ${chrome_options}    add_argument    --headless
    Call Method    ${chrome_options}    add_argument    --disable-dev-shm-usage
    Open Browser    ${PROTOCOL}://${HOSTNAME}${PATH}    ${browser}  options=${chrome_options} 
    Set Window Size    ${w}    ${h}




*** Keywords ***
Verify Element Text
    [Arguments]    ${div_id}    ${expected_text}
    ${actual_text}=    Get Text    css:#${div_id}
    Should Be Equal    ${actual_text}    ${expected_text}

Verify Element Text By Id
    [Arguments]    ${div_id}    ${expected_text}
    ${actual_text}=    Get Text    id:${div_id}
    Should Be Equal    ${actual_text}    ${expected_text}




Check New Tab Has PDF
    [Arguments]    ${element_id}
    Click Element    id:${element_id}
# Check New Tab Has PDF
#     [Arguments]    ${element_id}
#     Click Element    id:${element_id}
#     Switch Window  locator=NEW  
#     Location Should Contain    .pdf
#     ${window_handles}=    Get Window Handles

#     Switch Window      ${window_handles}[0]