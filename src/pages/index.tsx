import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className={styles.title}>
          {siteConfig.title}
        </Heading>
        <p className={styles.subtitle}>{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

function BuyLink() {
  return (
    <section className={styles.buyLink}>
      <h3 className={styles.buyh3}>購入はこちら</h3>
      <p>※現在準備中です</p>
      <div className={styles.buyButton}>
        <Link
          className="button button--secondary button--lg"
          to="">
          Buy
        </Link>
      </div>
    </section>
  )
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="RA4M1向けマイコンカーモータードライバのドキュメントサイト">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <BuyLink />
      </main>
    </Layout>
  );
}
