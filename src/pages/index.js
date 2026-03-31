import React from 'react';
import Layout from '@theme/Layout';
import landingPageText from '../../staging/landing-page.json';

export default function Home() {
  const logoText = landingPageText['logo-text'] ?? 'Avida-ED';
  const bodyText = landingPageText['body-text'] ?? '';

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
                <h1 className="homeHero__title">{logoText}</h1>
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
              <p className="homeHero__blurb">{bodyText}</p>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
