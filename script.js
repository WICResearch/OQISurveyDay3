Pasted text(20260806-110930).txt
Document
heres the full script for it: 
the website is still showing the virtual vs in person topics from the old agenda for some reason 

The live website is still showing the old topics because the main branch version of script.js is still the old file. It is not just browser cache.

The live repository currently still contains:

topics: [
  "Future Focus of OQI",
  "Participant Satisfaction Survey Data",
  "OQI Meeting Cadence",
  "Virtual vs. In-Person OQI",
  "Local Agency Comment Period Lengths"
],

The website’s index.html is correctly loading script.js, so that is definitely the file that needs updated.

Check the branch first

At the top-left of the GitHub repository, look at the branch dropdown. It needs to say:

main

You may have edited or committed the corrected script on a different branch.

Then replace the actual main/script.js
Open the repository.
Make sure the branch says main.
Open script.js.
Click the pencil icon.
Press Ctrl+A inside the code editor.
Paste the full corrected script you sent me.
Before committing, search the editor with Ctrl+F for:
Virtual vs. In-Person

It should say 0 results.

Also search for:

stateDirectorPrioritiesClear

That should appear in the file.

Click Commit changes…
Confirm it says Commit directly to the main branch.
Click the final green Commit changes button.

Afterward, open this exact address in a new tab:

https://raw.githubusercontent.com/WICResearch/OQISurveyDay3/main/script.js

Press Ctrl+F and search for Virtual vs. Once that phrase is gone from the raw file, the website will have the correct survey. GitHub Pages may require a hard refresh with Ctrl+F5, but right now the main problem is that the published file itself still contains the old questions.

Pasted text(20260806-111716).txt
Document
heres the full script: 

The full script you just sent is correct. It contains the new agenda topics and does not contain “Virtual vs. In-Person OQI.”

The issue is that this corrected version is not the version currently saved on GitHub’s main branch. The live main/script.js still contains the old topics, including “Virtual vs. In-Person OQI.”

Replace the entire GitHub file
Open the OQISurveyDay3 repository.
Confirm the branch dropdown says main.
Open script.js.
Click the pencil icon.
Click inside the code editor.
Press Ctrl+A to select the entire GitHub file.
Delete it.
Paste the entire corrected script you just sent me.
Press Ctrl+F and search:
Virtual vs. In-Person

It should show 0 results.

Search:
stateDirectorPrioritiesClear

It should find the new question.

Click Commit changes…
Make sure Commit directly to the main branch is selected.
Click the final green Commit changes button.

Use this commit message:

Replace Day 3 survey with corrected agenda questions
Verify the saved file

After committing, reopen script.js from the repository page—not from the browser back button—and search again for:

Virtual vs. In-Person

Do not test the survey until that phrase is gone from the GitHub file itself. Once it is gone, open the survey in an incognito window or use Ctrl+Shift+R for a hard refresh.

i need smaller steps of directions im confused

Perfect.

Step 2

Press the Delete key one time.

All of the code should disappear, leaving you with a blank editor.

Don't commit anything yet.

Reply "blank" when the editor is empty.

blank

Perfect.

Step 3

Open the text file you uploaded that contains the correct script.

Click inside that file.
Press Ctrl + A (select all).
Press Ctrl + C (copy).

Come back here and reply "copied".

copied

Great!

Step 4

Go back to the blank GitHub editor.

Click once inside the blank area.

Press Ctrl + V to paste the entire script.

You should immediately see all of the code appear again.

Reply "pasted" once you see the code back in the editor.

const scriptURL =
"https://script.google.com/macros/s/AKfycbzHiLOFSRQSISFcfIbhr0r8HmWUPip1auRLlJGMAUPvsMyFybBsswIT8imTYv9TA3wEPA/exec";

const scaleOptions = [
"Strongly Disagree",
"Somewhat Disagree",
"Neutral",
"Somewhat Agree",
"Strongly Agree"
];

let currentPage = 0;
const answers = {};

