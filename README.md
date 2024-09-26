# Introduction

This web application holds a simple structure to add multiple widgets as simple as possible. The following paragraphs depict how to add new widgets and other considerations while adding elements to this web application.

# Main stack:

- Frontend: Next.js, Tailwind CSS, Framer Motion
- State Management: MobX
- Data Fetching: SWR
- Image Handling: Cloudinary
- Package Manager: pnpm
- Linting: ESLint

# How to add new widgets

The WidgetsLayout component holds all the logic to display all application widgets. In order to add more widgets, please follow the next steps:

1. Create your widget component and save it the `/components/widgets` directory. Following this naming convention: `Widget[NAME OF THE WIDGET]`
2. When creating the new widget component, save each code logic as follows:
   - Save the api endpoints in the library directory following the format included in this file `newsapi.js`. In the future, we would need to consider grouping all endpoints in a more centralized file.
   - Any functions created to fetch data from API endpoints should be saved in the following file `/helpers/fetchData.js`
3. Add the relevant information in the widgets array that you will find in the directory named `/library/widgets`
4. And that's it. Your new widget component should show up in the drawer.

# Other considerations

## Animations:

Contains all the different types of animations that the web application has. Save future animations as objects, import them in the applicable component and pass them through as props. Example:

In animations folder:

```javascript
export const showUp = {
  initial: "hidden",
  animate: "visible",
  exit: "hidden",
  variants: { hidden: { opacity: 0 }, visible: { opacity: 0.7 } },
  transition: { duration: 0.5 },
};
```

In applicable component:

```javascript
import { showUp } from "@/library/animations";

<Container.Animated {...showUp} />;
```

## Cloudinary:

Handles the credentials to Cloudinary for image uploads. Make sure you save the following variables in a .env file:

- `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME`
- `CLOUDINARY_API_KEY`
- `CLOUDINARY_API_SECRET`

This web application simplifies the process of adding images by handling certain operations in the backend, allowing you to use a custom `Container.Image` component in the frontend.

### Backend:

1. Save new images in the `public/assets` directory.
2. Run the command `pnpm run import-image` in the terminal, and follow the prompts.
   > Note: If you are reuploading an existing image, delete it in the `/optimization/excludedImages.json` file.

### Frontend:

Use the [Container.Image](/components/ui/Container.js) component, and pass a prop named `name` with the name (without extension) of the image you want.

> Important: The backend generates a file named `images.json` in the public directory. This file serves as a repository for all images, storing their alt text, source URL, format, width, and height. Additionally, it updates the `excludedImages.json` file to prevent existing images from being re-processed when new images are added. The backend uploads images to your Cloudinary account, resizes them based on user input, and reduces their quality according to user preferences. It also determines the optimal format (png, jpeg, or webp) to ensure the smallest file size and converts the image to that format. When running the script, users must select dimensions from the pre-defined options in the `getDimensions` file and specify the desired quality.

> Important: The `Container.Image` frontend component first checks if the image exists in Cloudinary. If it does, it renders the Cloudinary component (`CldImage`). If the image does not exist in Cloudinary, it falls back to a locally saved image and switches to the Next.js `Image` component. Since `CldImage` is a wrapper around the Next.js `Image` component, you can pass the same props that are saved in the `images.json` file. This approach allows you to avoid hardcoding the alt, height and width of each image, which is a requirement for using the Next.js `Image` component.

## Show

This component substitutes short circuit and ternary conditions to render front end components. For more information, please check the comments in the [Show](/components/ui/Show.js) component.

## News Api

If you want to use this widget, you need to add the key API to the .env file: NEXT_PUBLIC_NEWS_API_KEY
