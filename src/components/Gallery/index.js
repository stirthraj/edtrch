export default function Gallery() {
    const urls = [
      "https://www.youtube.com/embed/uEczHfXIUQk",
      "https://www.youtube.com/embed/iFy7Hs_R40w",
      "https://www.youtube.com/embed/GY6kxaoSKzA",
      "https://www.youtube.com/embed/nsmBGPPOHoI",
      "https://www.youtube.com/embed/P2lXB7s7ve4",
    ];
  return (
    <div className="container-fluid row">
      {urls.map((url) => (
        <div className="col-lg-3 col-md-6 col-12 text-center mb-2 p-2 ">
          <iframe
            width="auto"
            height="315"
            src={url}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      ))}
    </div>
  );
}


