# Lappen.no Quiz System

Norwegian driver's license theory quiz application (Class B - Personbil) built with React, TypeScript, and Supabase.

## Features

- 🎯 18-question quiz with randomized selection
- ✅ Pass criteria: Maximum 3 errors (83.3%)
- 📱 Mobile-first responsive design
- 🌐 Full Norwegian language support
- 🔒 Type-safe Supabase integration
- ⚡ Zero authentication required

## Tech Stack

- **Frontend:** React 18 + TypeScript + Vite
- **Backend:** Supabase (PostgreSQL + REST API)
- **Styling:** Vanilla CSS with Inter font
- **Deployment:** GitHub Actions → Webhuset (FTP)

## Quick Start

### Prerequisites
- Node.js 18+
- Supabase account with questions table

### Installation

```bash
# Install dependencies
npm install

# Create .env.local file
echo VITE_SUPABASE_URL=your_supabase_url >> .env.local
echo VITE_SUPABASE_ANON_KEY=your_anon_key >> .env.local

# Run development server
npm run dev
```

Visit `http://localhost:5173`

### Build for Production

```bash
npm run build
# Output in ./dist directory
```

## Database Schema

```sql
CREATE TABLE questions (
  id BIGINT PRIMARY KEY,
  question_text TEXT NOT NULL,
  options TEXT[] NOT NULL,  -- Array of 3-4 answer options
  correct_answer TEXT NOT NULL,  -- Full text of correct answer
  category TEXT,
  image_name TEXT,  -- Optional image filename
  explanation TEXT
);
```

## Project Structure

```
src/
├── types/
│   └── database.types.ts    # Supabase schema types
├── services/
│   ├── supabase.ts          # Client initialization
│   └── questionService.ts   # Data fetching
├── logic/
│   └── quizEngine.ts        # Quiz scoring logic
├── components/
│   ├── QuizContainer.tsx    # Main orchestrator
│   ├── QuestionCard.tsx     # Question display
│   ├── ProgressBar.tsx      # Progress tracking
│   └── ResultScreen.tsx     # Results display
├── App.tsx                  # Application shell
├── main.tsx                 # Entry point
└── index.css                # Design system
```

## Deployment

This project uses GitHub Actions for automated deployment to Webhuset via FTP.

### Required GitHub Secrets

Add these in Settings → Secrets and variables → Actions:

- `VITE_SUPABASE_URL` - Your Supabase project URL
- `VITE_SUPABASE_ANON_KEY` - Your Supabase anon/public key
- `FTP_SERVER` - Webhuset FTP server address
- `FTP_USERNAME` - FTP username
- `FTP_PASSWORD` - FTP password
- `FTP_SERVER_DIR` - Target directory path

Push to `main` branch triggers automatic deployment.

## Architecture

Built using the **A.N.T. architecture** pattern:

- **Action Layer:** React UI components with Norwegian text
- **Network Layer:** Business logic (scoring, validation)
- **Task Layer:** Supabase data access with type safety

## License

Private project for lappen.no

## Credits

Built using the B.L.A.S.T. protocol:
- **B**lueprint - Planning and architecture
- **L**ink - Supabase integration
- **A**rchitect - Core implementation
- **S**tylize - Minimalist UI design
- **T**rigger - Automation and deployment
