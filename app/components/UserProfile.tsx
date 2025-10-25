'use client';

import { Award, Music, TrendingUp, Star } from 'lucide-react';

interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
}

const mockBadges: Badge[] = [
  {
    id: '1',
    name: 'Rock Legend',
    description: 'Master of rock music',
    icon: '🎸',
    rarity: 'epic'
  },
  {
    id: '2',
    name: 'Pop Star',
    description: 'Pop music expert',
    icon: '⭐',
    rarity: 'rare'
  },
  {
    id: '3',
    name: 'Jazz Virtuoso',
    description: 'Jazz connoisseur',
    icon: '🎺',
    rarity: 'legendary'
  }
];

const rarityColors = {
  common: 'from-gray-400 to-gray-600',
  rare: 'from-blue-400 to-blue-600',
  epic: 'from-purple-400 to-purple-600',
  legendary: 'from-yellow-400 to-yellow-600'
};

export function UserProfile() {
  return (
    <div className="space-y-6">
      {/* Profile Header */}
      <div className="gradient-border p-6">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-3xl">
            🎵
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-1">Music Lover</h2>
            <p className="text-text-secondary">@musicfan.eth</p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-4">
          <StatCard icon={<Music />} label="Songs Guessed" value="127" />
          <StatCard icon={<TrendingUp />} label="Win Rate" value="78%" />
          <StatCard icon={<Star />} label="Vibe Points" value="12.5K" />
        </div>
      </div>

      {/* Badges Section */}
      <div>
        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
          <Award className="w-6 h-6 text-primary" />
          Your Badges
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {mockBadges.map((badge) => (
            <div
              key={badge.id}
              className="bg-surface rounded-lg p-4 card-shadow hover:scale-105 transition-transform duration-200"
            >
              <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${rarityColors[badge.rarity]} flex items-center justify-center text-3xl mb-3 mx-auto`}>
                {badge.icon}
              </div>
              <h4 className="font-bold text-center mb-1">{badge.name}</h4>
              <p className="text-xs text-text-secondary text-center">{badge.description}</p>
              <div className="mt-2 text-center">
                <span className={`text-xs px-2 py-1 rounded-full bg-gradient-to-r ${rarityColors[badge.rarity]} text-white`}>
                  {badge.rarity}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <div>
        <h3 className="text-xl font-bold mb-4">Recent Activity</h3>
        <div className="space-y-3">
          <ActivityItem
            icon="🎯"
            title="Perfect Score!"
            description="Guessed 'Bohemian Rhapsody' in 3 seconds"
            time="2 hours ago"
          />
          <ActivityItem
            icon="🏆"
            title="New Badge Earned"
            description="Unlocked 'Rock Legend' badge"
            time="1 day ago"
          />
          <ActivityItem
            icon="⚡"
            title="Streak Milestone"
            description="7-day playing streak achieved"
            time="2 days ago"
          />
        </div>
      </div>
    </div>
  );
}

interface StatCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
}

function StatCard({ icon, label, value }: StatCardProps) {
  return (
    <div className="text-center">
      <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center text-primary mx-auto mb-2">
        {icon}
      </div>
      <div className="text-2xl font-bold mb-1">{value}</div>
      <div className="text-xs text-text-secondary">{label}</div>
    </div>
  );
}

interface ActivityItemProps {
  icon: string;
  title: string;
  description: string;
  time: string;
}

function ActivityItem({ icon, title, description, time }: ActivityItemProps) {
  return (
    <div className="bg-surface rounded-lg p-4 flex items-start gap-3">
      <div className="text-2xl">{icon}</div>
      <div className="flex-1">
        <h4 className="font-bold mb-1">{title}</h4>
        <p className="text-sm text-text-secondary mb-1">{description}</p>
        <p className="text-xs text-text-secondary">{time}</p>
      </div>
    </div>
  );
}
