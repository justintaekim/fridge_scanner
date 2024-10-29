# Fridge Ingredient Detection with AI

A web application that allows users to upload a picture of their fridge (or any image containing food), and the system will identify ingredients visible in the image, ideally estimating the amount of each item.

## Table of Contents

1. [Overview](#overview)
2. [Tech Stack](#tech-stack)
3. [AI Approach](#ai-approach)
4. [Features](#features)
5. [Setup Instructions](#setup-instructions)
6. [Challenges and Solutions](#challenges-and-solutions)
7. [Deployed Application](#deployed-application)
8. [Screenshots](#screenshots)
9. [Future Improvements](#future-improvements)

## Overview

The Fridge Ingredient Detection app uses AI to analyze uploaded images of food items and detect ingredients within the image. The app was built using **Next.js** for the frontend, **Tailwind CSS** for styling, and a chosen AI/ML model to detect and classify ingredients in the uploaded image.

This project was developed as a coding assignment to demonstrate technical proficiency in AI integration, web application design, and user experience.

## Tech Stack

- **Frontend**: Next.js, React, Tailwind CSS
- **AI/ML**: Amazon Rekognition for ingredient detection (custom models could be added in future iterations)
- **Backend/API**: Custom Next.js API routes
- **Deployment**: [Vercel](https://vercel.com/) (or any preferred platform like Netlify)

## AI Approach

For ingredient detection, the app utilizes **Amazon Rekognition** to analyze the uploaded images. Amazon Rekognition provides pre-trained models for detecting objects within images, which includes many common food items. By leveraging this API, we can quickly and efficiently detect ingredients in an uploaded image.

> **Note**: Rekognition currently doesn’t provide quantity estimations. However, future iterations of the project could incorporate additional AI models trained to recognize and estimate food quantities.

## Features

1. **Image Upload**: Users can upload images of their fridge contents or any other food images.
2. **Ingredient Recognition**: The app processes the image and detects recognizable food items.
3. **User-Friendly UI/UX**: The app is designed to be intuitive and easy to use, with visual feedback on detected ingredients.
4. **Error Handling**: The app provides feedback if no ingredients are detected or if the image format is unsupported.
5. **Deployed for Accessibility**: The app is deployed on Vercel for easy access and testing.

## Setup Instructions

### Prerequisites

- **Node.js** (>=14.x recommended)
- **Amazon Rekognition API**: An AWS account with permissions for Amazon Rekognition and access to API keys.

### Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd fridge-ingredient-detection
   ```
