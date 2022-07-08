<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->

  

<p  align="center"><a  href="https://www.gatsbyjs.com"><img  alt="Gatsby"  src="https://www.gatsbyjs.com/Gatsby-Monogram.svg"  width="60"  /></a></p>

<h1  align="center">Our Tracks</h1>

I understand that the following description is not important for the test, so I will not take it into account if you go directly to the technical description.

  

I imagined the development as an application that could be obtained from tourist offices or town halls either through QR or other methods, who would be in charge of providing the necessary content.

  

I have favored a mobile-only design based on the “mobile first” idea that has been instilled in me over the years, and also taking into account the kind of use I envisioned for the app.

  

Once I had in mind an image of the type of application I wanted to create, I made a skeleton with the Gatsby CLI and created a JSON file to preview the main behavior, I designed a basic prototype with _[Figma](https://www.figma.com/file/ol6Aujp4vfF7pXggZvAuh2/our-tracks)_.

  

All tools used in the project are Open Source or freely usable.

  

## Technical description

  

1.  **Gatsby and GraphQL**

The contents used by the application are extracted from _JSON files_ and, following the Gatsby way of doing things, they are queried using Graphql queries. I have used the same system for images. Other topics that I have covered is the use of plugins such as the json-transformer or the usual plugins to consume images. I've also gotten a little out of the comfort zone of the Gatsby tutorial by using the Styled Components to build the side menu and the expandables list items.

Probably the folder system could be more optimized. This is my first time using Gatsby, and my own experience over the last few years with Backbone and Ember tells me that this is one of those things that is always iterated on in applications.

  

2.  **React**

I have made moderate use of React, componentizing the main layout, views with the tracks, their tabs, as well as some minor components such as information icons or expandable list items whose have their internal state.

  

3.  **Styles**

All the styles are Vanilla CSS, I haven't used SCSS or SASS although I know them because the complexity of the application didn't require it either at its actual stage and I think it's more readable that way. The design has a grid of just four colors and three different font types.

The styles are applied using the module system as recommended by Gatsby although, as with project's folders, I think that the organization that I have used could be improved.

4.  **Testing**

Unit tests and e2e tests cover React components, Javascript widgets, and some interactions. I have implemented only small percentage. I have not wanted to put much focus on this not knowing your policy regarding TDD and BDD. I have used Cypress and Jest as recommended by Gatsby.
  

<!-- AUTO-GENERATED-CONTENT:END -->