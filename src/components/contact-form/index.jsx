import React from "react";
import { useForm } from "react-hook-form";

const ContactForm = () => {
    const { register, errors } = useForm({
        mode: "onBlur",
    });
    return (
        <form
            className="contact-form-wrapper"
            action="https://getform.io/f/d9e882b4-99d9-4735-b9e8-d3232fd80cac"
            method="POST"
            data-aos="fade-up"
            data-aos-duration="1200"
        >
            <div className="row">
                <div className="col-md-4">
                    <div className="form-group">
                        <input
                            className="form-control"
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            ref={register({ required: "Name is required" })}
                        />
                        {errors.name && <p>{errors.name.message}</p>}
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="form-group">
                        <input
                            className="form-control"
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            ref={register({
                                required: "Email is required",
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                    message: "invalid email address",
                                },
                            })}
                        />
                        {errors.email && <p>{errors.email.message}</p>}
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="form-group">
                        <input
                            className="form-control"
                            type="text"
                            name="subject"
                            placeholder="Subject (optional)"
                            ref={register({
                                required: "Subject is required",
                            })}
                        />
                        {errors.subject && <p>{errors.subject.message}</p>}
                    </div>
                </div>
                <div className="col-md-12">
                   
                    <div className="form-group mb-0">
                        <div className="col-md-12">
                            <div className="form-group mb-0">
                                
                                <div className="d-flex flex-wrap">
                                    <div className="radio-wrapper mr-3">
                                        <input
                                            type="radio"
                                            name="radioOption"
                                            value="option1"
                                            ref={register}
                                        />
                                        <label htmlFor="option1">Interpersonal Therapy </label>
                                    </div>
                                    <div className="radio-wrapper mr-3">
                                        <input
                                            type="radio"
                                            name="radioOption"
                                            value="option2"
                                            ref={register}
                                        />
                                        <label htmlFor="option2">Relapse Prevention</label>
                                    </div>
                                    <div className="radio-wrapper mr-3">
                                        <input
                                            type="radio"
                                            name="radioOption"
                                            value="option3"
                                            ref={register}
                                        />
                                        <label htmlFor="option3">Support Groups</label>
                                    </div>
                                    <div className="radio-wrapper mr-3">
                                        <input
                                            type="radio"
                                            name="radioOption"
                                            value="option4"
                                            ref={register}
                                        />
                                        <label htmlFor="option4">Second Wind Outreach Program</label>
                                    </div>
                                    <div className="radio-wrapper">
                                        <input
                                            type="radio"
                                            name="radioOption"
                                            value="option5"
                                            ref={register}
                                        />
                                        <label htmlFor="option5">Cognitive-Behavioral Therapy</label>
                                    </div>
                                    <div className="radio-wrapper">
                                        <input
                                            type="radio"
                                            name="radioOption"
                                            value="option6"
                                            ref={register}
                                        />
                                        <label htmlFor="option5">Family Therapy</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <textarea
                            name="message"
                            rows="5"
                            placeholder="Write your message here"
                            ref={register({
                                required: "Message is required",
                            })}
                        ></textarea>
                        {errors.message && <p>{errors.message.message}</p>}
                    </div>
                </div>

                    

                <div className="col-md-12 text-center">
                    <div className="form-group mb-0">
                        <button
                            className="btn btn-theme btn-block"
                            type="submit"
                        >
                            Send Message
                        </button>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default ContactForm;
