# Curriculum Vitae

**Hello! This website serves as a platform for creating both a CV and a personal website.**

I was inspired by a tweet by [Guillermo Rauch](https://twitter.com/rauchg/status/1739688809921663399) and a comment from [Sebastian Rojo](https://twitter.com/arpagon/status/1739711265633669483).

By no means I am a professional developer. I am sure that an experienced eye can see many bad design patterns, bad code etc. but I had fun while making it and wanted to create something that can be used by others and not hard to setup.

### Tech Stack

Astro.js, React.js, Typescript, Tailwind, Lucide Icons

### What does this project do?

With this project, you can use your LinkedIn data to create a personal website and a CV.

### Setup

1. Clone/download the repo
2. Use [this](https://chromewebstore.google.com/detail/json-resume-exporter/caobgmmcpklomkcckaenhjlokpmfbdec) browser extension to download your data from [LinkedIn](https://www.linkedin.com/in/) profile.
3. Rename the downloaded `.json` file to `data.json`
4. Go to `/src/data/` and put your `data.json` file there

### Usage

*Note: I highly recommend using `npm` as the package manager because `yarn` and `pnpm` caused me some problems with Astro.js.*

1. Install every dependencies with `npm install` (make sure you have [Node](https://nodejs.org/en) installed)
2. To start the development server, run `npm run dev` and go to [localhost:4321](http://localhost:4321/)
3. You will see that your website is working!

##### Creating a CV

1. run `npm run build`
2. after complition, run `npm run preview`
3. Go to the localhost link in the terminal
4. Press Windows `CTRL+P`, Mac `⌘ + P` to open up the print dialog.
5. From there, you can save your website as .pdf and use it as your CV.

*Sometimes, if your website is long in terms of height, a section gets between the end of first page and the beginning of second page. In order to fix this, you need to add `page-break` class to **that** section's card parent tag. This will force that section to go down and not stuck. Not a perfect solution but something at least. For an example, take a look `/src/components/skills/skills-card.tsx:17:107`*

### Creating a Website

I personally use [Vercel](https://vercel.com/) but I also recommend [Netlify](https://www.netlify.com/).

You need an **[adapter](https://docs.astro.build/en/guides/integrations-guide/vercel/)** for **[Vercel](https://vercel.com/)**! Also, Vercel users should read **Selecting you theme** section down below.

*If you don't know how to host a website on Vercel or Netlify, I am sure that YouTube can help you!*

### Customizing!

##### Order of sections

- You have the flexibility to alter the sequence of components in `/src/pages/index.astro` to adjust their order.
- Also, you can delete or comment-out elements in `/src/pages/index.astro` that you do not want to show.

While making this projects, I made it possible to add custom themes. Default theme is created by me in `/src/data/themes.ts` file and also I created two other themes as well.

##### How to add you picture

- I used GitHub profile picture in the demo. Picture has to be a link and public. You should paste the URL in `/src/data/data.json` under `basics -> image`

##### How to create a theme

If you want to create your own theme, I have a few suggestions.

- If you don't know [Tailwind](https://tailwindcss.com/), go to `/src/data/themes.ts` and copy the `default_theme` object, then ask ChatGPT to change the theme for you.
Then copy the response and change the `default_theme` object with the response.

- If you know what you are doing, just take a look `themes` object at `/src/data/themes.ts`. *(I still advice you to use ChatGPT, easier.)*

##### Selecting you theme

1. Go to `.env` file and change the `default_theme` to your theme name.

#### Note

While the downloaded resume file is good, it maybe not perfectly populated. Please take a look.

As long as the JSON layout is same, adding things won't break the website!


##### Contribution

Should you wish to add or modify something, opening an issue would be sufficient.
