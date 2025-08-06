# QuantumEdge - Quantum-Powered Full-Stack Application

A modern Next.js 14 full-stack application built with cutting-edge technologies and a quantum-inspired design system.

## 🚀 Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS with custom quantum theme
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **State Management**: TanStack Query
- **Validation**: Zod
- **Backend**: Firebase (Auth, Firestore, Storage)
- **Security**: bcryptjs for password hashing
- **Icons**: Lucide React

## 🎨 Design System

### Quantum Theme Colors
- **Purple**: Deep quantum purples (#3b0764 - #faf5ff)
- **Cyan**: Electric cyans (#083344 - #ecfeff) 
- **Blue**: Quantum blues (#082f49 - #f0f9ff)

### Features
- Glass morphism effects with backdrop blur
- Responsive design with custom breakpoints
- Modern animations and micro-interactions
- Dark/light mode support

## 📁 Project Structure

```
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx          # Homepage
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── header.tsx        # Navigation header
│   ├── footer.tsx        # Site footer
│   └── providers.tsx     # Context providers
├── lib/                  # Utility libraries
│   ├── firebase.ts       # Firebase configuration
│   ├── query-client.ts   # TanStack Query setup
│   ├── utils.ts          # Utility functions
│   └── validations.ts    # Zod schemas
├── types/                # TypeScript type definitions
└── public/               # Static assets
```

## 🛠️ Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Firebase project (for full functionality)

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd quantumedge
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables
```bash
cp .env.local.template .env.local
# Edit .env.local with your Firebase and other API keys
```

4. Start the development server
```bash
npm run dev
```

Visit `http://localhost:3000` to see the application.

## 🔧 Configuration

### Firebase Setup
1. Create a Firebase project at https://console.firebase.google.com
2. Enable Authentication, Firestore, and Storage
3. Copy your Firebase config to `.env.local`

### Tailwind Configuration
The project includes a custom Tailwind configuration with:
- Quantum-themed color palette
- Custom breakpoints
- Backdrop blur utilities
- Animation keyframes

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🚀 Features

### Implemented
- ✅ Responsive quantum-themed design
- ✅ Modern header with mobile navigation
- ✅ Beautiful homepage with hero section
- ✅ Feature cards with animations
- ✅ Comprehensive footer
- ✅ API routes with validation
- ✅ TypeScript strict mode
- ✅ Firebase integration setup

### Coming Soon
- 🔄 User authentication
- 🔄 Database integration
- 🔄 Advanced quantum animations
- 🔄 Admin dashboard
- 🔄 Real-time features

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🌟 Acknowledgments

- Built with Next.js 14 and modern React patterns
- Inspired by quantum computing aesthetics
- Powered by cutting-edge web technologies