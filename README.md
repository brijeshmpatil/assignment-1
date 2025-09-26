# Spending Tracker App

A React spending tracker with category progress indicators.

## Setup

1. **Clone from GitHub:**
   ```bash
   git clone <your-repo-url>
   cd assignment-1
   ```

2. **Install packages:**
   ```bash
   npm install
   ```

3. **Run server:**
   ```bash
   npm start
   ```
   Opens at http://localhost:3000

## Making Changes

### Change Categories & Percentages
Edit the `categories` array in `src/App.js` (lines 55-68):

```javascript
const categories = [
  { name: 'Housing', icon: <Home />, amount: '$0.00', left: 'left', percentage: 0 },
  { name: 'Transport', icon: <DirectionsCar />, amount: '$62.56', left: 'left', percentage: 20 },
  // Add more categories here
];
```

**Properties:**
- `name`: Category name
- `amount`: Spending amount  
- `percentage`: Progress (0-100)
- `left`: Status ('left' or 'over limit')

### Change Progress Colors
Modify `getProgressColor` function in `App.js`:

```javascript
const getProgressColor = (percentage) => {
  if (percentage < 33) return '#4caf50';  // Green
  if (percentage < 66) return '#ff9800';  // Orange  
  return '#f44336';                       // Red
};
```

### Add New Category
1. Import icon: `import { YourIcon } from '@mui/icons-material';`
2. Add to categories array: `{ name: 'Category', icon: <YourIcon />, amount: '$50.00', left: 'left', percentage: 25 }`

## Scripts

- `npm start` - Run development server
- `npm test` - Run tests
- `npm run build` - Build for production
