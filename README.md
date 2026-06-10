# Media Control Center

Unified dashboard for my self-hosted media infrastructure.

## Features

- SABnzbd queue monitoring
- Jellyfin recently added media
- Radarr integration
- Sonarr integration
- Dockerized deployment
- Next.js frontend
- Tailwind UI
- API aggregation layer
- Firestick/TV dashboard foundation
- Multi-user profile groundwork

## Stack

- Next.js
- TypeScript
- TailwindCSS
- Docker
- Jellyfin
- SABnzbd
- Radarr
- Sonarr
- Linux
- tmux

## Screenshots

Live dashboard connected directly to my media stack.

## Goals

- Netflix-like TV interface
- Firestick compatibility
- User profiles
- AI recommendations
- Remote media management
- Unified media automation platform

## Deployment

```bash
docker compose up -d --build
```

## Development

```bash
npm install
npm run dev
```

## Environment Variables

Create a `.env.local` file:

```env
SAB_URL=
SAB_API_KEY=

JELLYFIN_URL=
JELLYFIN_API_KEY=
JELLYFIN_USER_ID=

RADARR_URL=
RADARR_API_KEY=

SONARR_URL=
SONARR_API_KEY=
```

## License

GPL-3.0
