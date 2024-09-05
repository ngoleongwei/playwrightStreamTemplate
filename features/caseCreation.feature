@MED-29
Feature: Manual Case Creation Interface

    @MED-104 @Passed
    Scenario: MEO needs to create a new case in STREAM, then the system shall provide an interface for entering necessary case details.
        Given a MEO login as 'meoa1'
        When they click on Add Case button
        Then they should see "Please fill in the details and click submit. The case will be automatically assigned to an MEO."

    @MED-105 @Passed
    Scenario: The system shall provide a field for entering the Maintenance Case Number
        Given a MEO login as "meoa1"
        When they click on Add Case button
        Then they should see "Case Number Input" Field

    @MED-106 @Passed
    Scenario: The system shall allow MOE to specify the language for the case
        Given a MEO login as "meoa1"
        When they click on Add Case button
        And they click on Preferred Language dropdown
        Then they should see a list of language

    @MED-107 @Passed
    Scenario: The system shall provide a selection field to choose the Conciliation Date and time
        Given a MEO login as "meoa1"
        When they click on Add Case button
        Then they shall see the Conciliation Date and time option field

    @MED-108
    Scenario: The system shall provide a date picker or input field for the Date of Summons
        Given a MEO login as "meoa2"
        When they click on Add Case button
        Then they shall see the Date of Summons

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

