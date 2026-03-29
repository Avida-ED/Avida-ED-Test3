import React from 'react';
import Layout from '@theme/Layout';

export default function Home() {
  return (
    <Layout title="Avida-ED" description="Digital evolution for education">
      <main>
        <section className="homeHero">
          <div className="container homeHero__container">
            <div className="homeHero__top">
              <div className="homeHero__intro">
                <img
                  className="homeHero__logo"
                  src="img/avida-ed-logo.png"
                  alt="Avida-ED logo"
                />
                <h1 className="homeHero__title">Digital evolution for teaching and learning</h1>
              </div>

              <div className="homeHero__videoBand">
                <div className="homeHero__videoWrap" aria-label="Avida-ED overview video">
                  <iframe
                    className="homeHero__video"
                    src="https://cdnapisec.kaltura.com/p/811482/sp/81148200/embedIframeJs/uiconf_id/27551951/partner_id/811482?iframeembed=true&amp;playerId=kaltura_player&amp;entry_id=1_rdyd9cnv&amp;flashvars[streamerType]=auto&amp;flashvars[localizationCode]=en&amp;flashvars[leadWithHTML5]=true&amp;flashvars[sideBarContainer.plugin]=true&amp;flashvars[sideBarContainer.position]=left&amp;flashvars[sideBarContainer.clickToClose]=true&amp;flashvars[chapters.plugin]=true&amp;flashvars[chapters.layout]=vertical&amp;flashvars[chapters.thumbnailRotator]=false&amp;flashvars[streamSelector.plugin]=true&amp;flashvars[EmbedPlayer.SpinnerTarget]=videoHolder&amp;flashvars[dualScreen.plugin]=true&amp;&amp;wid=1_jhy13lc6"
                    title="Avida-ED Overview Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>

            <div className="contentColumn homeHero__body">
              <p className="homeHero__blurb">
                Avida-ED helps students investigate evolution by working with
                populations of self-replicating digital organisms. It is designed
                for teaching core ideas such as mutation, inheritance, adaptation,
                selection, and the practice of scientific inquiry.
              </p>
              <p className="homeHero__blurb">
                This site is organized for classroom use first. Students can find
                launch guidance and learning materials quickly, while instructors
                can move directly to curriculum, lesson sequencing, and support
                resources for teaching with Avida-ED.
              </p>

              <div className="homeHero__links" aria-label="Quick links">
                <a className="homeHero__link" href="/Avida-ED-Test3/app">
                  Launch Avida-ED 4
                </a>
                <a className="homeHero__link" href="/Avida-ED-Test3/docs/students">
                  Student materials
                </a>
                <a className="homeHero__link" href="/Avida-ED-Test3/curriculum">
                  Instructor materials
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="homeSection">
          <div className="container contentColumn">
            <h2>Start here</h2>
            <p>
              The fastest path into Avida-ED depends on what you need to do
              today.
            </p>
            <ul>
              <li>
                Students: go to the student materials page for launch help,
                first steps, and guidance on using the curriculum.
              </li>
              <li>
                Instructors: go to the instructor curriculum hub for lesson
                planning, lab-manual sequencing, and model lessons.
              </li>
              <li>
                Technical setup: use the launch and download pages if you need
                browser access, offline options, or compatibility guidance.
              </li>
            </ul>
          </div>
        </section>

        <section className="homeSection homeSection--subtle">
          <div className="container contentColumn">
            <h2>Why Avida-ED</h2>
            <p>
              Avida-ED was developed to support learning in biology classrooms,
              especially where students benefit from observing evolutionary
              processes directly, collecting evidence, and testing hypotheses in
              a manageable experimental environment.
            </p>
            <p>
              The goal of this public site is to support that educational work:
              clearer launch guidance, clearer learner and instructor pathways,
              and curriculum material that is easier to browse than the legacy
              software-centered site.
            </p>
          </div>
        </section>
      </main>
    </Layout>
  );
}