const pages = [
{
title: "Participant Information",
description:
"Please provide a few details about your role and experience with WIC.",
fields: [
{
type: "select",
name: "primaryRole",
label: "What is your primary role?",
required: true,
options: [
"Local Agency Director",
"Nutritionist/RD",
"CPA",
"Breastfeeding Peer Counselor",
"Breastfeeding Coordinator",
"Outreach",
"Office Associate",
"State Agency",
"Other"
]
},
{
type: "text",
name: "localAgency",
label: "Which local agency or department do you work for?",
required: true
},
{
type: "select",
name: "yearsInWIC",
label: "How many years have you worked in WIC?",
required: true,
options: [
"Less than 1 year",
"1–5 years",
"6–10 years",
"11–20 years",
"More than 20 years"
]
}
]
},

{
title: "Partnering with WIC",
subtitle: "Successfully Establishing WIC in Healthcare Settings",
description: "Please rate the following statements about this session.",
fields: [
{
type: "scale",
name: "partneringPresenterClear",
label: "Presenter communicated clearly."
},
{
type: "scale",
name: "partneringOrganized",
label: "Session was well organized."
},
{
type: "scale",
name: "partneringGoodUseOfTime",
label: "Session was a good use of my time."
},
{
type: "scale",
name: "partneringEasyToFollow",
label: "Session was easy to follow."
},
{
type: "textarea",
name: "partneringSuggestions",
heading: "Suggestions",
label: "What suggestions do you have for improving this session?"
}
]
},
{
title: "FY2027 Annual Planning and OQI",
description: "Please rate the following statements about this session.",
fields: [
{
type: "scale",
name: "annualPlanningPresenterClear",
label: "Presenter communicated clearly."
},
{
type: "scale",
name: "annualPlanningOrganized",
label: "Session was well organized."
},
{
type: "scale",
name: "annualPlanningGoodUseOfTime",
label: "Session was a good use of my time."
},
{
type: "scale",
name: "annualPlanningEasyToFollow",
label: "Session was easy to follow."
},
{
type: "textarea",
name: "annualPlanningSuggestions",
heading: "Suggestions",
label: "What suggestions do you have for improving this session?"
}
]
},
{
title: "Round Table with the State Director",
subtitle: "Listen, Observe, Act",
topics: [
"Increasing participation through program awareness and extended partner networks",
"Reducing spending, materials, and processes that create barriers to service delivery",
"Putting the “Nutrition” back in nutrition education",
"Increasing breastfeeding in West Virginia",
"WIC online shopping pilot through Walmart",
"Monthly technical assistance training",
"WIC dashboard",
"Creating new partnerships",
"Background checks",
"Comment periods, office visits, and the Policy Q&A box"
],
description:
"Please rate the following statements about the Round Table discussion.",
fields: [
{
type: "scale",
name: "stateDirectorPrioritiesClear",
label:
"The Round Table helped me better understand the priorities and future direction of West Virginia WIC."
},
{
type: "scale",
name: "stateDirectorInitiativesUseful",
label:
"The information shared about current and upcoming state initiatives was useful to my work."
},
{
type: "scale",
name: "stateDirectorBarriersRelevant",
label:
"The discussion addressed meaningful ways to reduce barriers to WIC service delivery."
},
{
type: "scale",
name: "stateDirectorParticipationRelevant",
label:
"The discussion provided useful ideas for increasing WIC participation and strengthening partner networks."
},
{
type: "scale",
name: "stateDirectorNutritionBreastfeedingRelevant",
label:
"The discussion about nutrition education and breastfeeding priorities was relevant to the needs of West Virginia WIC."
},
{
type: "scale",
name: "stateDirectorOpportunityForFeedback",
label:
"The Round Table provided an appropriate opportunity to ask questions, share concerns, and provide feedback."
},
{
type: "textarea",
name: "stateDirectorBiggestTakeaway",
heading: "Round Table Reflection",
label:
"What was your most important takeaway from the Round Table with the State Director?"
},
{
type: "textarea",
name: "stateDirectorAdditionalTopics",
label:
"What topics, questions, or concerns would you like state leadership to address in the future?"
}
]
},
{
title: "Overall Reflection",
description:
"Please share any final thoughts about today’s OQI meeting.",
fields: [
{
type: "textarea",
name: "biggestTakeaway",
label:
"What is one idea or takeaway from today’s sessions that could help strengthen WV WIC?"
},
{
type: "textarea",
name: "additionalFeedback",
label:
"Is there anything else you would like the Office of Quality Improvement to know?"
}
]
}
];

const questionCard = document.getElementById("questionCard");
const progressText = document.getElementById("progressText");
const progressFill = document.getElementById("progressFill");
const backBtn = document.getElementById("backBtn");
const nextBtn = document.getElementById("nextBtn");
const submitBtn = document.getElementById("submitBtn");
const message = document.getElementById("message");

