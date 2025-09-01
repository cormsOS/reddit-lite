# Reddit Lite - Next.js Practice Project

This is a Reddit-like application built as a practice project to understand and explore **Next.js 15** features and modern React development patterns. This project demonstrates various advanced concepts including server actions, authentication, database integration, and modern UI components.

## 🎯 Project Overview

This application is a simplified Reddit clone that allows users to:
- Create and browse topics
- Create posts within topics
- Comment on posts with nested comment threads
- User authentication with NextAuth.js
- Search functionality across posts and topics

## 🛠️ Technologies & Features Implemented

### Core Framework
- **Next.js 15** with App Router
- **React 19** with latest features
- **TypeScript** for type safety
- **Tailwind CSS** for styling

### UI Components
- **NextUI** component library with custom theming

### Authentication & Security
- **NextAuth.v5 (Auth.js)** for authentication
- **Prisma** as ORM with PostgreSQL
- Secure server actions with validation using **Zod**

### Database & Data Management
- **PostgreSQL** database with Docker
- **Prisma** migrations and schema management
- Server-side data fetching and caching
- Optimistic updates for better UX

### Key Next.js Concepts Explored
- ✅ Server Actions for form handling
- ✅ Server and Client Components
- ✅ Dynamic routing with nested layouts
- ✅ Loading states and error boundaries
- ✅ Search functionality with dynamic routes
- ✅ Database queries with proper error handling
- ✅ Authentication integration
- ✅ Form validation and submission

## 🚀 Getting Started

### Prerequisites
- **Node.js** (v18 or higher)
- **Docker** (for PostgreSQL database)
- **npm** or **yarn**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/cormsOS/reddit-lite.git
   cd reddit-lite
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```env
   # Database
   DATABASE_URL="postgresql://postgres@localhost:5432/reddit"
   
   # NextAuth
   AUTH_SECRET="insert-any-string-here"
   NEXTAUTH_URL="http://localhost:3000"
   
   # GitHub OAuth (optional)
   GITHUB_CLIENT_ID="your-github-client-id"
   GITHUB_CLIENT_SECRET="your-github-client-secret"
   ```

4. **Start the PostgreSQL database**
   ```bash
   npm run start:db
   ```

5. **Run database migrations**
   ```bash
   npm run prisma:migrate:local
   ```

6. **Generate Prisma client**
   ```bash
   npm run prisma:generate:local
   ```

7. **Start the development server**
   ```bash
   npm run dev
   ```

8. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run start:db` - Start PostgreSQL in Docker
- `npm run prisma:migrate:local` - Run database migrations
- `npm run prisma:generate:local` - Generate Prisma client
- `npm run lint` - Run ESLint

## 📁 Project Structure

```
src/
├── app/                    # App Router pages
│   ├── topics/[slug]/     # Dynamic topic pages
│   ├── search/            # Search functionality
│   └── api/auth/          # NextAuth API routes
├── actions/               # Server Actions
├── components/            # Reusable UI components
│   ├── posts/            # Post-related components
│   ├── comments/         # Comment system
│   └── topics/           # Topic management
├── db/                   # Database configuration
│   └── queries/          # Database query functions
└── auth.ts               # NextAuth configuration
```

## 🎓 Learning Outcomes

Through building this project, I've gained hands-on experience with:

- **Modern Next.js patterns** including Server Actions and the App Router
- **Full-stack development** with integrated frontend and backend
- **Database design** and relationships with Prisma
- **Authentication flows** and session management
- **Form handling** and validation in React
- **Component composition** and reusability
- **Type-safe development** with TypeScript
- **Responsive design** and modern CSS techniques

---

*This project was created as part of a Udemy Next.js course to practice modern React and Next.js development patterns.*
