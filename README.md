# Festival Website - Just For Laughs Comedy Festival

A responsive website for the Just For Laughs Comedy Festival in Toronto, featuring artist information, ticket purchasing, and interactive venue mapping.

## 🎭 Project Overview

This website provides information and ticket purchasing functionality for the Just For Laughs Comedy Festival, taking place September 21-30, 2023 in Toronto, ON. The site showcases headliner performers, The 42 acts, street performances, and includes an interactive map of event venues.

## 🚀 Features

- **Artist Showcase**: Browse headliners, The 42 performers, and street acts with image galleries
- **Ticket System**: Interactive ticket purchasing with multiple pass types and pricing
- **Interactive Map**: Leaflet-powered map showing all festival venues and event details
- **Responsive Design**: Mobile-friendly layout with scrollable artist galleries
- **Contact Information**: Festival office location and contact details

## 📁 Project Structure

```
Festival/
├── index.html              # Main homepage
├── view/                   # Additional pages
│   ├── artists.html       # Artist lineup page
│   ├── contact.html       # Contact information
│   └── ticket.html        # Ticket purchase form
├── assets/                 # Static assets
│   ├── style/             # CSS files
│   │   ├── common.css     # Shared styles
│   │   ├── main.css       # Homepage styles
│   │   ├── artistsStyles.css
│   │   ├── contact.css
│   │   └── ticket.css
│   ├── js/                # JavaScript files
│   │   ├── common.js      # Navigation & footer
│   │   ├── ticket.js      # Ticket functionality
│   │   └── artists.js     # Artist gallery controls
│   ├── img/               # Images
│   └── image/             # Logo assets
└── README.md
```

## 🎟️ Ticket Types

- **Individual Tickets**: Starting at $39.50
- **Classic Pass**: 2-6 credits for The 42 shows ($69-$119)  
- **Headliner Pass**: Includes headliner ticket + credits ($94-$204)

## 🗺️ Venues

The festival spans 20+ venues across Toronto including:
- Scotiabank Arena
- Comedy Bar
- The Second City Toronto
- Yuk Yuk's Comedy Club
- And many more intimate venues

## 💻 Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Mapping**: Leaflet.js with OpenStreetMap tiles
- **Icons**: Font Awesome, Ionicons
- **Styling**: Custom CSS with responsive design

## 🛠️ Getting Started

1. Clone or download the project files
2. Open `index.html` in a web browser
3. No build process required - runs directly in browser

## 📱 Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile responsive design
- Requires JavaScript enabled

## 🎨 Key Components

### Navigation (`common.js`)
Dynamic header and footer generation with social media links

### Ticket System (`ticket.js`)
- Form validation (6-digit credit card, quantity validation)
- Dynamic pricing calculation with 13% tax
- URL parameter parsing for direct ticket selection

### Artist Galleries (`artists.js`) 
Horizontal scrolling galleries with navigation controls

### Interactive Map
- 20 venue locations with event details
- Custom markers with popup information
- Centered on Toronto downtown area

## 🌟 Notable Features

- **Educational Purpose**: Website created for learning, using Just For Laughs branding with proper attribution
- **Dynamic Content**: JavaScript-driven ticket pricing and artist displays
- **User Experience**: Smooth scrolling galleries and intuitive ticket purchasing flow
- **Accessibility**: Semantic HTML structure with proper form labels

## 📞 Contact

Festival Office: 2101 Boulevard Saint-Laurent, Montréal, Québec, Canada H2X 2T5  
Email: info@hahaha.com

---

*This website was created for educational purposes. All content and images may be owned by [Just For Laughs](https://toronto.hahaha.com/) and are used for demonstration only.*