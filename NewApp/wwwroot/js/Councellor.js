﻿

// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.
// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.
// Flag to track left container visibility
function handleDashboard() {
    // Get the right-container element
    const rightContainer = document.querySelector('.right-container');

    // Replace the HTML content with the desired content
    rightContainer.innerHTML = `
      
            <div class="main-blogs">
    <div class="container-01">
        <div class="neumorphic-card">
           
            <h2>Test</h2>
            <div class="contentBox">
                <p>Unlock your potential with AI-enabled psychometric and aptitude tests.</p>
                <p>Gain insights into your strengths, weaknesses, and career preferences for informed decisions and personalized growth.</p>
                <a href="https://careertests.in/Test"><span>Give Test</span></a>
            </div>
        </div>
        <div class="neumorphic-card">
          
            <h2>Report</h2>
            <div class="contentBox">
                <p>Download the report for self-understanding and counseling.</p>
                <p>Gain insights into your strengths and career paths. Empower your decision-making process today.</p>
                <a href="#"><span>Learn More</span></a>
            </div>
        </div>
        <div class="neumorphic-card">
           
            <h2>Mentorship</h2>
            <div class="contentBox">
                <p>Speak with our experienced counselors to explore study streams (for classes 8 to 12 / PU) or job roles (graduates, postgraduates, professionals).</p>
                <p>Gain valuable insights today!</p>
                <a href="https://careertests.in/Councellor"><span>Enquire Now</span></a>
            </div>
        </div>
    </div>
</div>

    `;
}

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}





window.onscroll = function () { scrollFunction() };
function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById("navbar").style.top = "0";
        document.getElementById("scroll-up").style.display = "block";
    } else {
        document.getElementById("navbar").style.top = "-60px";
        document.getElementById("scroll-up").style.display = "none";
    }
}






function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}




//SCROLL ANIMATE
var scroll = window.requestAnimationFrame ||
    function (callback) { window.setTimeout(callback, 1000 / 60) };
var elementsToShow = document.querySelectorAll('.show-on-scroll');
function loop() {

    Array.prototype.forEach.call(elementsToShow, function (element) {
        if (isElementInViewport(element)) {
            element.classList.add('is-visible');
        } else {
            element.classList.remove('is-visible');
        }
    });

    scroll(loop);
}
loop();

function isElementInViewport(el) {
    // special bonus for those using jQuery
    if (typeof jQuery === "function" && el instanceof jQuery) {
        el = el[0];
    }
    var rect = el.getBoundingClientRect();
    return (
        (rect.top <= 0
            && rect.bottom >= 0)
        ||
        (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.top <= (window.innerHeight || document.documentElement.clientHeight))
        ||
        (rect.top >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
    );
}




var myVar;
function myLoader() {
    myVar = setTimeout(showPage, 3000);
}

function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("myDiv").style.display = "block";
}
let userDataSelected = {};
let onNext = false;
function highlightBasicInfoChatBox() {
    // Get all chat boxes
    var chatBoxes = document.querySelectorAll('.chat-box');

    // Iterate through each chat box
    chatBoxes.forEach(function (chatBox) {
        // Find the h4 element inside the chat box
        var h4Element = chatBox.querySelector('.text-head h4');

        // Check if the h4 element contains 'Basic Info'
        if (h4Element && h4Element.textContent.includes('Basic Info')) {
            // Update the style to make it Light Sea Green
            chatBox.style.backgroundColor = '#20b2aa'; // Light Sea Green
            chatBox.style.color = 'white'; // Text color
        }
    });
}
function highlightSignUpChatBox() {
    // Get all chat boxes
    var chatBoxes = document.querySelectorAll('.chat-box');

    // Iterate through each chat box
    chatBoxes.forEach(function (chatBox) {
        // Find the h4 element inside the chat box
        var h4Element = chatBox.querySelector('.text-head h4');

        // Check if the h4 element contains 'Sign-Up'
        if (h4Element && h4Element.textContent.includes('Sign-Up')) {
            // Update the style to make it green
            chatBox.style.backgroundColor = '#20b2aa';
            chatBox.style.color = 'white';
        }
    });
}
function clearLeftContainer() {
    const leftContainer = document.getElementById('leftContainer');
    leftContainer.innerHTML = '';  // Clear the content
}
function clearChatList() {
    // Find and remove the chat list container
    var chatListContainer = document.querySelector('.chat-list');
    if (chatListContainer) {
        chatListContainer.remove();
    }
}

function showQR() {
    // Create the modal structure if it doesn't exist
    if (!document.getElementById("myModal")) {
        const modal = document.createElement("div");
        modal.id = "myModal";
        modal.classList.add("modal");
        const modalContent = document.createElement("div");
        modalContent.classList.add("modal-content");
        const closeSpan = document.createElement("span");
        closeSpan.classList.add("close");
        closeSpan.textContent = "×";
        closeSpan.onclick = closeModal;
        modalContent.appendChild(closeSpan);
        const qrImage = document.createElement("img");
        qrImage.id = "qrImage";
        qrImage.src = ""; // Set initial source to empty
        qrImage.alt = "QR Code";
        modalContent.appendChild(qrImage);
        modal.appendChild(modalContent);
        document.body.appendChild(modal);
    }

    // Get the modal
    var modal = document.getElementById("myModal");

    // Get the image element
    var img = document.getElementById("qrImage");

    // Set the source attribute of the image
    img.src = 'https://github.com/shivangnayar-dev/img/blob/main/WhatsApp%20Image%202024-02-11%20at%2011.09.39.jpeg?raw=true';

    // Display the modal
    modal.style.display = "block";
}

function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}
let timerInterval; // Declare timer interval variable globally
let totalSecondsRemaining; // Declare total seconds remaining globally

function showLeftContainer(totalQuestions, currentQuestionIndex, storedReportId) {
    // Define the maximum number of questions per section
    const maxQuestionsPerSection = 20;

    // Calculate the current section index
    const currentSectionIndex = Math.floor(currentQuestionIndex / maxQuestionsPerSection);

    // Select or create a container for the question grid
    let questionGridContainer = document.querySelector('.question-grid-container');

    if (!questionGridContainer) {
        questionGridContainer = document.createElement('div');
        questionGridContainer.className = 'question-grid-container';
        document.querySelector('.left-container').appendChild(questionGridContainer);
    }

    // Clear previous question boxes
    questionGridContainer.innerHTML = '';

    // Create and manage sections
    let startQuestionIndex = currentSectionIndex * maxQuestionsPerSection;
    let endQuestionIndex = Math.min(startQuestionIndex + maxQuestionsPerSection, totalQuestions);

    const sectionContainer = document.createElement('div');
    sectionContainer.className = 'section-container';
    sectionContainer.style.display = 'flex';
    sectionContainer.style.flexWrap = 'wrap';
    sectionContainer.style.marginLeft = '10px';
    sectionContainer.style.gap = '8px';
    sectionContainer.style.marginTop = '60%';
    sectionContainer.style.overflow = 'auto';
    sectionContainer.style.maxHeight = '300px';

    // Create question boxes for this section
    for (let questionIndex = startQuestionIndex; questionIndex < endQuestionIndex; questionIndex++) {
        const questionBox = document.createElement('div');
        questionBox.className = 'question-box';

        // Check if the question has been submitted
        if (submittedQuestions.includes(questionIndex)) {
            questionBox.style.backgroundColor = 'green';
        } else {
            // Add blue background to the current question box
            if (questionIndex === currentQuestionIndex) {
                questionBox.style.backgroundColor = 'blue';
            }
        }

        questionBox.textContent = questionIndex + 1; // Display question number
        sectionContainer.appendChild(questionBox);
    }

    // Append the section to the question grid container
    questionGridContainer.appendChild(sectionContainer);

    // Create and initialize timer elements if not already created
    let timerContainer = document.querySelector('.timer-container');

    if (!timerContainer) {
        timerContainer = document.createElement('div');
        timerContainer.className = 'timer-container';
        document.querySelector('.left-container').insertBefore(timerContainer, questionGridContainer); // Insert before question grid container

        // Set total seconds remaining based on storedReportId
        totalSecondsRemaining = storedReportId === "76DD3251-3A3F-48DE-8D0D-CBAE60047743" ? 60 * 60 : 30 * 60;
        startTimer(timerContainer); // Start the timer
    }
}

function startTimer(timerContainer) {
    // Add timer elements
    let minutesElement = document.createElement('div');
    minutesElement.className = 'minutes';
    minutesElement.textContent = '00';
    timerContainer.appendChild(minutesElement);

    let separatorElement = document.createElement('div');
    separatorElement.className = 'timer-separator';
    separatorElement.textContent = ':';
    timerContainer.appendChild(separatorElement);

    let secondsElement = document.createElement('div');
    secondsElement.className = 'seconds';
    secondsElement.textContent = '00';
    timerContainer.appendChild(secondsElement);

    // Start the timer interval
    timerInterval = setInterval(function () {
        totalSecondsRemaining--;

        let minutes = Math.floor(totalSecondsRemaining / 60);
        let seconds = totalSecondsRemaining % 60;

        // Update timer display
        minutesElement.textContent = minutes < 10 ? '0' + minutes : minutes;
        secondsElement.textContent = seconds < 10 ? '0' + seconds : seconds;

        // Check if the timer has reached 0
        if (totalSecondsRemaining <= 0) {
            clearInterval(timerInterval); // Stop the timer
            // Call function when timer ends
            onNextQuestion();
        }
    }, 1000); // Update every second
}




function checkOrientation() {
    if (window.innerWidth < window.innerHeight && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        alert("Please rotate your device to landscape mode for the best experience.");
    }
}

// Run the checkOrientation function on page load
checkOrientation();

// Listen for orientation change events
window.addEventListener("orientationchange", function () {
    checkOrientation();
});
let coreStreamId;

let testInProgress = false;
// Write your JavaScript code.
function googleTranslateElementInit() {
    new google.translate.TranslateElement({ pageLanguage: 'en', includedLanguages: '', layout: google.translate.TranslateElement.InlineLayout.SIMPLE }, 'google_translate_element');
}

// Make sure to include the correct source URL for the Google Translate script
var script = document.createElement('script');
script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
document.head.appendChild(script);

function handleGetMoreInfoClick() {
    // Open the Google Form in a new tab or window
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSeqW3FXr6PaYY_9Bcxqe-FzeSy411-3-3GtYMYGfgv-oSD24g/viewform?usp=sf_link', '_blank');

    // You can also continue the conversation or perform other actions as needed

}

let storedReportId;
function askConsent() {

    // Ask the user for consent using a confirm dialog
    const hasConsent = confirm('Do you consent to provide information required for the assessment to Pexitics.com? Click OK for Yes, Cancel for No.');

    if (hasConsent) {
        // User has provided consent, proceed with further actions
        // Call the function or perform the actions you need after consent
        // ...
        askName();
        // Clear the message box after proceeding

    } else {
        // User has not provided consent, inform them and prevent further actions
        alert('We cannot proceed without your consent. Please check the consent box.');
        // Optionally, you can reset the form or take other actions
    }
}
function askTransactionId() {
    const genderSelect = document.getElementById("genderSelect");
    if (genderSelect) {
        genderSelect.parentNode.removeChild(genderSelect);
    }

    createMessageBox("Please scan the QR code to retrieve the transaction ID.");
    const messageButtonContainer = document.createElement("div");
    messageButtonContainer.classList.add("message-button-container");

    // Create the "Pay using QR" button
    const qrButton = document.createElement("button");
    qrButton.textContent = "Pay using QR";
    qrButton.classList.add("qr-button");

    // Attach event listener to the button
    qrButton.addEventListener("click", showQR);

    // Append the button to the container
    messageButtonContainer.appendChild(qrButton);

    // Append the container to the chat container
    const chatContainer = document.querySelector(".chat-container");
    chatContainer.appendChild(messageButtonContainer);
    // Prompt the user to enter the transaction ID
    document.getElementById("dobInput").placeholder = "Enter your transaction ID";
    createMessageBox("Please enter your transaction ID:");



    // Attach the event listener for submitting the transaction ID
    document.getElementById("dobInput").addEventListener("change", submitTransactionId);
}

function submitTransactionId() {


    const transactionId = document.getElementById("dobInput").value;

    if (transactionId && transactionId.length >= 3) {
        // Process the submitted transaction ID and proceed to the next step
        userData.transactionId = transactionId;
        displaySubmittedInput("Transaction ID", transactionId, true);

        // Submit data to the server or handle the completion of the form
        document.getElementById("dobInput").removeEventListener("change", submitTransactionId);
        // Move to the next step after processing the transaction ID
        // You can call the next function here or put the relevant code directly.
        // For example:
        // askNextStep();
        asktesttt();
    } else {
        // Handle the case where the transaction ID is not entered or doesn't meet the criteria
        if (!transactionId) {
            alert('Please enter your transaction ID.');
        } else if (transactionId.length < 3) {
            alert('Transaction ID should have a minimum of 3 characters.');
        }
    }
}


function asktesttt() {
    clearMessageBoxes();

    const genderSelect = document.getElementById("genderSelect");
    if (genderSelect) {
        genderSelect.parentNode.removeChild(genderSelect);
    }
    // Ask the user for consent using a confirm dialog
    const hasTest = confirm('Do you want to start the test? Click OK for Yes, Cancel for No.');

    if (hasTest) {
        // User has provided consent, proceed with further actions
        // Call the function or perform the actions you need after consent
        // ...
        const reportId = storedReportId;
        callApiToStartTest(reportId);
        // Clear the message box after proceeding

    } else {
        // User has not provided consent, inform them and prevent further actions
        alert('We cannot proceed without your consent. Please check the consent box.');
        // Optionally, you can reset the form or take other actions
    }
}

let userData = {};
function askDobAfterGender() {
    const genderSelect = document.getElementById("genderSelect");
    if (genderSelect) {
        genderSelect.parentNode.removeChild(genderSelect);
    }

    document.getElementById("dobInput").placeholder = "Select your date of birth";
    createMessageBox("Great! Please select your date of birth.");

    // Remove the event listener for the previous function if it exists
    document.getElementById("dobInput").removeEventListener("change", submitGender);
    console.log('userData after asking for DOB:', userData);
    // Attach the date picker
    const dobInput = document.getElementById("dobInput");
    const datepicker = flatpickr(dobInput, {
        dateFormat: "d-m-Y",  // You can customize the date format
        onClose: function (selectedDates, dateStr, instance) {
            submitDobAfterGender();
        }
    });
}


