import './styles.css';

import sampleAudio from './sample_audio.mp3';

export function Exercise() {
  return (
    <div>
      <iframe
        title="Jak zarobić milion w 5 minut?"
        width="765"
        height="430"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>

      <iframe
        id="inlineFrameExample"
        title="Inline Frame Example"
        width="300"
        height="200"
        src="https://www.openstreetmap.org/export/embed.html?bbox=-0.004017949104309083%2C51.47612752641776%2C0.00030577182769775396%2C51.478569861898606&layer=mapnik"
      ></iframe>

      <figure>
        <figcaption>Przykładowe audio</figcaption>

        <audio controls src={sampleAudio}>
          <a href={sampleAudio}> Download audio </a>
        </audio>
      </figure>

      <audio controls>
        <source src={sampleAudio} type="audio/mp3" />
      </audio>
    </div>
  );
}
