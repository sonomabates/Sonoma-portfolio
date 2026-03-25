import Script from "next/script";

const parisBlogPosts = [
  {
    href: "https://parishealingarts.com/why-the-gut-microbiome-matters-more-than-youve-been-told/",
    title: "Why the Gut Microbiome Matters More Than You’ve Been Told",
    // Featured file from og:image 404s; this asset appears on the live post and returns 200.
    image:
      "https://parishealingarts.com/wp-content/uploads/2025/10/functional_medicine_abstract_gut_microbiome_banner-1-800x436.webp",
  },
  {
    href: "https://parishealingarts.com/when-gut-bugs-go-rogue-understanding-dysbiosis/",
    title: "When Gut Bugs Go Rogue: Understanding Dysbiosis",
    image:
      "https://parishealingarts.com/wp-content/uploads/2025/10/DX-SIBO.webp",
  },
] as const;

const parisEmbed1 = `
<blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/p/DTTLjoij3aB/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style=" background:#FFF; border:0; border-radius:12px; box-shadow:0 0 1px 0 rgba(0,0,0,0.08),0 8px 24px 0 rgba(120,90,40,0.08); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);">
  <div style="padding:16px;">
    <a href="https://www.instagram.com/p/DTTLjoij3aB/?utm_source=ig_embed&amp;utm_campaign=loading" style=" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank" rel="noopener noreferrer">
      <div style=" display: flex; flex-direction: row; align-items: center;">
        <div style="background-color: #F4F0E8; border-radius: 50%; flex-grow: 0; height: 40px; margin-right: 14px; width: 40px;"></div>
        <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center;">
          <div style=" background-color: #F4F0E8; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 100px;"></div>
          <div style=" background-color: #F4F0E8; border-radius: 4px; flex-grow: 0; height: 14px; width: 60px;"></div>
        </div>
      </div>
      <div style="padding: 19% 0;"></div>
      <div style="display:block; height:50px; margin:0 auto 12px; width:50px;">
        <svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="https://www.w3.org/2000/svg">
          <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g transform="translate(-511.000000, -20.000000)" fill="#000000">
              <g>
                <path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"></path>
              </g>
            </g>
          </g>
        </svg>
      </div>
      <div style="padding-top: 8px;">
        <div style=" color:#C97A5A; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:550; line-height:18px;">View this post on Instagram</div>
      </div>
    </a>
  </div>
</blockquote>
`;

const parisEmbed2 = `
<blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/p/DV1umjVEtQc/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style=" background:#FFF; border:0; border-radius:12px; box-shadow:0 0 1px 0 rgba(0,0,0,0.08),0 8px 24px 0 rgba(120,90,40,0.08); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);">
  <div style="padding:16px;">
    <a href="https://www.instagram.com/p/DV1umjVEtQc/?utm_source=ig_embed&amp;utm_campaign=loading" style=" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank" rel="noopener noreferrer">
      <div style=" display: flex; flex-direction: row; align-items: center;">
        <div style="background-color: #F4F0E8; border-radius: 50%; flex-grow: 0; height: 40px; margin-right: 14px; width: 40px;"></div>
        <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center;">
          <div style=" background-color: #F4F0E8; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 100px;"></div>
          <div style=" background-color: #F4F0E8; border-radius: 4px; flex-grow: 0; height: 14px; width: 60px;"></div>
        </div>
      </div>
      <div style="padding: 19% 0;"></div>
      <div style="display:block; height:50px; margin:0 auto 12px; width:50px;">
        <svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="https://www.w3.org/2000/svg">
          <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g transform="translate(-511.000000, -20.000000)" fill="#000000">
              <g>
                <path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"></path>
              </g>
            </g>
          </g>
        </svg>
      </div>
      <div style="padding-top: 8px;">
        <div style=" color:#C97A5A; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:550; line-height:18px;">View this post on Instagram</div>
      </div>
    </a>
  </div>
</blockquote>
`;

