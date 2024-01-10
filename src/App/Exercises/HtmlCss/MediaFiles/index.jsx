import './style.css';

export function MediaFiles() {
  return (
    <div>
      <h2>Pliki multimedialne na stronie.</h2>
      <p>
        Pliki multimedialne możemy umieścić na stronie za pomocą tagów w HTML
        takich jak: 'video','audio','iframe'
      </p>
      <ul>
        Tag video może ustawić następujące atrybuty:
        <li>src-zródło video</li>
        <li>
          controls-pojawiają się na danym video elementy sterujące, domyślnie
          ich nie ma{' '}
        </li>
        <li>
          autoplay-wideo zacznie się odtwarzać odrazu jak będzie gotowe(musi być
          atrybut muted również załączony aby autoplay działał jak się załaduje
          strona), domyślnie jest wyłączony autoplay
        </li>
        <li>loop-wideo będzie puszczane w pętli, domyślnie nie ma pętli</li>
      </ul>
      <ul>
        Tag audio może ustawić następujące atrybuty:
        <li>src-zródło audio</li>
        <li>
          controls-pojawiają się na danym audio elementy sterujące, domyślnie
          ich nie ma{' '}
        </li>
        <li>loop-audio będzie puszczane w pętli, domyślnie nie ma pętli</li>
        <li>muted-element audio domyślnie jest wyciszony</li>
      </ul>
      <ul>
        Tag iframe pozwala na umieszczanie filmików np. Youtube
        <li>src-źródło filmiku</li>
        <li>width-szerokość filmiku</li>
        <li>height-wysokość filmiku</li>
      </ul>
      <video
        src="https://images.all-free-download.com/footage_preview/mp4/cute_wild_deer_grazing_in_nature_6892279.mp4"
        controls
        autoPlay
        muted
        loop
      ></video>
      <audio
        controls
        muted
        loop
        autoPlay
        src="https://cdn.pixabay.com/download/audio/2022/12/22/audio_fb4198257e.mp3"
      ></audio>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=iNvdGEPuk8WGLwzd"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  );
}
