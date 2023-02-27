import React from "react";
import Section from "./Section";
import Header from "./Header";
import { useRouter } from "next/router";
import SearchSection from "./SearchSection";
import TracksSection from "./TracksSection";
import EpisodesSection from "./EpisodesSection";
import PlaylistSection from "./PlaylistSection";
import Hero from "./Hero";

function HomeSection() {
  let router = useRouter();

  return (
    <div
      id="home_section"
      className="bg-[#121313] w-[83%] pb-56 h-screen overflow-scroll flex flex-col items-center "
    >
      <Header />
      {router.pathname === "/search" ? (
        <SearchSection />
      ) : router.pathname === "/collection/tracks" ? (
        <TracksSection />
      ) : router.pathname === "/collection/episodes" ? (
        <EpisodesSection />
      ) : router.pathname.includes("/playlist") ? (
        <PlaylistSection />
      ) : (
        <>
          <Hero />
          <Section section_name="Episodes for you" />
          <Section
            section_name="Recommended for today"
            rounded
            play_button={false}
          />
        </>
      )}
    </div>
  );
}

export default HomeSection;
