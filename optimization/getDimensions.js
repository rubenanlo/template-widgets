const { prompt } = require("inquirer").default;
const { icon, custom, original } = {
  icon: (quality = 80) => ({ width: 50, quality: quality }),
  custom: ({ width, quality = 80 }) => ({ width, quality }),
  original: (quality = 80) => ({ quality: quality }), // Original option doesn't specify any dimensions
};

let dimensionsStore = [];

const sizeOptions = { icon, custom, original };

const promptUserForDimensions = async (fileName) => {
  const answers = await prompt([
    {
      type: "list",
      name: "sizeType",
      message: `Select the size for ${fileName}:`,
      choices: ["icon", "custom", "original"],
    },
    {
      type: "number",
      name: "customWidth",
      message: `Enter custom width for ${fileName}:`,
      when: (answers) => answers.sizeType === "custom",
      validate: (input) => input > 0 || "Width must be a positive number.",
    },
    {
      type: "number",
      name: "quality",
      message: `Enter the quality (1-100) for ${fileName}:`,
      default: 80,
      validate: (input) =>
        (input >= 1 && input <= 100) || "Quality must be between 1 and 100.",
    },
  ]);

  // Always return the quality, and ensure the original dimensions are kept if selected
  if (answers.sizeType === "original") {
    return { original: true, quality: answers.quality };
  }

  // Return dimensions and quality for other options
  return answers.sizeType === "custom"
    ? { width: answers.customWidth, quality: answers.quality }
    : sizeOptions[answers.sizeType](answers.quality);
};

const getDimensionsAndQuality = async (fileName, metadata) => {
  // Check if dimensions for this image are already stored
  const storedDimensions = dimensionsStore.find(
    (item) => item.fileName === fileName,
  );

  if (storedDimensions) {
    console.log(`Using stored dimensions for ${fileName}`);
    return storedDimensions;
  }

  const aspectRatio = metadata.height / metadata.width;

  // Ask the user for dimensions and quality
  const selectedDimensions = await promptUserForDimensions(fileName);

  // If the user selects the "original" option, use the original dimensions from the metadata
  const dimensions = selectedDimensions.original
    ? { width: metadata.width, height: metadata.height } // Use original dimensions from metadata
    : {
        width: selectedDimensions.width,
        height: Math.round(selectedDimensions.width * aspectRatio),
      };

  const result = { dimensions, quality: selectedDimensions.quality };

  // Store the result in the array for future reference
  dimensionsStore.push({ fileName, ...result });

  return result;
};

module.exports = { getDimensionsAndQuality };
