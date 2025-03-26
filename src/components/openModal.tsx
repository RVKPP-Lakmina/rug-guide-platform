import useMainContainer from "../hooks/useMainContainer";

export default function VideoModal() {
  const { isOpen, closeModal, videoRef } = useMainContainer();

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 text-white">
          <div className=" inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
            <div className="relative max-h-[90vh] w-full max-w-3xl overflow-hidden rounded-lg bg-background shadow-xl">
              <button
                onClick={closeModal}
                className="absolute right-2 top-2 z-10 rounded-full bg-black/50 p-1 text-rose-700 hover:bg-black/70 focus:outline-none cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-x"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>

              {/* Video container */}
              <div className="relative aspect-video w-full">
                <video
                  ref={videoRef}
                  className="h-full w-full"
                  controls
                  loop
                  playsInline
                >
                  <source src="/spin-pass.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-semibold">Spin Pass</h3>
                <p className="text-muted-foreground">
                  In rugby, a spin pass involves using a "backhand" grip to spin
                  the ball across the body, with the passing hand slightly lower
                  and the guiding hand higher, aiming for a fast, flat
                  trajectory
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
