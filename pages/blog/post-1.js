import Post from 'pages/blog/post-1.md'

import AppLayout from 'containers/layouts/app'

const IndexPage = () =>
  <AppLayout
    title='Blog'
    description='Simple blog'
  >
    <Post />
  </AppLayout>

export default IndexPage