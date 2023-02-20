# Project Four - Tesla Reimagined

![Screenshot 2023-02-20 at 1 49 20 PM](https://user-images.githubusercontent.com/108159910/220196465-7ec9b94c-e3a4-41e8-bf3a-aaa55e5df519.png)
UI/UX inspired by Aman Verma & Kushanthi Hasinika

Version 2
Prepared by Brendon Van

General Assembly SEIR-725ec | Unit 4 Project
October 17 2022

![Screenshot 2023-02-20 at 1 48 18 PM](https://user-images.githubusercontent.com/108159910/220196388-a66e1911-ceaa-4ff4-8b35-f0b9bea781bf.png)
https://tesla-reimagined.vercel.app/

## Project Description 
Tesla Reimagined is a web application that aims to provide a similar user experience as the Tesla website. The application will allow users to browse through different Tesla models, customize them with different features, and book a test drive. The web application will be built using Spring Boot and Java for the backend, React for the frontend, and Postgres for the database.

---
# Wireframes

Homepage:

Header with the Tesla logo, login/signup button, and search bar
Main hero image displaying a featured Tesla model with a call-to-action (CTA) button to learn more
Navigation bar with links to different pages such as Model S, Model X, Model Y, Cybertruck, and Roadster
Section highlighting Tesla's commitment to sustainability and electric vehicles
Footer with links to legal information, company information, and social media channels
Model Page:

Header with the Tesla logo and navigation bar
Main image of the model with a CTA button to customize
Section detailing the model's specifications, features, and options
Gallery of images and videos showcasing the model
Pricing and financing information
CTA button to book a test drive
Customization Page:

Header with the Tesla logo and navigation bar
Section to choose the model variant (e.g. color, wheels, interior)
Section to choose additional options (e.g. autopilot, premium interior)
Summary of the chosen options and pricing
CTA button to proceed to checkout
Checkout Page:

Header with the Tesla logo and navigation bar
Section to enter personal and payment information
Summary of the purchase and pricing
CTA button to confirm the purchase
Account Page:

Header with the Tesla logo and navigation bar
Section to view personal information and purchase history
CTA button to edit personal information or cancel a purchase
Logout button

# MVP User Stories

As a prospective Tesla customer, I want to be able to browse and customize different Tesla models, view their features and pricing, and book a test drive, so that I can make an informed decision about purchasing a Tesla vehicle.

As a user, I can visit the homepage of the Tesla website to view an overview of the different Tesla models available and access the navigation bar to browse to individual model pages.

- *As a user, I can click on a specific model to view its specifications, features, and pricing information.*

- *As a user, I can customize the model with different options and see the price adjust in real-time.*

- *As a user, I can view a summary of my customizations and pricing before proceeding to the checkout page.*

- *As a user, I can enter my personal and payment information on the checkout page to confirm my purchase.*

- *As a user, I can book a test drive of a selected model by filling out a form with my personal information and preferred date and time.*

- *As a user, I can create an account to view my purchase history and edit my personal information.*

# ERDs

Entities:

User
Model
Option
Purchase
User:

user_id (primary key)
first_name
last_name
email
password
Model:

model_id (primary key)
model_name
base_price
Option:

option_id (primary key)
option_name
option_price
Purchase:

purchase_id (primary key)
user_id (foreign key to User entity)
model_id (foreign key to Model entity)
total_price
Relationships:

A User can have multiple Purchases (one-to-many)
A Purchase can only belong to one User (many-to-one)
A Model can have multiple Options (one-to-many)
An Option can only belong to one Model (many-to-one)
A Purchase can have multiple Models (many-to-many)
A Model can be in multiple Purchases (many-to-many)

# API

Github Repo: https://github.com/brendonvan/Tesla-Reimagined-Backend

```json
[
  {
  "id": 1,
  "name": "Cybertruck",
  "range": 500,
  "top_speed": 130,
  "zero_to_sixty": 2.9,
  "motor_options": "Dual Motor",
  "paint_options": "Stainless Steel",
  "wheel_options": "Default",
  "interior_options": "All Black",
  "enhanced_autopilot": true,
  "full_autopilot": false
  }
]
```


# Contributors

1. Brendon Van [Github Profile](https://github.com/brendonvan)
