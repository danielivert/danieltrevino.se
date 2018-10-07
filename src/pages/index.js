// @flow
import React from "react"
import Layout from "components/Layout"
import HeroHeader from "components/HeroHeader"
import Specializing from "components/Specializing"
import Works from "components/Works"
import Contact from "components/Contact"
import Footer from "components/Footer"

const IndexPage = () => (
  <Layout>
    <HeroHeader />
    <Specializing />
    <Works />
    <Contact />
    <Footer />
  </Layout>
)

export default IndexPage
