import { useState } from "react";

export const useFormSubmission = (initialData) => {
  const [formData, setFormData] = useState(initialData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("http://localhost:3001/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitSuccess(true);
        setFormData(initialData);
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      setSubmitError(
        "There was an issue sending your message. Please try again later."
      );
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    formData,
    setFormData,
    isSubmitting,
    submitSuccess,
    submitError,
    handleSubmit,
  };
};
