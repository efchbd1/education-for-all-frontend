import { useState } from "react";
type SpeechRecognition = typeof window.SpeechRecognition;

declare global {
  interface Window {
    SpeechRecognition: any;
    webkitSpeechRecognition: any;
  }

  interface SpeechRecognitionEvent extends Event {
    results: {
      [index: number]: {
        [index: number]: { transcript: string };
      };
    };
  }
}

export const useVoiceTyping = (
  setNewPostContent: (text: string) => void,
  setOpenDialog: (open: boolean) => void
) => {
  const [isRecording, setIsRecording] = useState(false);
  const [recognition, setRecognition] = useState<SpeechRecognition | null>(null);

  const startRecording = () => {
    if (!window.SpeechRecognition && !window.webkitSpeechRecognition) {
      alert("הדפדפן שלך אינו תומך בזיהוי דיבור");
      return;
    }

    setOpenDialog(true);

    const SpeechRecognitionAPI =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    const speechRecognition = new SpeechRecognitionAPI();

    speechRecognition.lang = "he-IL";
    speechRecognition.continuous = false;
    speechRecognition.interimResults = false;

    speechRecognition.onstart = () => {
      setIsRecording(true);
    };

    speechRecognition.onresult = (event: SpeechRecognitionEvent) => {
      const transcript = event.results[0][0].transcript;
      setNewPostContent(transcript);
    };

    speechRecognition.onerror = (event: Event) => {
      alert("שגיאה בזיהוי הדיבור. נסה שוב.");
    };

    speechRecognition.onend = () => {
      setIsRecording(false);
    };

    speechRecognition.start();
    setRecognition(speechRecognition);
  };

  const stopRecording = () => {
    if (recognition) {
      recognition.stop();
      setIsRecording(false);
      setRecognition(null);
    }
  };

  return { isRecording, startRecording, stopRecording };
};
