<p  align="center"><a  href="https://www.gatsbyjs.com"><img  alt="Gatsby"  src="https://www.gatsbyjs.com/Gatsby-Monogram.svg"  width="60"  /></a></p>

<h1  align="center">Our Tracks</h1>

I understand that the following description is not important for the dev's technical test, so I will not take it into account if you go directly to the install guide or technical description.

  

I imagined the development as an application that could be obtained from tourist offices or town halls either through QR or other methods, those organisms would be in charge of providing the necessary content.

  

I have favored an HTML mobile-only design based on the “mobile first” idea that has been instilled in me over the years, and also taking into account the kind of use I envisioned for the app.

  

Once I had in mind an image of the type of application I wanted to create, I made a skeleton with the Gatsby CLI and created a JSON file to preview the main behavior, I designed a basic prototype with _[Figma](https://www.figma.com/file/ol6Aujp4vfF7pXggZvAuh2/our-tracks)_.

  
The application has the minimum contents so that the flows and operation can be tested.


All tools used in the project are Open Source or freely usable.

  ## Install Our Tracks

**Requirements**

node 14 or higher is needed for Gatsby ^4.0.0. I have used node 16.

Clone repository *our-tracks*. And install dependencies.

    npm install

Run develop version:

    npm run develop

Open local deployment in your browser http://localhost:8000/. Open *Chrome DevTools*, or similar tool, and, select *Toggle Device Toolbar* to emulare whatever mobile device you want.

**Other commands**

Unit test: 

    npm run test

e2e test: 

    npm run test:e2e



## Technical description

1.  **Gatsby and GraphQL**

The contents used by the application are extracted from _JSON files_ and, following the Gatsby way of doing things, they are queried using *Graphql* queries. I have used the same system to fetch track's images and to run the gallery. Other topics that I have covered are: programmatically pages generation, the use of plugins such as the json-transformer or the usual plugins to consume images, both static and dynamic. I've also gotten a little out of the comfort zone of the Gatsby tutorial by using the Styled Components to build the side menu and the expandables list items.

Probably the folder system could be more optimized. This is my first time using Gatsby, and my own experience over the last few years with Backbone and Ember tells me that this is one of those things that is in continuous iterations on applications.

2.  **React**

I have made moderate use of React, componentizing the main layout, views with the tracks, cards, as well as some minor components such as information icons, buttons or expandable list items whose have their internal state.

3.  **Styles**

All the styles are Vanilla CSS, I haven't used SCSS or SASS although I know them because the complexity of the application didn't require it either at its actual stage and I think it's more readable that way. The design has a grid of just five colors and three different font types.

The styles are applied using the module system as recommended by Gatsby although, as with project's folders, I think that the css organization that I have used could be improved.

4.  **Testing**

Unit tests and e2e tests cover React components, Javascript widgets, and index page's interactions. I have implemented only small percentage of tests. I have not wanted to put much focus on this not knowing your policy regarding TDD and BDD. I have used Cypress for e2e and Jest for unit testing as recommended by Gatsby.
  

<!-- AUTO-GENERATED-CONTENT:END -->