"use client";

import useFetchVideos from "@/hooks/useFetchVideos";
import { VID_URL } from "@/constants/api-urls";

const page = ({ params: { id, name } }) => {
  const videos = useFetchVideos(id);
  console.log(videos);
  return (
    <div className="">
      {videos && (
        <div className="relative top-20 flex flex-col gap-8">
          <div>
            <iframe
              src={`${VID_URL}/${videos[0].key}`}
              className="h-[80vh] w-screen"
            ></iframe>
            <p className="text-xl font-bold px-8 py-4 text-neutral-900">
              {videos[0].name}
            </p>
          </div>
          <div className="flex gap-4 overflow-scroll">
            {videos.map((video, i) => (
              <div key={video.id}>
                <iframe
                  src={`${VID_URL}/${video.key}`}
                  width={160}
                  height={90}
                  className="w-60"
                ></iframe>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
export default page;
