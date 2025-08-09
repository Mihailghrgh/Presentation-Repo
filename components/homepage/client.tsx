import { SiTesla } from "react-icons/si";
import { TiVendorMicrosoft } from "react-icons/ti";
import { FaAmazon } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { FaMeta } from "react-icons/fa6";
import { RiNetflixFill } from "react-icons/ri";
import { FaSpotify } from "react-icons/fa";
import { SiAdobeacrobatreader } from "react-icons/si";
import { FaSalesforce } from "react-icons/fa";
import { GrOracle } from "react-icons/gr";
import { SiBmcsoftware } from "react-icons/si";
import { BsGoogle } from "react-icons/bs";



export const clients = [
  {
    name: "Microsoft",
    logo: <TiVendorMicrosoft />,
    industry: "Technology",
  },
  { name: "Google", logo: <BsGoogle />, industry: "Technology" },
  { name: "Amazon", logo: <FaAmazon />, industry: "E-commerce" },
  { name: "Apple", logo: <FaApple />, industry: "Technology" },
  { name: "Meta", logo: <FaMeta />, industry: "Social Media" },
  { name: "Netflix", logo: <RiNetflixFill />, industry: "Entertainment" },
  { name: "Tesla", logo: <SiTesla />, industry: "Automotive" },
  { name: "Spotify", logo: <FaSpotify />, industry: "Music" },
  { name: "Adobe", logo: <SiAdobeacrobatreader />, industry: "Software" },
  { name: "Salesforce", logo: <FaSalesforce />, industry: "CRM" },
  { name: "Oracle", logo: <GrOracle />, industry: "Database" },
  { name: "IBM", logo: <SiBmcsoftware />, industry: "Technology" },
];
