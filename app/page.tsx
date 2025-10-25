'use client';

import { useEffect, useState } from 'react';
import { Music, Trophy, Users, Zap } from 'lucide-react';
import { MusicPlayer } from './components/MusicPlayer';
import { UserProfile } from './components/UserProfile';
import { Leaderboard } from './components/Leaderboard';
import { ConnectWalletButton } from './components/ConnectWalletButton';

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState<'play' | 'profile' | 'leaderboard'>('play');

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse">
          <Music className="w-16 h-16 text-primary" />
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen pb-20">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-surface/95 backdrop-blur-sm border-b border-primary/20">
        <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <Music className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-text-primary">VibeMatch</h1>
                <p className="text-xs text-text-secondary">Social Music Game</p>
              </div>
            </div>
            <ConnectWalletButton />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Banner */}
        <div className="gradient-border p-6 mb-8 animate-fade-in">
          <h2 className="text-2xl lg:text-3xl font-bold mb-2">
            Welcome to VibeMatch! 🎵
          </h2>
          <p className="text-text-secondary text-base leading-relaxed">
            Guess the tune, challenge friends, and earn rewards on Base. Your music taste, onchain.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex gap-2 mb-6 overflow-x-auto">
          <TabButton
            icon={<Music className="w-5 h-5" />}
            label="Play"
            active={activeTab === 'play'}
            onClick={() => setActiveTab('play')}
          />
          <TabButton
            icon={<Users className="w-5 h-5" />}
            label="Profile"
            active={activeTab === 'profile'}
            onClick={() => setActiveTab('profile')}
          />
          <TabButton
            icon={<Trophy className="w-5 h-5" />}
            label="Leaderboard"
            active={activeTab === 'leaderboard'}
            onClick={() => setActiveTab('leaderboard')}
          />
        </div>

        {/* Tab Content */}
        <div className="animate-fade-in">
          {activeTab === 'play' && <MusicPlayer />}
          {activeTab === 'profile' && <UserProfile />}
          {activeTab === 'leaderboard' && <Leaderboard />}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          <FeatureCard
            icon={<Zap className="w-6 h-6" />}
            title="Daily Challenges"
            description="New music puzzles every day with exclusive rewards"
          />
          <FeatureCard
            icon={<Trophy className="w-6 h-6" />}
            title="Earn Badges"
            description="Unlock unique NFT badges for your music expertise"
          />
          <FeatureCard
            icon={<Users className="w-6 h-6" />}
            title="Challenge Friends"
            description="Share your scores and compete on leaderboards"
          />
          <FeatureCard
            icon={<Music className="w-6 h-6" />}
            title="Gasless Rewards"
            description="Claim rewards without paying gas fees"
          />
        </div>
      </div>
    </main>
  );
}

interface TabButtonProps {
  icon: React.ReactNode;
  label: string;
  active: boolean;
  onClick: () => void;
}

function TabButton({ icon, label, active, onClick }: TabButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`
        flex items-center gap-2 px-4 py-2 rounded-lg font-semibold
        transition-all duration-200 whitespace-nowrap
        ${active 
          ? 'bg-primary text-white button-shadow' 
          : 'bg-surface text-text-secondary hover:bg-surface/80'
        }
      `}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-surface rounded-lg p-6 card-shadow hover:scale-105 transition-transform duration-200">
      <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4 text-primary">
        {icon}
      </div>
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-text-secondary text-sm">{description}</p>
    </div>
  );
}