function submitDobAfterGender() {
    highlightBasicInfoChatBox();

    const dobInput = document.getElementById("dobInput");
    const dob = dobInput.value;

    if (dob) {
        // Format the submitted date of birth to match the expected format ("YYYY-MM-DD")
        const formattedDob = formatDobForServer(dob);

        // Calculate age
        const age = calculateAge(formattedDob);

        if (age < 10) {
            // Display alert and prevent further processing
            alert('Sorry, you must be at least 10 years old to proceed.');
            return;
        }

        // Process the formatted date of birth and proceed to the next step
        userData.Dob = formattedDob;
        displaySubmittedInput("Date of Birth", dob, true);

        console.log(userData);

        dobInput.value = "";
        flatpickr("#dobInput").destroy();

        clearMessageBoxes();

        submitUserDataToDatabase(userData);
        if (storedTestCode === "PEXCGRVIT2312O1009") {
            // If true, call askGender() instead of askCoreStream()
            askTransactionId();
            console.log(userData);
            // Submit data to the server or handle the completion of the form
            // You can call the next function or submit the entire form here
        } else {
            // If false, call askCoreStream()
            asktesttt();
            console.log(userData);
            // Submit data to the server or handle the completion of the form
            // You can call the next function or submit the entire form here
        }


        dobInput.removeEventListener("change", askDobAfterGender);
        dobInput.removeEventListener("change", submitDobAfterGender);

        // Continue with further processing or form completion
    } else {
        // Handle the case where the date of birth is not selected
        alert('Please select your date of birth.');
    }
}
function handleCareer() {
    // Redirect to the desired page
    window.location.href = "https://careertests.in/";
}
function calculateAge(birthDate) {
    const currentDate = new Date();
    const birthDateObj = new Date(birthDate);
    let age = currentDate.getFullYear() - birthDateObj.getFullYear();
    const monthDiff = currentDate.getMonth() - birthDateObj.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && currentDate.getDate() < birthDateObj.getDate())) {
        age--;
    }

    return age;
}
function createMessageBoxq(question, currentQuestionIndex, totalQuestions) {
    let newMessageBox = document.createElement("div");
    newMessageBox.className = "message-box my-messagee";

    // Add the title with question number and total questions
    newMessageBox.innerHTML += `<p>Q ${currentQuestionIndex + 1}:</p>`;
    newMessageBox.innerHTML += `<p>${question}</p>`;

    // Append the newMessageBox to the body
    document.querySelector(".chat-container").appendChild(newMessageBox);
}


function optionselect(optionsData, onNextQuestion, questionId) {
    // Create a new message box
    let newMessageBox = document.createElement("div");

    // Create radio buttons for each option
    for (const optionData of optionsData) {
        // Create a div to group each radio button and label
        const optionContainer = document.createElement("div");

        // Create a label associated with the radio button
        const label = document.createElement("label");
        label.textContent = optionData.item1;
        label.setAttribute("for", `option_${optionData.item2}`);

        // Create a radio button
        const radioOption = document.createElement("input");
        radioOption.type = "radio";
        radioOption.name = `option_${questionId}`; // Use question ID to create unique name for each question's options
        radioOption.value = optionData.item2;
        radioOption.id = `option_${optionData.item2}`; // Unique ID for each radio button

        // Add margin between label and radio button
        label.style.marginRight = "5px";
        label.style.marginLeft = "15px"; // Adjust the margin as needed

        // Append the radio button and label to the optionContainer
        optionContainer.appendChild(radioOption);
        optionContainer.appendChild(label);

        // Set the display property to "flex" with "row" direction for horizontal layout
        optionContainer.style.display = "flex";
        optionContainer.style.flexDirection = "row"; // Display items horizontally
        optionContainer.style.alignItems = "center"; // Align items vertically centered

        // Add some space between options
        optionContainer.style.marginRight = "10px"; // Add margin between radio buttons

        // Append the optionContainer to the message box
        newMessageBox.appendChild(optionContainer);
    }

    // Append the new message box to the chat container
    document.querySelector(".chat-container").appendChild(newMessageBox);

    newMessageBox.addEventListener('change', function () {
        const selectedOption = newMessageBox.querySelector(`input[name="option_${questionId}"]:checked`);

        if (selectedOption) {
            // Get current timestamp
            const timestamp = new Date().getTime();

            // Assuming userDataSelected is a global object
            userDataSelected.SelectedOptionss = userDataSelected.SelectedOptionss || {};

            // Store the selected option for the current question
            userDataSelected.SelectedOptionss[questionId] = selectedOption.value;

            // Store the timestamp for the selected option
            userDataSelected.SelectedOptionTimestamps = userDataSelected.SelectedOptionTimestamps || {};
            userDataSelected.SelectedOptionTimestamps[questionId] = timestamp;

            console.log(userDataSelected);

            onNext = true;

            // Convert the array of selected options to a string
            const selectedOptionsString = Object.values(userDataSelected.SelectedOptionss).join(",");
            console.log(selectedOptionsString);

            // Convert the array of timestamps to a string
            const timestampsString = Object.values(userDataSelected.SelectedOptionTimestamps).join(",");
            console.log(timestampsString);

            // Append selectedOptionsString and timestampsString to userDataSelected.SelectedOptions
            userData.SelectedOptions = selectedOptionsString;
            userData.SelectedOptionTimestamps = timestampsString;
            console.log(userData);
        }
    });

}

function giveTest(questionId, question, optionsData, onNextQuestion, currentQuestionIndex, totalQuestions) {
    clearChatList();

    onNext = false;

    showLeftContainer(totalQuestions, currentQuestionIndex);

    testInProgress = true;

    document.getElementById("dobInput").placeholder = "Select your option";

    // Display current question number and its ID
    createMessageBoxq(question, currentQuestionIndex, totalQuestions);

    optionselect(optionsData, onNextQuestion, questionId);

    const dobInput = document.getElementById("dobInput");

    // Remove previous message box and select element

    console.log('Current Question:', question);
    console.log('Question ID:', questionId);
    console.log(currentQuestionIndex);
    console.log(totalQuestions);
}


let onNextQuestion;


let submittedQuestions = [];

function callApiToStartTest(reportId) {
    $.ajax({
        type: 'POST',
        url: '/api/ReportSubAttribute/CheckreportIdValidity',
        contentType: 'application/json',
        data: JSON.stringify({ ReportId: reportId }),
        success: function (response) {
            if (response.isValid) {
                console.log(response);

                const questionOptionsAndAnswers = Object.entries(response.questionOptionsAndAnswers);
                let currentQuestionIndex = 0;
                const totalQuestions = questionOptionsAndAnswers.length;

                onNextQuestion = function () {
                    clearMessageBoxes();
                    currentQuestionIndex++;
                    submittedQuestions.push(currentQuestionIndex);
                    console.log('Submitted Questions:', submittedQuestions);

                    if (currentQuestionIndex < totalQuestions) {
                        const [questionId, currentQuestion] = questionOptionsAndAnswers[currentQuestionIndex];
                        giveTest(questionId, currentQuestion.question, currentQuestion.optionsAndAnswerIds, onNextQuestion, currentQuestionIndex, totalQuestions);

                        // Add the current question and its selected option to userData
                        const selectedOption = document.getElementById("countrySelect").options[document.getElementById("countrySelect").selectedIndex];
                    } else {
                        let testInProgress = false;
                        console.log('Length of SelectedOptions:', userData.SelectedOptions.length);



                        // Create message boxes after checking if there are more questions
                        createMessageBox("Thank you for taking the test");
                        createMessageBox("You can exit the page now");
                        gfg(5);


                        // No more questions, do something or end the test
                    }
                };

                const [firstQuestionId, firstQuestion] = questionOptionsAndAnswers[currentQuestionIndex];
                giveTest(firstQuestionId, firstQuestion.question, firstQuestion.optionsAndAnswerIds, onNextQuestion, currentQuestionIndex, totalQuestions);
            } else {
                alert('Report ID is invalid or no data found. Please re-enter.');
            }
        },
    });
}
// Function to update rating and show as a pop-up with HTML and CSS
// Function to update rating and show as a pop-up with HTML and CSS
function gfg(n) {
    // Create the rating card HTML
    let html = `
        <div class="custom-modal">
            <div class="modal-content card">
                <h1>Please Rate Your Experience</h1>
                <br />
                <span onclick="gfg(1)" class="star">★</span>
                <span onclick="gfg(2)" class="star">★</span>
                <span onclick="gfg(3)" class="star">★</span>
                <span onclick="gfg(4)" class="star">★</span>
                <span onclick="gfg(5)" class="star">★</span>
                <h3 id="output">Rating is: ${n}/5</h3>
                <button onclick="submitRating(${n})">Submit</button>
            </div>
        </div>`;

    // Apply CSS styles
    let css = `
        .custom-modal {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 9999; /* Ensure modal is on top of other content */
        }

        .modal-content {
            background-color: white;
            padding: 20px;
            border-radius: 5px;
             display: table !important;
        }

        .star {
            font-size: 40px;
            cursor: pointer;
            margin: 5px;
        }

        .one { color: red; }
        .two { color: orange; }
        .three { color: yellow; }
        .four { color: green; }
        .five { color: blue; }`;

    // Create a style element and append CSS
    let style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    document.head.appendChild(style);

    // Create a div element for modal and append HTML
    let modalDiv = document.createElement('div');
    modalDiv.innerHTML = html;
    document.body.appendChild(modalDiv);

    // Apply styling based on the rating
    let stars = modalDiv.querySelectorAll(".star");

    for (let i = 0; i < n; i++) {
        let cls;
        if (n == 1) cls = "one";
        else if (n == 2) cls = "two";
        else if (n == 3) cls = "three";
        else if (n == 4) cls = "four";
        else if (n == 5) cls = "five";
        stars[i].classList.add(cls);
    }
}

function submitRating(rating) {
    // Submit the rating to user data
    userData.rating = rating;
    console.log(userData);
    submitUserDataToDatabase(userData);
    // You can remove this line if not needed
    // You can add code here to further process the submitted rating
}

console.log('Submitted Questions:', submittedQuestions);


function formatDobForServer(dob) {
    // Assuming dob is in the format "DD-MM-YYYY"
    const [day, month, year] = dob.split('-');
    return `${year}-${month}-${day}`;
}
function submitUserDataToDatabase(userData) {


    // Assuming you have jQuery available for making AJAX requests
    $.ajax({
        type: 'POST',
        url: '/api/Candidate/submit',
        contentType: 'application/json',
        data: JSON.stringify(userData),
        success: function (response) {
            console.log('Data submitted successfully:', response);
            dobInput.removeEventListener("change", askDobAfterGender);
            dobInput.removeEventListener("change", submitDobAfterGender);

            // Handle success, e.g., show a success message to the user
        },
        error: function (error) {
            console.error('Error submitting data:', error.responseJSON);
            // Handle error, e.g., show an error message to the user
        }
    });
}

function askName() {
    highlightSignUpChatBox();
    if (userData.name !== undefined && userData.name !== null && userData.name !== 0) {
        // Skip asking for input, directly move to the next step
        displaySubmittedInput("Name", userData.name, false);
        askCountry();
        document.getElementById("dobInput").value = "";
        console.log(userData);
        return;
    }

    document.getElementById("dobInput").placeholder = "Enter your name (First Middle Last)";
    createMessageBox("Great! Please enter your name (First Middle Last):");

    // Remove the event listener for the previous function if it exists
    document.getElementById("dobInput").removeEventListener("change", askTestCode);

    // Attach the event listener for submitName
    document.getElementById("dobInput").addEventListener("change", submitName);
}

function submitName() {
    isAskTestCodeCalled = false;

    const name = document.getElementById("dobInput").value;

    if (name && name.length >= 3 && !/\d/.test(name)) {
        // Process the submitted name and proceed to the next step
        userData.name = name;
        displaySubmittedInput("Name", name, true);

        // Submit data to the server or handle the completion of the form
        document.getElementById("dobInput").removeEventListener("change", submitName);
        askCountry();
        document.getElementById("dobInput").value = "";
        console.log(userData);
    } else {
        // Handle the case where the name is not entered or doesn't meet the criteria
        if (!name) {
            alert('Please enter your name.');
        } else if (name.length < 3) {
            alert('First Name should have a minimum of 3 letters.');
        } else if (/\d/.test(name)) {
            alert('Numeric characters are not allowed in the name.');
        }
    }
}


function askGender() {

    const messageBoxx = document.getElementById("messageBoxx");
    const organizationSelect = document.getElementById("organizationSelect");
    if (organizationSelect) {
        organizationSelect.parentNode.removeChild(organizationSelect);
    }
    if (userData.gender !== undefined && userData.gender !== null) {
        // Skip asking for input, directly move to the next step
        displaySubmittedInput("Gender", userData.gender, false);
        askDobAfterGender(); // Move on to the next step
        const dobInput = document.getElementById("dobInput");
        dobInput.parentNode.removeChild(document.getElementById("genderSelect")); // Remove the select element
        console.log(userData);
        return;
    }
    // Remove the genderSelect element if it exists


    // Update placeholder and message
    dobInput.placeholder = "Enter your gender (Male Female Others)";
    createMessageBox("Great! Please enter your Gender (Male Female Others):");

    // Create a new select element for gender
    const genderSelect = document.createElement("select");
    genderSelect.id = "genderSelect";

    // Add a placeholder option
    const placeholderOption = document.createElement("option");
    placeholderOption.value = "";
    placeholderOption.text = "Select your gender";
    placeholderOption.disabled = true;
    placeholderOption.selected = true;
    genderSelect.appendChild(placeholderOption);

    // List of gender options
    const genderOptions = ["Male", "Female", "Others"];

    // Add gender options to the select element
    for (const gender of genderOptions) {
        const option = document.createElement("option");
        option.value = gender.toLowerCase();
        option.text = gender;
        genderSelect.appendChild(option);
    }

    // Insert the genderSelect after the dobInput
    dobInput.parentNode.insertBefore(genderSelect, dobInput.nextSibling);

    // Remove the event listener for the previous function if it exists
    dobInput.removeEventListener("change", submitCountry);

    // Attach the event listener for submitGender

    genderSelect.addEventListener("change", submitGender);
    console.log(userData);
}


function submitGender() {
    const genderSelect = document.getElementById("genderSelect");
    const selectedGender = genderSelect.value;

    if (selectedGender) {
        // Process the submitted gender and proceed to the next step
        userData.gender = selectedGender;
        displaySubmittedInput("Gender", selectedGender, true);

        // Remove the event listener for the previous function
        genderSelect.removeEventListener("change", submitGender);

        console.log(userData);

        // Clear the input and move on to the next step (ask for Date of Birth)
        genderSelect.value = "";
        askDobAfterGender();
    } else {
        // Handle the case where the gender is not selected
        alert('Please select your gender.');
    }
}

