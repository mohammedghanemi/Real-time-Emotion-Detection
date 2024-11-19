import React, { useState, useRef } from 'react';
import Webcam from 'react-webcam';
import { Camera, Upload, Play, Pause, RefreshCw } from 'lucide-react';

type Emotion = 'anger' | 'happiness' | 'surprise' | 'disgust' | 'fear' | 'sadness';

const emotionColors: Record<Emotion, string> = {
  anger: 'bg-red-500',
  happiness: 'bg-yellow-500',
  surprise: 'bg-purple-500',
  disgust: 'bg-green-500',
  fear: 'bg-blue-500',
  sadness: 'bg-gray-500',
};

function App() {
  const [mode, setMode] = useState<'webcam' | 'upload'>('webcam');
  const [isRecording, setIsRecording] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [currentEmotion, setCurrentEmotion] = useState<Emotion | null>(null);
  const webcamRef = useRef<Webcam>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      // Simulate emotion detection (replace with actual model inference)
      setTimeout(() => {
        const emotions: Emotion[] = ['anger', 'happiness', 'surprise', 'disgust', 'fear', 'sadness'];
        setCurrentEmotion(emotions[Math.floor(Math.random() * emotions.length)]);
      }, 1000);
    }
  };

  const toggleRecording = () => {
    setIsRecording(!isRecording);
    if (!isRecording) {
      // Start recording simulation
      const interval = setInterval(() => {
        const emotions: Emotion[] = ['anger', 'happiness', 'surprise', 'disgust', 'fear', 'sadness'];
        setCurrentEmotion(emotions[Math.floor(Math.random() * emotions.length)]);
      }, 2000);

      // Store interval ID for cleanup
      return () => clearInterval(interval);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="bg-gray-800 p-6">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold flex items-center gap-2">
            <Camera className="w-8 h-8" />
            Real-time Emotion Detection
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto p-6">
        {/* Mode Selection */}
        <div className="flex gap-4 mb-8">
          <button
            onClick={() => setMode('webcam')}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg transition ${
              mode === 'webcam' ? 'bg-blue-600' : 'bg-gray-700 hover:bg-gray-600'
            }`}
          >
            <Camera className="w-5 h-5" />
            Webcam Mode
          </button>
          <button
            onClick={() => setMode('upload')}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg transition ${
              mode === 'upload' ? 'bg-blue-600' : 'bg-gray-700 hover:bg-gray-600'
            }`}
          >
            <Upload className="w-5 h-5" />
            Upload Video
          </button>
        </div>

        {/* Video Display */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-800 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Video Input</h2>
            <div className="aspect-video bg-black rounded-lg overflow-hidden">
              {mode === 'webcam' ? (
                <Webcam
                  ref={webcamRef}
                  audio={false}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <label className="cursor-pointer">
                    <input
                      type="file"
                      accept="video/*"
                      className="hidden"
                      onChange={handleFileUpload}
                    />
                    <div className="flex flex-col items-center gap-4">
                      <Upload className="w-12 h-12 text-gray-400" />
                      <span className="text-gray-400">
                        {selectedFile ? selectedFile.name : 'Click to upload video'}
                      </span>
                    </div>
                  </label>
                </div>
              )}
            </div>
            {mode === 'webcam' && (
              <div className="mt-4 flex justify-center">
                <button
                  onClick={toggleRecording}
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg transition ${
                    isRecording ? 'bg-red-600' : 'bg-green-600'
                  }`}
                >
                  {isRecording ? (
                    <>
                      <Pause className="w-5 h-5" />
                      Stop Recording
                    </>
                  ) : (
                    <>
                      <Play className="w-5 h-5" />
                      Start Recording
                    </>
                  )}
                </button>
              </div>
            )}
          </div>

          {/* Results Panel */}
          <div className="bg-gray-800 rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">Emotion Detection</h2>
              <button
                onClick={() => setCurrentEmotion(null)}
                className="p-2 hover:bg-gray-700 rounded-full transition"
              >
                <RefreshCw className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-6">
              {/* Current Emotion */}
              <div className="bg-gray-700 rounded-lg p-6">
                <h3 className="text-lg font-medium mb-4">Current Emotion</h3>
                {currentEmotion ? (
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-4 h-4 rounded-full ${
                        emotionColors[currentEmotion]
                      }`}
                    />
                    <span className="text-2xl font-bold capitalize">
                      {currentEmotion}
                    </span>
                  </div>
                ) : (
                  <p className="text-gray-400">
                    {isRecording
                      ? 'Analyzing...'
                      : 'Start recording or upload a video to detect emotions'}
                  </p>
                )}
              </div>

              {/* Model Info */}
              <div className="bg-gray-700 rounded-lg p-6">
                <h3 className="text-lg font-medium mb-4">Model Information</h3>
                <div className="space-y-2 text-sm">
                  <p>
                    <span className="text-gray-400">Input Shape:</span>{' '}
                    [16, 224, 224, 3]
                  </p>
                  <p>
                    <span className="text-gray-400">Frame Rate:</span> 6 fps
                  </p>
                  <p>
                    <span className="text-gray-400">Model Path:</span>{' '}
                    D:/saved_model
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;