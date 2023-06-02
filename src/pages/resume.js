// resume.js
import React from 'react';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

function Resume() {
  return (
    <Layout title="Resume" description="Description will go into a meta tag in <head />">
      <div>
        <h1>Resume</h1>
        {/* Add your resume content here */}
      </div>
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}

export default Resume;
