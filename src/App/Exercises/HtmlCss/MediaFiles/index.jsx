import './styles.css';

export function Exercise() {
  return (
    <>
      <video
        controls
        src="https://images.all-free-download.com/footage_preview/mp4/cute_wild_deer_grazing_in_nature_6892279.mp4"
      ></video>
      <audio
        controls
        src="https://cdn.pixabay.com/download/audio/2022/12/22/audio_fb4198257e.mp3"
      ></audio>

      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/O607-asExJM?si=oxE2RH6Bs5XyQ0qx&amp;start=20"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </>
  );
}
