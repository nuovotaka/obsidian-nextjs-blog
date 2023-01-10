import Head from 'next/head'
import { ReactElement } from 'react-markdown/lib/react-markdown'
import BaseLayout from 'components/layouts/BaseLayout'
import { NextPageWithLayout } from 'lib/utilityTypes'

const AboutLanding: NextPageWithLayout = (props) => {

  return (
    <div className="max-w-6xl py-16 mx-auto">
      <Head>
        <title>About me</title>
      </Head>

      <h1 className="mb-8 text-6xl">About</h1>
      <section className="container mx-auto">
        <p>
        「NUOVO」はイタリア語で「新しい」を意味し、「TAKA」は呼称です。
        </p>
        <p>
          なぜ「新しい」をつけたのか？
        </p>
        <p>
          実はある日突然、右足が動かなくなり「この先どうなるのだろう？」
        </p>
        <p>
          不安が頭をよぎりその後なんとか歩ける様になりました。
        </p>
        <p>
          そこで、「新しい」何かに挑戦しようと、今までの「好きな事」x「やってきた事」x「新しい」を組み合わせ挑戦中です
        </p>
      </section>
    </div>
  )
}

AboutLanding.getLayout = function getLayout(page: ReactElement) {
  return (
    <BaseLayout>{ page }</BaseLayout>
  )
}

export default AboutLanding