import React from 'react';
import styles from "./TerpCalPage-module.scss"
import { Link } from 'react-router-dom';

function TerpCalPage() {
  return (
    <div className="terp-cal-page">
        <Link to="/" className="home-button">Back</Link>
        <h1 className="terp-cal-title">TerpCal Chrome Extension</h1>
        <p>
          TerpCal is a Chrome extension designed specifically for University of Maryland students 
          to seamlessly sync their Testudo student portal schedules with their Google Calendar. 
          My aim is to enhance your academic experience by simplifying schedule management.ç
        </p>

        <a 
          href="https://chromewebstore.google.com/detail/terpcal/lbbjnjbhnkjlncfmjhhmeamnfgekkgkd" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="download-button">
          Download TerpCal Extension
        </a>

        <h2>Features</h2>
        <ul>
          <li>Automatic synchronization of class schedules from Testudo to Google Calendar.</li>
          <li>Adds two buttons to the testudo student schedule page, allowing you to sync your schedule to your GCal.</li>
        </ul>

        <h2>How We Handle Your Data</h2>
        <p>
          Your privacy and data security are our top priorities. TerpCal only accesses your Testudo 
          schedule and Google Calendar to perform synchronization. Here's our commitment to your privacy:
        </p>
        <ul>
          <li><strong>Data Access:</strong> We only access your class schedule and related details required for sync.</li>
          <li><strong>Data Storage:</strong> No personal data is stored on our servers. Your schedule remains within your Google Calendar.</li>
          <li><strong>Data Sharing:</strong> We do not share your data with any third parties.</li>
        </ul>

        <h2>Privacy Policy</h2>
        <p>
          For more detailed information on our data handling practices, please visit our <a href="https://docs.google.com/document/d/1AKOkrzM5CsBOUwYLyzK5w6xPbMmSNS0ST7vcymf2CgY/edit?usp=sharing" target="_blank">Privacy Policy</a> page.
        </p>

        <h2>Contact Us</h2>
        <p>
          If you have any questions or feedback, please don't hesitate to reach out to me at <a href="mailto:xyu.robert@gmail.com">xyu.robert@gmail.com</a>.
        </p>
    </div>
  );
}

export default TerpCalPage;
