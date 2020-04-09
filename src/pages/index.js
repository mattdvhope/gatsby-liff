import React from "react"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Login from "../components/Login"


// let redirection_loc;
// let redirection_loc_prod = `https%3A%2F%2Fquizzical-payne-4097ad.netlify.com%2Fapp%2Fprofile`;
// let redirection_loc_deve = process.env.REDIRECT_URI;
// redirection_loc = redirection_loc_deve ? redirection_loc_deve : redirection_loc_prod;

// console.log("uri", process.env.REDIRECT_URI);
// console.log("uri", redirection_loc);

let madeState = makeState(10);

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1 style={{ color: `rgb(139, 195, 74)`, fontFamily: `Athiti` }}>
      เรียนภาษาอังกฤษออนไลน์ฟรีกับชาวอเมริกัน
    </h1>
    <h2>
      <a
        href={`https://access.line.me/oauth2/v2.1/authorize?response_type=code&client_id=1654045933&redirect_uri=${process.env.GATSBY_API_URL}&state=${madeState}&scope=profile%20openid&max_age=30&ui_locales=th&bot_prompt=aggressive`}
        style={{
          color: `rgb(45, 49, 121)`,
          fontFamily: `Athiti`,
        }}
      >
        Click here to enter via LINE
      </a>
    </h2>
    <br/>
    <Login />
    <br/>
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
