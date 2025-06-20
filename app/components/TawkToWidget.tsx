'use client';
import { useEffect } from 'react';

const TawkToWidget = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const script = document.createElement('script');
      script.src = 'https://embed.tawk.to/6821b6e0e098b41911af4e6b/1ir1r4nsh';
      script.async = true;
      script.charset = 'UTF-8';
      script.setAttribute('crossorigin', '*');

      document.head.appendChild(script);
    }
  }, []);

  return null; // This component doesn't render anything visually
};

export default TawkToWidget;


// <!--Start of Tawk.to Script-->
// <script type="text/javascript">
// var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
// (function(){
// var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
// s1.async=true;
// s1.src='https://embed.tawk.to/6821b6e0e098b41911af4e6b/1ir1r4nsh';
// s1.charset='UTF-8';
// s1.setAttribute('crossorigin','*');
// s0.parentNode.insertBefore(s1,s0);
// })();
// </script>
// <!--End of Tawk.to Script-->