import Layout from '@/components/Layout'
import config from '@/functions/config'

export default function Homepage() {
  return (
    <Layout
      title={`${config.siteName} - Homepage`}
      description="This powers the SEO meta description"
    >
      <h1 className="text-xl">Homepage</h1>
    </Layout>
  )
}
