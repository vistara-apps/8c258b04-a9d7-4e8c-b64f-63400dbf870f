'use client';

import { useState } from 'react';
import { Play, Pause, Music2, Share2, SkipForward } from 'lucide-react';

interface Song {
  id: string;
  title: string;
  artist: string;
  clipUrl: string;
  options: string[];
  correctAnswer: string;
}

const mockSong: Song = {
  id: '1',
  title: 'Mystery Song',
  artist: 'Unknown Artist',
  clipUrl: '/audio/sample.mp3',
  options: [
    'The Beatles - Hey Jude',
    'Queen - Bohemian Rhapsody',
    'Led Zeppelin - Stairway to Heaven',
    'Pink Floyd - Comfortably Numb'
  ],
  correctAnswer: 'Queen - Bohemian Rhapsody'
};

export function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
    // Audio playback logic will be implemented here
  };

  const handleAnswerSelect = (answer: string) => {
    if (showResult) return;
    setSelectedAnswer(answer);
  };

  const handleSubmit = () => {
    if (!selectedAnswer) return;
    setShowResult(true);
    if (selectedAnswer === mockSong.correctAnswer) {
      setScore(score + 100);
    }
  };

  const handleNext = () => {
    setSelectedAnswer(null);
    setShowResult(false);
    setIsPlaying(false);
  };

  return (
    <div className="space-y-6">
      {/* Music Player Card */}
      <div className="gradient-border p-8">
        <div className="flex flex-col items-center">
          {/* Album Art Placeholder */}
          <div className="w-48 h-48 rounded-full bg-gradient-to-br from-primary via-accent to-primary flex items-center justify-center mb-6 animate-pulse-slow">
            <Music2 className="w-24 h-24 text-white" />
          </div>

          {/* Song Info */}
          <h3 className="text-2xl font-bold mb-2">Daily Challenge</h3>
          <p className="text-text-secondary mb-6">Listen and guess the song!</p>

          {/* Play Button */}
          <button
            onClick={handlePlayPause}
            className="w-20 h-20 rounded-full bg-primary hover:bg-primary/90 flex items-center justify-center button-shadow transition-all duration-200 hover:scale-110"
          >
            {isPlaying ? (
              <Pause className="w-10 h-10 text-white" />
            ) : (
              <Play className="w-10 h-10 text-white ml-1" />
            )}
          </button>

          {/* Progress Bar */}
          <div className="w-full mt-6">
            <div className="h-2 bg-surface rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-300"
                style={{ width: isPlaying ? '60%' : '0%' }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Answer Options */}
      <div className="space-y-3">
        <h4 className="text-lg font-bold mb-4">Choose your answer:</h4>
        {mockSong.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswerSelect(option)}
            disabled={showResult}
            className={`
              w-full p-4 rounded-lg text-left font-medium transition-all duration-200
              ${selectedAnswer === option
                ? showResult
                  ? option === mockSong.correctAnswer
                    ? 'bg-success text-white'
                    : 'bg-danger text-white'
                  : 'bg-primary text-white'
                : 'bg-surface hover:bg-surface/80'
              }
              ${showResult && option === mockSong.correctAnswer ? 'bg-success text-white' : ''}
              disabled:cursor-not-allowed
            `}
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-bg/20 flex items-center justify-center text-sm">
                {String.fromCharCode(65 + index)}
              </div>
              <span>{option}</span>
            </div>
          </button>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3">
        {!showResult ? (
          <button
            onClick={handleSubmit}
            disabled={!selectedAnswer}
            className="flex-1 py-3 bg-primary text-white rounded-lg font-semibold button-shadow hover:bg-primary/90 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Submit Answer
          </button>
        ) : (
          <>
            <button
              onClick={handleNext}
              className="flex-1 py-3 bg-primary text-white rounded-lg font-semibold button-shadow hover:bg-primary/90 transition-colors duration-200 flex items-center justify-center gap-2"
            >
              <SkipForward className="w-5 h-5" />
              Next Challenge
            </button>
            <button
              className="px-6 py-3 bg-surface text-text-primary rounded-lg font-semibold hover:bg-surface/80 transition-colors duration-200 flex items-center gap-2"
            >
              <Share2 className="w-5 h-5" />
              Share
            </button>
          </>
        )}
      </div>

      {/* Score Display */}
      {showResult && (
        <div className="gradient-border p-6 text-center animate-fade-in">
          <h3 className="text-2xl font-bold mb-2">
            {selectedAnswer === mockSong.correctAnswer ? '🎉 Correct!' : '❌ Wrong Answer'}
          </h3>
          <p className="text-text-secondary mb-4">
            {selectedAnswer === mockSong.correctAnswer 
              ? 'You earned 100 Vibe Points!' 
              : `The correct answer was: ${mockSong.correctAnswer}`
            }
          </p>
          <div className="text-4xl font-bold text-primary">{score} pts</div>
        </div>
      )}
    </div>
  );
}