function askOrganization() {
    specialization = false;

    const messageBox = document.getElementById("messageBox");
    const interestSelect = document.getElementById("interestSelect");

    // Remove the existing interest select if it exists
    if (interestSelect) {
        interestSelect.parentNode.removeChild(interestSelect);
    }

    // Remove the existing qualification select if it exists
    const qualificationSelect = document.getElementById("qualificationSelect");
    if (qualificationSelect) {
        qualificationSelect.parentNode.removeChild(qualificationSelect);
    }

    // ...

    if (userData.organization !== undefined && userData.organization !== null) {
        // Skip asking for input, directly move to the next step
        displaySubmittedInput("Organization", userData.organization, false);
        askGender(); // Move on to the next step
        const dobInput = document.getElementById("dobInput");
        dobInput.parentNode.removeChild(document.getElementById("organizationSelect")); // Remove the select element
        console.log(userData);
        return;
    }

    // Update placeholder and message
    const dobInput = document.getElementById("dobInput");
    dobInput.placeholder = "Select your organization";
    createMessageBox("Great! Please select your Organization:");

    // Create a select element for organization
    const organizationSelect = document.createElement("select");
    organizationSelect.id = "organizationSelect";

    // Add placeholder option
    const placeholderOption = document.createElement("option");
    placeholderOption.value = "";
    placeholderOption.text = "Select your organization";
    placeholderOption.disabled = true;
    placeholderOption.selected = true;
    organizationSelect.appendChild(placeholderOption);

    // List of organization options
    const organizationOptions = [

        "Supreme Court",
        "Mgrow",
        "VIT",
        "My Finance Wellness",
        "She Commerz",
        "Subhashini for Career Guidance",
        "Jennifer for Career Guidance",
        "Ritu for Career Guidance",
        "Others"
        // ... Add more options as needed
    ];

    // Add organization options
    for (const organization of organizationOptions) {
        const option = document.createElement("option");
        option.value = organization.toLowerCase();
        option.text = organization;
        organizationSelect.appendChild(option);
    }

    // Replace the existing input with the new select element
    dobInput.parentNode.insertBefore(organizationSelect, dobInput.nextSibling);

    // Attach the event listener for submitOrganization
    organizationSelect.addEventListener("change", submitOrganization);
    console.log(userData);
}


function submitOrganization() {
    const organizationSelect = document.getElementById("organizationSelect");
    const organization = organizationSelect.value;

    if (organization.toLowerCase() === "others") {
        // If "Others" is selected, ask for free text input
        askOtherOrganization();
    } else {
        // Process the submitted organization and proceed to the next step
        userData.organization = organization;
        displaySubmittedInput("Organization", organization, true);
        organizationSelect.removeEventListener("change", submitOrganization);
        console.log(userData);

        // Clear the dropdown menu
        organizationSelect.value = "";

        // Submit data to the server or handle the completion of the form
        // You can call the next function or submit the entire form here
        askGender();
    }
}
function askOtherOrganization() {

    const organizationInput = document.getElementById("dobInput");

    organizationInput.placeholder = "Enter another organization";
    createMessageBox("Great! Please enter another Organization:");

    // Remove the event listener for the previous function if it exists
    organizationInput.removeEventListener("change", submitOtherOrganization);

    // Attach the event listener for submitOtherOrganization
    organizationInput.addEventListener("change", submitOtherOrganization);
}

function submitOtherOrganization() {
    const otherOrganization = document.getElementById("dobInput").value;
    if (otherOrganization) {
        // Process the submitted other organization and proceed to the next step
        userData.otherOrganization = otherOrganization;
        displaySubmittedInput("Other Organization", otherOrganization, true);
        document.getElementById("dobInput").removeEventListener("change", submitOtherOrganization);
        console.log(userData);

        // Clear the text input
        document.getElementById("dobInput").value = "";

        // Submit data to the server or handle the completion of the form
        // You can call the next function or submit the entire form here
        askGender();
    } else {
        // Handle the case where the other organization is not entered
        alert('Please enter another organization.');
    }
}

function askCountry() {
    // Create a select element
    const countrySelect = document.createElement("select");
    countrySelect.id = "countrySelect";
    document.getElementById("dobInput").placeholder = "Enter your Location";

    // Add placeholder option
    const placeholderOption = document.createElement("option");
    placeholderOption.value = "";
    placeholderOption.text = "Select your Location";
    placeholderOption.disabled = true;
    placeholderOption.selected = true;
    countrySelect.appendChild(placeholderOption);

    // List of countries
    const countries = ['Agwār',
        'Ahmedabad',
        'Alīgarh',
        'Ambattūr',
        'Amritsar',
        'Aurangābād',
        'Bāli',
        'Bānsbāria',
        'Babura',
        'Balasore',
        'Bangalore',
        'Bārākpur',
        'Bāgalūr',
        'Bendravādi',
        'Bhālswa Jahangirpur',
        'Bhayandar',
        'Bhātpāra',
        'Bhātinda',
        'Bommayapālaiyam',
        'Bhopāl',
        'Bilāspur',
        'Cawnpore',
        'Chandannagar',
        'Chandīgarh',
        'Chennai',
        'Chinchvad',
        'Chinnasekkadu',
        'Cāchohalli',
        'Dāsarhalli',
        'Dam Dam',
        'Darbhanga',
        'Delhi',
        'Devanandapur',
        'Dhanbād',
        'Doddajīvanhalli',
        'Farīdābād',
        'Ghāziābād',
        'Gundūr',
        'Gwalior',
        'Guwāhāti',
        'Harna Buzurg',
        'Harilādih',
        'Hesarghatta',
        'Herohalli',
        'Hugli',
        'Hunnasamaranhalli',
        'Huttanhalli',
        'Hyderābād',
        'Indore',
        'Jaipur',
        'Jabalpur',
        'Jalhalli',
        'Jamshedpur',
        'Jethuli',
        'Jodhpur',
        'Kammanhalli',
        'Kasgatpur',
        'Kedihāti',
        'Kendrāparha',
        'Kītānelli',
        'Kodagihalli',
        'Kolkāta',
        'Kota',
        'Krishnanagar',
        'Kūkatpalli',
        'Kādiganahalli',
        'Kālkāji Devi',
        'Lucknow',
        'Ludhiāna',
        'Madavaram',
        'Mādavar',
        'Mādnāikanhalli',
        'Māīlānhalli',
        'Madhavaram',
        'Madipakkam',
        'Mahuli',
        'Mumbai',
        'Muzaffarpur',
        'Nāg̱pur',
        'Nārāyanpur Kola',
        'Nāsik',
        'Nāngloi Jāt',
        'Nāthupur',
        'Nāgtala',
        'New Delhi',
        'Nerkunram',
        'Oulgaret',
        'Pāppākurichchi',
        'Pakri',
        'Pallāvaram',
        'Patna',
        'Puducherry',
        'Pune',
        'Punādih',
        'Puri',
        'Prayagraj',
        'Raipur',
        'Rājkot',
        'Rānchi',
        'Salt Lake City',
        'Sabalpur',
        'Saino',
        'Santoshpur',
        'Secunderābād',
        'Shimla',
        'Shrīrāmpur',
        'Shrīnagar',
        'Sijua',
        'Simli Murārpur',
        'Sondekoppa',
        'Sūrat',
        'Srīnagar',
        'Sultānpur',
        'Sultānpur Mazra',
        'Thāne',
        'Tiruvottiyūr',
        'Tribeni',
        'Vadodara',
        'Vājarhalli',
        'Vārānasi',
        'Vasai',
        'Vijayavāda',
        'Vishākhapatnam',
        'Yelahanka',
        'Zeyādah Kot',
        'Other']

    countries.sort();
    // Add country options
    for (const country of countries) {
        const option = document.createElement("option");
        option.value = country.toLowerCase(); // You can use a lowercase version as the value
        option.text = country;
        countrySelect.appendChild(option);
    }

    // Replace the existing input with the new select element
    const dobInput = document.getElementById("dobInput");

    dobInput.parentNode.insertBefore(countrySelect, dobInput.nextSibling);

    createMessageBox("Awesome! Please select your Location:");

    // Remove the event listener for the previous function if it exists
    countrySelect.removeEventListener("change", submitName);

    // Attach the event listener for submitCountry
    countrySelect.addEventListener("change", submitCountry);
    console.log(userData);
}
function submitCountry() {
    const countrySelect = document.getElementById("countrySelect");
    const country = countrySelect.value;
    if (country) {
        // Process the submitted country and proceed to the next step
        userData.location = country;
        displaySubmittedInput("Location", country, true);
        countrySelect.removeEventListener("change", submitCountry);
        console.log(userData);

        // Clear the dropdown menu
        countrySelect.value = "";


        // Submit data to the server or handle the completion of the form
        askQualification();
    } else {
        // Handle the case where the country is not selected
        alert('Please select your country.');
    }
}
function askQualification() {

    const countrySelect = document.getElementById("countrySelect");
    const messageBox = document.getElementById("messageBox");

    // Remove the existing country select if it exists
    if (countrySelect) {
        countrySelect.parentNode.removeChild(countrySelect);
    }
    if (userData.qualification !== undefined && userData.qualification !== null) {
        // Skip asking for input, directly move to the next step
        displaySubmittedInput("Qualification", userData.qualification, false);
        askCoreStream(); // Move on to the next step
        const dobInput = document.getElementById("dobInput");
        dobInput.parentNode.removeChild(document.getElementById("qualificationSelect")); // Remove the select element
        console.log(userData);
        return;
    }

    // Update placeholder and message
    const dobInput = document.getElementById("dobInput");
    dobInput.placeholder = "Select your qualification";
    createMessageBox("Great! Please select your Qualification:");

    // Create a select element for qualification
    const qualificationSelect = document.createElement("select");
    qualificationSelect.id = "qualificationSelect";

    // Add placeholder option
    const placeholderOption = document.createElement("option");
    placeholderOption.value = "";
    placeholderOption.text = "Select your qualification";
    placeholderOption.disabled = true;
    placeholderOption.selected = true;
    qualificationSelect.appendChild(placeholderOption);

    // Fetch qualification options from the server using an API endpoint
    $.ajax({
        type: 'GET',
        url: '/api/QualificationTyp', // Replace with your actual API endpoint
        contentType: 'application/json',
        success: function (qualificationOptions) {
            // Log the response in the console
            console.log('Response from server:', qualificationOptions);

            // Add qualification options based on the data received
            for (const qualification of qualificationOptions) {
                const option = document.createElement("option");
                option.value = qualification.toLowerCase();
                option.text = qualification;
                qualificationSelect.appendChild(option);
            }

            // Replace the existing input with the new select element
            dobInput.parentNode.insertBefore(qualificationSelect, dobInput.nextSibling);

            // Attach the event listener for submitQualification
            qualificationSelect.addEventListener("change", submitQualification);
            console.log(userData);
        },
        error: function () {
            console.error('Error fetching qualification options');
            alert('Error fetching qualification options. Please try again.');
        },
    });
}
function submitQualification() {
    const qualificationSelect = document.getElementById("qualificationSelect");
    const qualification = qualificationSelect.value;

    if (qualification) {
        const confirmed = window.confirm("Are you pursuing this qualification?");

        // Add the user's choice to userData
        userData.pursuing = confirmed ? "Yes" : "No";

        // Fetch the ID corresponding to the selected qualification
        fetch(`/api/QualificationTyp/GetIdByName?name=${encodeURIComponent(qualification)}`)
            .then(response => response.json())
            .then(data => {
                if (data) {
                    // Process the submitted qualification and ID, and proceed to the next step
                    userData.qualification = qualification;
                    displaySubmittedInput("Qualification", qualification, true);
                    qualificationSelect.removeEventListener("change", submitQualification);
                    console.log(userData);

                    // Clear the dropdown menu
                    qualificationSelect.value = "";

                    // Check if storedTestCode is equal to "PEXCGR2312O1009"
                    if (storedReportId === "76DD3251-3A3F-48DE-8D0D-CBAE60047743") {
                        // If true, call askGender() instead of askCoreStream()
                        askOrganization();
                        console.log(userData);
                        // Submit data to the server or handle the completion of the form
                        // You can call the next function or submit the entire form here
                    } else {
                        // If false, call askCoreStream()
                        askOrganization();
                        console.log(userData);
                        // Submit data to the server or handle the completion of the form
                        // You can call the next function or submit the entire form here
                    }
                } else {
                    // Handle the case where the ID is not found for the selected qualification
                    alert('Error: ID not found for the selected qualification.');
                }
            })
            .catch(error => {
                console.error('Error fetching qualification ID:', error);
                alert('Error fetching qualification ID. Please try again.');
            });
    } else {
        // Handle the case where the qualification is not selected
        alert('Please select your qualification.');
    }
}

function askCoreStream() {
    const qualificationSelect = document.getElementById("qualificationSelect");
    const messageBox = document.getElementById("messageBox");

    // Remove the existing country select if it exists
    if (qualificationSelect) {
        qualificationSelect.parentNode.removeChild(qualificationSelect);
    }

    // Update placeholder and message
    const dobInput = document.getElementById("dobInput");
    dobInput.placeholder = "Select your core stream";
    createMessageBox("Great! Please select your Core Stream:");

    // Create a select element for core stream
    const coreStreamSelect = document.createElement("select");
    coreStreamSelect.id = "coreStreamSelect";

    // Add placeholder option
    const placeholderOption = document.createElement("option");
    placeholderOption.value = "";
    placeholderOption.text = "Select your core stream";
    placeholderOption.disabled = true;
    placeholderOption.selected = true;
    coreStreamSelect.appendChild(placeholderOption);

    // Fetch core stream options from the server using an API endpoint
    $.ajax({
        type: 'GET',
        url: '/api/Core', // Replace with your actual API endpoint
        contentType: 'application/json',
        success: function (coreStreamOptions) {
            // Log the response in the console
            console.log('Response from server:', coreStreamOptions);

            // Add core stream options based on the data received
            for (const coreStream of coreStreamOptions) {
                const option = document.createElement("option");
                option.value = coreStream.toLowerCase();
                option.text = coreStream;
                coreStreamSelect.appendChild(option);
            }

            // Replace the existing input with the new select element
            dobInput.parentNode.insertBefore(coreStreamSelect, dobInput.nextSibling);

            // Attach the event listener for submitCoreStream
            coreStreamSelect.addEventListener("change", submitCoreStream);
            console.log(userData);
        },
        error: function () {
            console.error('Error fetching core stream options');
            alert('Error fetching core stream options. Please try again.');
        },
    });
}