const kirbyEmbed1 = `
<blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/p/DRVzae1iRCs/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:16px;"> <a href="https://www.instagram.com/p/DRVzae1iRCs/?utm_source=ig_embed&amp;utm_campaign=loading" style=" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank"> <div style=" display: flex; flex-direction: row; align-items: center;"> <div style="background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 40px; margin-right: 14px; width: 40px;"></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 100px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 60px;"></div></div></div><div style="padding: 19% 0;"></div> <div style="display:block; height:50px; margin:0 auto 12px; width:50px;"><svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-511.000000, -20.000000)" fill="#000000"><g><path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"></path></g></g></g></svg></div><div style="padding-top: 8px;"> <div style=" color:#3897f0; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:550; line-height:18px;">View this post on Instagram</div></div><div style="padding: 12.5% 0;"></div> <div style="display: flex; flex-direction: row; margin-bottom: 14px; align-items: center;"><div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(0px) translateY(7px);"></div> <div style="background-color: #F4F4F4; height: 12.5px; transform: rotate(-45deg) translateX(3px) translateY(1px); width: 12.5px; flex-grow: 0; margin-right: 14px; margin-left: 2px;"></div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(9px) translateY(-18px);"></div></div><div style="margin-left: 8px;"> <div style=" background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 20px; width: 20px;"></div> <div style=" width: 0; height: 0; border-top: 2px solid transparent; border-left: 6px solid #f4f4f4; border-bottom: 2px solid transparent; transform: translateX(16px) translateY(-4px) rotate(30deg)"></div></div><div style="margin-left: auto;"> <div style=" width: 0px; border-top: 8px solid #F4F4F4; border-right: 8px solid transparent; transform: translateY(16px);"></div> <div style=" background-color: #F4F4F4; flex-grow: 0; height: 12px; width: 16px; transform: translateY(-4px);"></div> <div style=" width: 0; height: 0; border-top: 8px solid #F4F4F4; border-left: 8px solid transparent; transform: translateY(-4px) translateX(8px);"></div></div></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center; margin-bottom: 24px;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 224px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 144px;"></div></div></a><p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;"><a href="https://www.instagram.com/p/DRVzae1iRCs/?utm_source=ig_embed&amp;utm_campaign=loading" style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none;" target="_blank">A post shared by Kirby School (@kirbyschool)</a></p></div></blockquote>
`;

const kirbyEmbed2 = `
<blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/p/DWPVa0vEqUo/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:16px;"> <a href="https://www.instagram.com/p/DWPVa0vEqUo/?utm_source=ig_embed&amp;utm_campaign=loading" style=" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank"> <div style=" display: flex; flex-direction: row; align-items: center;"> <div style="background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 40px; margin-right: 14px; width: 40px;"></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 100px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 60px;"></div></div></div><div style="padding: 19% 0;"></div> <div style="display:block; height:50px; margin:0 auto 12px; width:50px;"><svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-511.000000, -20.000000)" fill="#000000"><g><path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"></path></g></g></g></svg></div><div style="padding-top: 8px;"> <div style=" color:#3897f0; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:550; line-height:18px;">View this post on Instagram</div></div><div style="padding: 12.5% 0;"></div> <div style="display: flex; flex-direction: row; margin-bottom: 14px; align-items: center;"><div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(0px) translateY(7px);"></div> <div style="background-color: #F4F4F4; height: 12.5px; transform: rotate(-45deg) translateX(3px) translateY(1px); width: 12.5px; flex-grow: 0; margin-right: 14px; margin-left: 2px;"></div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(9px) translateY(-18px);"></div></div><div style="margin-left: 8px;"> <div style=" background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 20px; width: 20px;"></div> <div style=" width: 0; height: 0; border-top: 2px solid transparent; border-left: 6px solid #f4f4f4; border-bottom: 2px solid transparent; transform: translateX(16px) translateY(-4px) rotate(30deg)"></div></div><div style="margin-left: auto;"> <div style=" width: 0px; border-top: 8px solid #F4F4F4; border-right: 8px solid transparent; transform: translateY(16px);"></div> <div style=" background-color: #F4F4F4; flex-grow: 0; height: 12px; width: 16px; transform: translateY(-4px);"></div> <div style=" width: 0; height: 0; border-top: 8px solid #F4F4F4; border-left: 8px solid transparent; transform: translateY(-4px) translateX(8px);"></div></div></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center; margin-bottom: 24px;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 224px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 144px;"></div></div></a><p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;"><a href="https://www.instagram.com/p/DWPVa0vEqUo/?utm_source=ig_embed&amp;utm_campaign=loading" style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none;" target="_blank">A post shared by Kirby School (@kirbyschool)</a></p></div></blockquote>
`;

