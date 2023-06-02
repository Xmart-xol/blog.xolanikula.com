import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
 
  {
    title: 'About me',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        I was born and bred in the dusty streets of Khutsong township. 
        I am 27 years old. I am currently staying in Johannesburg,
        doing my BSc Hons in Computer Science at UJ
      </>
    ),
  },
  {
    title: 'Software Engineer',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        I am a software engineer with over a year of experience.
        My primary skillset includes C# and Java, with most of my
        time spent on enterprise backend services
      </>
    ),
  },
  {
    title: 'About this site',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        This is the tech-focused knowledge hub, where innovation meets insightful blogging. 
        Explore a rich collection of articles, tutorials, and resources, and be at the forefront of technology trends.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
