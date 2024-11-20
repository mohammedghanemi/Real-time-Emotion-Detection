# Real-Time Emotion Detection Web Application

This project is a **React-based web application** that performs **real-time emotion detection** using a pre-trained machine learning model. The application allows users to either use their webcam or upload a video for emotion recognition. 

## Features
- **Webcam Mode**: Capture live video input for real-time emotion detection.
- **Video Upload**: Upload a pre-recorded video for emotion analysis.
- **Model Information**: Displays key model details such as input shape, frame rate, and model path.

## Final Interface
Below is a preview of the final interface that users will interact with:

![Real-Time Emotion Detection GUI](https://github.com/mohammedghanemi/Real-time-Emotion-Detection/blob/main/GUIapp.PNG)

## How It Works
1. **Frontend**: Built with React, the web application provides a clean and intuitive user interface for video input and emotion detection output.
2. **Backend Model**: The machine learning model used for emotion detection is pre-trained and saved in a separate repository [here](https://github.com/mohammedghanemi/Emotion-detection-using-audio-visual-modalities-for-accident-prevention).
   - The model processes video frames and predicts the emotion in real-time or from uploaded videos.
3. **Integration**: The frontend sends video data to the backend for emotion prediction, and the results are displayed in real-time on the application.

## Deployment
The application is deployed using **Vercel**. You can access the live version [here](https://real-time-emotion-detection.vercel.app).

## Model Repository
The emotion detection model is trained using video data and saved in another repository. You can find the model details and code [here](https://github.com/mohammedghanemi/Emotion-detection-using-audio-visual-modalities-for-accident-prevention/blob/main/Implementation_on_enterface/Implement_On_MfccVideoframesEnterface.ipynb).

## Technologies Used
- **React.js**: For building the frontend.
- **Vercel**: For deployment.
- **Machine Learning Model**: Pre-trained model using deep learning techniques, hosted separately.

