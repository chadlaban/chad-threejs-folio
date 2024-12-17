import { hobbiesMedia } from "../utils/QualityOfLife";
import { SlideTransition } from "../components/ux/SlideTransition";

export const Hobbies = () => {
  return (
    <>
      <div className="max-w-5xl mx-auto p-6">
        <SlideTransition>
          <section className="mb-8">
            <h1 className="font-mt text-4xl font-bold text-center text-customWhite mb-6">
              My Hobbies
            </h1>
            <article className="bg-customWhite p-6 rounded-lg">
              <p className="font-js text-xl font-semibold text-customGray text-justify leading-relaxed">
                I have a variety of hobbies from playing video games,
                photography, cooking, astrology, and from time to time jogging
                outside the neighbourhood when the weather and wind is good. As
                I grow older I like to try new things such as reading a book,
                coding something that interests me, and especially doing things
                on my own.
                <br />
                <br />
                I&apos;m someone who likes to be aware, and experience new
                things.
                <br />
                <br />
                &quot;I&apos;d rather be a delicious sandwich than just be a
                piece of bread.&quot;
                <br />
                <br />— This is something I just thought of reminding myself
                that life is to be experienced, to explore and to have
                gratitude. Creating something good is to experience both ups and
                downs, but creating something good with what you currently have
                is divine.
              </p>
            </article>
          </section>
        </SlideTransition>

        {/* media section */}
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hobbiesMedia.map((media) => (
              <div
                key={media.id}
                className="overflow-hidden rounded-lg shadow-lg hover:scale-105 transform transition-transform duration-300"
              >
                {media.type === "image" ? (
                  <img
                    src={media.src}
                    alt={media.alt}
                    className="w-full h-48 object-cover"
                  />
                ) : (
                  <video muted controls className="w-full h-48 object-cover">
                    <source src={media.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};
