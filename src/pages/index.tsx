import React from "react"
import tw from "twin.macro"
import Helmet from "react-helmet"

import { graphql, useStaticQuery } from "gatsby"

const Page = tw.div`
  h-screen
  w-full
  bg-gray-100
  flex-col
  justify-center
  items-center
  relative
`

const Message = tw.div`
  text-6xl
  text-gray-900
  bg-gray-100
  text-center
  shadow-sm
  p-8
  mb-10
`

const TimeMessage = tw.div` 
  rounded-3xl
  shadow-2xl
  p-12
  m-5
  text-gray-900
`

const query = graphql`
  query SiteMetadata {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`

const IndexPage: React.FC<{}> = () => {
  const data = useStaticQuery(query)
  return (
    <>
      <Helmet>
        <title>{data.site.siteMetadata.title}</title>
        <meta name="description" content={data.site.siteMetadata.description} />
      </Helmet>
      <Page>
        <Message>Gatsby template</Message>
        <TimeMessage>Time: {new Date().toLocaleTimeString()}</TimeMessage>
      </Page>
    </>
  )
}

export default IndexPage
