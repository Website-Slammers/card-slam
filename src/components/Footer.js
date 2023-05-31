import React from 'react'

function Footer() {
  return (
    <div className="footer">

      <div className="footer__logo-box">
        <span> a webSlam project </span>
      </div>

      <div className="footer__flexbox">

        <div className="footer__flexbox-item">
          <div className="footer__navigation">
            <ul className="footer__list">

              <li className="footer__item"><a href="
              https://www.youtube.com/watch?v=dQw4w9WgXcQ" className="footer__link" target="_blank">
                Engineered by Ian</a></li>

              <li className="footer__item"><a href="
              https://developedbydrewford.netlify.app/" className="footer__link" target="_blank">
                Developed by Drewford</a></li>

              {/* <li className="footer__item"><a href="
              https://www.dndbeyond.com/characters/87428291" className="footer__link" target="_blank">
                D&D Beyond</a></li>

              <li className="footer__item"><a href="
              https://developedbydrewford.netlify.app" className="footer__link" target="_blank">
                Developed by Drewford</a></li> */}

            </ul>
          </div> {/* Footer Navigation End */}
        </div> {/* Flexbox Item End */}

        <div className="footer__flexbox-item">
          <div className="footer__copyright">
            <p>
              &copy;2023 by webslam. React and JavaScript by <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className="footer__link" target="_blank">Ian Sorensen</a>. React and CSS developed by <a href="https://developedbydrewford.netlify.app/" className="footer__link" target="_blank">Andrew Cook</a>. This website is intended to be recreational and a portfolio project. The <a className="footer__link" href="https://www.google.com/search?q=playing+card+games&client=opera-gx&hs=dHu&sxsrf=AJOqlzX4VUGDq7OuLp_I0fFm3stVwRp8sA%3A1677791204172&ei=5A8BZPH-CbymptQPpIyd-Ag&ved=0ahUKEwjxgO2lk779AhU8k4kEHSRGB48Q4dUDCA8&uact=5&oq=playing+card+games&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIHCAAQsQMQQzIECAAQQzIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBAgAEEMyBQgAEIAEMgUIABCABDIFCAAQgAQ6BAgjECc6BwguENQCEEM6CggAELEDEIMBEEM6CAgAEIAEELEDOgsIABCABBCxAxCDAToFCC4QgARKBAhBGABQAFjBEWDqEmgAcAF4AIABhwGIAf8MkgEEMTIuNpgBAKABAcABAQ&sclient=gws-wiz-serp" target="_blank">card games</a> featured on this site are not of our own creation.</p>
          </div>
        </div>
      </div> {/* Flexbox End */}

    </div>
  )
}

export default Footer