# Starlit Artists Atlas

Build a desktop-optimized, highly interactive portfolio website with a clean, dark cosmic theme and smooth scroll snapping. 



The website must be structured into exactly two full-screen vertical sections (100vh each) with strict vertical scroll snapping enabled between them.



SECTION 1: THE BIO SECTION (100vh)

- Background: A deep dark purple (#0d011a) covered with a clean, minimalist starfield made entirely of tiny white, crisp dots. A few dots should slowly twinkle.

- Content: An elegant artist bio styled in a beautiful white serif font (like Playfair Display). The name should be prominent, with a clean subheading.

- Navigation: Place a subtle, bouncing chevron indicator at the bottom that smoothly scrolls down to Section 2 when clicked.



SECTION 2: THE WORKBENCH SECTION (100vh)

- Background: The exact same deep dark purple starfield background, flowing seamlessly from the section above.

- Layout: A side-by-side desktop layout displaying two highly interactive skeuomorphic elements centered on the screen:



  1. THE LEFT ELEMENT: INTERACTIVE 3D ART BOOK

  - Design a realistic art album structure.

  - Implement a 3D turning page effect. Clicking "Next" or "Back" buttons must trigger a smooth page flip to reveal different artwork cards.

  - The artwork containers inside should have clean parchment styling with tiny descriptive text beneath each image.



  2. THE RIGHT ELEMENT: INTERACTIVE WRITING FILE FOLDER

  - Design a tactile file folder container.

  - Along the top edge, create distinct, clickable file folder tabs labeled for writing categories (e.g., "✦ Notes", "✦ Essays", "✦ Lore").

  - Clicking a tab must seamlessly trigger a sliding paper animation that swaps the active parchment paper inside the folder to showcase different text contents.

  - The text within the folder should look like typewritten or elegant serif ink on paper.



ADDITIONAL RULES FOR LOVABLE:

- Ensure all layout items fit perfectly within the 100vh viewport restrictions to prevent scroll snapping bugs.

- Do not use heavy external background images; handle the starfield using pure CSS gradients and Tailwind styling elements.

- Keep the overall composition responsive so that on smaller screens, the elements wrap nicely.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/b78e4404-be19-4522-9e13-c9b3a07a409b).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
