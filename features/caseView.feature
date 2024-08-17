Feature: MEDCMS access and navigation - Case view

#MED-143
Given the MEO is viewing a case in STREAM,
When the MEO accesses the case details,
Then the system shall display the case information divided into multiple tabs.

#MED-144
Given the case details are divided into tabs,
When the MEO navigates to the case details page,
Then the system shall display the following tabs (or similar, based on actual case details):
"Case Details"
"Applicant's Details"
"Respondent's Details"
"Documents"
"Previous Case"

#MED-145
Given the MEO is viewing the case details,
When the MEO clicks on a tab,
Then the system shall display the content associated with that tab without requiring a page reload.

#MED-146
Given the MEO is on a specific tab,
When the tab content is displayed,
Then the system shall show the relevant information for that tab (e.g., documents in the Documents tab, case details in the Case Details tab).

#MED-147
Given the MEO is updating information within a tab,
When the MEO saves the changes,
Then the system shall validate and save the updates, reflecting the changes immediately.

