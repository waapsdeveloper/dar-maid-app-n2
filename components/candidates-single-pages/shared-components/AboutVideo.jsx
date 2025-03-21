
'use client'

import Image from "next/image";
import { useState } from "react";
import ModalVideo from "react-modal-video";

const AboutVideo = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      {" "}
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="RIoTmCikD6U"
        onClose={() => setOpen(false)}
      />
      {/* End popup modal video */}
      <div className="video-box">
        <figure className="image">
          <div className="play-now" role="button" onClick={() => setOpen(true)}>
            <Image
              width={815}
              height={364}
              src="/images/RIoTmCikD6U-MQ.jpg"
              alt="video banner"
            />
            <i className="icon flaticon-play-button-3" aria-hidden="true"></i>
          </div>
        </figure>
      </div>
    </>
  );
};

export default AboutVideo;
