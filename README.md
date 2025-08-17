# Digital Health Care System

A comprehensive React-based digital health care system with modern UI/UX design, built with Material-UI and featuring responsive design, dark/light mode, and interactive charts.



## Live Preview
<a>https://vrajdhcr.netlify.app/</a>
## 🚀 Features

### Core Modules
- **Dashboard** - Health metrics overview with interactive charts
- **Health Records** - Digital medical records management
- **Fitness Tracker** - Activity monitoring and workout analytics
- **Diet Planner** - Nutrition tracking and meal planning
- **Health Coaching** - AI-powered health guidance with chat interface
- **Community** - Social features with leaderboards and challenges
- **Reminders** - Medication and health activity reminders
- **Profile & Settings** - User management and app preferences

### Tech Stack
- **React 19** with Vite for fast development
- **Material-UI (MUI)** for consistent design system
- **Lucide React** for modern icons
- **Recharts** for data visualization
- **React Router DOM** for navigation
- **React Hook Form + Yup** for form validation
- **Notistack** for notifications
- **Framer Motion** for smooth animations
- **Emotion** for styling

### Design Features
- 🎨 Professional Material Design UI
- 📱 **Fully responsive** (Desktop, Tablet, Mobile) with mobile-first approach
- 🌙 Dark/Light mode toggle
- ✨ Smooth animations and transitions
- 📊 Interactive charts and data visualization
- 🔔 Smart notification system
- 👆 Touch-optimized interface with 44px minimum touch targets
- 📲 PWA-ready with mobile app-like experience

## 🛠️ Installation & Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 📱 Pages Overview

### Dashboard
- Health metrics cards (Steps, Calories, Water, Sleep, Heart Rate)
- Weekly activity line chart
- Nutrition breakdown pie chart
- Today's reminders list

### Health Records
- Upload medical documents (PDF, Images)
- Searchable and filterable records table
- Document preview and management

### Fitness Tracker
- Daily activity statistics
- Weekly workout analytics
- Calories burned tracking
- Goal progress monitoring

### Diet Planner
- Food logging with calorie tracking
- Nutrition breakdown visualization
- Meal suggestions and planning
- Weekly calorie intake analysis

### Health Coaching
- Chat-style coaching interface
- Achievement badges and streaks
- Personalized health recommendations
- Progress tracking

### Community
- Social feed with health posts
- User leaderboard with points system
- Group challenges and competitions
- Community engagement features

### Reminders
- Medication reminders
- Hydration alerts
- Fitness activity notifications
- Appointment scheduling

### Profile & Settings
- Personal information management
- App preferences and settings
- Privacy and security controls
- Wearable device integration

## 🎯 Key Features

- **Mobile-First Responsive Design**: Optimized for all screen sizes with breakpoint-based layouts
- **Touch-Friendly Interface**: 44px minimum touch targets and gesture support
- **Progressive Web App**: Installable with offline capabilities
- **Accessibility**: WCAG compliant components with screen reader support
- **Performance**: Optimized with React best practices and lazy loading
- **Security**: Form validation and data protection
- **Scalability**: Modular component architecture

## 🚀 Getting Started

1. Navigate to `http://localhost:5174` after running `npm run dev`
2. Explore the dashboard with sample health data
3. Navigate through different modules using the sidebar (desktop) or bottom nav (mobile)
4. Toggle dark/light mode from the profile menu
5. **Test responsive design**:
   - Resize browser window to see adaptive layouts
   - Use browser dev tools to simulate mobile devices
   - Try touch gestures on mobile devices
   - Test both portrait and landscape orientations

## 📁 Project Structure

```
src/
├── components/
│   ├── layout/          # Layout components
│   └── dashboard/       # Dashboard-specific components
├── pages/               # Main page components
├── context/             # React context providers
├── utils/               # Utility functions
└── theme.js            # MUI theme configuration
```

## 🎨 Design System

- **Primary Color**: #1976d2 (Blue)
- **Secondary Color**: #ff9800 (Orange)
- **Success Color**: #4caf50 (Green)
- **Error Color**: #f44336 (Red)
- **Border Radius**: 16px for cards
- **Typography**: Roboto font family
- **Spacing**: 8px base unit

The application is now ready for development and can be extended with additional features like real API integration, user authentication, and data persistence.
