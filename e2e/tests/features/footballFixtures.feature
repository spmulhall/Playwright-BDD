Feature: Displays Football Fixtures

as a businesss user 
i want to see all the teams playing today

Scenario: display teams playing today
given today's date is "2024-05-13"
when I request to see the teams playing today
then the system should display the list of teams playing today
and there should be at least one team playing today