import React from "react";
import Hero from "../components/Hero";
import Layout from "../components/layout";
import Seo from "../components/seo";
import Testimonials from "../components/Testimonials";
import Trips from "../components/Trips";
import Stats from "../components/Stats";
import Email from "../components/Email";

const IndexPage = () => (
  <Layout>
    <Seo title="Explorix" />
    <Hero />
    <Trips heading="Nuestros Destinos Favoritos" />
    <Testimonials />
    <Stats />
    <Email />
  </Layout>
)

export default IndexPage
