import { useFormSubmission } from "../hooks/CustomHook";
import { SlideTransition } from "../components/ux/SlideTransition";

export const ContactMe = () => {
  const form = {
    name: "",
    email: "",
    message: "",
  };

  const {
    formData,
    setFormData,
    isSubmitting,
    submitSuccess,
    submitError,
    handleSubmit,
  } = useFormSubmission(form);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <SlideTransition>
        <div className="w-[300px] mx-auto p-6 bg-customWhite rounded-lg shadow-lg lg:w-[550px]">
          <h2 className="font-mt text-4xl font-bold text-center text-customGray mb-6">
            CONTACT ME
          </h2>

          {submitSuccess ? (
            <div className="font-js text-xl font-medium text-green-500 text-center mb-4">
              Thank you for your message! I&apos;ll get back to you soon.
            </div>
          ) : (
            <>
              {submitError && (
                <div className="font-js text-xl font-medium text-red-500 text-center mb-4">
                  {submitError}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block font-mt text-lg font-medium text-customGray"
                  >
                    NAME
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 font-js text-xl font-medium border border-customGray rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#93624c]"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block font-mt text-lg font-medium text-customGray"
                  >
                    EMAIL
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 font-js text-xl font-medium border border-customGray rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#93624c]"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block font-mt text-lg font-medium text-customGray"
                  >
                    MESSAGE
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 font-js text-xl font-medium border border-customGray rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#93624c]"
                    rows="4"
                    required
                  ></textarea>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className={`w-full py-2 px-4 bg-[#93624c] text-customWhite font-mt text-lg font-semibold rounded-md focus:outline-none ${
                      isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </SlideTransition>
    </div>
  );
};