export default function Home() {
  return (
    <main id="top" className="bg-[#FBF6EE] text-[#3B342B]">
      <section className="max-w-6xl mx-auto px-6 py-24 bg-gradient-to-b from-[#FFF6E8] to-[#FBF6EE]">
        <p className="text-sm uppercase tracking-[0.2em] text-[#C97A5A] mb-4">
          Sonoma Bates
        </p>

        <h1 className="text-4xl md:text-6xl font-semibold leading-tight max-w-4xl">
          Strategic communications for schools, founders, and health brands.
        </h1>

        <p className="mt-6 text-lg text-[#6A6156] max-w-2xl leading-8">
          I build content systems that clarify ideas, strengthen trust, and
          drive meaningful engagement—across social media, email, and long-form
          storytelling.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16 bg-[#FFFDF8] border-t border-[#EADBC8]">
        <h2 className="text-2xl font-semibold mb-8 text-[#4A4136]">
          Selected Work
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <a
            href="#work-social"
            className="group block border border-[#EADBC8] rounded-2xl p-6 bg-[#FFFDF8] shadow-[0_6px_24px_rgba(180,140,80,0.08)] transition-shadow hover:shadow-[0_10px_32px_rgba(180,140,80,0.14)] hover:border-[#D4C4B0] text-inherit no-underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C97A5A] focus-visible:ring-offset-2"
          >
            <h3 className="text-xl font-medium text-[#4A4136] group-hover:text-[#C97A5A] transition-colors">
              Social Media & Campaigns
            </h3>
            <p className="mt-3 text-[#6A6156] leading-7">
              Designed educational and narrative-driven content systems
              optimized for engagement, clarity, and audience trust.
            </p>
            <p className="mt-4 text-sm text-[#C97A5A]">View social media →</p>
          </a>

          <a
            href="#work-newsletter"
            className="group block border border-[#EADBC8] rounded-2xl p-6 bg-[#FFFDF8] shadow-[0_6px_24px_rgba(180,140,80,0.08)] transition-shadow hover:shadow-[0_10px_32px_rgba(180,140,80,0.14)] hover:border-[#D4C4B0] text-inherit no-underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C97A5A] focus-visible:ring-offset-2"
          >
            <h3 className="text-xl font-medium text-[#4A4136] group-hover:text-[#C97A5A] transition-colors">
              Email & Newsletter Strategy
            </h3>
            <p className="mt-3 text-[#6A6156] leading-7">
              Built high-frequency and campaign-based email communications that
              inform, retain, and guide audiences toward action.
            </p>
            <p className="mt-4 text-sm text-[#C97A5A]">View newsletter sample →</p>
          </a>

          <a
            href="#work-blog"
            className="group block border border-[#EADBC8] rounded-2xl p-6 bg-[#FFFDF8] shadow-[0_6px_24px_rgba(180,140,80,0.08)] transition-shadow hover:shadow-[0_10px_32px_rgba(180,140,80,0.14)] hover:border-[#D4C4B0] text-inherit no-underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C97A5A] focus-visible:ring-offset-2 sm:col-span-2 lg:col-span-1"
          >
            <h3 className="text-xl font-medium text-[#4A4136] group-hover:text-[#C97A5A] transition-colors">
              Blog & long-form
            </h3>
            <p className="mt-3 text-[#6A6156] leading-7">
              Educational articles that unpack complex health topics for a
              general audience—clear structure, strong voice, and SEO-aware
              framing.
            </p>
            <p className="mt-4 text-sm text-[#C97A5A]">View writing samples →</p>
          </a>
        </div>
      </section>

      <section
        id="work-social"
        className="max-w-6xl mx-auto px-6 py-16 bg-[#FFFDF8] border-t border-[#EADBC8] scroll-mt-6"
      >
        <div className="h-px w-12 bg-[#C97A5A] mb-6"></div>

        <h2 className="text-2xl font-semibold mb-4 text-[#4A4136] tracking-tight">
          Social Media
        </h2>

        <p className="text-[17px] text-[#6A6156] max-w-2xl leading-[1.75] mb-16">
          Instagram and social content for schools and health brands—event
          promotion, education, and voice-driven storytelling.
        </p>

        <div id="work-kirby" className="scroll-mt-6">
          <div className="h-px w-12 bg-[#3A5A7A] mb-6"></div>

          <h3 className="text-[22px] font-medium mb-4 text-[#3A5A7A] tracking-tight">
            Kirby School
          </h3>

          <p className="text-[17px] text-[#4F6B85] max-w-xl leading-[1.75] mb-10">
            A selection of social and editorial content created to capture the
            energy, intellectual life, and sense of community at Kirby School.
            This work blends storytelling, event promotion, and institutional
            voice.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div
              className="bg-white rounded-2xl p-8 shadow-[0_6px_24px_rgba(60,90,130,0.08)] border border-[#D6E3F3]"
              dangerouslySetInnerHTML={{ __html: kirbyEmbed1 }}
            />

            <div
              className="bg-white rounded-2xl p-8 shadow-[0_6px_24px_rgba(60,90,130,0.08)] border border-[#D6E3F3]"
              dangerouslySetInnerHTML={{ __html: kirbyEmbed2 }}
            />
          </div>

          <a
            href="https://www.instagram.com/kirbyschool/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-8 text-sm underline underline-offset-4 text-[#3A5A7A] hover:text-[#2B4460]"
          >
            View more from Kirby School →
          </a>
        </div>

        <div
          id="work-paris"
          className="mt-16 pt-16 border-t border-[#EADBC8] scroll-mt-6"
        >
          <div className="h-px w-12 bg-[#E3A857] mb-6"></div>

          <h3 className="text-[22px] font-medium mb-4 text-[#4A4136] tracking-tight">
            Paris Healing Arts
          </h3>

          <p className="text-[17px] text-[#6A6156] max-w-xl leading-[1.75] mb-10">
            A selection of educational and narrative-driven content created for
            Paris Healing Arts. Since October 1, 2025, I have led the social
            media strategy and execution, translating complex topics in
            microbiome, metabolic, and women’s health into clear, engaging, and
            accessible storytelling.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div
              className="bg-[#FFFEF9] rounded-2xl overflow-hidden shadow-[0_6px_24px_rgba(180,140,80,0.08)] border border-[#EADBC8]"
              dangerouslySetInnerHTML={{ __html: parisEmbed1 }}
            />

            <div
              className="bg-[#FFFEF9] rounded-2xl overflow-hidden shadow-[0_6px_24px_rgba(180,140,80,0.08)] border border-[#EADBC8]"
              dangerouslySetInnerHTML={{ __html: parisEmbed2 }}
            />
          </div>

          <a
            href="https://www.instagram.com/dr.lauraparis/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-8 text-sm underline underline-offset-4 text-[#E3A857] hover:text-[#C97A5A]"
          >
            View more from Paris Healing Arts →
          </a>
        </div>
      </section>

      <section
        id="work-newsletter"
        className="max-w-6xl mx-auto px-6 py-16 bg-[#FBF6EE] border-t border-[#EADBC8] scroll-mt-6"
      >
        <div className="h-px w-12 bg-[#C97A5A] mb-6"></div>

        <h2 className="text-2xl font-semibold mb-8 text-[#4A4136]">
          Email & Newsletter Strategy
        </h2>

        <p className="text-sm uppercase tracking-[0.15em] text-[#C97A5A] mb-6">
          Paris Healing Arts
        </p>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mb-14">
          <a
            href="https://parishealingarts.com/?fluentcrm=1&route=email_preview&_e_hash=4778df88-90a9-4e9e-98e5-edf49504dbc4"
            target="_blank"
            rel="noopener noreferrer"
            className="block border border-[#EADBC8] rounded-2xl p-6 bg-[#FFFDF8] shadow-[0_6px_24px_rgba(180,140,80,0.06)] text-inherit no-underline transition-shadow hover:shadow-[0_8px_28px_rgba(180,140,80,0.1)] hover:border-[#D4C4B0] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C97A5A] focus-visible:ring-offset-2"
          >
            <p className="text-lg font-medium text-[#4A4136] leading-snug underline underline-offset-4 decoration-[#C97A5A]/40">
              When symptoms don’t fit into one specialty
            </p>
          </a>

          <a
            href="https://parishealingarts.com/?fluentcrm=1&route=email_preview&_e_hash=40c008aa-6f2d-4f0f-bd4d-cff01a71f1d3"
            target="_blank"
            rel="noopener noreferrer"
            className="block border border-[#EADBC8] rounded-2xl p-6 bg-[#FFFDF8] shadow-[0_6px_24px_rgba(180,140,80,0.06)] text-inherit no-underline transition-shadow hover:shadow-[0_8px_28px_rgba(180,140,80,0.1)] hover:border-[#D4C4B0] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C97A5A] focus-visible:ring-offset-2"
          >
            <p className="text-lg font-medium text-[#4A4136] leading-snug underline underline-offset-4 decoration-[#C97A5A]/40">
              Supporting Your Body’s Natural GLP-1
            </p>
          </a>
        </div>

        <p className="text-sm uppercase tracking-[0.15em] text-[#3A5A7A] mb-6">
          Kirby School
        </p>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
          <a
            href="https://kirby.myschoolapp.com/podium/push/default.aspx?i=744271&s=1421&snd=2fe2d7dc-209c-4610-90c0-3d76cf03c95a"
            target="_blank"
            rel="noopener noreferrer"
            className="block border border-[#D6E3F3] rounded-2xl p-6 bg-white shadow-[0_6px_24px_rgba(60,90,130,0.08)] text-inherit no-underline transition-shadow hover:shadow-[0_10px_28px_rgba(60,90,130,0.12)] hover:border-[#B8CCE0] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3A5A7A] focus-visible:ring-offset-2"
          >
            <p className="text-lg font-medium text-[#3A5A7A] leading-snug underline underline-offset-4 decoration-[#3A5A7A]/35">
              The Wave: March 11, 2026
            </p>
          </a>

          <a
            href="https://kirby.myschoolapp.com/podium/push/default.aspx?i=742036&s=1421&snd=89fc3cdb-7f63-4083-9c9b-c7fb15be9146"
            target="_blank"
            rel="noopener noreferrer"
            className="block border border-[#D6E3F3] rounded-2xl p-6 bg-white shadow-[0_6px_24px_rgba(60,90,130,0.08)] text-inherit no-underline transition-shadow hover:shadow-[0_10px_28px_rgba(60,90,130,0.12)] hover:border-[#B8CCE0] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3A5A7A] focus-visible:ring-offset-2"
          >
            <p className="text-lg font-medium text-[#3A5A7A] leading-snug underline underline-offset-4 decoration-[#3A5A7A]/35">
              The Wave: February 25, 2026
            </p>
          </a>
        </div>
      </section>

      <section
        id="work-blog"
        className="max-w-6xl mx-auto px-6 py-16 bg-[#FBF6EE] border-t border-[#EADBC8] scroll-mt-6"
      >
        <div className="h-px w-12 bg-[#C97A5A] mb-6"></div>

        <h2 className="text-2xl font-semibold mb-4 text-[#4A4136]">
          Blog & long-form
        </h2>
        <p className="text-[#6A6156] max-w-2xl leading-8 mb-10">
          Long-form pieces written for clinical and wellness brands—bridging
          research, practice, and the questions patients actually ask.
        </p>

        <p className="text-sm uppercase tracking-[0.15em] text-[#C97A5A] mb-6">
          Paris Healing Arts
        </p>

        <div className="grid gap-8 sm:grid-cols-2 max-w-4xl">
          {parisBlogPosts.map((post) => (
            <a
              key={post.href}
              href={post.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group block overflow-hidden rounded-2xl border border-[#EADBC8] bg-[#FFFDF8] shadow-[0_6px_24px_rgba(180,140,80,0.08)] transition-shadow hover:shadow-[0_12px_32px_rgba(180,140,80,0.14)] hover:border-[#D4C4B0] text-inherit no-underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C97A5A] focus-visible:ring-offset-2"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#F4EDE3]">
                <img
                  src={post.image}
                  alt={post.title}
                  width={800}
                  height={436}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-medium text-[#4A4136] leading-snug group-hover:text-[#C97A5A] transition-colors">
                  {post.title}
                </h3>
                <p className="mt-3 text-sm text-[#C97A5A]">
                  Read on parishealingarts.com →
                </p>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16 bg-[#FFFDF8] border-t border-[#EADBC8]">
        <h2 className="text-2xl font-semibold mb-8 text-[#4A4136]">About</h2>

        <p className="text-[#6A6156] max-w-3xl leading-8">
          My work sits at the intersection of editorial thinking and strategic
          communication. I specialize in helping organizations articulate what
          they do, why it matters, and how to engage the audiences they care
          about most.
        </p>

        <p className="text-[#6A6156] max-w-3xl leading-8 mt-4">
          Across education and health, I’ve developed content that translates
          complexity into clarity—whether that’s explaining the role of the
          microbiome, shaping institutional messaging around emerging
          technology, or building systems that make communication more
          consistent and effective over time.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16 bg-[#FBF6EE] border-t border-[#EADBC8]">
        <h2 className="text-2xl font-semibold mb-8 text-[#4A4136]">Contact</h2>
        <p className="text-[#6A6156]">sonomabates@gmail.com</p>
      </section>

      <Script
        async
        src="https://www.instagram.com/embed.js"
        strategy="lazyOnload"
      />
    </main>
  );
}