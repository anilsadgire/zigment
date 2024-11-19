# zigment


Notification Service API
A NestJS-based serverless API for managing user notification preferences and sending notifications. This project allows users to manage their notification preferences, track notification logs, and supports environment configuration for local and cloud deployments.

Features
User Preferences Management:
Create, update, retrieve, and delete user notification preferences.
Notification Sending:
Simulated notification delivery via email, SMS, and push notifications.
Statistics:
Track delivery status and generate basic usage statistics.
Environment Configurations:
Securely manage database and server configurations using .env files.
Serverless Deployment:
Deploy to platforms like Vercel or AWS Lambda.
Robust Testing:
Includes unit tests and integration tests for APIs.
Technologies Used
NestJS for server-side framework
TypeScript for robust and type-safe development
MongoDB as the database with Mongoose for ODM
Jest for testing
Serverless Framework and Vercel for deployment
ESLint and Prettier for code linting and formatting
Installation and Setup
1. Clone the Repository
bash
Copy code
git clone https://github.com/your-username/notification-service.git
cd notification-service
2. Install Dependencies
bash
Copy code
npm install
3. Set Up Environment Variables
Create a .env file in the root directory:
env
Copy code
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/notification-service?retryWrites=true&w=majority
PORT=3000
Replace <username> and <password> with your MongoDB credentials.
4. Run the Application
Development Mode:
bash
Copy code
npm run start:dev
The app will run at http://localhost:3000.
Endpoints
User Preferences
Method	Endpoint	Description
POST	/api/preferences	Create user preferences
GET	/api/preferences/:userId	Retrieve user preferences by ID
PATCH	/api/preferences/:userId	Update user preferences by ID
DELETE	/api/preferences/:userId	Delete user preferences by ID
Notifications
Method	Endpoint	Description
POST	/api/notifications/send	Send a notification
GET	/api/notifications/:userId/logs	Retrieve notification logs for a user
GET	/api/notifications/stats	Retrieve notification statistics
Testing
Run the following command to execute unit and integration tests:

bash
Copy code
npm test
Deployment
1. Deploying to Vercel
Install Vercel CLI:
bash
Copy code
npm install -g vercel
Deploy the project:
bash
Copy code
vercel --prod
Add environment variables via the Vercel Dashboard.
2. Deploying to AWS Lambda
Install the Serverless Framework:
bash
Copy code
npm install -g serverless
Deploy using Serverless:
bash
Copy code
serverless deploy
Directory Structure
plaintext
Copy code
src/
├── app.module.ts          # Root module of the application
├── preferences/           # User preferences module
│   ├── preferences.controller.ts
│   ├── preferences.service.ts
│   └── preferences.schema.ts
├── notifications/         # Notifications module
│   ├── notifications.controller.ts
│   ├── notifications.service.ts
│   └── notifications.schema.ts
├── main.ts                # Application entry point
Contributing
Contributions are welcome! Please fork the repository and submit a pull request.
