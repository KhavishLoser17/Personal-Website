import { useState } from "react";
import { FiSend } from "react-icons/fi";
import { Toaster, toast } from "react-hot-toast";
import {motion} from "framer-motion";
import emailjs from "emailjs-com";
import "./contact.css"; 


export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    date: "",
    time: "",
    location: "",
  });
  const [errors, setErrors] = useState({});
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  const validate = () => {
    let errors = {};
    if (!formData.name.trim()) errors.name = "Name is required.";
    if (!formData.email.trim()) {
      errors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Email is invalid.";
    }
    if (!formData.message.trim()) errors.message = "Message is required.";
    if (!formData.date.trim()) errors.date = "Date is required.";
    if (!formData.time.trim()) errors.time = "Time is required.";
    if (!formData.location.trim()) errors.location = "Location is required.";
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setIsSending(true);
  
    try {
      await emailjs.send(
        "service_7xge4nk", 
        "template_tpx2r88", 
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          date: formData.date,
          time: formData.time,
          location: formData.location,
          jobPosition: formData.jobPosition,
          company: formData.company,
        },
        "y-10ScJgQLQePgekE" 
      );
      toast.success("Email sent successfully!");
      setFormData({
        name: "",
        email: "",
        message: "",
        date: "",
        time: "",
        location: "",
        jobPosition: "",
        company: "",
      });
    } catch (error) {
      toast.error("Failed to send email. Please try again.");
      console.error("EmailJS error:", error);
    } finally {
      setIsSending(false);
    }
  };
  

  return (
    <div className="p-4 lg:w-3/4" id="contact">
    <Toaster />
    <h2 className="my-8 text-center text-4xl font-semibold">
      Let's Connect
    </h2>
    <p className="my-4 lg:w-34 flex items-center justify-center font-semibold text-1xl">Send me an Email</p>
    <motion.form 
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 0.8}}
    onSubmit={handleSubmit}>
      <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            placeholder="Name"
            onChange={handleChange}
            className="mb-2 w-full appearance-none rounded-lg border border-stone-50/30 bg-transparent px-3 py-2 text-sm focus:border-stone-400 focus:outline-none"
            aria-label="Name"
          />
          {errors.name && (
            <motion.p 
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 0.8}}
            className="text-sm text-rose-800">{errors.name}</motion.p>
          )}
        </div>
        <div>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            placeholder="Email"
            onChange={handleChange}
            className="mb-2 w-full appearance-none rounded-lg border border-stone-50/30 bg-transparent px-3 py-2 text-sm focus:border-stone-400 focus:outline-none"
            aria-label="Email"
          />
          {errors.email && (
            <motion.p 
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 0.8}}
            className="text-sm text-rose-800">{errors.email}</motion.p>
          )}
        </div>
        <div>
          <input
            type="text"
            name="company"
            id="company"
            value={formData.company}
            placeholder="Company"
            onChange={handleChange}
            className="mb-2 w-full appearance-none rounded-lg border border-stone-50/30 bg-transparent px-3 py-2 text-sm focus:border-stone-400 focus:outline-none"
            aria-label="Company"
          />
          {errors.company && (
            <motion.p 
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 0.8}}
            className="text-sm text-rose-800">{errors.company}</motion.p>
          )}
        </div>
        <div>
          <input
            type="text"
            name="jobPosition"
            id="jobPosition"
            value={formData.jobPosition}
            placeholder="Job Position"
            onChange={handleChange}
            className="mb-2 w-full appearance-none rounded-lg border border-stone-50/30 bg-transparent px-3 py-2 text-sm focus:border-stone-400 focus:outline-none"
            aria-label="Job Position"
          />
          {errors.jobPosition && (
            <motion.p 
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 0.8}}
            className="text-sm text-rose-800">{errors.jobPosition}</motion.p>
          )}
        </div>
        <div className="relative">
          <input
            type="date"
            name="date"
            id="date"
            value={formData.date}
            onChange={handleChange}
            className="mb-2 w-full appearance-none rounded-lg border border-stone-50/30 bg-transparent px-3 py-2 text-sm focus:border-stone-400 focus:outline-none"
            aria-label="Date"
            style={{ colorScheme: "dark" }} // Ensures compatibility for dark themes
          />
          <button
            type="button"
            onClick={() => document.getElementById("date").showPicker()}
            className="absolute right-3 top-2.5 text-white"
          >
            📅
          </button>
        </div>
        <div className="relative">
          <input
            type="time"
            name="time"
            id="time"
            value={formData.time}
            onChange={handleChange}
            className="mb-2 w-full appearance-none rounded-lg border border-stone-50/30 bg-transparent px-3 py-2 text-sm focus:border-stone-400 focus:outline-none"
            aria-label="Time"
          />
          <button
            type="button"
            onClick={() => document.getElementById("time").showPicker()}
            className="absolute right-3 top-2.5 text-white"
          >
            🕒
          </button>
          {errors.time && (
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-sm text-rose-800"
            >
              {errors.time}
            </motion.p>
          )}
        </div>
        <div>
          <input
            type="text"
            name="location"
            id="location"
            value={formData.location}
            placeholder="Location"
            onChange={handleChange}
            className="mb-2 w-full appearance-none rounded-lg border border-stone-50/30 bg-transparent px-3 py-2 text-sm focus:border-stone-400 focus:outline-none"
            aria-label="Location"
          />
          {errors.location && (
            <motion.p 
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 0.8}}
            className="text-sm text-rose-800">{errors.location}</motion.p>
          )}
        </div>
        <div className="md:col-span-2">
          <textarea
            name="message"
            id="message"
            value={formData.message}
            placeholder="Message"
            onChange={handleChange}
            className="mb-2 w-full appearance-none rounded-lg border border-stone-50/30 bg-transparent px-3 py-2 text-sm focus:border-stone-400 focus:outline-none"
            aria-label="Message"
          ></textarea>
          {errors.message && (
            <motion.p 
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 0.8}}
            className="text-sm text-rose-800">{errors.message}</motion.p>
          )}
        </div>
      </div>
      <div className="relative flex items-center justify-center w-full">
        <button
          type="submit"
          className="btn relative flex items-center justify-center rounded-full w-full"
        >
          <strong className="flex items-center justify-center gap-2">
            SEND <FiSend />
          </strong>
          <div id="container-stars" className="absolute inset-0">
            <div id="stars"></div>
          </div>
          <div id="glow" className="absolute inset-0 flex justify-center">
            <div className="circle"></div>
            <div className="circle"></div>
          </div>
        </button>
      </div>

    </motion.form>
    {formData.message && (
      <div className="mt-8 bg-gray-100 p-4 rounded-lg shadow-lg text-black">
        <h3 className="text-lg font-semibold">Generated Email</h3>
        <p className="mt-4">Dear Jaycob,</p>
        <p className="mt-2">
          This letter is to formally invite you to an interview for the position
          of {formData.jobPosition} at {formData.company}.
        </p>
        <p className="mt-2">
          Interview Details:
          <br />
          {formData.message}
        </p>
        <p className="mt-2">
          Date: {formData.date}
          <br />
          Time: {formData.time}
          <br />
          Location: {formData.location}
        </p>
        <p className="mt-4">
          Please come prepared to discuss your qualifications and experience as
          they relate to this position.
        </p>
        <p className="mt-4">We look forward to the opportunity to learn more about you.</p>
        <p className="mt-4">Sincerely,</p>
        <p>{formData.name}</p>
      </div>
    )}
  </div>
  
  );
}