function submitCoreStream() {
    const coreStreamSelect = document.getElementById("coreStreamSelect");
    const coreStream = coreStreamSelect.value;

    if (coreStream) {
        // Fetch the ID corresponding to the selected core stream
        fetch(`/api/Core/GetIdByStreamName?streamName=${encodeURIComponent(coreStream)}`)
            .then(response => response.json())
            .then(data => {
                if (data) {
                    // Process the submitted core stream and ID, and proceed to the next step
                    userData.coreStream = { name: coreStream, id: data };
                    displaySubmittedInput("Core Stream", coreStream, true);
                    coreStreamSelect.removeEventListener("change", submitCoreStream);
                    console.log(userData);
                    coreStreamId = data;

                    // Clear the dropdown menu
                    coreStreamSelect.value = "";

                    // Continue with the next step (ask specialization)
                    askSpecialization(data);
                } else {
                    // Handle the case where the ID is not found for the selected core stream
                    alert('Error: ID not found for the selected core stream.');
                }
            })
            .catch(error => {
                console.error('Error fetching core stream ID:', error);
                alert('Error fetching core stream ID. Please try again.');
            });
    } else {
        // Handle the case where the core stream is not selected
        alert('Please select your core stream.');
    }
}
function askSpecialization(coreStreamId) {
    const coreStreamSelect = document.getElementById("coreStreamSelect");
    const messageBox = document.getElementById("messageBox");

    // Remove the existing specialization select if it exists
    if (coreStreamSelect) {
        coreStreamSelect.parentNode.removeChild(coreStreamSelect);
    }


    // Update placeholder and message
    createMessageBox("Great! Please select your specializations");
    const dobInput = document.getElementById("dobInput");
    dobInput.placeholder = "Select your specializations";

    // Fetch specialization options from the server using an API endpoint
    $.ajax({
        type: 'GET',
        url: `/api/Specialization/GetSpecializationsByCoreStreamId?coreStreamId=${encodeURIComponent(coreStreamId)}`,
        contentType: 'application/json',
        success: function (specializationOptions) {
            // Log the response in the console
            console.log('Response from server:', specializationOptions);

            // Map specialization options to the format expected by checkboxselect
            const mappedOptions = specializationOptions.map(specialization => ({
                item1: specialization,
                item2: specialization.toLowerCase()
            }));

            // Call the checkboxselect function to display checkboxes
            checkboxselect(mappedOptions, askInterest);
        },
        error: function () {
            console.error('Error fetching specialization options');
            alert('Error fetching specialization options. Please try again.');
        },
    });
}


function checkboxselect(optionsData, onNextQuestion) {
    // Create a new message box
    let newMessageBox = document.createElement("div");

    // Create checkboxes for each option
    for (const optionData of optionsData) {
        // Create a div to group each checkbox and label
        const optionContainer = document.createElement("div");

        // Create a checkbox
        const checkboxOption = document.createElement("input");
        checkboxOption.type = "checkbox";
        checkboxOption.name = "specialization"; // Ensure all checkboxes share the same name
        checkboxOption.value = optionData.item2;
        checkboxOption.id = `specialization_${optionData.item2}`; // Unique ID for each checkbox

        // Create a label associated with the checkbox
        const label = document.createElement("label");
        label.setAttribute("for", checkboxOption.id);
        label.textContent = optionData.item1;

        // Append the checkbox and label to the optionContainer
        optionContainer.appendChild(checkboxOption);
        optionContainer.appendChild(label);

        // Add some space between options
        optionContainer.style.marginBottom = "10px";

        // Set the display property to "block" for vertical layout
        optionContainer.style.display = "block";

        // Append the optionContainer to the message box
        newMessageBox.appendChild(optionContainer);
    }

    // Append the new message box to the chat container
    document.querySelector(".chat-container").appendChild(newMessageBox);

    newMessageBox.addEventListener('change', function () {
        const selectedCheckboxes = newMessageBox.querySelectorAll('input[name="specialization"]:checked');

        if (selectedCheckboxes.length > 0 && selectedCheckboxes.length <= 6) {
            // Assuming userData is a global object
            userData.selectedSpecializations = Array.from(selectedCheckboxes).map(checkbox => checkbox.value).join(",");
            console.log(userData);

            // You may choose to keep or remove the current message box based on your requirements
            // If you want to keep it visible, comment out or remove the following line

            // newMessageBox.parentNode.removeChild(newMessageBox);

            specialization = true;
        } else if (selectedCheckboxes.length > 6) {
            // If more than 6 checkboxes are selected, uncheck the last checkboxes
            alert('You can select Minimum five')
        }
    });
}
let shouldCallAskInterest = false;
if (shouldCallAskInterest) {
    askInterest();
} else {
    // Handle the case when the function should not be called
    console.log("Skipping askInterest function call.");
}

let specialization = false;
function askInterest() {

    const messageBox = document.getElementById("messageBox");

    // Remove the existing education level select if it exists
    const specializationSelect = document.getElementById("specializationSelect");
    if (specializationSelect) {
        specializationSelect.parentNode.removeChild(specializationSelect);
    }

    // Update placeholder and message
    const dobInput = document.getElementById("dobInput");
    dobInput.placeholder = "Select your interests";
    createMessageBox("Great! Please select your Interests:");

    // Create a select element for interests
    const interestSelect = document.createElement("select");
    interestSelect.id = "interestSelect";

    // Add placeholder option
    const placeholderOption = document.createElement("option");
    placeholderOption.value = "";
    placeholderOption.text = "Select your interests";
    placeholderOption.disabled = true;
    placeholderOption.selected = true;
    interestSelect.appendChild(placeholderOption);

    // List of interest options
    const interestOptions = [
        "I want a Job.I will not study further", "10th/Matriculation", "12th/Higher Secondary", "Graduate Certificate/Diploma", "Certification", "Bachelors", "Masters", "M.Phil", "Doctorate", "Post-Doctorate"







        // ... Add more options as needed
    ];

    // Add interest options
    for (const interest of interestOptions) {
        const option = document.createElement("option");
        option.value = interest.toLowerCase();
        option.text = interest;
        interestSelect.appendChild(option);
    }

    // Replace the existing input with the new select element
    dobInput.parentNode.insertBefore(interestSelect, dobInput.nextSibling);

    // Attach the event listener for submitInterest
    interestSelect.addEventListener("change", submitInterest);
    console.log(userData);
}

function submitInterest() {
    const interestSelect = document.getElementById("interestSelect");
    const selectedInterest = interestSelect.value;

    // Process the submitted interest and proceed to the next step
    userData.interest = selectedInterest;
    displaySubmittedInput("Interest", selectedInterest, true);
    interestSelect.removeEventListener("change", submitInterest);
    console.log(userData);
    askIndustry();
    // Clear the dropdown menu
    interestSelect.value = "";

    // Submit data to the server or handle the completion of the form
    // You can call the next function or submit the entire form here
    // For example, you can call a function like askNextStep() or submitForm() here
}
function checkboxselectIndustries(optionsData, onNextQuestion) {
    // Create a new message box
    let newMessageBox = document.createElement("div");

    // Create checkboxes for each industry option
    for (const optionData of optionsData) {
        // Create a div to group each checkbox and label
        const optionContainer = document.createElement("div");

        // Create a checkbox
        const checkboxOption = document.createElement("input");
        checkboxOption.type = "checkbox";
        checkboxOption.name = "industryCheckbox"; // Ensure all checkboxes share the same name
        checkboxOption.value = optionData.item2;
        checkboxOption.id = `industryCheckbox_${optionData.item2}`; // Unique ID for each checkbox

        // Create a label associated with the checkbox
        const label = document.createElement("label");
        label.setAttribute("for", checkboxOption.id);
        label.textContent = optionData.item1;

        // Append the checkbox and label to the optionContainer
        optionContainer.appendChild(checkboxOption);
        optionContainer.appendChild(label);

        // Add some space between options
        optionContainer.style.marginBottom = "10px";

        // Set the display property to "block" for vertical layout
        optionContainer.style.display = "block";

        // Append the optionContainer to the message box
        newMessageBox.appendChild(optionContainer);
    }

    // Append the new message box to the chat container
    document.querySelector(".chat-container").appendChild(newMessageBox);

    newMessageBox.addEventListener('change', function () {
        const selectedCheckboxes = newMessageBox.querySelectorAll('input[name="industryCheckbox"]:checked');

        if (selectedCheckboxes.length > 0 && selectedCheckboxes.length <= 5) {
            // Assuming userData is a global object
            userData.selectedIndustries = Array.from(selectedCheckboxes).map(checkbox => checkbox.value).join(",");
            console.log(userData);

            // You may choose to keep or remove the current message box based on your requirements
            // If you want to keep it visible, comment out or remove the following line

            //newMessageBox.parentNode.removeChild(newMessageBox);

            Indusry = true;

            // Call the onNextQuestion function after setting Indusry to true

        } else if (selectedCheckboxes.length > 5) {
            // If more than 5 checkboxes are selected, uncheck the last checkboxes
            alert('You can select a maximum of five industries.');
        }
    });
}

let Indusry = false;

function askIndustry() {

    const dobInput = document.getElementById("dobInput");
    const interestSelect = document.getElementById("interestSelect");
    if (interestSelect) {
        interestSelect.parentNode.removeChild(interestSelect);
    }

    dobInput.placeholder = "Select your industry";
    createMessageBox("Great! Please select your five preferred Industries:");

    // Static industry options
    const staticIndustryOptions = [
        "Textiles", "Aviation", "Ports", "Pharmaceuticals", "Tourism and Hospitality",
        "Science and Technology", "E-commerce", "IT & ITES", "Education and Training",
        "Services", "Manufacturing", "Consumer Durables", "Oil and Gas", "Auto Components",
        "Retail", "Gems and Jewellery", "Healthcare", "Roads", "Insurance", "Banking",
        "Telecommunications", "Power", "Automobiles", "Cement", "Real Estate", "Railways",
        "Agriculture and Allied Industries", "Media and Entertainment", "Steel",
        "Engineering and Capital Goods",
        // ... Add more options as needed
    ];

    // Map industry options to the format expected by checkboxselect
    const mappedOptions = staticIndustryOptions.map(industry => ({
        item1: industry,
        item2: industry.toLowerCase()
    }));

    // Call the checkboxselectIndustries function to display checkboxes
    checkboxselectIndustries(mappedOptions, askOrganization);
}


function displaySubmittedInput(type, value, isUserMessage = true) {
    // Assuming you have an element to display messages with class "chat-container"
    const chatContainer = document.querySelector(".chat-container");

    // Create a new message element
    const messageElement = document.createElement("div");
    messageElement.classList.add(isUserMessage ? "user-message" : "system-message");
    messageElement.innerHTML = `<p><strong>${type}:</strong> ${value}</p>`;

    // Append the message to the chat container
    chatContainer.appendChild(messageElement);

    // Add a line break
    let lineBreak = document.createElement("hr");
    chatContainer.appendChild(lineBreak);
}

let isAskTestCodeCalled = false;


function askTestCode() {
    isAskTestCodeCalled = true;

    // Ask the user if they have a test code
    const hasTestCode = confirm('Do you have a test code? Click OK for Yes, Cancel for No.');

    if (hasTestCode) {

        console.log(userData);

        const input = document.getElementById("dobInput");
        input.placeholder = "Enter the test code";
        createMessageBox("You're almost there! Please enter the test code:");

        document.querySelector(".astro-button-container").style.display = "none";

        // Remove the event listener for submitPassword if it exists
        input.removeEventListener("change", submitPassword);

        // Attach the event listener for submitTestCode
        input.addEventListener("change", submitTestCode);

        // Log the current value of the input
        console.log('askTestCode - Current input value:', input.value);
    } else {
        // If the user doesn't have a test code, display a message to connect on WhatsApp and email
        createMessageBox("Connect with Us Please connect with us on WhatsApp and email for assistance.");
    }
}
let storedTestCode = "";

function submitTestCode() {
    isAskTestCodeCalled = false;
    const testCode = document.getElementById("dobInput").value;
    if (testCode) {
        // Log the test code before verification
        console.log('submitTestCode - Test code before verification:', testCode);

        storedTestCode = testCode;
        // Assuming you have a function to verify the test code against the database
        verifyTestCode(testCode);
        document.getElementById("dobInput").removeEventListener("change", submitTestCode);
    } else {
        // Handle the case where the test code is not entered
        alert('Please enter the test code.');
    }
}

function verifyTestCode(testCode) {
    isAskTestCodeCalled = false;
    // Log the test code being sent in the AJAX call
    console.log('verifyTestCode - Test code being sent in AJAX:', testCode);

    // Replace this with your actual logic to check the test code against the database
    $.ajax({
        type: 'POST',
        url: '/api/TestCode/CheckTestCodeValidity',
        contentType: 'application/json',
        data: JSON.stringify({ Code: testCode }),
        success: function (response) {
            if (response.isValid) {

                const reportId = response.reportId;  // Assuming the response contains the ReportId
                console.log(`Test code  is valid. Corresponding Report ID is: ${reportId}`);


                // Log the entire response for further inspection
                console.log('Server Response:', response);

                // Test code is valid, proceed with further actions
                alert('Test code is valid. Account creation successful!');
                submitUserDataToDatabase(userData);

                displaySubmittedInput("Test Code", testCode, true);
                clearMessageBoxes();

                document.getElementById("dobInput").removeEventListener("change", submitTestCode);
                document.getElementById("dobInput").value = "";
                isAskTestCodeCalled = false;

                storedReportId = reportId;
                askConsent();


                // Additional actions or redirection can be added here

                // Now, take input for further steps (if needed)
            } else {


                alert('Test code is Invalid');
                askTestCode();
                // Optionally, you can ask the user to re-enter the test code or take other actions
            }
        },
        error: function (error) {
            console.error('Error verifying test code:', error.responseJSON);
        }
    });
}

function askemail() {
    document.getElementById("dobInput").placeholder = "Enter your email address";
    createMessageBox("Great! Let's start with your email address Please enter your email:");


    document.querySelector(".astro-button-container").style.display = "none";

    currentStep = 2; // Set the step to 2 for email input
}

function askPhone() {
    document.getElementById("dobInput").placeholder = "Enter your phone number";
    createMessageBox("Great! Let's start with your phone number. Please enter your phone number");

    document.querySelector(".astro-button-container").style.display = "none";
    currentStep = 3; // Set the step to 3 for phone input
}

function askadhar() {
    document.getElementById("dobInput").placeholder = "Enter your Adhar number";
    createMessageBox("Great! Let's start with your Adhar number. Please enter your Adhar number:");



    document.querySelector(".astro-button-container").style.display = "none";
    currentStep = 4; // Set the step to 4 for Adhar input
}







