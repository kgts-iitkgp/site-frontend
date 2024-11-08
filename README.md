# Folder Structure

This folder structure needs to maintained along with the development of website.

```
site-frontend/
├── public/                   # Public assets (accessible at root level)
│   ├── images/               # Images (logo, backgrounds, etc.)
│   ├── fonts/                # Custom fonts
│   └── favicon.ico           # Favicon for the app
├── src/
│   ├── app/                  # App Router directory for routes
│   │   ├── layout.tsx        # Root layout (applies to all routes)
│   │   ├── page.tsx          # Default root page (index route)
│   │   ├── [dynamic]/        # Example of dynamic route
│   │   │   ├── page.tsx      # Page component for dynamic route
│   │   │   └── layout.tsx    # Layout specific to this route
│   │   ├── about/            # Example of nested route
│   │   │   ├── page.tsx      # Page component for the "about" route
│   │   │   └── layout.tsx    # Layout specific to the "about" route
│   ├── assets/               # Static assets (non-public)
│   │   ├── images/           # Internal images
│   │   ├── fonts/            # Internal fonts
│   │   └── styles/           # Global styles (CSS/SCSS files)
│   ├── components/           # Reusable UI components
│   │   ├── Button.tsx        # Example component
│   │   ├── Header.tsx        # Example component
│   │   └── Footer.tsx        # Example component
│   ├── hooks/                # Custom React hooks
│   │   └── useExample.tsx    # Example custom hook
│   └── lib/                  # Helper libraries and utility functions
│       └── utils.ts          # Example utility function
├── .env                      # Environment variables
├── .gitignore                # Git ignore file
├── next.config.js            # Next.js configuration
├── package.json              # Package dependencies and scripts
├── README.md                 # Project documentation
└── ...
```