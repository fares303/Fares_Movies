"use client";

import { getSeasonInfo } from "@/api/requests/requests";
import { useEffect, useState } from "react";
import MediaPlayer from "./MediaPlayer";

const HandleSeasons = ({ show }) => {
  const { seasons } = show;

  const parseSeasons = Object.keys(seasons);

  const [displayedSeason, setDisplayedSeason] = useState();

  const [mediaUrl, setMediaUrl] = useState(
    `https://vidsrc.xyz/embed/tv?tmdb=${show.id}&season=1&episode=1`
  );

  useEffect(() => {
    getSeasonInfo(show.id, 1).then((res) => {
      setDisplayedSeason(res);
    });
  }, []);

  const handleChange = async (e) => {
    const { id, episodes, overview, poster_path } = await getSeasonInfo(
      show.id,
      e.target.value
    );

    setDisplayedSeason({
      id,
      episodes,
      overview,
      poster_path,
    });
  };

  const handleEpisodeClick = (seasonNumber, episodeNumber) => {
    setMediaUrl(
      `https://vidsrc.xyz/embed/tv?tmdb=${show.id}&season=${seasonNumber}&episode=${episodeNumber}`
    );

    console.log(mediaUrl);
  };

  return (
    <div>
        <div className="mt-8 mb-8 ml-[22%]">
          <MediaPlayer url={mediaUrl} />
        </div>
        <div className="items-center">

      <label className="mx-4">Seasons:</label>
      <select
        className="text-black tvselect max p-2 text-lg w-[100px] mt-4 bg-slate-700 text-white"
        onChange={handleChange}
        defaultValue={1}
        style={{borderRadius:'8px'}}
      >
        {parseSeasons.map((seasonKey) => (
          <option
            value={seasons[seasonKey].season_number}
            key={seasons[seasonKey].id}
          >
            {seasons[seasonKey].name === "Specials"
              ? seasons[seasonKey].name
              : seasons[seasonKey].season_number}
          </option>
        ))}
      </select>
        </div>
      <div className="flex gap-5 mt-4 ml-[10%]">
        <div className="flex flex-col bg-slate-800 max-w-[90%] rounded-lg overflow-auto h-[600px] items-center mb-8">
          <div className="py-3 px-5 ">
            {displayedSeason &&
              displayedSeason.episodes.map((episode) => (
                <div
                  className="flex bg-gray-700 p-3 my-2 group hover:bg-gray-800 duration-150 hover:cursor-pointer h-[170px]"
                  onClick={() =>
                    handleEpisodeClick(
                      episode.season_number,
                      episode.episode_number
                    )
                  }
                  key={episode.id}
                  style={{borderRadius:'8px'}}
                >
                  <img
                    src={`https://image.tmdb.org/t/p/w300${episode.still_path}`}
                    alt="Episode Image"
                    className="group-hover:brightness-[80%] duration-300"
                    width={'60%'}
                    style={{maxWidth:'200px', borderRadius:'10%'}}
                  />

                  <div className="p-2">
                    <p className="text-lg font-bold">
                      EP: {episode.episode_number} | {episode.name}
                    </p>
                    <div className="overflow-hidden h-[70px] text-ellipsis mt-2">
                      {/* <p className="text-md">{episode.overview}</p> */}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HandleSeasons;