function renderPage() {
const page = pages[currentPage];

questionCard.innerHTML = <div class="section-heading"> <p class="section-number">Section ${currentPage + 1}</p> <h2>${page.title}</h2> ${page.subtitle ?<p class="section-subtitle">${page.subtitle}</p>` : ""}
</div>

${
  page.topics
    ? `
      <div class="topics-box">
        <h3>Topics Covered</h3>
        <ul>
          ${page.topics.map((topic) => `<li>${topic}</li>`).join("")}
        </ul>
      </div>
    `
    : ""
}

${
  page.description
    ? `<p class="section-description">${page.description}</p>`
    : ""
}

`;

page.fields.forEach((field) => {
questionCard.appendChild(createField(field));
});

progressText.textContent =
Section ${currentPage + 1} of ${pages.length};

progressFill.style.width =
${((currentPage + 1) / pages.length) * 100}%;

backBtn.style.display = currentPage === 0 ? "none" : "inline-block";

nextBtn.style.display =
currentPage === pages.length - 1 ? "none" : "inline-block";

submitBtn.style.display =
currentPage === pages.length - 1 ? "inline-block" : "none";

message.textContent = "";
}

function createField(field) {
const wrapper = document.createElement("div");
wrapper.className = "field";

if (field.heading) {
const heading = document.createElement("h3");
heading.className = "field-heading";
heading.textContent = field.heading;
wrapper.appendChild(heading);
}

const label = document.createElement("label");
label.setAttribute("for", field.name);
label.textContent = field.label;

if (field.required) {
const requiredMark = document.createElement("span");
requiredMark.className = "required-mark";
requiredMark.textContent = " *";
label.appendChild(requiredMark);
}

wrapper.appendChild(label);

if (field.type === "select" || field.type === "scale") {
const select = document.createElement("select");

select.id = field.name;
select.name = field.name;
select.required = field.required !== false;

const defaultOption = document.createElement("option");
defaultOption.value = "";
defaultOption.textContent = "Select one";
defaultOption.disabled = true;
defaultOption.selected = true;

select.appendChild(defaultOption);

const options =
  field.type === "scale" ? scaleOptions : field.options;

options.forEach((optionText) => {
  const option = document.createElement("option");
  option.value = optionText;
  option.textContent = optionText;
  select.appendChild(option);
});

if (answers[field.name]) {
  select.value = answers[field.name];
}

wrapper.appendChild(select);

}

if (field.type === "text") {
const input = document.createElement("input");

input.type = "text";
input.id = field.name;
input.name = field.name;
input.value = answers[field.name] || "";
input.required = field.required === true;

wrapper.appendChild(input);

}

if (field.type === "textarea") {
const textarea = document.createElement("textarea");

textarea.id = field.name;
textarea.name = field.name;
textarea.rows = 5;
textarea.value = answers[field.name] || "";
textarea.required = field.required === true;
textarea.placeholder = "Enter your response here...";

wrapper.appendChild(textarea);

}

return wrapper;
}

function saveCurrentPage() {
const fields = questionCard.querySelectorAll(
"input, select, textarea"
);

fields.forEach((field) => {
answers[field.name] = field.value.trim();
});
}

function validateCurrentPage() {
const fields = questionCard.querySelectorAll(
"input, select, textarea"
);

for (const field of fields) {
if (!field.checkValidity()) {
field.reportValidity();
return false;
}
}

return true;
}

nextBtn.addEventListener("click", () => {
if (!validateCurrentPage()) {
return;
}

saveCurrentPage();
currentPage++;
renderPage();

window.scrollTo({
top: 0,
behavior: "smooth"
});
});

backBtn.addEventListener("click", () => {
saveCurrentPage();
currentPage--;
renderPage();

window.scrollTo({
top: 0,
behavior: "smooth"
});
});

document
.getElementById("surveyForm")
.addEventListener("submit", function (event) {
event.preventDefault();

if (!validateCurrentPage()) {
  return;
}

saveCurrentPage();

message.textContent = "Submitting your response...";
submitBtn.disabled = true;

fetch(scriptURL, {
  method: "POST",
  mode: "no-cors",
  body: JSON.stringify(answers)
})
  .then(() => {
    document.getElementById("surveyForm").innerHTML = `
      <div class="thank-you-card">
        <div class="thank-you-icon">✓</div>

        <h1>Thank You!</h1>

        <p class="thank-you-lead">
          Thank you for completing the 2026 WV WIC OQI Day 3 Evaluation.
        </p>

        <p>
          Your feedback will be reviewed by the Office of Quality
          Improvement and used to strengthen future meetings, training
          opportunities, and statewide initiatives.
        </p>

        <p>
          We appreciate your time and continued commitment to serving
          West Virginia WIC participants.
        </p>

        <button type="button" onclick="location.reload()">
          Submit Another Response
        </button>
      </div>
    `;

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  })
  .catch((error) => {
    message.textContent =
      "There was an error submitting the survey. Please try again.";

    submitBtn.disabled = false;

    console.error("Submission error:", error);
  });

});

document
.getElementById("beginSurveyBtn")
.addEventListener("click", () => {
document.getElementById("introPage").style.display = "none";
document.getElementById("surveyForm").style.display = "block";

currentPage = 0;
renderPage();

window.scrollTo({
  top: 0,
  behavior: "smooth"
});

});

Close
