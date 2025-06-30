# Gallery Article Component

A modern, interactive slideshow component built with Next.js and React that presents "10 Most Annoying Things Neighbors Do" in an engaging gallery format.

## 🚀 Features

- **Interactive Navigation**: Previous/Next buttons and clickable dot indicators
- **Responsive Design**: Optimized for all screen sizes using Tailwind CSS
- **Smooth Transitions**: Seamless slide transitions with visual feedback
- **Accessibility**: ARIA labels and keyboard navigation support
- **Modern UI**: Clean design using shadcn/ui components
- **Image Support**: Placeholder images with proper aspect ratios
- **Progress Indicator**: Visual slide counter showing current position

## 🛠️ Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **State Management**: React useState Hook

## 📦 Installation

1. **Clone or download the component files**

2. **Install dependencies**:
   ```bash
   npm install next react react-dom typescript
   npm install @radix-ui/react-slot
   npm install class-variance-authority clsx tailwind-merge
   npm install lucide-react
   ```

3. **Set up shadcn/ui** (if not already configured):
   ```bash
   npx shadcn@latest init
   npx shadcn@latest add button card
   ```

4. **Configure Tailwind CSS** in your `tailwind.config.js`:
   ```javascript
   module.exports = {
     content: [
       './pages/**/*.{js,ts,jsx,tsx,mdx}',
       './components/**/*.{js,ts,jsx,tsx,mdx}',
       './app/**/*.{js,ts,jsx,tsx,mdx}',
     ],
     // ... rest of your config
   }
   ```

## 📁 File Structure

```
project/
├── components/
│   └── gallery-article.tsx    # Main gallery component
├── app/
│   └── page.tsx              # Page component that renders the gallery
├── components/ui/            # shadcn/ui components
│   ├── button.tsx
│   └── card.tsx
└── README.md
```

## 🎯 Usage

### Basic Implementation

```tsx
import Component from "./components/gallery-article"

export default function Page() {
  return <Component />
}
```

### Custom Slide Data

You can easily customize the slides by modifying the `slides` array in the component:

```tsx
const slides = [
  {
    id: 1,
    title: "Your Custom Title",
    content: "Your custom content here (50-60 words recommended)",
    image: "/path/to/your/image.jpg",
  },
  // Add more slides...
]
```

## 🎨 Customization

### Styling
- Modify Tailwind classes in the component for custom styling
- Update the color scheme by changing `bg-primary`, `bg-muted`, etc.
- Adjust spacing and sizing using Tailwind utilities

### Content
- Replace slide content in the `slides` array
- Update images by replacing the `image` property with your image paths
- Modify the main title and description in the header section

### Navigation
- Customize button styles by modifying the `Button` component props
- Change dot indicator appearance in the navigation section
- Add keyboard navigation by extending the component

## 🖼️ Image Requirements

- **Format**: SVG, PNG, JPG, or WebP
- **Dimensions**: 800x400px recommended (2:1 aspect ratio)
- **Size**: Optimize images for web (< 500KB recommended)
- **Alt Text**: Automatically generated from slide titles

## 📱 Responsive Behavior

- **Desktop**: Full-width layout with large images and text
- **Tablet**: Adjusted spacing and font sizes
- **Mobile**: Stacked layout with touch-friendly navigation

## 🔧 Development

### Running Locally

```bash
npm run dev
```

### Building for Production

```bash
npm run build
npm start
```

## 🎭 Component Props

The main component accepts the following optional props:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `initialSlide` | `number` | `0` | Starting slide index |
| `autoPlay` | `boolean` | `false` | Enable automatic slide progression |
| `autoPlayInterval` | `number` | `5000` | Auto-play interval in milliseconds |

## 🚦 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for the beautiful UI components
- [Lucide](https://lucide.dev/) for the clean icons
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first styling
- [Next.js](https://nextjs.org/) for the React framework

## 📞 Support

If you have any questions or need help with implementation, please:

1. Check the [Issues](../../issues) page
2. Create a new issue with detailed information
3. Provide code examples and error messages if applicable

---

**Made with ❤️ for better neighborhood content experiences**
```

This README provides comprehensive documentation for your gallery article component, including installation instructions, usage examples, customization options, and all the technical details someone would need to understand and use your code effectively.

