"use client";

import useFetchVideos from "@/hooks/useFetchVideos";
import { VID_URL } from "@/constants/api-urls";

const page = ({ params: { id, name } }) => {
  const videos = useFetchVideos(id);
  console.log(videos);
  return (
    <div>
      {videos && (
        <>
          <video controls width={1000}>
            <source
              src={VID_URL + videos[0].key}
              type="video/mp4"
              className="z-[5]"
              width={1000}
            ></source>
          </video>
          <iframe
            width="420"
            height="345"
            src={`${VID_URL}/${videos[0].key}`}
            frameborder="0"
          ></iframe>
        </>
      )}
    </div>
  );
};
export default page;
