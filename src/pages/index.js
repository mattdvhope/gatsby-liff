import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

let redirection_loc = `https%3A%2F%2Fwww.cityenglishproject.com%2F`

console.log(process.env.REDIRECT_URI);

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1 style={{ color: `rgb(139, 195, 74)`, fontFamily: `Athiti` }}>
      เรียนภาษาอังกฤษออนไลน์ฟรีกับชาวอเมริกัน
    </h1>
    <h2>
      <a
        href={`https://access.line.me/oauth2/v2.1/authorize?response_type=code&client_id=1654045933&redirect_uri=${process.env.REDIRECT_URI}&state=${makeState(10)}&scope=profile%20openid&max_age=2678400&ui_locales=th&bot_prompt=aggressive`}
        style={{
          color: `rgb(45, 49, 121)`,
          fontFamily: `Athiti`,
        }}
      >
        Click here to enter via LINE
      </a>
    </h2>
    <div style={{ margin: `6% auto`, maxWidth: `300px` }}>
      <Image />
    </div>
  </Layout>
)

function makeState(length) {
   let result           = '';
   let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   let charactersLength = characters.length;
   for ( let i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}

export default IndexPage
