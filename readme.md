# Cat Emoji Trace Interactive Web Page

This project creates an interactive web page that displays a cat image at 50% of its original size. When the user clicks and drags over the image, it generates a trail of random emojis that fade out gradually, creating a fun visual effect.

## Project Structure

cat-emoji-trace/ ├── index.html # Main HTML file ├── style.css # CSS for styling ├── script.js # JavaScript for interactivity ├── Mila_Fistbump.jpg # Image of the cat └── README.md # Project documentation


## Features

- **Emoji Trace Effect**: Click and drag over the image to create a trail of random emojis that fade out.
- **Random Emojis**: The trace includes random emojis such as ❤️, ✨, 🌟, and more.
- **Drag Prevention**: The cat image's default drag-and-drop behavior is disabled for a smoother experience.

## Installation and Usage

1. **Clone or Download**: Clone this repository or download it as a zip file.
2. **Open `index.html`**: Double-click on `index.html` to open the page in your browser.
3. **Interact with the Page**: Click and drag over the cat image to create an emoji trace.

## Code Overview

### `index.html`

The HTML file contains the structure of the page. It loads `style.css` for styling and `script.js` for interactivity.

### `style.css`

This file styles the page and includes animations:
- `fadeOut` animation makes each emoji gradually disappear.
- Disables text selection and default drag on the cat image to avoid blue selection boxes and default browser behaviors.

### `script.js`

JavaScript file for handling the interactive behavior:
- **Emoji Array**: Contains the list of emojis for the trace effect.
- **Event Listeners**: Handles `mousedown`, `mouseup`, and `mousemove` events to create the trace effect only when the user is dragging.

## Customizations

1. **Change Emoji List**: Update the `emojis` array in `script.js` to use your preferred set of emojis.
2. **Adjust Emoji Size**: Modify the `font-size` in `.emoji` within `style.css`.
3. **Change Fade-Out Duration**: Update the duration in the `@keyframes fadeOut` section of `style.css`.

## License

This project is open-source and available under the MIT License.
