Feature:two

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