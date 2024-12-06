import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: '軽量',
    Svg: require('@site/static/svg/fly.svg').default,
    description: (
      <>
        MCR Pro MotorDriverはわずか41[g]と軽量です。
      </>
    ),
  },
  {
    title: 'はんだ付けは簡単',
    Svg: require('@site/static/svg/build.svg').default,
    description: (
      <>
        難しいSMD部品は既に取り付けてあります。DIP部品をはんだ付けするだけで完成します。
      </>
    ),
  },
  {
    title: '開発環境はVisual Studio Code',
    Svg: require('@site/static/svg/code.svg').default,
    description: (
      <>
        Visual Studio Code + Platform IOで開発できます。
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
        <img src={useBaseUrl("")}
      </div>
    </section>
  );
}
