export default function PowerpointAnimation() {
  return (
    <div className="w-screen h-screen overflow-y-scroll snap-y snap-mandatory">
      <section className="h-screen snap-start flex items-center justify-center bg-black">
        <video width="1920" height="1080" controls preload="none" loop>
          <source src="/animation.mp4" type="video/mp4" />
        </video>
      </section>
    </div>
  );
}
