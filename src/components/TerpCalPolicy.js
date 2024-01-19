import React from 'react';
import styles from "./TerpCalPage-module.scss";
import { Link } from 'react-router-dom';

const TerpCalPolicy = () => {
  return (
    <div className='terp-cal-page'>
        <Link to="/terpcal" className="home-button">Back</Link>
        <div className='terp-cal-title'>
            <h2>Privacy Policy for TerpCal</h2>
            <p>
                <strong>Effective Date:</strong> 1/7/24
            </p>
        </div>

        <h3>Introduction</h3>
        <p>
            TerpCal ("we", "us", or "our") respects the privacy of its users ("you" or "your"). This Privacy Policy explains how we collect, use, and protect your information when you use the TerpCal extension. Our primary goal in collecting information is to provide and improve our extension and to enable users to enjoy and easily navigate its functionalities.
        </p>

        <h3>Information We Collect</h3>
        <p>
            We collect the minimal amount of data necessary to effectively provide you with our services. This includes:
        </p>
        <ul>
            <li><strong>Student Schedule Data:</strong> When you use Schedule Sync for Testudo, we temporarily access your class schedule to facilitate the syncing process with Google Calendar.</li>
        </ul>

        <h3>How We Use Your Information</h3>
        <p>
            <strong>To Provide Services:</strong> We use the information we collect to operate, maintain, and provide to you the features and functionality of the extension.
        </p>
        <p>
            <strong>Google API Calls:</strong> We make API calls to Google to add, update, and delete schedule entries in your Google Calendar as per your actions.
        </p>

        <h3>Data Storage and Security</h3>
        <p>
            <strong>No Storage:</strong> We do not store any of your data, including your schedule, on any servers or databases. The data is only accessed temporarily to make the necessary Google API calls.
        </p>
        <p>
            <strong>Security:</strong> We implement a variety of security measures to maintain the safety of your personal information when you enter, submit, or access your personal information.
        </p>

        <h3>Your Consent</h3>
        <p>
            By using our extension, you consent to our Privacy Policy.
        </p>

        <h3>Changes to Our Privacy Policy</h3>
        <p>
            If we decide to change our privacy policy, we will post those changes on this page. We encourage you to periodically review this page for the latest information on our privacy practices.
        </p>

        <h3>Contact Us</h3>
        <p>
            If there are any questions regarding this privacy policy, you may contact us using the information below:
            <br />
            Email: xyu.robert@gmail.com
        </p>

        <div>
            <h3>Google API Compliance Disclosure</h3>
            <p>
            By using our extension, you acknowledge and agree that our use and transfer to any other app of information received from Google APIs will adhere to Google API Services User Data Policy, including the Limited Use requirements.
            <br />
            <a href="https://developers.google.com/terms/api-services-user-data-policy" target="_blank">Read Google API Services User Data Policy</a>
            </p>
        </div>
    </div>
    );
};

    export default TerpCalPolicy;
