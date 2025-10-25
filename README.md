# VibeMatch - Social Music Game on Base

A Farcaster-native music guessing game built on Base, featuring social interaction, onchain achievements, and Frame-based challenges.

## Features

- 🎵 **Daily Music Challenges** - Guess songs directly in Farcaster Frames
- 🏆 **NFT Badges** - Earn unique badges for your music expertise
- 👥 **Social Leaderboards** - Compete with friends using Basenames
- ⚡ **Gasless Transactions** - Seamless rewards and purchases on Base
- 🎨 **Coinbase Theme** - Beautiful dark navy UI with Base blue accents

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Blockchain**: Base (L2 on Ethereum)
- **Wallet**: OnchainKit + Coinbase Wallet
- **Social**: Farcaster Mini Apps SDK
- **Styling**: Tailwind CSS with Coinbase theme
- **TypeScript**: Full type safety

## Getting Started

1. **Install dependencies**:
```bash
npm install
```

2. **Set up environment variables**:
```bash
cp .env.local.example .env.local
# Add your OnchainKit API key from https://portal.cdp.coinbase.com
```

3. **Run development server**:
```bash
npm run dev
```

4. **Open** [http://localhost:3000](http://localhost:3000)

## Project Structure

```
vibematch/
├── app/
│   ├── components/
│   │   ├── Providers.tsx          # OnchainKit + React Query setup
│   │   ├── ConnectWalletButton.tsx # Wallet connection
│   │   ├── MusicPlayer.tsx        # Main game component
│   │   ├── UserProfile.tsx        # User stats and badges
│   │   └── Leaderboard.tsx        # Global rankings
│   ├── layout.tsx                 # Root layout
│   ├── page.tsx                   # Home page
│   └── globals.css                # Coinbase theme styles
├── public/
│   └── .well-known/
│       └── farcaster.json         # Mini App manifest
└── package.json
```

## Key Features Implementation

### Music Player
- Audio playback controls
- Multiple choice answers
- Score tracking
- Share functionality

### User Profile
- Farcaster identity integration
- Badge collection display
- Activity history
- Stats dashboard

### Leaderboard
- Global rankings
- Top 3 podium display
- User rank tracking
- Real-time updates

## Deployment

1. **Build for production**:
```bash
npm run build
```

2. **Deploy to Vercel** (recommended):
```bash
vercel deploy
```

3. **Configure environment variables** in your deployment platform

4. **Update manifest** at `public/.well-known/farcaster.json` with your production URL

## Base Mini App Integration

This app is built following Base Mini Apps best practices:

- ✅ OnchainKit for wallet and identity
- ✅ Farcaster SDK for social features
- ✅ Gasless transactions via Paymaster
- ✅ Frame-based challenges
- ✅ Basename integration
- ✅ Mobile-first responsive design

## License

MIT

## Support

For issues or questions, please open an issue on GitHub.
