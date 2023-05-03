import React from "react";
import FadeIn from "./FadeIn";


function Extra() {
  return (
    <div className="extra-section">
      <FadeIn>
      <h1>Extra.</h1>
      <p>When I'm not at the computer, I love spending time in the kitchen cooking and experimenting with new food<span role="img" aria-label="Food">🍲</span>. I believe food is an amazing way to connect with others, whether its old friends or new. 
        Occasionally I will record and share recipes on my TikTok account <span class="highlight"><a href="https://www.tiktok.com/@nats_bites?lang=en">@nats_bites</a></span>.</p>
        <p>Animals have always had a soft spot in my heart. I really enjoy being with my dog Riley<span role="img" aria-label="Dog">🐶</span> and my bird Ollie<span role="img" aria-label="Bird">🐦</span>.</p>
        <p>Travel has always been a big part of my life and I really enjoy seeing and learning about other cultures.</p>
        <p>When I'm winding down for bed, I love binging on a new (or old) show or reading a good book.</p> 
      </FadeIn>
    </div>
  );
}

export default Extra();
