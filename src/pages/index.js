import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1 style={{ color: `rgb(139, 195, 74)`, fontFamily: `Athiti` }}>
      เรียนภาษาอังกฤษออนไลน์ฟรีกับชาวอเมริกัน
    </h1>
    <h2>
      <a
        href={'https://access.line.me/dialog/oauth/weblogin?response_type=code&client_id=1654007002&redirect_uri=https%3A%2F%2Fwww.cityenglishproject.com%2F&state=' + makeState(10)}
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

    <link href="https://fonts.googleapis.com/css?family=Athiti|Chonburi|Kanit|Maitree|Prompt|Sriracha|Taviraj|Trirong|Josefin+Sans" rel="stylesheet" />

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
