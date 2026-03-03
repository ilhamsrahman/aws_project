# AWS Programming Portfolio

This repository contains AWS cloud infrastructure implementations and ed-tech platform development projects leveraging serverless architecture and modern web technologies.

---

## 📂 Project Structure

### 🎓 EduPath Ed-Tech Platform
EduPath is a robust ed-tech streaming platform and career guidance service designed to bridge the knowledge gap by offering free courses and flexible learning solutions.

**Frontend Technology:** Developed using **ReactJS** to create a modular, reusable user interface that optimizes performance through a virtual DOM.
**Deployment:** Hosted on **Vercel** for automated deployment, Git integration, and instant rollbacks.
**Serverless Backend:** Fully migrated to **Amazon Web Services (AWS)** using **Python 3.10** for cloud functions.

#### **Data Management**
**AWS DynamoDB:** Serves as the primary NoSQL database for storing user profiles, course details, and career information.
**AWS S3:** Utilized for secure, cost-effective storage of static assets and course video materials.

#### **API & Delivery**
**AWS API Gateway:** Acts as the secure "front door," connecting the React application to backend Lambda functions.
**AWS CloudFront:** A global content delivery network (CDN) that caches content at edge locations to ensure low-latency video streaming for users.

---

## 📊 Database Design
The backend architecture manages data across three distinct tables to ensure organized content delivery:

| Table | Purpose | Key Attributes |
| :--- | :--- | :--- |
| **Awan-users** | User authentication & profiles | emailAddress (PK), firstName, lastName, phoneNumber, countryOfOrigin  |
| **Courses** | Educational content management | id (PK), university, duration, language, level, subject  |
| **Careers** | Career guidance & applications | id (PK), company, description, median_salary, tags |

---

## 🔮 Future Roadmap
**AWS Amplify Integration:** Streamlining the creation and scalability of web and mobile applications using the Amplify framework.
**Infrastructure Optimization:** Overcoming current environment limitations (such as AWS Academy Learner Lab role restrictions) to transition fully into AWS-native deployment roles.

---