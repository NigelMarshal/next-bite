# NextBite

NextBite is a demo POC Next.js app for sharing and discovering home-cooked meals. Built with Next.js 15, React 19 and SQLite, it lets users browse recipes, upload their own and connect with a community of food lovers.

## Features

- Browse a grid of meals shared by the community  
- View detailed recipes with images and instructions  
- Share your own meal with image upload  
- Explore the community page with perks and events  
- Responsive design that works across devices  

## Getting Started


### Installation

1. Clone the repository  
   ```sh
   git clone https://github.com/your-username/next-bite.git
   cd next-bite
   ```

2. Install dependencies  
   ```sh
   npm install
   ```

3. Initialize the database with sample meals  
   ```sh
   node initdb.js
   ```

### Running the App

Start the development server:  
```sh
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```sh
npm run build
npm start
```

## Project Structure

- `app/` – Next.js app directory (pages, layouts, styles)  
- `components/` – Reusable React components  
- `lib/` – Server actions and database logic  
- `assets/` – Static images for meals and icons  
- `public/` – Public files such as uploaded images  
- `meals.db` – SQLite database  

## Technologies Used

- [Next.js](https://nextjs.org/) 15  
- [React](https://react.dev/) 19  
- [better-sqlite3](https://github.com/WiseLibs/better-sqlite3)  
- [slugify](https://github.com/simov/slugify)  
- [xss](https://github.com/leizongmin/js-xss)  