function handleMultipleSubmit() {
    const input = document.getElementById("dobInput");
    const placeholder = input.placeholder.toLowerCase();

    // Validate and set userData based on placeholder
    let isValidInput = false;
    let inputType = "";

    if (placeholder.includes("phone number")) {
        const phoneNumber = input.value;
        inputType = "Phone Number";
        if (isValidPhoneNumber(phoneNumber)) {
            userData.Mobile_No = phoneNumber;

            isValidInput = true;
            displaySubmittedInput(inputType, phoneNumber, true);
        } else {
            alert('Invalid phone number. Please enter a 10-digit number.');
        }
    } else if (placeholder.includes("adhar number")) {
        const adharNumber = input.value;
        inputType = "Aadhar Number";
        if (isValidAdharNumber(adharNumber)) {
            userData.Adhar_No = adharNumber;
            isValidInput = true;
            displaySubmittedInput(inputType, adharNumber, true);
        } else {
            alert('Invalid Aadhar number. Please enter a 12-digit number.');
        }
    } else if (placeholder.includes("email address")) {
        const emailAddress = input.value;
        inputType = "Email Address";
        if (isValidEmail(emailAddress)) {
            userData.Email_Address = emailAddress;
            isValidInput = true;

            // Display submitted input in a message box
            displaySubmittedInput(inputType, emailAddress, true);
        } else {
            alert('Invalid email address. Please enter a valid email.');
        }
    }
    if (isAskTestCodeCalled) {
        submitTestCode();

    }


    // Check for duplicates before proceeding
    if (isValidInput) {
        checkForDuplicatesBeforeSubmit();

        // Display submitted input in a message box

    }
    if (specialization && !Indusry) {
        askInterest();
    }
    if (Indusry && !onNext && !testInProgress) {
        askOrganization();
    }
    if (onNext && testInProgress) {
        onNextQuestion();
    }


    // Call handleRashiSubmit if isDobSubmit is false
    if (!isDobSubmit) {
        handleRashiSubmit();
    }


    // Call handleDateOfBirthSubmit if isDobSubmit is true
    if (isDobSubmit) {
        handleDateOfBirthSubmit();
    }
}



function checkForDuplicatesBeforeSubmit() {
    const input = document.getElementById("dobInput");
    const placeholder = input.placeholder.toLowerCase();

    let inputData;
    if (placeholder.includes("phone number")) {
        inputData = { Mobile_No: input.value };
    } else if (placeholder.includes("adhar number")) {
        inputData = { Adhar_No: input.value };
    } else if (placeholder.includes("email address")) {
        inputData = { Email_Address: input.value };
    }

    // Check for duplicates before proceeding
    $.ajax({
        type: 'POST',
        url: '/api/Candidate/CheckDuplicate',
        contentType: 'application/json',
        data: JSON.stringify(inputData),
        success: function (response) {
            console.log(response);


            if (response.exists) {
                // Duplicate exists, ask for password
                document.getElementById("dobInput").value = "";
                const password = response.password;
                userData.name = response.name;
                userData.gender = response.gender;
                userData.country = response.country;
                userData.qualification = response.qualification;
                userData.Dob = response.dob;
                userData.organization = response.organization;
                // Assuming the response contains the ReportId
                console.log(`email is valid. Corresponding password is: ${password}`);
                askPassword(password);
            } else {
                // No duplicate found, proceed with other actions
                document.getElementById("dobInput").value = "";
                createPassword();

            }
        },
        error: function (error) {
            console.error('Error checking duplicate:', error.responseJSON);
        }
    });
}

function createPassword() {
    const input = document.getElementById("dobInput");
    input.placeholder = "Create your password";

    // Use a confirm dialog to ask if the user wants to create a default password
    const createDefaultPassword = confirm("Do you want to create a default password (Career@123#)? Click 'Ok' to continue with the default password or 'Cancel' to create a new one.");

    if (createDefaultPassword) {
        // Set the default password
        const defaultPassword = "Career@123#";
        userData.Password = defaultPassword;
        displaySubmittedInput("Password", defaultPassword, true);
        askTestCode();
        isSubmitnewPasswordEnabled = false;

        // Additional actions for using default password
        // ...

        // Reset the input or clear the data
        input.value = "";
    } else {
        createMessageBox("You're creating a new account. Please create your password");

        // Assuming you have a function to handle password creation
        // For example, a function named submitnewPassword
        input.addEventListener("change", function () {
            submitnewPassword();
        });
    }
}

let isSubmitnewPasswordEnabled = true;

function submitnewPassword() {
    const passwordInput = document.getElementById("dobInput");
    const password = passwordInput.value;

    if (isSubmitnewPasswordEnabled && password) {
        userData.Password = password;
        displaySubmittedInput("Password", password, true);

        askTestCode();
        isSubmitnewPasswordEnabled = false;

        // Other UI changes or actions as needed

        // Reset the input or clear the data
        passwordInput.value = "";
    }
}

function isValidPhoneNumber(phoneNumber) {
    // Check if the phone number is a 10-digit number
    return /^\d{10}$/.test(phoneNumber);
}

function isValidAdharNumber(adharNumber) {
    // Check if the Aadhar number is a 12-digit number
    return /^\d{12}$/.test(adharNumber);
}

function isValidEmail(email) {
    // Check if the email address is valid
    return /\S+@\S+\.\S+/.test(email);
}


function askPassword(password) {
    const input = document.getElementById("dobInput");
    input.placeholder = "Enter your password";
    createMessageBox("Account exists. Please enter your password");
    document.querySelector(".astro-button-container").style.display = "none";

    // Pass a function reference without invoking it
    input.addEventListener("change", function () {
        submitPassword(password);
    });
}

let isSubmitPasswordEnabled = true;

function submitPassword(existingPassword) {
    const passwordInput = document.getElementById("dobInput");
    const enteredPassword = passwordInput.value;

    console.log('submitPassword - Function called');  // Log a message

    if (isSubmitPasswordEnabled && enteredPassword) {
        userData.Password = enteredPassword;
        if (enteredPassword === existingPassword) {
            console.log("Password is correct. Proceed with additional actions if needed.");
            displaySubmittedInput("Password", enteredPassword, true);
            askTestCode();

            // Set the flag to false to prevent further calls to submitPassword
            isSubmitPasswordEnabled = false;

            // Call the function to perform additional actions
            // ...
        } else {
            // Display an error message or take other actions
            const useDefaultPassword = confirm("Incorrect password. Do you want to use the default password Career@123#?");

            if (useDefaultPassword) {
                // Set the default password
                userData.Password = "Career@123#";

                // Proceed with additional actions or logic
                displaySubmittedInput("Password", userData.Password, true);
                askTestCode();

                // Set the flag to false to prevent further calls to submitPassword
                isSubmitPasswordEnabled = false;
            } else {
                createPassword();

                // Allow the user to try entering the password again or take other actions
                // ...
            }
        }

        // Reset the input or clear the data
        passwordInput.value = "";

        // Continue with other UI changes or actions as needed
    }
}





function createMessageBox(title) {
    // Create a new message box
    let newMessageBox = document.createElement("div");
    newMessageBox.className = "message-box my-message";

    // Add the title
    newMessageBox.innerHTML += `<p>${title}</p>`;

    // Add the content


    // Add timestamp


    // Append the new message box to the chat container
    document.querySelector(".chat-container").appendChild(newMessageBox);

    // Add a line break
    let lineBreak = document.createElement("hr");
    document.querySelector(".chat-container").appendChild(lineBreak);
}

function clearMessageBoxes() {
    // Clear all existing message boxes in the chat container
    const chatContainer = document.querySelector(".chat-container");
    chatContainer.innerHTML = "";
}

let rashiData = {
    "Mesha": {
        "AreaOfStudy": ["Engineering", "Medicine", "Sports", "Leadership", "Entrepreneurship"],
        "Jobs": ["Police Officer", "Entrepreneur", "Sales", "Military", "Construction"],
        "Industries": ["Information Technology", "Real Estate", "Aerospace", "Manufacturing", "Automotive"]
    },
    "Vrishabha": {
        "AreaOfStudy": ["Finance", "Agriculture", "Food Technology", "Environmental Science", "Music"],
        "Jobs": ["Banking", "Chef", "Farming", "Environmentalist", "Marketing"],
        "Industries": ["Banking", "Agriculture", "Food Processing", "Art & Culture", "Music Industry"]
    },
    "Mithuna": {
        "AreaOfStudy": ["Communication", "Journalism", "Public Relations", "Language Studies", "Travel and Tourism"],
        "Jobs": ["Writer", "Public Relations", "Sales", "Marketing", "Tour Guide"],
        "Industries": ["Media", "Publishing", "Advertising", "Aviation", "Information Technology"]
    },
    "Karka": {
        "AreaOfStudy": ["Psychology", "Nursing", "History", "Education", "Childcare"],
        "Jobs": ["Psychologist", "Nurse", "Teaching", "Social Work", "Pediatrician"],
        "Industries": ["Education", "Healthcare", "Archaeology", "Real Estate", "Tourism"]
    },
    "Simha": {
        "AreaOfStudy": ["Performing Arts", "Acting", "Management", "Leadership", "Public Speaking"],
        "Jobs": ["Actor", "Manager", "Entrepreneur", "Politician", "Public Relations"],
        "Industries": ["Entertainment", "Fashion", "Government", "Media", "Public Speaking"]
    },
    "Kanya": {
        "AreaOfStudy": ["Medicine", "Nutrition", "Research", "Accounting", "Quality Control"],
        "Jobs": ["Doctor", "Dietitian", "Scientist", "Accountant", "Quality Analyst"],
        "Industries": ["Healthcare", "Food Industry", "Research & Development", "Banking", "Pharmaceutical"]
    },
    "Tula": {
        "AreaOfStudy": ["Law", "Fashion Design", "Interior Design", "Event Management", "Diplomacy"],
        "Jobs": ["Lawyer", "Fashion Designer", "Interior Designer", "Event Planner", "Diplomat"],
        "Industries": ["Legal Services", "Fashion", "Real Estate", "Hospitality", "International Relations"]
    },
    "Vrischika": {
        "AreaOfStudy": ["Occult Sciences", "Detective Work", "Psychology", "Surgery", "Research"],
        "Jobs": ["Astrologer", "Detective", "Psychologist", "Surgeon", "Scientist"],
        "Industries": ["Occult Sciences", "Detective Agencies", "Research Institutes", "Pharmaceuticals", "Mining"]
    },
    "Dhanu": {
        "AreaOfStudy": ["Philosophy", "Spirituality", "Teaching", "Publishing", "Adventure"],
        "Jobs": ["Philosopher", "Spiritual Leader", "Teacher", "Publisher", "Travel Agent"],
        "Industries": ["Education", "Spirituality", "Tourism", "Journalism", "Adventure Tourism"]
    },
    "Makara": {
        "AreaOfStudy": ["Engineering", "Finance", "Administration", "Architecture", "Politics"],
        "Jobs": ["Engineer", "Financial Advisor", "Administrator", "Architect", "Politician"],
        "Industries": ["Construction", "Finance", "Government", "Real Estate", "Politics"]
    },
    "Kumbha": {
        "AreaOfStudy": ["Science", "Technology", "Invention", "Social Work", "Humanitarianism"],
        "Jobs": ["Scientist", "Technologist", "Inventor", "Social Worker", "Activist"],
        "Industries": ["Research", "Technology", "Invention", "NGOs", "Environmental Services"]
    },
    "Meena": {
        "AreaOfStudy": ["Creative Arts", "Oceanography", "Music", "Poetry", "Film Production"],
        "Jobs": ["Artist", "Oceanographer", "Musician", "Poet", "Filmmaker"],
        "Industries": ["Art & Culture", "Research", "Entertainment", "Tourism", "Film Industry"]
    }
};
const nakshatraData = {
    "Anuradha": {
        "AreaOfStudy": ["Psychology", "Law", "Political Science", "Social Work", "Counseling"],
        "Jobs": ["Detective", "Politician", "Psychologist", "Social Worker", "Diplomat"],
        "Industries": ["Research", "Legal", "Politics", "Social Services", "Diplomacy"]
    },
    "Ardra": {
        "AreaOfStudy": ["Meteorology", "Writing", "Environmental Science", "Journalism", "Research"],
        "Jobs": ["Meteorologist", "Writer", "Environmentalist", "Journalist", "Researcher"],
        "Industries": ["Weather Forecasting", "Media", "Environmental", "Journalism", "Research Institutions"]
    },
    "Ashlesha": {
        "AreaOfStudy": ["Ayurveda", "Psychology", "Occult Sciences", "Counseling", "Spirituality"],
        "Jobs": ["Ayurvedic Doctor", "Psychologist", "Astrologer", "Counselor", "Spiritual Leader"],
        "Industries": ["Health and Wellness", "Psychology", "Astrology", "Wellness Centers", "Spiritual Organizations"]
    },
    "Ashwini": {
        "AreaOfStudy": ["Medicine", "Engineering", "Entrepreneurship", "Leadership", "Sports"],
        "Jobs": ["Surgeon", "Engineer", "Entrepreneur", "CEO", "Athlete"],
        "Industries": ["Healthcare", "Technology", "Startups", "Sports Management", "Athletics"]
    },
    "Bharani": {
        "AreaOfStudy": ["Music", "Acting", "Agriculture", "Archaeology", "Real Estate"],
        "Jobs": ["Musician", "Actor", "Farmer", "Archaeologist", "Real Estate Agent"],
        "Industries": ["Entertainment", "Agriculture", "Archaeology", "Real Estate", "Construction"]
    },
    "Chitra": {
        "AreaOfStudy": ["Fine Arts", "Fashion Design", "Architecture", "Interior Design", "Photography"],
        "Jobs": ["Artist", "Fashion Designer", "Architect", "Interior Designer", "Photographer"],
        "Industries": ["Art", "Fashion", "Architecture", "Interior Design", "Photography"]
    },
    "Dhanishta": {
        "AreaOfStudy": ["Astrology", "Music", "Technology", "Astronomy", "Event Management"],
        "Jobs": ["Astrologer", "Musician", "IT Professional", "Astronomer", "Event Planner"],
        "Industries": ["Astrology", "Music", "Technology", "Astronomy", "Event Management"]
    },
    "Hasta": {
        "AreaOfStudy": ["Astrology", "Healing Arts", "Research", "Writing", "Data Analysis"],
        "Jobs": ["Astrologer", "Healer", "Researcher", "Writer", "Data Analyst"],
        "Industries": ["Astrology", "Alternative Medicine", "Research Institutions", "Media", "Data Analysis"]
    },
    "Jyeshtha": {
        "AreaOfStudy": ["Occult Sciences", "Psychology", "Law", "Criminal Justice", "Tantra"],
        "Jobs": ["Astrologer", "Psychologist", "Lawyer", "Detective", "Spiritual Teacher"],
        "Industries": ["Astrology", "Psychology", "Legal", "Law Enforcement", "Spiritual Organizations"]
    },
    "Krittika": {
        "AreaOfStudy": ["Engineering", "Cooking", "Entrepreneurship", "Agriculture", "Leadership"],
        "Jobs": ["Engineer", "Chef", "Entrepreneur", "Farmer", "CEO"],
        "Industries": ["Technology", "Culinary", "Startups", "Agriculture", "Leadership"]
    },
    "Magha": {
        "AreaOfStudy": ["History", "Government", "Leadership", "Public Relations", "Performing Arts"],
        "Jobs": ["Historian", "Politician", "CEO", "PR Specialist", "Actor"],
        "Industries": ["Education", "Government", "Leadership", "Entertainment", "Arts"]
    },
    "Mrigashira": {
        "AreaOfStudy": ["Botany", "Photography", "Writing", "Fashion Design", "Interior Design"],
        "Jobs": ["Botanist", "Photographer", "Writer", "Fashion Designer", "Interior Designer"],
        "Industries": ["Environmental", "Media", "Writing", "Fashion", "Interior Design"]
    },
    "Mula": {
        "AreaOfStudy": ["Occult Sciences", "Psychology", "Research", "Law", "Counseling"],
        "Jobs": ["Astrologer", "Psychologist", "Researcher", "Lawyer", "Counselor"],
        "Industries": ["Occult Sciences", "Psychology", "Research Institutions", "Legal", "Social Services"]
    },
    "Punarvasu": {
        "AreaOfStudy": ["Education", "Writing", "Communication", "Public Relations", "Event Management"],
        "Jobs": ["Teacher", "Writer", "Communication", "PR Specialist", "Event Planner"],
        "Industries": ["Education", "Media", "Public Relations", "Event Management", "Education"]
    },
    "Purva Ashadha": {
        "AreaOfStudy": ["Philosophy", "Law", "Politics", "Social Work", "Religious Studies"],
        "Jobs": ["Philosopher", "Lawyer", "Politician", "Social Worker", "Religious Leader"],
        "Industries": ["Education", "Legal", "Politics", "Social Services", "Religious Organizations"]
    },
    "Purva Bhadrapada": {
        "AreaOfStudy": ["Healing Arts", "Psychology", "Research", "Environmental Science", "Yoga"],
        "Jobs": ["Healer", "Psychologist", "Researcher", "Environmentalist", "Yoga Instructor"],
        "Industries": ["Wellness Centers", "Psychology", "Research Institutions", "Environmental", "Yoga"]
    },
    "Purva Phalguni": {
        "AreaOfStudy": ["Arts", "Acting", "Entertainment", "Event Management", "Hospitality"],
        "Jobs": ["Artist", "Actor", "Entertainer", "Event Planner", "Hotel Management"],
        "Industries": ["Arts", "Entertainment", "Event Management", "Hospitality", "Tourism"]
    },
    "Pushya": {
        "AreaOfStudy": ["Counseling", "Education", "Social Work", "Psychology", "Healthcare"],
        "Jobs": ["Counselor", "Teacher", "Social Worker", "Psychologist", "Doctor"],
        "Industries": ["Social Services", "Education", "Healthcare", "Psychology", "Medical"]
    },
    "Revati": {
        "AreaOfStudy": ["Music", "Writing", "Spirituality", "Healing Arts", "Astronomy"],
        "Jobs": ["Musician", "Writer", "Spiritual Leader", "Healer", "Astronomer"],
        "Industries": ["Entertainment", "Media", "Spiritual Organizations", "Alternative Medicine", "Astronomy"]
    },
    "Rohini": {
        "AreaOfStudy": ["Agriculture", "Cooking", "Fashion Design", "Music", "Real Estate"],
        "Jobs": ["Farmer", "Chef", "Fashion Designer", "Musician", "Real Estate Agent"],
        "Industries": ["Agriculture", "Culinary", "Fashion", "Music", "Real Estate"]
    },
    "Shatabhisha": {
        "AreaOfStudy": ["Technology", "Engineering", "Research", "Astrology", "Environmental Science"],
        "Jobs": ["IT Professional", "Engineer", "Researcher", "Astrologer", "Environmentalist"],
        "Industries": ["Technology", "Technology", "Research Institutions", "Astrology", "Environmental"]
    },
    "Shravana": {
        "AreaOfStudy": ["Education", "Government", "Music", "Communication", "Counseling"],
        "Jobs": ["Teacher", "Politician", "Musician", "PR Specialist", "Counselor"],
        "Industries": ["Education", "Government", "Music", "Media", "Social Services"]
    },
    "Swati": {
        "AreaOfStudy": ["Law", "Writing", "Communication", "Politics", "Event Management"],
        "Jobs": ["Lawyer", "Writer", "Communication", "Politician", "Event Planner"],
        "Industries": ["Legal", "Media", "Public Relations", "Politics", "Event Management"]
    },
    "Uttara Ashadha": {
        "AreaOfStudy": ["Leadership", "Management", "Entrepreneurship", "Politics", "Social Work"],
        "Jobs": ["CEO", "Manager", "Entrepreneur", "Politician", "Social Worker"],
        "Industries": ["Startups", "Management", "Politics", "Social Services", "Leadership"]
    },
    "Uttara Bhadrapada": {
        "AreaOfStudy": ["Healing Arts", "Psychology", "Law", "Social Work", "Religious Studies"],
        "Jobs": ["Healer", "Psychologist", "Lawyer", "Social Worker", "Religious Leader"],
        "Industries": ["Wellness Centers", "Psychology", "Legal", "Social Services", "Religious Organizations"]
    },
    "Uttara Phalguni": {
        "AreaOfStudy": ["Education", "Arts", "Government", "Entertainment", "Hospitality"],
        "Jobs": ["Teacher", "Artist", "Politician", "Entertainer", "Hotel Management"],
        "Industries": ["Education", "Arts", "Government", "Tourism", "Hospitality"]
    },
    "Vishakha": {
        "AreaOfStudy": ["Law", "Management", "Politics", "Finance", "Entrepreneurship"],
        "Jobs": ["Lawyer", "Manager", "Politician", "Financial Analyst", "Entrepreneur"],
        "Industries": ["Legal", "Management", "Politics", "Finance", "Startups"]
    },
};


