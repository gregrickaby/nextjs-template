import Layout from '@/components/Layout'
import config from '@/functions/config'
import {NextSeo} from 'next-seo'
import Image from 'next/image'
import frostySunrise from '../public/images/frosty-sunrise.jpg'

export default function Homepage() {
  return (
    <Layout>
      <NextSeo
        title={`${config?.siteName} - Homepage`}
        description={config?.siteDescription}
      />
      <h1 className="text-xl">Homepage</h1>
      <Image
        alt="Picture of a frosty sunrise by Greg Rickaby"
        placeholder="blur"
        src={frostySunrise}
      />
      <p>
        Decaffeinated instant froth mug rich aroma mountain lungo robusta
        ristretto single aromatic milk irish. Half affogato that skinny
        americano grinder redeye luwak sugar. Viennese arabica dripper sit aroma
        extra body turkish ristretto. Percolator café panna latte body mug
        decaffeinated robust est spoon.{' '}
      </p>
      <p>
        Cinnamon grinder frappuccino blue spice saucer bar sweet. Press that con
        trade spice extraction galão est spice id. Roast cortado milk trifecta
        aftertaste breve and cream so. Irish shop mocha id filter trifecta
        variety irish extraction americano macchiato mazagran froth. Breve luwak
        filter au iced et acerbic carajillo acerbic as robusta as extra redeye
        irish. Doppio wings frappuccino roast sugar beans go acerbic that
        arabica.
      </p>
    </Layout>
  )
}
