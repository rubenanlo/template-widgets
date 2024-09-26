# Introduction

This web application holds a simple structure to add multiple widgets as simple as possible. The following paragraphs depict how to add new widgets and other considerations while adding elements to this web application.

# Main stack:

Nextjs, Tailwind, Framer, Mobx, swr, cloudinary, pnpm package manager, eslint, etc

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

Handles the credentials to cloudinary to upload images. Make sure you save the following variables in a .env file:

- NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
- CLOUDINARY_API_KEY
- CLOUDINARY_API_SECRET

This web application tries to simplify the process of adding images. Thus, it handles certain operations in the backend so that you can use a custom Container.Image component in the frontend.

- Backend:

  1. save new images in the directory `public/assets`
  2. run the command `pnpm run import-image` in the terminal, and follow the prompts. If you are reuploading an existing image, delete it in the `/optimization/excludedImages.json` file.

- Frontend: 2. use the [Container.Image](/components/ui/Container.js) component, and pass a prop named `name` with the name (without extension) of the image you want. That's it.

A couple of considerations:

- The backend creates a file named `images.json` in the public directory. This file acts a repository of all the images with the alt, src, format, width and height. It also updates the file excludedImages.json so that the existing images are not being re-processed when adding new images. It uploads the image into your cloudinary account. It re-dimensions the image based on the user's input, and reduces the quality as per the user choice. It also checks among png, jpeg and webp, which format guarantees the lower file size, and turns the image into that format. While running the script, the user needs to choose the dimensions that are pre-determined in the file `getDimensions`, along with setting up a specific quality.
- The frontend component Container.Image first checks if the image exists in cloudinary and renders the specific cloudinary component (CldImage) if it exists, if not, it triggers a fallback image (saved locally in the repo) plus it switches to Nextjs Image component. Since the CldImage is a wrapper of the Nextjs component, you can pass the same props that are saved in the images.json file. This way, you can also avoid having to hardcode the height and width of each image (a requirement to use Image component).

## Show

This component substitutes short circuit and ternary conditions to render front end components. For more information, please check the comments in the [Show](/components/ui/Show.js) component.

## News Api

If you want to use this widget, you need to add the key API to the .env file: NEXT_PUBLIC_NEWS_API_KEY
