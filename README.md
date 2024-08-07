# DashboardX

[Live Demo](https://dashboardx-8e8f5.web.app)

DashboardX is a modern, responsive dashboard application built with React and deployed on Firebase.

## Prerequisites

- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later)
- Firebase account

## Setup

1. Clone the repository:

   ```
   git clone https://github.com/yourusername/dashboardx.git
   cd dashboardx
   ```

2. Install dependencies:

   ```
   npm install
   ```

3. Create a Firebase project at [https://console.firebase.google.com/](https://console.firebase.google.com/)

4. Install Firebase CLI:

   ```
   npm install -g firebase-tools
   ```

5. Login to Firebase:

   ```
   firebase login
   ```

6. Initialize Firebase in your project:

   ```
   firebase init
   ```

   - Select "Hosting" when prompted
   - Choose your Firebase project
   - Set the public directory to "build"
   - Configure as a single-page app: Yes
   - Set up automatic builds and deploys with GitHub: No (unless you want to set up CI/CD)

7. Update your Firebase configuration in `src/firebase.js`:

   ```javascript
   import { initializeApp } from 'firebase/app';

   const firebaseConfig = {
     apiKey: "YOUR_API_KEY",
     authDomain: "YOUR_AUTH_DOMAIN",
     projectId: "YOUR_PROJECT_ID",
     storageBucket: "YOUR_STORAGE_BUCKET",
     messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
     appId: "YOUR_APP_ID"
   };

   const app = initializeApp(firebaseConfig);
   ```

## Development

To run the app locally:

```
npm start
```

The app will be available at [http://localhost:3000](http://localhost:3000)

## Building for Production

To create a production build:

```
npm run build
```

This will create a `build` directory with optimized production files.

## Deployment

To deploy to Firebase:

```
firebase deploy
```

Your app will be deployed to the URL specified in the Firebase console.

## Technologies Used

- React
- Firebase Hosting
- Chart.js (for graphs)
- Tailwind CSS (for styling)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
