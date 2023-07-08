import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
        <script src="https://cdn.paddle.com/paddle/paddle.js" async/>
        <script
            dangerouslySetInnerHTML={{
              __html: `
              (function(w){w.fpr=w.fpr||function(){w.fpr.q = w.fpr.q||[];w.fpr.q[arguments[0]=='set'?'unshift':'push'](arguments);};})(window);
fpr("init", {cid:"m9m5ojpq"}); 
fpr("click");
          `,
            }}
            async />
<script src="https://cdn.firstpromoter.com/fpr.js" async/>


<script  id="profitwell-js" data-pw-auth="228b14f9bdce018996baf8a441765c04"
            dangerouslySetInnerHTML={{
              __html: `
              (function(i,s,o,g,r,a,m){i[o]=i[o]||function(){(i[o].q=i[o].q||[]).push(arguments)};
              a=s.createElement(g);m=s.getElementsByTagName(g)[0];a.async=1;a.src=r+'?auth='+
              s.getElementById(o+'-js').getAttribute('data-pw-auth');m.parentNode.insertBefore(a,m);
              })(window,document,'profitwell','script','https://public.profitwell.com/js/profitwell.js');
      
              profitwell('start', {});
          `,
            }}
            async />
      </body>
    </Html>
  )
}
