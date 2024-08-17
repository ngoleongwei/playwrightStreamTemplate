Feature: Manual Case Creation Interface
#MED-29
#MED-104

Given an MEO needs to create a new case in STREAM,
When they access the case creation section,
Then the system shall provide an interface for entering necessary case details.

#MED-105
Given the need to input case-specific details,
When the MEO is entering data,
Then the system shall provide a field for entering the Maintenance Case Number.

#MED-106
Given the need to specify the language for the case,
When the MEO is entering data,
Then the system shall provide a selection field to choose the language of the parties.

#MED-107
Given the need to select the slots for the conciliation date and time,
When the MEO is selecting data,
Then the system shall provide a selection field to choose the Conciliation Date and time.

#MED-108
Given the need to specify the date of summons,
When the MEO is entering data,
Then the system shall provide a date picker or input field for the Date of Summons.

#MED-109
Given the need to manage the status of the case,
When the MEO is creating the case,
Then the system shall provide an option to toggle the case status between Pending and Concluded.

Given the Case Status is toggled to Concluded,
Then the system shall make the following fields optional:
"Date of Summons"
"Conciliation Date"
"Language"

#MED-111
Given all required fields are completed and validated,
When the MEO submits the case details,
Then the system shall create the new case in STREAM.

#MED-112
Given the case is created,
When the process is completed,
Then the system shall provide a confirmation message to the MEO, including the newly created case ID and summary of the entered details.
