# Service Gallery System

This document explains the new service gallery popup system implemented in the services page.

## Features Implemented

### 1. Service Gallery Popup
- Click on any service card to open a detailed popup
- Shows service information, features, technologies, and delivery time
- Displays a gallery of images for each service
- Professional modal design with animations

### 2. Image Gallery
- Grid layout showing service portfolio images
- Click on any image to view it in full size
- Smooth animations and transitions
- Placeholder images provided for testing

### 3. Image Preview Modal
- Full-screen image preview
- Click outside or close button to exit
- Smooth scaling animations
- High-quality image display

## How to Add Images

### Step 1: Organize Your Images
Add your service images to the appropriate directories:
```
public/
  gallery/
    wall-painting/          -> Wall Painting images
    wall-collage/          -> Wall Collage images  
    vinyl-prints/          -> Vinyl Prints images
    totems/               -> Totems images
    3d-signage/           -> 3D Signage images
    roll-up-standees/     -> Roll-up Standees images
    photo-panels/         -> Photo Panels images
    ... (create more as needed)
```

### Step 2: Update Service Gallery Arrays
In `app/services/page.js`, find the service you want to update and modify its gallery array:

```javascript
{
  id: 3,
  title: "Wall Collage",
  // ... other properties
  gallery: [
    "/gallery/wall-collage/collage-1.jpg",
    "/gallery/wall-collage/collage-2.jpg", 
    "/gallery/wall-collage/collage-3.jpg",
    "/gallery/wall-collage/collage-4.jpg",
  ],
}
```

### Step 3: Remove Placeholder Images
Currently, some services have placeholder Unsplash images for demonstration. Replace these with your actual images:

```javascript
// REMOVE these placeholder URLs:
"https://images.unsplash.com/photo-...",

// REPLACE with your actual images:
"/gallery/your-service/image-1.jpg",
```

## Example: Adding Wall Collage Images

1. Add your images to: `public/gallery/wall-collage/`
   - `collage-1.jpg`
   - `collage-2.jpg`
   - `collage-3.jpg`
   - etc.

2. Update the service in `app/services/page.js`:
```javascript
gallery: [
  "/gallery/wall-collage/collage-1.jpg",
  "/gallery/wall-collage/collage-2.jpg",
  "/gallery/wall-collage/collage-3.jpg",
  "/gallery/wall-collage/collage-4.jpg",
],
```

## Image Recommendations

- **Format**: JPG or PNG
- **Size**: 800x800px minimum (square aspect ratio works best)
- **Quality**: High resolution for zoom functionality
- **File Size**: Optimize for web (under 500KB per image)
- **Naming**: Use descriptive names like `service-name-1.jpg`

## Current Status

✅ **Implemented:**
- Service popup system (gallery-only modal)
- Image gallery grid display
- Full-screen image preview
- Responsive design
- Smooth animations
- "Coming Soon" message for empty galleries
- All services have empty gallery arrays ready for images

🔄 **Ready for Images:**
- All services are configured with empty gallery arrays
- Directory structure created for organizing images
- No placeholder images - clean slate for your content

📝 **Next Steps:**
1. Add your actual service images to the gallery directories
2. Update the gallery arrays in the services data
3. Test the functionality with real images

## Modal Content

The service popup now shows **only**:
- Service title and icon in the header
- Image gallery (or "Coming Soon" message)
- Clean, focused design without distracting details

## Technical Details

- Uses Framer Motion for animations
- Next.js Image component for optimized loading
- Responsive grid layout
- Modal backdrop with blur effect
- Click outside to close functionality
- Smooth enter/exit animations
