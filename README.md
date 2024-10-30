# Fridge Ingredient Detection with AI

A web application that allows users to upload a picture of their fridge (or any image containing food), and the system will identify ingredients visible in the image, ideally estimating the amount of each item.

## Overview

The Fridge Ingredient Detection app uses AI to analyze uploaded images of food items and detect ingredients within the image. The app was built using **Next.js** for the frontend, **Tailwind CSS** for styling, and **AWS Rekognize** to detect and classify ingredients in the uploaded image.

## Tech Stack

- **Frontend**: Next.js, React, Tailwind CSS
- **AI/ML**: Amazon Rekognition
- **Backend/API**: Next.js API routes
- **Deployment**: Vercel

## AI Approach

For ingredient detection, the app utilizes **Amazon Rekognition** to analyze the uploaded images. Amazon Rekognition provides pre-trained models for detecting objects within images, which includes many common food items. By leveraging this API, we can quickly and efficiently detect ingredients in an uploaded image.

- note - the model is not trained to detect ingredients, leading to an inaccurate classification.

## Description

The tech stacks were chosen based on the benefits including scalability, ease of cost management, security, reliability, and developer support. AI is levereged in the image classification where it uses ML to identify objects.

Some of the challenges that were faced during the project were minor syntax errors and compile errors such as hydration mismatch while integrating AWS Rekognition, which took up a lot of time than I expected. It was a learning process and took a lot of searching and reading through developer forums.

## Future Approach

Here is the list of things I will work on.

- Train the model on AWS Rekognition to detect items or leverage pre-existing other food scan API's like Foodvisor API / Clarifai API that provices pre-trained models to detect items

- Improve on the UI/UX components by improving the design, and adding animations such as loading times to increase user experience using Motion Framer.

- Integrate a database storage to store the scanned items and let the user scan multiple times. Once the user hits results button, the user will see all the collected scanned items.

- Implement functionalities that uses the scanned items -> ex) recipe recommender based on the collected ingredients
