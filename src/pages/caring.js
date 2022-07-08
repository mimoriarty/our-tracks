import * as React from "react"
import Layout from "../components/layout"

// fonts
import "@fontsource/Inter/200.css"

// styles
import { mainText } from "./caring.module.css"

const Caring = () => {
  return (
    <Layout back={true}>
      <section>
        <p className={mainText}>Think of the forest as a living being, it is. Even the moss and lichens that seem dry are still alive.</p>
        <p className={mainText}>Nature suffers with our presence, be respectful of it and try to cause the least possible impact.</p>
        <p className={mainText}>The track can take you to many unexpected encounters, be kind because we all want to enjoy the ride.</p>
        <p className={mainText}>The weather is usually capricious in the mountains, if it rains or the sun is very annoying, the pine forest can serve as a refuge, if a storm settles in the area or the wind blows, it is recommended that you leave it as soon as possible. The fallen pines and the multitude of branches that populate the ground should be enough warning of what the air can do.</p>
        <p className={mainText}>Be especially careful with the faula. Most of the animals that live in the forest or hunt in it by day or night avoid contact. They are generally harmless but we should not alter their habits or behaviors.</p>
      </section>
    </Layout>
  )
}

export default Caring