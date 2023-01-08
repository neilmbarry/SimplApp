import React from "react";
import classes from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import FooterColumn from "./FooterColumn";

const Footer = ({ className }) => {
  const classesList = `${classes.main} ${className}`;
  return (
    <div className={classesList}>
      <div className={classes.content}>
        <div className={classes.row}>
          <FooterColumn
            linksArray={[
              "About",
              "Team",
              "Policies",
              "Careers",
              "Press",
              "OpenRoad",
              "Simp shop",
            ]}
            title="Simpl"
          />

          <div className={classes.column}>
            <h4 className={classes.subtitle}>Locations</h4>
            <ul className={classes.list}>
              <li className={classes.item}>USA (EN)</li>
              <li className={classes.item}>Canada (EN)</li>
              <li className={classes.item}> Canada (FR)</li>
              <li className={classes.item}>UK (EN)</li>
            </ul>
          </div>
          <div className={classes.column}>
            <h4 className={classes.subtitle}>Explore</h4>
            <ul className={classes.list}>
              <li className={classes.item}>Book an outfit</li>
              <li className={classes.item}>Weddings</li>
              <li className={classes.item}>Trust & Safety</li>
              <li className={classes.item}>Sustainability</li>
              <li className={classes.item}>FAQs</li>
              <li className={classes.item}>Get help</li>
            </ul>
          </div>
          <div className={classes.column}>
            <h4 className={classes.subtitle}>Hosting</h4>
            <ul className={classes.list}>
              <li className={classes.item}>List your clothes</li>
              <li className={classes.item}>Calculator</li>
              <li className={classes.item}>All-star Hosts</li>
              <li className={classes.item}>Host tools</li>
              <li className={classes.item}>Insurance & protection</li>
              <li className={classes.item}>FAQs</li>
            </ul>
          </div>
          <div className={classes.column}>
            <div className={classes.socials}>
              <div className={classes.icons}>
                <div className={classes.icon}>
                  <FontAwesomeIcon icon={faFacebook} />
                </div>
                <div className={classes.icon}>
                  <FontAwesomeIcon icon={faTwitter} />
                </div>
                <div className={classes.icon}>
                  <FontAwesomeIcon icon={faInstagram} />
                </div>
                <div className={classes.icon}>
                  <FontAwesomeIcon icon={faYoutube} />
                </div>
              </div>
              <div className={classes.appButtons}></div>
              <div className={classes.languageButton}></div>
            </div>
          </div>
        </div>
        <div className={classes.row}>
          <div className={classes.column}>
            <h4 className={classes.subtitle}>Clothing Types</h4>
            <ul className={classes.list}>
              <li className={classes.item}>Sport</li>
              <li className={classes.item}>Formal</li>
              <li className={classes.item}>Weddings</li>
              <li className={classes.item}>Winter</li>
              <li className={classes.item}>Street</li>
              <li className={classes.item}>Shoes</li>
            </ul>
          </div>
          <div className={classes.column}>
            <h4 className={classes.subtitle}>Brands</h4>
            <ul className={classes.list}>
              <li className={classes.item}>Nike</li>
              <li className={classes.item}>Louis Vitton</li>
              <li className={classes.item}>Chanel</li>
              <li className={classes.item}>Armani</li>
              <li className={classes.item}>H&M</li>
            </ul>
          </div>
          <div className={classes.column}>
            <h4 className={classes.subtitle}>Top Cities</h4>
            <ul className={classes.list}>
              <li className={classes.item}>Atlanta</li>
              <li className={classes.item}>Austin</li>
              <li className={classes.item}>Boston</li>
              <li className={classes.item}>Chicago</li>
              <li className={classes.item}>Dallas</li>
            </ul>
          </div>
          <div className={classes.column}>
            <h4 className={classes.noshow}>.</h4>
            <ul className={classes.list}>
              <li className={classes.item}>Denver</li>
              <li className={classes.item}>Houston</li>
              <li className={classes.item}>Las Vegas</li>
              <li className={classes.item}>London</li>
              <li className={classes.item}>Los Angeles</li>
            </ul>
          </div>
          <div className={classes.column}>
            <h4 className={classes.noshow}>.</h4>
            <ul className={classes.list}>
              <li className={classes.item}>New York</li>
              <li className={classes.item}>Phoenix</li>
              <li className={classes.item}>San Diego</li>
              <li className={classes.item}>Sydney</li>
              <li className={classes.item}>Vancouver</li>
            </ul>
          </div>
        </div>
        <div className={classes.row}>
          <ul className={`${classes.list} ${classes.altlist}`}>
            <li className={classes.item}>&copy;2022 Simp</li>
            <li className={classes.item}>Terms</li>
            <li className={classes.item}>Privacy</li>
            <li className={classes.item}>Sitemap</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
