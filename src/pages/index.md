import React from 'react';
import Layout from '@theme/Layout';

export default function Home() {
  return (
    <Layout title="Avida-ED" description="Digital evolution for education">
      <main>
        <section className="homeHero">
          <div className="container homeHero__container">
            <img
              className="homeHero__logo"
              src="/img/avida-ed-logo.png"
              alt="Avida-ED logo"
            />

            <p className="homeHero__blurb">
              Avida-ED is an educational software platform that allows students
              to explore evolution by observing populations of self-replicating
              digital organisms. It is widely used in biology classrooms to
              demonstrate core evolutionary concepts through hands-on inquiry.
            </p>

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
        </section>
      </main>
    </Layout>
  );
}