let ascendantData = {
    "Aries": {
        "Jobs": ["Entrepreneur", "Military", "Athlete", "Surgeon", "Pilot"],
        "Industries": ["Business", "Defense", "Sports", "Healthcare", "Aviation"],
        "AreasOfStudy": ["Business Administration", "Military Science", "Sports Medicine", "Surgery", "Aeronautics"]
    },
    "Taurus": {
        "Jobs": ["Chef", "Banker", "Real Estate", "Interior Designer", "Landscaper"],
        "Industries": ["Culinary", "Finance", "Real Estate", "Interior Design", "Landscaping"],
        "AreasOfStudy": ["Culinary Arts", "Finance", "Real Estate Management", "Interior Design", "Horticulture"]
    },
    "Gemini": {
        "Jobs": ["Writer", "Journalist", "IT Consultant", "Public Relations", "Sales"],
        "Industries": ["Media", "Technology", "Communications", "Public Relations", "Sales"],
        "AreasOfStudy": ["Communication", "Journalism", "Information Technology", "Public Relations", "Marketing"]
    },
    "Cancer": {
        "Jobs": ["Nurse", "Teacher", "Social Worker", "Chef", "Historian"],
        "Industries": ["Healthcare", "Education", "Social Services", "Culinary", "History"],
        "AreasOfStudy": ["Nursing", "Education", "Social Work", "Culinary Arts", "History"]
    },
    "Leo": {
        "Jobs": ["Actor", "CEO", "Event Planner", "Marketing Director", "Fashion Designer"],
        "Industries": ["Entertainment", "Business", "Event Planning", "Marketing", "Fashion"],
        "AreasOfStudy": ["Performing Arts", "Business Administration", "Event Management", "Marketing", "Fashion Design"]
    },
    "Virgo": {
        "Jobs": ["Doctor", "Research Scientist", "Accountant", "Editor", "Quality Analyst"],
        "Industries": ["Healthcare", "Science", "Finance", "Publishing", "Quality Assurance"],
        "AreasOfStudy": ["Medicine", "Biomedical Science", "Accounting", "Editing", "Quality Management"]
    },
    "Libra": {
        "Jobs": ["Lawyer", "Mediator", "Counselor", "Fashion Stylist", "Event Coordinator"],
        "Industries": ["Legal", "Mediation", "Social Services", "Fashion", "Event Planning"],
        "AreasOfStudy": ["Law", "Mediation", "Psychology", "Fashion Design", "Event Management"]
    },
    "Scorpio": {
        "Jobs": ["Detective", "Psychologist", "Researcher", "Surgeon", "IT Security Analyst"],
        "Industries": ["Law Enforcement", "Psychology", "Research", "Healthcare", "Cybersecurity"],
        "AreasOfStudy": ["Criminology", "Psychology", "Research", "Surgery", "Cybersecurity"]
    },
    "Sagittarius": {
        "Jobs": ["Philosopher", "Travel Writer", "Teacher", "Outdoor Guide", "Entrepreneur"],
        "Industries": ["Philosophy", "Travel", "Education", "Outdoor Adventure", "Business"],
        "AreasOfStudy": ["Philosophy", "Travel Writing", "Education", "Outdoor Adventure", "Business Administration"]
    },
    "Capricorn": {
        "Jobs": ["CEO", "Economist", "Engineer", "Manager", "Investment Banker"],
        "Industries": ["Business", "Finance", "Engineering", "Management", "Investment Banking"],
        "AreasOfStudy": ["Business Administration", "Economics", "Engineering", "Management", "Finance"]
    },
    "Aquarius": {
        "Jobs": ["Scientist", "Technologist", "Humanitarian", "Activist", "Innovation Consultant"],
        "Industries": ["Science", "Technology", "Nonprofit", "Activism", "Consulting"],
        "AreasOfStudy": ["Science", "Technology", "Humanitarian Studies", "Activism", "Innovation Management"]
    },
    "Pisces": {
        "Jobs": ["Artist", "Psychologist", "Musician", "Healer", "Marine Biologist"],
        "Industries": ["Arts", "Psychology", "Music", "Holistic Healing", "Marine Biology"],
        "AreasOfStudy": ["Fine Arts", "Psychology", "Music", "Holistic Health", "Marine Biology"]
    },
};
let lagnaData = {
    "Mesha": {
        "AreaOfStudy": ["Engineering", "Medicine", "Military", "Sports", "Entrepreneurship"],
        "Jobs": ["Leadership", "Surgeon", "Athlete", "Entrepreneur", "Police Officer"],
        "Industries": ["Engineering", "Healthcare", "Defense", "Sports", "Business"]
    },
    "Vrishabha": {
        "AreaOfStudy": ["Finance", "Agriculture", "Music", "Art & Design", "Food Industry"],
        "Jobs": ["Banking", "Farmer", "Musician", "Artist", "Chef"],
        "Industries": ["Finance", "Agriculture", "Entertainment", "Food Production", "Hospitality"]
    },
    "Mithuna": {
        "AreaOfStudy": ["Communication", "Journalism", "Writing", "Public Relations", "Teaching"],
        "Jobs": ["Journalist", "Writer", "Public Relations", "Teacher", "Salesperson"],
        "Industries": ["Media", "Education", "Advertising", "Publishing", "Retail"]
    },
    "Karka": {
        "AreaOfStudy": ["Psychology", "Real Estate", "Nursing", "Social Work", "Hospitality"],
        "Jobs": ["Psychologist", "Real Estate Agent", "Nurse", "Social Worker", "Chef"],
        "Industries": ["Psychology", "Real Estate", "Healthcare", "Social Services", "Hospitality"]
    },
    "Simha": {
        "AreaOfStudy": ["Performing Arts", "Politics", "Management", "Entertainment", "Fashion"],
        "Jobs": ["Actor", "Politician", "Manager", "Entertainer", "Fashion Designer"],
        "Industries": ["Entertainment", "Politics", "Business", "Fashion", "Arts & Entertainment"]
    },
    "Kanya": {
        "AreaOfStudy": ["Medicine", "Nutrition", "Research", "Data Analysis", "Quality Control"],
        "Jobs": ["Doctor", "Nutritionist", "Researcher", "Data Analyst", "Quality Controller"],
        "Industries": ["Healthcare", "Nutrition", "Science", "Technology", "Quality Assurance"]
    },
    "Tula": {
        "AreaOfStudy": ["Law", "Fashion Design", "Diplomacy", "Interior Design", "Aesthetics"],
        "Jobs": ["Lawyer", "Fashion Designer", "Diplomat", "Interior Designer", "Aesthetician"],
        "Industries": ["Legal", "Fashion", "Diplomacy", "Interior Design", "Beauty"]
    },
    "Vrishchika": {
        "AreaOfStudy": ["Occult Sciences", "Detective Work", "Psychology", "Surgery", "Research"],
        "Jobs": ["Astrologer", "Detective", "Psychologist", "Surgeon", "Researcher"],
        "Industries": ["Occult Sciences", "Law Enforcement", "Psychology", "Healthcare", "Research"]
    },
    "Dhanu": {
        "AreaOfStudy": ["Philosophy", "Travel", "Teaching", "Philosophy", "Writing"],
        "Jobs": ["Philosopher", "Travel Agent", "Teacher", "Philosopher", "Writer"],
        "Industries": ["Education", "Travel", "Education", "Writing", "Tourism"]
    },
    "Makara": {
        "AreaOfStudy": ["Engineering", "Government", "Business", "Finance", "Administration"],
        "Jobs": ["Engineer", "Government Worker", "Businessperson", "Financial Analyst", "Administrator"],
        "Industries": ["Engineering", "Government", "Business", "Finance", "Administration"]
    },
    "Kumbha": {
        "AreaOfStudy": ["Science", "Technology", "Social Work", "Humanitarian", "Invention"],
        "Jobs": ["Scientist", "Technologist", "Social Worker", "Humanitarian Worker", "Inventor"],
        "Industries": ["Science", "Technology", "Social Services", "Nonprofit", "Invention"]
    },
    "Meena": {
        "AreaOfStudy": ["Art", "Healing", "Spiritualism", "Music", "Charity"],
        "Jobs": ["Artist", "Healer", "Spiritual Leader", "Musician", "Philanthropist"],
        "Industries": ["Arts", "Healthcare", "Religion", "Music", "Nonprofit"]
    },
    // ... (repeat for other Lagnas)
};
function startVedicProcess() {

    // Reset the submission flags
    isRashiSubmit = false;
    isNakshatraSubmit = false;
    isLagnaSubmit = false;

    // Display the initial question
    askQuestion("What is your rashi?", "Enter your Rashi");
}

