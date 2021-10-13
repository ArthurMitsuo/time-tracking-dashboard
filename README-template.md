# Frontend Mentor - Time tracking dashboard solution

This is a solution to the [Time tracking dashboard challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/time-tracking-dashboard-UIQ7167Jw). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Switch between viewing Daily, Weekly, and Monthly stats

### Screenshot

![](/design/finished-screenshot.jgp)

### Links

- Live Site URL: [Netlify](https://time-tracking-dashboard-arthurmitsuo.netlify.app/)

## My process

Started out by design the HTML and the style into CSS. Realizing what would be better for it to be more like the design given, choose to use the Grid layout both outside of the cards(container) and inside each one, it was easier because of the responsive idea. It was design using a mobile first coding style, which was way easier after all to place everything. For the JavaScript part, I took a while to discover that was possible to access the data.json file with the fetch API, had to understand it a bit first to use it. Choose to separate the js files into the fetch one, that gets the data and all querySelectors, and the functions one, used the export/import to communicate one with the other. All the data that is into the data.json is placed into the HTML with javascript.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

Learned about the Fetch API of JavaScript and could improve my understanding in CSS Grid.

```css
.container {
  display: grid;
  align-content: stretch;
  justify-items: stretch;
  justify-content: stretch;
  align-items: stretch;
  column-gap: 5px;
  row-gap: 5px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-areas: "header main main main";
}
```

```js
fetch("../data.json")
  .then((response) => response.json())
  .then((data) => {
    eventListers(
      data,
      nameTags,
      hoursCurrent,
      currentHrs,
      previousName,
      previousTime,
      previousHrs,
      daily,
      weekly,
      monthly
    );
    weeklyTagInitialValues(
      data,
      nameTags,
      hoursCurrent,
      currentHrs,
      previousName,
      previousTime,
      previousHrs
    );
  });
```

If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.

### Continued development

I do want to learn and use even more the Fetch API with outside data, besides improving even more in each individual CSS section.

### Useful resources

- [CSS Tricks](https://css-tricks.com/snippets/css/complete-guide-grid/) - This helped me use the grid style in different occasions, as well as align the items inside each grid created, awesome article.
- [MDN Docs](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Objects/JSON) - This helped me understand what a JSON file is and how to use it, unfortunately (in some way) they only teach how to use remote ones, which is awesome, but not for this project.
- [Youtube](https://www.youtube.com/watch?v=C3dfjyft_m4) - This is an amazing video, which helped me use the local JSON file inside the project with the fetch API.
- [Youtube](https://www.youtube.com/watch?v=cuEtnrL9-H0&ab_channel=WebDevSimplified) - This video helped me understand better the fetch API.

## Author

- Website - [Arthur Mitsuo](https://github.com/ArthurMitsuo)
- Frontend Mentor - [@ArthurMitsuo](hhttps://www.frontendmentor.io/profile/ArthurMitsuo)
- Twitter - [@arthur_mitsuo](https://twitter.com/arthur_mitsuo)
- Linkedin - [Arthur Mitsuo Matsuzaka Ferreira](https://www.linkedin.com/in/arthur-mitsuo-081996/)
