# GREETINGS!👋 from Developer | App creator | and Simple man KALVIN KARL NONATO
First let me introduce my self. I am simple man because all I want is to help. I am not "madamot" when it comes on giving what I can make/create, so feel free to [contact me](https://github.com/kalvinkarlnonato) anytime so we can talk about how we can solve problems, make it simple, and make it work!

This documentation covers all procedures on how DENR HR API works, also examples are given on every procedure so you can try it on your own, and feel free to share your feedbacks regarding this API.

- And this API also resides to my front end website: [DENR region 2](https://ro2denr.ml/)
- Copy this link to your application: [DENR-HR API](https://vcylcnlvog.execute-api.ca-central-1.amazonaws.com/applicant-tracking-api)
- This application will monitor and serve application process of clients of DENR Region 2.

# Working progress
## Authentication
- In user management i create rules:
    - username: must be grater than 3
    - passoword: must have 8 or more characters with a mix of Lowercase letters, Uppercase letters , numbers & symbols
    - email: must verify before loging into the system.
    - user can send success registration only (2)twice/ day/ device.
    - initially, your role is applicant, only super administrator can change that to anything he wants,
    - but super administrators doesn't anything to do with lost accounts, passwords, or even retrieving it to the users.
    - super administrator can also make a user but only for administrator(human resource user) only.
    ```json
    {
        "username": "kalvinkarl",
        "email": "sample@email.com",
        "password": "Password@12345"
    }
	```
- Success: 
    ```json
        {
            "message": "Verification email sent.",
            "result": {
            "userId": 6,
            "uniqueString": "$2a$12$vOjKBDomDqxcbVja3oR16ed5HaBIEUSgsmXcFlD2djj82J0yv4e/O",
            "createdAt": "2022-07-25T21:16:46.380Z",
            "expiresAt": "2022-07-26T03:16:46.380Z"
            },
            "info": {
            "accepted": [
                "sample@email.com"
            ],
            "rejected": [],
            "envelopeTime": 685,
            "messageTime": 664,
            "messageSize": 552,
            "response": "250 2.0.0 OK  1658783870 k13-20020a170902c40d00b0016d21697ed9sm3052642plk.48 - gsmtp",
            "envelope": {
            "from": "kalvinkarl28@gmail.com",
            "to": [
                "sample@email.com"
            ]
            },
            "messageId": "<97f0a1d9-5506-dfcb-9e9d-51312f2d4d92@gmail.com>"
            }
        }
	```
- Failed returns if a user exist:
    ```json
	{
    	"title": "Exist",
    	"message": "User is already exist, please login using your username kalvinkarl"
	}
	```
- Failed returns if the email exist:
    ```json
	{
    	"title": "Email",
    	"message": "User is already exist, please login using your username sample@email.com"
	}
	```
- Failed returns if the username exist:
    ```json
	{
    	"title": "Username",
    	"message": "User is already exist, please login using your username kalvinkarl"
	}
	```
## Administrators
### User management
### Office Management
### Salary Grade Management
### Competency Management
### Position Management
### Vacant Position Management
### Pending Applicants
### General List and Report *
### Candidate Evaluation and Report
### Long List Management and Report
### Interview Rating Dashboard for Raters
### Comprehensive Evaluation and Report
### Short List Management and Report
### Appointment Management and Report
### Signatory Management
## Users
### Job Portal (Landing/Page)
### My Application
### Profile
### Downloadable Forms