function askQuestion(question, placeholder) {
    document.querySelector(".my-message").innerHTML = `
     
    `;

    document.querySelector(".chat-container").innerHTML += `
        <div class="message-box my-message">
            <p>${question}</p>
        </div>
    `;
    document.getElementById("dobInput").setAttribute("placeholder", placeholder);
    document.querySelector(".astro-button-container").style.display = "none";
}
function compareDataWithRashiNakshatraLagna(rashiInfo, nakshatraInfo, lagnaInfo) {
    console.log("Rashi Info:", rashiInfo);
    console.log("Rashi Input:", rashiInputValue);
    console.log("Nakshatra Input:", nakshatraInputValue);
    console.log("Lagna Input:", lagnaInputValue);
    // Check if the input parameters are defined
    if (!rashiInfo || !nakshatraInfo || !lagnaInfo) {
        console.error("One or more input parameters are undefined.");
        console.error("rashiInfo:", rashiInfo);
        console.error("nakshatraInfo:", nakshatraInfo);
        console.error("lagnaInfo:", lagnaInfo);
        return;
    }

    // Check if the expected properties exist in the input objects
    let rnlJobs = Array.isArray(rashiInfo.Jobs) ? rashiInfo.Jobs : [];
    let rnlIndustries = Array.isArray(rashiInfo.Industries) ? rashiInfo.Industries : [];
    let rnlAreasOfStudy = Array.isArray(rashiInfo.AreaOfStudy) ? rashiInfo.AreaOfStudy : [];

    let nakshatraJobs = Array.isArray(nakshatraInfo.Jobs) ? nakshatraInfo.Jobs : [];
    let nakshatraIndustries = Array.isArray(nakshatraInfo.Industries) ? nakshatraInfo.Industries : [];
    let nakshatraAreasOfStudy = Array.isArray(nakshatraInfo.AreaOfStudy) ? nakshatraInfo.AreaOfStudy : [];

    let lagnaJobs = Array.isArray(lagnaInfo.Jobs) ? lagnaInfo.Jobs : [];
    let lagnaIndustries = Array.isArray(lagnaInfo.Industries) ? lagnaInfo.Industries : [];
    let lagnaAreasOfStudy = Array.isArray(lagnaInfo.AreaOfStudy) ? lagnaInfo.AreaOfStudy : [];

    let combinedJobs = [...rnlJobs, ...nakshatraJobs, ...lagnaJobs];
    let combinedIndustries = [...rnlIndustries, ...nakshatraIndustries, ...lagnaIndustries];
    let combinedAreasOfStudy = [...rnlAreasOfStudy, ...nakshatraAreasOfStudy, ...lagnaAreasOfStudy];

    let jobReport = generateReport("Job", combinedJobs, "Jobs");
    let industryReport = generateReport("Industry", combinedIndustries, "Industries");
    let areaOfStudyReport = generateReport("Area of Study", combinedAreasOfStudy, "AreaOfStudy");

    createMessageBox("As per your stars, the most suitable jobs are:", jobReport);
    createMessageBox("As per your stars, the most suitable industries are:", industryReport);
    createMessageBox("As per your stars, the most suitable areas of study are:", areaOfStudyReport);
}
let rashiInputValue = "";
let nakshatraInputValue = "";
let lagnaInputValue = "";

function handleRashiSubmit() {
    // Clear previous message boxes


    if (!isRashiSubmit) {
        rashiInputValue = document.getElementById("dobInput").value;
        document.querySelector(".chat-container").innerHTML += `
            <div class="message-box my-message">
                <p>Your rashi is: ${rashiInputValue}</p>
                <span>08:08</span>
            </div>
        `;
        isRashiSubmit = true;
        askQuestion("What is your Nakshatra?", "Enter your Nakshatra");
    } else if (!isNakshatraSubmit) {
        nakshatraInputValue = document.getElementById("dobInput").value;
        document.querySelector(".chat-container").innerHTML += `
            <div class="message-box my-message">
                <p>Your nakshatra is: ${nakshatraInputValue}</p>
                <span>08:08</span>
            </div>
        `;
        isNakshatraSubmit = true;
        askQuestion("What is your lagna?", "Enter your Lagna");
    } else if (!isLagnaSubmit) {
        lagnaInputValue = document.getElementById("dobInput").value;
        document.querySelector(".chat-container").innerHTML += `
            <div class="message-box my-message">
                <p>Your lagna is: ${lagnaInputValue}</p>
                <span>08:08</span>
            </div>
        `;
        isLagnaSubmit = true;
        document.querySelector(".astro-button-container").style.display = "none";

        compareDataWithRashiNakshatraLagna(rashiData[rashiInputValue], nakshatraData[nakshatraInputValue], lagnaData[lagnaInputValue]);
    }

}


function handleUserInput() {
    let userInput = document.getElementById("userInput").value;
    document.querySelector(".chat-container").innerHTML += `
            <div class="message-box my-message">
                <p>${userInput}</p>
                <span>Current Time</span>
            </div>
        `
    document.querySelector(".astro-button-container").style.display = "none";
    // Add logic to handle user input, you can call other functions as needed
}


let sunsign;
let month; // Declare month globally
let day; // Declare day globally
let year; // Declare year globally
let step = 1; // Keep track of the step in the date input process

function handleDateOfBirthSubmit() {
    isDobSubmit = true;

    // Check the current step and proceed accordingly
    if (step === 1) {
        let yearInput = document.getElementById("dobInput");
        year = parseInt(yearInput.value, 10);

        // Proceed to the next step
        step++;
        document.querySelector(".my-message").innerHTML = `
            <p>Great! Now, enter the month of your date of birth (1-12):</p>
        `;
        yearInput.value = ""; // Clear the input for the next step
    } else if (step === 2) {
        let monthInput = document.getElementById("dobInput");
        month = parseInt(monthInput.value, 10);

        // Proceed to the next step
        step++;
        document.querySelector(".my-message").innerHTML = `
            <p>Almost there! Now, enter the day of your date of birth:</p>
        `;
        monthInput.value = ""; // Clear the input for the next step
    } else if (step === 3) {
        let dayInput = document.getElementById("dobInput");
        day = parseInt(dayInput.value, 10);

        // Get the Sunsign based on the date of birth
        sunsign = getSunsign(month, day);

        // Display the Sunsign
        document.querySelector(".chat-container").innerHTML += `
            <div class="message-box my-message">
                <p>Your Sunsign is: ${sunsign}</p>
                <span>08:08</span>
            </div>
        `;

        // Ask for the Ascendant Sign
        let ascendantOptions = Object.keys(ascendantData).map(sign => `<option value="${sign}">${sign}</option>`).join('');

        document.querySelector(".chat-container").innerHTML += `
            <div class="message-box my-message">
                <p>What is your Ascendant (Rising) Sign?</p>
                <select id="ascendantInput">
                    ${ascendantOptions}
                    <option value="unknown">I don't know</option>
                </select>
                <button class="ascendant-button" onclick="handleAscendantSubmit()">Submit</button>
                <span>08:08</span>
            </div>
        `;

        document.querySelector(".astro-button-container").style.display = "none";
    }
}
function compareDataWithAscendant(ascendantInfo, sunsign) {
    let ascendantJobs = Array.isArray(ascendantInfo.Jobs) ? ascendantInfo.Jobs : [];
    let ascendantIndustries = Array.isArray(ascendantInfo.Industries) ? ascendantInfo.Industries : [];
    let ascendantAreasOfStudy = Array.isArray(ascendantInfo.AreasOfStudy) ? ascendantInfo.AreasOfStudy : [];

    let sunsignJobs = data[sunsign].Jobs;
    let sunsignIndustries = data[sunsign].Industries;
    let sunsignAreasOfStudy = data[sunsign].AreasOfStudy;

    let combinedJobs = [...ascendantJobs, ...sunsignJobs];
    let combinedIndustries = [...ascendantIndustries, ...sunsignIndustries];
    let combinedAreasOfStudy = [...ascendantAreasOfStudy, ...sunsignAreasOfStudy];

    let jobReport = generateReport("Job", combinedJobs, "Jobs");
    let industryReport = generateReport("Industry", combinedIndustries, "Industries");
    let areaOfStudyReport = generateReport("Area of Study", combinedAreasOfStudy, "AreasOfStudy");

    createMessageBox("As per your stars, the most suitable jobs are:");
    console.log(combinedJobs);
    createMessageBox("As per your stars, the most suitable industries are:", industryReport);

    createMessageBox("As per your stars, the most suitable areas of study are:", areaOfStudyReport);
}
function handleAscendantSubmit() {
    let ascendantInput = document.getElementById("ascendantInput");
    let selectedAscendant = ascendantInput.value;

    console.log("Selected Ascendant:", selectedAscendant);

    // Handle the selected Ascendant Sign
    if (selectedAscendant === "unknown") {
        // Handle "I don't know" option
        document.querySelector(".chat-container").innerHTML += `
            <div class="message-box my-message">
                <p>That's okay! If you ever find out, feel free to let me know.</p>
                <span>08:08</span>
            </div>
        `;
    } else {
        // Handle the selected Ascendant Sign
        let ascendantInfo = ascendantData[selectedAscendant];

        console.log("Ascendant Info:", ascendantInfo);

        // Check if Jobs is an array, default to an empty array if not
        let jobList = Array.isArray(ascendantInfo.Jobs) ? ascendantInfo.Jobs : [];

        console.log("Job List:", jobList);

        // Combine jobs from both Western and Vedic astrology
        let combinedJobs = [...jobList, ...data[sunsign]["Jobs"]];

        // Sort the combined jobs array
        combinedJobs.sort();

        // Check for duplicates and count frequency
        let jobFrequencyMap = {};
        combinedJobs.forEach(item => {
            jobFrequencyMap[item] = (jobFrequencyMap[item] || 0) + 1;
        });

        // Create a job report in descending order of frequency
        let jobReport = Object.keys(jobFrequencyMap)
            .sort((a, b) => jobFrequencyMap[b] - jobFrequencyMap[a])
            .map(item => `<li>${item}</li>`);

        // Display the job report in the chat
        createMessageBox("As per your stars, the most suitable jobs are:", `<ul>${jobReport.join('')}</ul>`);

        // Combine areas of study from both Western and Vedic astrology
        let combinedAreasOfStudy = [...ascendantInfo.AreasOfStudy, ...data[sunsign]["AreasOfStudy"]];

        // Sort the combined areas of study array
        combinedAreasOfStudy.sort();

        // Check for duplicates and count frequency
        let areaOfStudyFrequencyMap = {};
        combinedAreasOfStudy.forEach(item => {
            areaOfStudyFrequencyMap[item] = (areaOfStudyFrequencyMap[item] || 0) + 1;
        });

        // Create an area of study report in descending order of frequency
        let areaOfStudyReport = Object.keys(areaOfStudyFrequencyMap)
            .sort((a, b) => areaOfStudyFrequencyMap[b] - areaOfStudyFrequencyMap[a])
            .map(item => `<li>${item}</li>`);

        // Display the area of study report in the chat
        createMessageBox("As per your stars, the most suitable areas of study are:", `<ul>${areaOfStudyReport.join('')}</ul>`);

        // Combine industries from both Western and Vedic astrology
        let combinedIndustries = [...ascendantInfo.Industries, ...data[sunsign]["Industries"]];

        // Sort the combined industries array
        combinedIndustries.sort();

        // Check for duplicates and count frequency
        let industryFrequencyMap = {};
        combinedIndustries.forEach(item => {
            industryFrequencyMap[item] = (industryFrequencyMap[item] || 0) + 1;
        });

        // Create an industry report in descending order of frequency
        let industryReport = Object.keys(industryFrequencyMap)
            .sort((a, b) => industryFrequencyMap[b] - industryFrequencyMap[a])
            .map(item => `<li>${item}</li>`); 1

        // Display the industry report in the chat
        createMessageBox("As per your stars, the most suitable industries are:", `<ul>${industryReport.join('')}</ul>`);
        createMessageBox("Would you like to know more about your career path?", '<button class="ascendantsub-button" onclick="handleGetMoreInfoClick()">Take a Test</button>');
        createMessageBox("Generate PDF", '<button class="generate-pdf-button" onclick="generatePDF()">Generate PDF</button>');

    }
}


// The rest of your existing code...

// Add the generateReport function if it's not already present
function generateReport(title, list, category) {
    // Check if the category exists in the list objects
    if (!list[0].hasOwnProperty(category)) {
        return `<p>No data available for ${title.toLowerCase()}.</p>`;
    }

    // Extract the category list from the combined list
    let categoryList = list.map(item => item[category]).flat();

    // Count the frequency of each item
    let frequencyMap = {};
    categoryList.forEach(item => {
        frequencyMap[item] = (frequencyMap[item] || 0) + 1;
    });

    // Sort the list in descending order of frequency
    let sortedList = Object.keys(frequencyMap)
        .sort((a, b) => frequencyMap[b] - frequencyMap[a])
        .map(item => ({ name: item, count: frequencyMap[item] }));

    // Create a report in the desired format
    let report = sortedList.map(item => `<li>${item.name} (${item.count} times)</li>`);

    return `<ul>${report.join('')}</ul>`;
}


function getSunsign(month, day) {
    // This is a sample implementation, replace it with your logic
    // using the actual zodiac sign calculation
    if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
        return "Aquarius";
    } else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
        return "Pisces";
    } else if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
        return "Aries";
    } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
        return "Taurus";
    } else if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) {
        return "Gemini";
    } else if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) {
        return "Cancer";
    } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
        return "Leo";
    } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
        return "Virgo";
    } else if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) {
        return "Libra";
    } else if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) {
        return "Scorpio";
    } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
        return "Sagittarius";
    } else {
        return "Capricorn";
    }
}

