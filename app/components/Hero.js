export default function Hero() {
  return (
    <section
      className="relative bg-cover bg-center h-[100vh] flex items-center justify-center"
      style={{ backgroundImage: 'url(/hero5.jpg)' }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-none"></div>

      {/* Content */}
      <div className="relative p-3 text-center">
        <h2 className="text-5xl uppercase text-white font-bold drop-shadow-lg">
          Montaža pohištva po meri
        </h2>
        <p className="text-3xl uppercase text-white font-bold drop-shadow-lg">
          Mizarske storitve in razrez lesa
        </p>
      </div>
    </section>
  );
}
