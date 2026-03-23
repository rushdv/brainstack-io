# BrainStack.io

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?style=for-the-badge&logo=vercel)](https://brainstack-1plaquzys-rushdvs-projects.vercel.app)

A modern, responsive web application for discovering and managing productivity mobile applications. Built with React and Tailwind CSS, BrainStack.io offers a seamless experience to browse, search, and install apps with persistent local storage.

## 🚀 Features

- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Live Search**: Real-time app search with loading animations
- **App Management**: Install/uninstall apps with localStorage persistence
- **Sorting Options**: Sort installed apps by download count
- **Data Visualization**: Interactive rating charts using Recharts
- **Navigation**: Active route highlighting in the navbar
- **Error Handling**: Custom 404 and app not found pages
- **Notifications**: Toast notifications for user actions
- **Performance**: Fast loading with Vite build tool

## 🛠️ Tech Stack

- **Frontend**: React 19, React Router DOM v7
- **Styling**: Tailwind CSS v3
- **Charts**: Recharts
- **Icons**: Lucide React
- **Notifications**: React Hot Toast
- **Build Tool**: Vite
- **Deployment**: Vercel

## 📦 Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/rushdv/brainstack-io.git
   cd brainstack-io
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Build for production**:
   ```bash
   npm run build
   ```

5. **Preview the production build**:
   ```bash
   npm run preview
   ```

## 🎯 Usage

- **Browse Apps**: Navigate through the curated collection of productivity apps
- **Search**: Use the search bar to find apps by name
- **View Details**: Click on any app to see detailed information and ratings
- **Install Apps**: Click the install button to add apps to your collection
- **Manage Installations**: Visit the Installation page to view and manage installed apps
- **Sort Apps**: Sort installed apps by download count in ascending or descending order

## 📁 Project Structure

```
brainstack-io/
├── public/
│   └── _redirects
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── AppCard.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── Stats.jsx
│   │   └── TrendingApps.jsx
│   ├── data/
│   │   └── apps.js
│   ├── pages/
│   │   ├── AppDetails.jsx
│   │   ├── Apps.jsx
│   │   ├── Home.jsx
│   │   ├── Installation.jsx
│   │   └── Notfound.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── package.json
├── tailwind.config.js
├── postcss.config.cjs
├── vite.config.js
└── README.md
```

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

- **GitHub**: [rushdv](https://github.com/rushdv)
- **Live Demo**: [BrainStack.io](https://brainstack-io.vercel.app/)

---

