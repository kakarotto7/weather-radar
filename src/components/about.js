import React, { useEffect } from 'react';

  /*return (
    <div>
    <script src="https://platform.linkedin.com/badges/js/profile.js" async defer type="text/javascript"></script>

    <div class="badge-base LI-profile-badge" data-locale="en_US" data-size="medium" data-theme="light" data-type="VERTICAL" data-vanity="rajatgoyal7" data-version="v1"><a class="badge-base__link LI-simple-link" href="https://in.linkedin.com/in/rajatgoyal7?trk=profile-badge">Rajat Goyal</a></div>
  </div>
              
      
              
  );*/

  export default function About() {
  useEffect(() => {
    const script = document.createElement('script');

    script.src = 'https://platform.linkedin.com/badges/js/profile.js';
    script.async = true;
    script.defer = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      
      <div
        class="badge-base LI-profile-badge"
        data-locale="en_US"
        data-size="medium"
        data-theme="light"
        data-type="VERTICAL"
        data-vanity="rajatgoyal7"
        data-version="v1"
        align="center"
      >
       <a
          class="badge-base__link LI-simple-link"
          href="https://in.linkedin.com/in/rajatgoyal7?trk=profile-badge"
        />
      </div>
    </div>
  );
};


