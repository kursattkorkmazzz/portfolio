"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import Panel, { PanelProps } from "../common/panel";
import { motion } from "motion/react";
import testimonalList from "@/../public/settings/testimonials.json";
import validator from "validator";
import Icon from "@mdi/react";
import * as Icons from "@mdi/js";
import ContactLink from "@/../public/settings/contact.json";
type ContactProps = PanelProps;

type FormInputs = {
  fullname: string;
  email: string;
  message: string;
};
export default function Contact(props: ContactProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();
  const formHandler: SubmitHandler<FormInputs> = (data) => {
    // TODO: send data to server
    console.log(JSON.stringify(data, null, 3));
  };

  return (
    <Panel className="gap-4 min-h-screen h-min shrink-0">
      {testimonalList.map((testimonal, index) => {
        return (
          <motion.div
            key={index}
            className="flex flex-col gap-2 p-4 bg-black backdrop-blur-md rounded-md"
          >
            <motion.div className="flex gap-4 h-min select-none">
              <motion.img
                src={testimonal.image}
                alt={testimonal.name}
                className="w-16 h-16 rounded-full border-2 border-white"
              />
              <motion.div className="flex flex-col gap-4 items-end">
                <motion.p className="w-full overflow-hidden text-ellipsis">
                  {testimonal.message}
                </motion.p>
                <motion.div className="flex flex-col">
                  <motion.h3 className="text-md font-bold">
                    {testimonal.name}
                  </motion.h3>
                  <motion.h3 className="text-xs font-semibold italic">
                    {testimonal.position} - {testimonal.company}
                  </motion.h3>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        );
      })}
      <motion.h2 className="select-none text-3xl font-bold">İletişim</motion.h2>
      <motion.p className="select-none">
        Heyecan verici bir fikrin mi var? Yeni fikirler ve projeler için bana
        e-posta gönderebilir veya anlık mesaj ile kolayca ulaşabilirsin!
      </motion.p>
      <motion.form
        id="contact"
        onSubmit={handleSubmit(formHandler)}
        className="flex flex-col gap-4 w-full h-min"
      >
        <motion.input
          {...register("fullname", {
            required: "Bu alanın doldurulması zorunludur.",
          })}
          placeholder="Ad Soyad"
          className="w-full p-2 border-2 border-white rounded-md focus:outline-none focus:border-[#FF5733]"
        />
        {errors.fullname && (
          <motion.p className="text-xs text-red-500">
            {errors.fullname.message}
          </motion.p>
        )}
        <motion.input
          {...register("email", {
            required: "Bu alanın doldurulması zorunludur.",
            validate: {
              isEmail: (value) => {
                return (
                  validator.isEmail(value) ||
                  "Geçerli bir e-posta adresi giriniz."
                );
              },
            },
          })}
          placeholder="E-posta"
          className="w-full p-2 border-2 border-white rounded-md focus:outline-none focus:border-[#8E44AD]"
        />
        {errors.email && (
          <motion.p className="text-xs text-red-500">
            {errors.email.message}
          </motion.p>
        )}
        <motion.textarea
          {...register("message", {
            required: "Bu alanın doldurulması zorunludur.",
          })}
          placeholder="Mesaj"
          className="w-full h-auto p-2 border-2 border-white rounded-md focus:outline-none focus:border-[#27AE60]"
          onInput={(e) => {
            const target = e.currentTarget;
            target.style.height = "auto";
            target.style.height = target.scrollHeight + "px";
          }}
        />
        {errors.message && (
          <motion.p className="text-xs text-red-500">
            {errors.message.message}
          </motion.p>
        )}
        <motion.button
          type="submit"
          className="cursor-pointer w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200"
        >
          Gönder
        </motion.button>
      </motion.form>

      <motion.div className="flex items-center gap-1">
        <Icon
          path={Icons.mdiEmailFast}
          className="w-4 h-auto text-gray-200 inline-block"
        />
        <motion.p className="text-sm">
          Bize mail gönderebilirsin:{" "}
          <motion.a
            href={`mailto:${ContactLink.mail}`}
            target="_blank"
            className="underline cursor-pointer hover:text-blue-500"
          >
            {ContactLink.mail}
          </motion.a>
        </motion.p>
      </motion.div>
    </Panel>
  );
}
