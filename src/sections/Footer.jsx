const Footer = () => {
  const socialLinks = {
    github: "https://github.com/Gpcode233",
    twitter: "https://x.com/Gp_Ojini?t=_KR8ndh2HMBlznuSYXcBPg&s=09",
    instagram: "https://www.instagram.com/gpco_7?igsh=MWczb3hxemE3cGhzdw=="
  };

  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      <div className="flex gap-3">
        <a 
          href={socialLinks.github}
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2" />
        </a>
        <a 
          href={socialLinks.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <img src="/assets/twitter.svg" alt="twitter" className="w-1/2 h-1/2" />
        </a>
        <a 
          href={socialLinks.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <img src="/assets/instagram.svg" alt="instagram" className="w-1/2 h-1/2" />
        </a>
      </div>

      <p className="text-white-500">© 2025 Godspower Ojini. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
