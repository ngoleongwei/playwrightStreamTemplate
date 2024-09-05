Feature: Test Only

    # # @MED-145 @MED-146
    # Scenario Outline: The system shall display the content associated with the tab without requiring a page reload
    #     Given a MEO login as 'meoa1'
    #     When they accesses an existing case
    #     And they click on "<tab>" tab
    #     Then they shall see the content associated with that tab without requiring a page reload
    #     Examples:
    #         | Tab                  |
    #         | Case Details         |
    #         | Applicant's Details  |
    #         | Respondent's Details |
    #         | Previous Case(s)     |
    #         | Documents            |

    # @MED-106 @Passed
    # # Given the need to specify the language for the case,
    # # When the MEO is entering data,
    # # Then the system shall provide a selection field to choose the language of the parties.
    # Scenario: The system shall allow MOE to specify the language for the case
    #     Given a MEO login as "meoa1"
    #     When they click on Add Case button
    #     And they click on Preferred Language dropdown
    #     Then they should see a list of language

    #     @MED-109
    # Scenario: The system shall provide an option to toggle the case status between Pending and Concluded
    #     Given a MEO login as "meoa2"
    #     When they click on Add Case button
    #     Then they shall see the Pending and Concluded toggle button

    # Negative Scenarios
# Scenario: The system shall alert mandatory field
#         Given a MEO login as "meoa2"
#         When they click on Add Case button
#         Then they click submit without any input
#         Then they shall see a validation-message on required field

Scenario: The system shall make the following fields optional when the Case Status is toggled to Concluded
        Given a MEO login as "meoa2"
        When they click on Add Case button
        And case Status is toggled to Concluded
        Then they shall see the following fields optional