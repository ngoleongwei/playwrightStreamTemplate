@MED-31
Feature: Document Upload Interface

    #MED-121
    # Given the MEO is logged into STREAM and viewing a new MED case,
    # When the MEO selects the option to upload a document,
    # Then the system shall display an interface for the MEO to select and upload relevant documents for the case.
    @MED-121
    Scenario: The system shall allow the MEO to select and upload relevant documents for the case
        Given a MEO login as 'meoa1'
        When they accesses an existing case
        And they click on Document tab
        Then the system shall display an interface for the MEO to select and upload relevant documents for the case
