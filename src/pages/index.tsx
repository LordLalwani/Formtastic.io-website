import * as React from 'react'

import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'
import Button from '@material-ui/core/Button'

const IndexPage = () => (
  <IndexLayout>
    <Page>
      <Container>
        <h1>Index</h1>
        <Button>test</Button>
      </Container>
    </Page>
  </IndexLayout>
)

export default IndexPage
