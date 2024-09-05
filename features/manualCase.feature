@MED-29
Feature: Manual Case Creation Interface

    @MED-104 @Passed
    Scenario: MEO needs to create a new case in STREAM, then the system shall provide an interface for entering necessary case details.
        # Given an MEO needs to create a new case in STREAM,
        # When they access the case creation section,
        # Then the system shall provide an interface for entering necessary case details.

        Given a MEO login as 'meoa1'
        When they click on Add Case button
        Then they should see "Please fill in the details and click submit. The case will be automatically assigned to an MEO."

    # And follwing input fields
    # Not applicable
    # Scenario: (SS)MEO needs to create a new case in STREAM, Then the system shall provide an interface for entering necessary case details.
    #     Given a MEO login as "meoa1"
    #     When they click on Add Case button
    #     Then they should see this "Case Creation" screen
    # Error: toMatchSnapshot() must be called during the test
    # https://github.com/microsoft/playwright/issues/15800
    # Can't implement as CucumberJs runner is diff from Playwright test runner.

    # #MED-105
    # Given the need to input case-specific details,
    # When the MEO is entering data,
    # Then the system shall provide a field for entering the Maintenance Case Number.
    @MED-105 @Passed
    Scenario: The system shall provide a field for entering the Maintenance Case Number
        Given a MEO login as "meoa1"
        When they click on Add Case button
        Then they should see "Case Number Input" Field

    @MED-106 @Passed
    # Given the need to specify the language for the case,
    # When the MEO is entering data,
    # Then the system shall provide a selection field to choose the language of the parties.
    Scenario: The system shall allow MOE to specify the language for the case
        Given a MEO login as "meoa1"
        When they click on Add Case button
        And they click on Preferred Language dropdow
        Then they should see a list of language

    # #MED-107
    # Given the need to select the slots for the conciliation date and time,
    # When the MEO is selecting data,
    # Then the system shall provide a selection field to choose the Conciliation Date and time.
    @MED-107 @Passed
    Scenario: The system shall provide a selection field to choose the Conciliation Date and time
        Given a MEO login as "meoa1"
        When they click on Add Case button
        Then they shall see the Conciliation Date and time option field

    # #MED-108
    # Given the need to specify the date of summons,
    # When the MEO is entering data,
    # Then the system shall provide a date picker or input field for the Date of Summons.
    @MED-108
    Scenario: The system shall provide a date picker or input field for the Date of Summons
        Given a MEO login as "meoa2"
        When they click on Add Case button
        Then they shall see the Date of Summons

    # MED-109
    # Given the need to manage the status of the case,
    # When the MEO is creating the case,
    # Then the system shall provide an option to toggle the case status between Pending and Concluded.
    @MED-109
    Scenario: The system shall provide an option to toggle the case status between Pending and Concluded
        Given a MEO login as "meoa2"
        When they click on Add Case button
        Then they shall see the Pending and Concluded toggle button

    # Given the Case Status is toggled to Concluded,
    # Then the system shall make the following fields optional:
    # "Date of Summons"
    # "Conciliation Date"
    # "Language"
    Scenario: The system shall make the following fields optional when the Case Status is toggled to Concluded
        Given a MEO login as "meoa2"
        When they click on Add Case button
        And case Status is toggled to Concluded
        Then they shall see the following fields optional

    # #MED-111
    # Given all required fields are completed and validated,
    # When the MEO submits the case details,
    # Then the system shall create the new case in STREAM.
    @MED-111 @MED-112
    Scenario: The system shall create the new case in STREAM
        Given a MEO login as "meoa2"
        When they fill in all the information to create new case
        Then they shall see a pop out for confirmation
        And they click yes to create new case
        Then they shall see a new case created on their dashboard

    Scenario: The system shall create the new case in STREAM
        Given a MEO login as "meoa2"
        When they fill in all the information to create new case
        Then they shall see a pop out for confirmation
        And they click no to create new case
        Then they shall see case creation page with information they filled
    # #MED-112
    # Given the case is created,
    # When the process is completed,
    # Then the system shall provide a confirmation message to the MEO, including the newly created case ID and summary of the entered details.


    Scenario: The system shall return to Dashboard when Cancel
        Given a MEO login as "meoa2"
        When they fill in all the information to create new case
        And they click cancel button
        Then they shall be redirected to their dashboard

    # Negative Scenarios
    Scenario: The system shall alert mandatory field
        Given a MEO login as "meoa2"
        When they click on Add Case button
        Then they click submit without any input
        Then they shall see a validation-message on required field

    Scenario: The system shall alert MSS Number Input Value must be alphanumeric and 6 characters max
        Given a MEO login as "meoa2"
        When they click on Add Case button
        Then they fill in MSS Number Input Field with <string>
        Then they shall see a validation-message 'Value must be alphanumeric and 6 characters max.'
            | string     |
            | aabbccddee |
            | m,.12.ads  |
            | asdsbs1    |
            | t^tt       |

    Scenario Outline: The system shall alert Year Input must be YYYY format and 4 char
        Given a MEO login as "meoa2"
        When they click on Add Case button
        Then they fill in Year Input Field with <string>
        Then they shall see a validation-message 'Year must be YYYY format and 4 char.'
        Examples:
            | string                   |
            | two thousand twenty four |
            | 2a3b                     |
            | asdasd                   |
            | m,.12.ads                |
            | asd                      |
            | 12e3                     |

    Scenario Outline: The system shall alert Date of Summon Input Field
        Given a MEO login as "meoa2"
        When they click on Add Case button
        Then they fill in <dateSection> Input Field with <string>
        Then they shall see a validation-message <message>
        Examples:
            | dateSection        | string     | message                               |
            | 'Date of Summon'   | 02/30/2000 | 'Date of Summon is required.'         |
            | 'Date of Summon'   | 02312000   | 'Date of Summon is required.'         |
            | 'Date of Summon'   | 13122020   | 'Date of Summon is required.'         |
            | '1st Conciliation' | 02/30/2000 | 'First Conciliation date is required' |
            | '1st Conciliation' | 02312000   | 'First Conciliation date is required' |
            | '1st Conciliation' | 13122020   | 'First Conciliation date is required' |

    Scenario: The system shall alert Conciliation Session is required
        Given a MEO login as "meoa2"
        When they click on Add Case button
        Then they did not select Conciliation Time
        Then they shall see a validation-message 'Conciliation Session is required'

    Scenario: The system shall alert when Language is not chosen
        Given a MEO login as "meoa2"
        When they click on Add Case button
        Then they did not select Preferred Language
        Then they shall see a validation-message 'Please choose language.'

    Scenario: The system shall alert when Other Language is empty
        Given a MEO login as "meoa2"
        When they click on Add Case button
        Then they select Others and leave Other Language input field empty
        Then they shall see a validation-message 'Please enter the other language.'

# Error Msgs
# 'Value must be alphanumeric and 6 characters max.'
# 'Year must be YYYY format and 4 char.'
# 'Date of Summon is required.'
# 'First Conciliation date is required'
# 'Conciliation Session is required'
# 'Please choose language.'
# 'Please enter the other language'