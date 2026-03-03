# AWS Programming Portfolio

This repository contains AWS cloud infrastructure implementations and ed-tech platform development projects leveraging serverless architecture and modern web technologies.

---

## 📂 Project Structure

### 🎓 EduPath Ed-Tech Platform
[cite_start]EduPath is a robust ed-tech streaming platform and career guidance service designed to bridge the knowledge gap by offering free courses and flexible learning solutions[cite: 3, 20].

* [cite_start]**Frontend Technology:** Developed using **ReactJS** to create a modular, reusable user interface that optimizes performance through a virtual DOM[cite: 24, 25, 27].
* [cite_start]**Deployment:** Hosted on **Vercel** for automated deployment, Git integration, and instant rollbacks[cite: 15, 64, 132, 133].
* [cite_start]**Serverless Backend:** Fully migrated to **Amazon Web Services (AWS)** using **Python 3.10** for cloud functions[cite: 114, 115].

#### **Data Management**
* [cite_start]**AWS DynamoDB:** Serves as the primary NoSQL database for storing user profiles, course details, and career information[cite: 14, 43, 47, 95].
* [cite_start]**AWS S3:** Utilized for secure, cost-effective storage of static assets and course video materials[cite: 51, 52, 119, 134].

#### **API & Delivery**
* [cite_start]**AWS API Gateway:** Acts as the secure "front door," connecting the React application to backend Lambda functions[cite: 58, 60, 117].
* [cite_start]**AWS CloudFront:** A global content delivery network (CDN) that caches content at edge locations to ensure low-latency video streaming for users[cite: 54, 55, 122, 123].

---

## 📊 Database Design
[cite_start]The backend architecture manages data across three distinct tables to ensure organized content delivery[cite: 95]:

| Table | Purpose | Key Attributes |
| :--- | :--- | :--- |
| **Awan-users** | [cite_start]User authentication & profiles | emailAddress (PK), firstName, lastName, phoneNumber, countryOfOrigin [cite: 67-72, 95] |
| **Courses** | [cite_start]Educational content management | id (PK), university, duration, language, level, subject [cite: 73-83, 95] |
| **Careers** | [cite_start]Career guidance & applications | id (PK), company, description, median_salary, tags [cite: 84-93, 95] |

---

## 🔮 Future Roadmap
* [cite_start]**AWS Amplify Integration:** Streamlining the creation and scalability of web and mobile applications using the Amplify framework[cite: 126, 127].
* [cite_start]**Infrastructure Optimization:** Overcoming current environment limitations (such as AWS Academy Learner Lab role restrictions) to transition fully into AWS-native deployment roles[cite: 125, 128].

---