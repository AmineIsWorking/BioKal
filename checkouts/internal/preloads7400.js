
    (function() {
      var baseURL = "https://cdn.shopify.com/shopifycloud/checkout-web/assets/";
      var scripts = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/runtime.baseline.fr.c5a05fd7c2bae182e222.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/9407.baseline.fr.1a8e4259f21b8f2eed78.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/8332.baseline.fr.1cebeed4e2abed54040c.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/6134.baseline.fr.1bc59c356c867cc155a0.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.baseline.fr.9e4f2f5753203df38353.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/9315.baseline.fr.2d4becc4565e87d9a9a1.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/4979.baseline.fr.9a24b25d05e562ae5e80.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/5669.baseline.fr.604aeedc84b0b02109fd.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/7714.baseline.fr.08a0ec1a67001a455041.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/2990.baseline.fr.68bffe393bab2e576254.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/8583.baseline.fr.678a4397066263a5eee8.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/256.baseline.fr.d4ed628875fb86cdbfdf.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/6589.baseline.fr.33e631980ac54482af69.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/OnePage.baseline.fr.1af585264d4824ad9cd8.js"];
      var styles = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/9407.baseline.fr.a7b04a788a0c923f7eb8.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.baseline.fr.9e3b4b7160d4c8b8f05b.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/6268.baseline.fr.e1590efe384d128dd06f.css"];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = [];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = [baseURL].concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res[0], next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        })();
      }

      function onLoaded() {
        preconnectAssets();
        prefetchAssets();
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  