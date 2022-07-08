exports.createPages = async function({ actions: { createPage }, graphql }) {
  const { data } = await graphql(`
    query {
      allTracksJson {
        nodes {
          created(formatString: "MMMM D, YYYY")
          formattedName
          slug
          id
          description
          duration
          levelUp
          levelDown
          difficulty
          distance
          rating
          steps {
            additionalData
            compass
            description
            name
          }
          votes
          weather
        }
      }
    }
  `)

  data.allTracksJson.nodes.forEach(track => {
    createPage({
      path: `/track/${track.slug}`,
      component: require.resolve("./src/components/track.js"),
      context: { ...track }
    })
  });
}