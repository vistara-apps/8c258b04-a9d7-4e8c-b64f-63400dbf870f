'use client';

import { Trophy, Medal, Crown } from 'lucide-react';

interface LeaderboardEntry {
  rank: number;
  username: string;
  avatar: string;
  score: number;
  badges: number;
}

const mockLeaderboard: LeaderboardEntry[] = [
  { rank: 1, username: 'musicmaster.eth', avatar: '🎸', score: 25400, badges: 12 },
  { rank: 2, username: 'vibeking.eth', avatar: '👑', score: 23100, badges: 10 },
  { rank: 3, username: 'melodylover.eth', avatar: '🎵', score: 21800, badges: 9 },
  { rank: 4, username: 'beatdrop.eth', avatar: '🎧', score: 19500, badges: 8 },
  { rank: 5, username: 'rhythmstar.eth', avatar: '⭐', score: 18200, badges: 7 },
];

export function Leaderboard() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="gradient-border p-6 text-center">
        <Trophy className="w-12 h-12 text-primary mx-auto mb-3" />
        <h2 className="text-2xl font-bold mb-2">Global Leaderboard</h2>
        <p className="text-text-secondary">Top music experts on Base</p>
      </div>

      {/* Top 3 Podium */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        {mockLeaderboard.slice(0, 3).map((entry, index) => (
          <PodiumCard key={entry.rank} entry={entry} position={index} />
        ))}
      </div>

      {/* Leaderboard List */}
      <div className="space-y-3">
        {mockLeaderboard.map((entry) => (
          <LeaderboardRow key={entry.rank} entry={entry} />
        ))}
      </div>

      {/* Your Rank */}
      <div className="gradient-border p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-xl">
              🎵
            </div>
            <div>
              <div className="font-bold">Your Rank</div>
              <div className="text-sm text-text-secondary">musicfan.eth</div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-primary">#42</div>
            <div className="text-sm text-text-secondary">12,500 pts</div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface PodiumCardProps {
  entry: LeaderboardEntry;
  position: number;
}

function PodiumCard({ entry, position }: PodiumCardProps) {
  const heights = ['h-32', 'h-40', 'h-28'];
  const orders = [1, 0, 2]; // 2nd, 1st, 3rd
  const icons = [<Medal key="2" className="w-6 h-6" />, <Crown key="1" className="w-6 h-6" />, <Medal key="3" className="w-6 h-6" />];
  const colors = ['from-gray-400 to-gray-600', 'from-yellow-400 to-yellow-600', 'from-orange-400 to-orange-600'];

  return (
    <div className={`order-${orders[position]}`}>
      <div className={`bg-surface rounded-lg p-4 ${heights[position]} flex flex-col items-center justify-end card-shadow`}>
        <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${colors[position]} flex items-center justify-center text-white mb-2`}>
          {icons[position]}
        </div>
        <div className="text-2xl mb-2">{entry.avatar}</div>
        <div className="text-sm font-bold text-center truncate w-full">{entry.username.split('.')[0]}</div>
        <div className="text-xs text-text-secondary">{entry.score.toLocaleString()}</div>
      </div>
    </div>
  );
}

interface LeaderboardRowProps {
  entry: LeaderboardEntry;
}

function LeaderboardRow({ entry }: LeaderboardRowProps) {
  const isTopThree = entry.rank <= 3;
  
  return (
    <div className={`bg-surface rounded-lg p-4 flex items-center gap-4 ${isTopThree ? 'card-shadow' : ''}`}>
      <div className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold ${
        isTopThree ? 'bg-gradient-to-br from-primary to-accent text-white' : 'bg-bg text-text-secondary'
      }`}>
        {entry.rank}
      </div>
      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-2xl">
        {entry.avatar}
      </div>
      <div className="flex-1">
        <div className="font-bold">{entry.username}</div>
        <div className="text-sm text-text-secondary">{entry.badges} badges</div>
      </div>
      <div className="text-right">
        <div className="text-xl font-bold text-primary">{entry.score.toLocaleString()}</div>
        <div className="text-xs text-text-secondary">points</div>
      </div>
    </div>
  );
}
