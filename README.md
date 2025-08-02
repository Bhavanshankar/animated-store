# Hades E-Commerce Website

A premium dark-themed e-commerce website built with modern web technologies.

## Features

- **Dark Theme Design**: Modern, sleek interface with gradient accents
- **Multi-Page Structure**: Separate pages for different sections
- **Responsive Design**: Works on all devices and screen sizes
- **Product Catalog**: Complete product listings with detailed pages
- **Shopping Cart**: Functional cart with local storage
- **Search & Filter**: Product search and category filtering
- **Contact Forms**: Working contact and inquiry forms
- **Smooth Animations**: CSS transitions and scroll animations

## Pages

- `index.html` - Home page with hero section and featured products
- `categories.html` - Product categories overview
- `products.html` - Complete product catalog
- `about.html` - Company information and team
- `contact.html` - Contact form and information
- Individual product pages for each item

## Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Custom styling with CSS variables
- **Tailwind CSS** - Utility-first CSS framework
- **JavaScript** - Interactive functionality
- **Responsive Design** - Mobile-first approach

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/hades-ecommerce.git
```

2. Navigate to the project directory:
```bash
cd hades-ecommerce
```

3. Open `index.html` in your browser or serve with a local server:
```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve .

# Using Live Server (VS Code extension)
# Right-click on index.html and select "Open with Live Server"
```

## Project Structure

```
hades-ecommerce/
├── index.html              # Home page
├── categories.html         # Categories page
├── products.html          # Products listing
├── about.html             # About us page
├── contact.html           # Contact page
├── product-gaming-laptop.html
├── product-fire-sneakers.html
├── product-smart-watch.html
├── product-gaming-headset.html
├── product-black-hoodie.html
├── product-rgb-keyboard.html
├── style.css              # Main stylesheet
├── app.js                 # JavaScript functionality
├── images/                # Product images
│   ├── gaming_laptop.png
│   ├── fire_sneakers.png
│   ├── smart_watch.png
│   ├── gaming_headset.png
│   ├── black_hoodie.png
│   └── rgb_keyboard.png
└── README.md              # Project documentation
```

## Customization

### Colors
The website uses CSS custom properties for theming. Main colors can be changed in `style.css`:

```css
:root {
    --dark-bg: #0a0a0a;
    --darker-bg: #000000;
    --accent-red: #dc2626;
    --accent-orange: #ea580c;
    --accent-gold: #f59e0b;
}
```

### Products
Add new products by updating the `appData.products` array in `app.js`.

### Content
All content can be modified directly in the HTML files.

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers

## Performance

- Optimized images
- Minimal JavaScript
- CSS animations for smooth interactions
- Responsive design for all screen sizes

## Deployment

### GitHub Pages
1. Push your code to a GitHub repository
2. Go to repository Settings > Pages
3. Select source branch (usually `main`)
4. Your site will be available at `https://yourusername.github.io/hades-ecommerce`

### Netlify
1. Connect your GitHub repository to Netlify
2. Set build command: (leave empty)
3. Set publish directory: `/`
4. Deploy

### Vercel
1. Import your GitHub repository
2. No build configuration needed
3. Deploy

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

- Website: [Hades E-Commerce](/)
- Email: devilhades@example.com
- Phone: +91 98765 43210

---

Built with ❤️ by devilhades
