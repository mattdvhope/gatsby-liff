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
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>

    <a href="https://cep-liff.herokuapp.com/">LOGIN</a>
    <p>------------------------</p>
    <Link to="/page-2/">Go to page 2</Link>
    <p>------------------------</p>
    <link href="https://fonts.googleapis.com/css?family=Athiti|Chonburi|Kanit|Maitree|Prompt|Sriracha|Taviraj|Trirong|Josefin+Sans" rel="stylesheet" />

  </Layout>
)

export default IndexPage
