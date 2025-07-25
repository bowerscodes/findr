# Findr - Modern Dating Application

A full-stack dating app built with Next.js 15, featuring real-time messaging, photo management, and social interactions. Demonstrates modern web development with TypeScript, Prisma, and cloud integrations.

## 🚀 Live Demo
**Production**: [Vercel Deployment](https://findr-theta.vercel.app/)

## ✨ Key Features
- **Authentication**: Multi-provider OAuth (GitHub, Google) + credentials
- **Real-time Chat**: Live messaging with Pusher WebSockets
- **Photo Management**: Cloudinary integration with admin approval
- **Social Features**: Like/unlike system with optimistic updates
- **Admin Panel**: Photo moderation dashboard
- **Mobile-responsive**: Modern UI with HeroUI components

## 🛠 Tech Stack
**Frontend**: Next.js 15, TypeScript, Tailwind CSS, HeroUI  
**Backend**: NextAuth.js v5, Prisma ORM, PostgreSQL  
**Services**: Cloudinary, Pusher, Resend, Vercel  

## 🏗 Architecture Highlights
- **Server Actions** for direct client-to-database operations
- **Real-time updates** with WebSocket integration
- **Type-safe development** with Prisma-generated types
- **Optimistic UI updates** for better user experience
- **Role-based access control** (Admin/Member)

## 🚀 Quick Start

### Clone and install
```bash
git clone https://github.com/bowerscodes/findr
npm install
```
### Setup environment
```bash
cp .env.example .env
# Add your API keys
```
### Database setup
```bash
npx prisma migrate dev
npx prisma db seed
```
### Start development
```bash
npm run dev
```

## 📁 Project Structure
```
src/
├── app/                 # Next.js 15 App Router
│   ├── actions/        # Server Actions
│   ├── admin/          # Admin interface
│   └── members/        # Core app pages
├── components/         # Reusable UI components
├── lib/               # Utilities & config
└── generated/         # Prisma client
```

## 🔒 Security & Performance
- Environment variable management
- bcrypt password hashing
- CSRF protection via NextAuth.js
- Image optimization with Cloudinary
- Efficient pagination for large datasets

## 🎯 Technical Showcases
- **Full-stack TypeScript** development
- **Real-time application** architecture
- **Modern authentication** patterns
- **Cloud service integration**
- **Production deployment** on Vercel

---

**Developer**: James Bowers  
**Portfolio**: [James Bowers Portfolio](https://github.com/bowerscodes) | **LinkedIn**: [James Bowers LinkedIn](https://www.linkedin.com/in/jamesbowers123)