let data = {
    "Aries": {
        "Jobs": ["Sales", "Athlete", "Lawyer", "Manager", "Engineer"],
        "Industries": ["Sports", "Technology", "Legal", "Business", "Marketing"],
        "AreasOfStudy": ["Psychology", "Engineering", "Sports Science", "Entrepreneurship", "Law"]
    },
    "Taurus": {
        "Jobs": ["Banking", "Chef", "Gardener", "Accountant", "Designer"],
        "Industries": ["Finance", "Food", "Agriculture", "Fashion", "Retail"],
        "AreasOfStudy": ["Finance", "Culinary Arts", "Horticulture", "Banking", "Fashion Design"]
    },
    "Gemini": {
        "Jobs": ["Writer", "Journalist", "Programmer", "Marketer", "Sales"],
        "Industries": ["Media", "Technology", "Education", "Advertising", "PR"],
        "AreasOfStudy": ["Communication", "Journalism", "Information Technology", "Marketing", "Social Media"]
    },
    "Cancer": {
        "Jobs": ["Nurse", "Teacher", "Counselor", "Chef", "Real Estate"],
        "Industries": ["Healthcare", "Education", "Real Estate", "Food", "Social Services"],
        "AreasOfStudy": ["Psychology", "Nursing", "Counseling", "Education", "Social Work"]
    },
    "Leo": {
        "Jobs": ["Actor", "Director", "CEO", "Sales", "Entrepreneur"],
        "Industries": ["Entertainment", "Business", "Marketing", "Retail"],
        "AreasOfStudy": ["Theater Arts", "Film Production", "Management", "Entrepreneurship", "Sales"]
    },
    "Virgo": {
        "Jobs": ["Doctor", "Nutritionist", "Editor", "Accountant", "Analyst"],
        "Industries": ["Healthcare", "Publishing", "Finance", "Technology", "Consulting"],
        "AreasOfStudy": ["Medicine", "Nutrition", "Editing", "Accounting", "Data Analysis"]
    },
    "Libra": {
        "Jobs": ["Lawyer", "Psychologist", "Counselor", "Mediator", "PR"],
        "Industries": ["Legal", "Healthcare", "Social Services", "Legal", "Marketing"],
        "AreasOfStudy": ["Law", "Psychology", "Social Work", "Mediation", "Public Relations"]
    },
    "Scorpio": {
        "Jobs": ["Detective", "Psychologist", "Researcher", "Investigator", "Surgeon"],
        "Industries": ["Law Enforcement", "Science", "Security", "Healthcare", "Finance"],
        "AreasOfStudy": ["Criminology", "Psychology", "Research", "Detective", "Forensics"]
    },
    "Sagittarius": {
        "Jobs": ["Philosopher", "Travel Agent", "Teacher", "Outdoor Guide", "Writer"],
        "Industries": ["Philosophy", "Tourism", "Education", "Adventure", "Media"],
        "AreasOfStudy": ["Philosophy", "Travel & Tourism", "Education", "Outdoor Adventure", "Writing"]
    },
    "Capricorn": {
        "Jobs": ["CEO", "Economist", "Engineer", "Manager", "Accountant"],
        "Industries": ["Business", "Technology", "Construction", "Finance", "Government"],
        "AreasOfStudy": ["Business", "Economics", "Engineering", "Management", "Finance"]
    },
    "Aquarius": {
        "Jobs": ["Scientist", "Technologist", "Psychologist", "Activist", "Researcher"],
        "Industries": ["Science", "Technology", "Social Services", "Nonprofit", "Environmental"],
        "AreasOfStudy": ["Science", "Technology", "Psychology", "Social Work", "Environmental Studies"]
    },
    "Pisces": {
        "Jobs": ["Artist", "Psychologist", "Musician", "Nurse", "Marine Biologist"],
        "Industries": ["Arts", "Healthcare", "Entertainment", "Environment", "Nonprofit"],
        "AreasOfStudy": ["Art", "Psychology", "Music", "Healing", "Oceanography"]
    }
};
function HandleAbout() {
    // Update the right container with the astrology question
    const rightContainer = document.querySelector('.right-container');

    // Replace the HTML content with the desired content
    rightContainer.innerHTML = `
      
            <div class="main-blogs">
                <div class="container-01">
                    <div class="neumorphic-card">
                        <div class="imgBox">
                            <i class="fa fa-pencil-ruler" aria-hidden="true"></i>
                        </div>
                        <h2>Test</h2>
                        <div class="contentBox">
                            <p>Trust CareerGraph to navigate the complexities of modern career choices, propelling you towards success.&ZeroWidthSpace;</p>
                            <a href="https://careertests.in/Test"><span>Give Test</span></a>
                        </div>
                    </div>
                    <div class="neumorphic-card">
                        <div class="imgBox">
                            <i class="fa fa-pencil-ruler" aria-hidden="true"></i>
                        </div>
                        <h2>CareerGraph</h2>
                        <div class="contentBox">
                            <p>Trust CareerGraph to navigate the complexities of modern career choices, propelling you towards success.&ZeroWidthSpace;</p>
                            <a href="#"><span>Learn More</span></a>
                        </div>
                    </div>
                    <div class="neumorphic-card">
                        <div class="imgBox">
                            <i class="fa fa-pencil-ruler" aria-hidden="true"></i>
                        </div>
                        <h2>Mentorship</h2>
                        <div class="contentBox">
                            <p>Trust CareerGraph to navigate the complexities of modern career choices, propelling you towards success.&ZeroWidthSpace;</p>
                            <a href="https://careertests.in/Councellor"><span>Enquire Now</span></a>
                        </div>
                    </div>
                </div>
               
                        
                    </div>
                </div>
            </div>
        </div>
    `;
}
document.querySelector(".chat-box.Talk to Career").addEventListener("click", handleCreerChatClick);
function handlAboutUs() {
    var baseUrl = '';

    // Check if running on localhost
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        baseUrl = 'https://localhost:7252'; // Replace PORT with your local port number
    } else {
        // Set the base URL for production
        baseUrl = 'https://careertests.in';
    }

    // Open a new tab and navigate to the specified URL
    window.open(baseUrl + '/AboutUs', '_blank');

}
function handleCareerExpertClick() {
    // Update the right container with the contact information
    var baseUrl = '';

    // Check if running on localhost
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        baseUrl = 'https://localhost:7252'; // Replace PORT with your local port number
    } else {
        // Set the base URL for production
        baseUrl = 'https://careertests.in';
    }

    // Open a new tab and navigate to the specified URL
    window.open(baseUrl + '/Councellor', '_blank');
}
function resetRightContainer() {
    // Replace the content with the original right container content
    document.querySelector(".right-container .chat-container").innerHTML = `
            <div class="message-box my-message">
                <p>Which Astrology line do you believe in?</p>
                <span>08:00</span>
            </div>
            <div class="message-box my-message astro-button-container">
                <button class="western-button" onclick="askWestern()">Western</button>
                <button class="vedic-button" onclick="startVedicProcess()">Vedic</button>
                <span>08:01</span>
            </div>
        `;
}

function handleAstroChatClick() {
    // Reset the right container to its original state

    // Define the base URL
    var baseUrl = '';

    // Check if running on localhost
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        baseUrl = 'https://localhost:7252'; // Replace PORT with your local port number
    } else {
        // Set the base URL for production
        baseUrl = 'https://careertests.in';
    }

    // Open a new tab and navigate to the specified URL
    window.open(baseUrl + '/Astro', '_blank');
}

function googleTranslateElementInit() {
    new google.translate.TranslateElement({ pageLanguage: 'en', includedLanguages: '', layout: google.translate.TranslateElement.InlineLayout.SIMPLE }, 'google_translate_element');
}

// Make sure to include the correct source URL for the Google Translate script
var script = document.createElement('script');
script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
document.head.appendChild(script);

function handleGetMoreInfoClick() {
    // Open the Google Form in a new tab or window
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSeqW3FXr6PaYY_9Bcxqe-FzeSy411-3-3GtYMYGfgv-oSD24g/viewform?usp=sf_link', '_blank');

    // You can also continue the conversation or perform other actions as needed

}
function toggleLeftContainer() {
    var leftContainer = document.querySelector('.left-container');
    var slideButton = document.querySelector('.slide-button');

    leftContainer.classList.toggle('left-container-closed');
    leftContainer.classList.toggle('left-container-opened'); // Add this line
    slideButton.classList.toggle('slide-button-closed');
    slideButton.classList.toggle('slide-button-opened'); // Add this line
}
function compareDataWithAscendant(rashi, nakshatra) {
    // Retrieve data based on Rashi and Nakshatra
    let rashiInfo = rashiData[rashi];
    let nakshatraInfo = nakshatraData[nakshatra];

    // Check if data is available for the given Rashi and Nakshatra
    if (rashiInfo && nakshatraInfo) {
        // Perform comparison and display results (modify as needed)
        let combinedJobs = [...rashiInfo.Jobs, ...nakshatraInfo.Jobs];
        let combinedIndustries = [...rashiInfo.Industries, ...nakshatraInfo.Industries];
        let combinedAreasOfStudy = [...rashiInfo.AreasOfStudy, ...nakshatraInfo.AreasOfStudy];

        let jobReport = generateReport("Job", combinedJobs, "Jobs");
        let industryReport = generateReport("Industry", combinedIndustries, "Industries");
        let areaOfStudyReport = generateReport("Area of Study", combinedAreasOfStudy, "AreasOfStudy");

        createMessageBox("As per your stars, the most suitable jobs are:", jobReport);
        createMessageBox("As per your stars, the most suitable industries are:", industryReport);
        createMessageBox("As per your stars, the most suitable areas of study are:", areaOfStudyReport);
    } else {
        // Handle case when data is not available
        createMessageBox("Sorry, data not available for the selected Rashi and Nakshatra.");
    }
}

function toggleAboutUsDropdown() {
    var dropdown = document.getElementById("aboutUsDropdown");
    dropdown.classList.toggle("show");

    // Additional logic for About Us content
    AboutUsClick();
}
function toggleSidebar() {
    const sidebar = document.querySelector('.chat-list');
    const toggleIcon = document.querySelector('.toggle');

    sidebar.classList.toggle('close');
    toggleIcon.classList.toggle('bx-chevron-right');
}

function AboutUsClick() {
    // Reset the right container to its original state
    // Change the background color of the chat container


    // Update the chat container content with HTML and CSS
    document.querySelector(".right-container .chat-container").innerHTML = `
    <div class="container" style="background-color: white; padding: 20px; border-radius: 8px; text-align: center;">

        <h1 style="color: #6f42c1; font-weight: bold;">Career Planning - Unlock the Future</h1>

        <p style="font-size: 16px;color: red">For success and happiness :)</p>

        <p style="color: red;">

            We are there - for all your Career Decisions - from class 8 to Career professionals
        </p>

       <div style="font-size: 10px;">
            <span>Which Jobs to focus on? <a href="#">Click here</a>.</span>
            <span>Which Stream to study? <a href="#">Click here</a>.</span>
            <span>What are my Strengths? What Jobs will guarantee success? <a href="#">CLICK here</a>.</span>
        </div>

        <p style="color: black;">

            Take a test (for us to understand you better) + Talk to our Experienced Career Counsellor.
        </p>
          <h4 style="color: #6f42c1; font-weight: bold;text-align: left;">Step 1: the TEST <a href="/Log-In">CLICK HERE</a></h4>
      <p style="text-align: left;">It has 4 main parts:</p>
        <ol style="text-align: left;">
            <li>What are your Interests?</li>
            <li>What is your current aspiration?</li>
            <li>What is your Aptitude and Behaviour Strengths?</li>
            <li>How do you compare to other peers your age? (AI task)</li>
        </ol>
        <p style="text-align: left;">Note: Take the test in ANY language</p>
         <h4 style="color: #6f42c1; font-weight: bold;text-align: left;">Step 2: The Career Guidance Counsellor</h4>

        
        <p style="text-align: left;">Each Counsellor is an EXPERT:</p>
        <ol style="text-align: left;">
            <li>10+ years of experience</li>
            <li>Detailed report to share with you</li>
        </ol>
               <h3 style="color: #6f42c1; font-weight: bold;text-align: center;">Why us?</h3>

        <p style="text-align: left;">We focus on FITMENT and longtime SUCCESS in careers.</p>
        <ol style="text-align: left;">
            <li>The power of AI - will map you against 2000+ jobs - LATEST jobs (yes, including Entrepreneur, YouTuber, AI specialist, and other Jobs as per World Economic Forum)</li>
            <li>The Experienced Career Counsellor team</li>
            <li>More than 50,000 tests (check the Testimonials)</li>
            <li>We have worked with 40+ institutions - schools, colleges, NGOs, and Companies</li>
        </ol>
        <p style="text-align: left;">Note: Take the test in ANY language</p>

        <blockquote>
            We are there - for all your Career Decisions - from class 8 to PG
        </blockquote>
                <h3 style="color: #6f42c1; font-weight: bold;text-align: center;">CONTACT US</h3>

        <p style="text-align: left;">We are a global, multilingual platform utilizing AI and data benchmarks to offer expert career guidance. Focused on fitment and long-term success, we recognize that your interests evolve, providing support from class 8 to professional decisions. Our counseling community, both online and offline, ensures each individual receives tailored advice and guidance. With a commitment to understanding your aspirations, we empower you to make informed choices that align with your unique journey, fostering a successful and fulfilling career path.</p>
        <p style="text-align: left;">Reach us : 				
subhashini@pexitics.com / score@pexitics.com 				
Phone  /Whatsapp : +91 734966 2320 / 21/ 22				</p>
   <div class="whatsapp-logo-container" style="text-align: center; margin-top: 20px;">
    <a href="https://wa.me/917349662320" target="_blank">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/WhatsApp_icon.png/479px-WhatsApp_icon.png" alt="WhatsApp" class="nav-icon whatsapp-icon">
    </a>
            <h3 style="color: #6f42c1; font-weight: bold;text-align: center;">PRICING</h3>
            <p style="text-align: left;">Choose a Package 	For 1 person: 	Test (Free) + Online counseling (no time limit) - INR 3000/- 						
	For 2 person: 	Test (Free) + Online counseling (no time limit) - INR 5500/- (discount 8.5%)						
								
	For customised schemes and in person counseling : contact us 							</p>
            <p style="text-align: left;">Reach us : 				
subhashini@pexitics.com / score@pexitics.com 				
Phone  /Whatsapp : +91 734966 2320 / 21/ 22				</p>
   <div class="whatsapp-logo-container" style="text-align: center; margin-top: 20px;">
</div>

    </div>
 
`;

    // Optionally, you can add more logic specific to the Astro chat box here
}
const input = document.getElementById('dobInput');
input.addEventListener('keypress', function (event) {
    if (event.keyCode === 13 || event.which === 13) {
        document.getElementById('dobSubmitButton').click();
    }
});
function generatePDF() {
    // Get the HTML content of the message box
    let messageBoxContent = document.querySelector(".my-message").innerHTML;

    // Create an HTML element to hold the content
    let pdfContent = document.createElement("div");
    pdfContent.innerHTML = messageBoxContent;

    // Use html2pdf to generate the PDF
    html2pdf(pdfContent, {
        margin: 10,
        filename: 'career_report.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    });
}
