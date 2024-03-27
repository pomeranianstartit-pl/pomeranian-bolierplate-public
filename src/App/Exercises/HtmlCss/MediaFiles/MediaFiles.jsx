export const MediaFiles = () => {
  return (
    <div>
      <div className="media-video">
        <video width="250" controls>
          <source
            src="https://images.all-free-download.com/footage_preview/mp4/cute_wild_deer_grazing_in_nature_6892279.mp4"
            type="video/mp4"
          ></source>
        </video>
      </div>
      <div className="media-audio">
        <audio
          controls
          src="https://cdn.pixabay.com/download/audio/2022/12/12/audio_fb4198257e.mp3"
        ></audio>
      </div>
      <div className="media-ifarme">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/h6Ol3eprKiw?si=agj6uZ8ZP7YMMyK4"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};
