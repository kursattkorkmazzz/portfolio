"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import Panel, { PanelProps } from "../common/panel";
import { AnimatePresence, motion } from "motion/react";

import validator from "validator";
import Icon from "@mdi/react";
import * as Icons from "@mdi/js";
import ContactLink from "@/../public/settings/contact.json";
import TestimonialCard from "../ui/testimonial-card";
import sendMail from "@/actions/send-email";
import { createPortal } from "react-dom";
import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";
import Button from "../common/button";

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

  const [isSending, setIsSending] = useState(false);
  const [sendStatus, setSendStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const clearStatusMessage = () => {
    setTimeout(() => {
      setSendStatus(null);
    }, 3000);
  };

  const formHandler: SubmitHandler<FormInputs> = (data) => {
    setIsSending(true);
    sendMail(data)
      .then(() => {
        setSendStatus({
          type: "success",
          message:
            "Mail başarıyla gönderildi. En kısa zamada geri dönüş yapacağım.",
        });
        setIsSending(false);
        clearStatusMessage();
      })

      .catch((err) => {
        setSendStatus({
          type: "error",
          message: "Mail gönderilirken bir hata oluştu. Lütfen tekrar deneyin.",
        });
        setIsSending(false);
        clearStatusMessage();
      });
  };

  return (
    <Panel className="gap-4 h-min shrink-1">
      <motion.div className="flex flex-col gap-4 items-center justify-center h-min">
        <motion.h2 className="select-none text-3xl font-bold">
          İletişim
        </motion.h2>
        <motion.p className="select-none">
          Heyecan verici bir fikrin mi var? Yeni fikirler ve projeler için bana
          e-posta gönderebilir veya anlık mesaj ile kolayca ulaşabilirsin!
        </motion.p>
        <motion.form
          layout
          id="contact"
          onSubmit={handleSubmit(formHandler)}
          className="flex flex-col gap-2 w-full h-min"
        >
          <motion.input
            {...register("fullname", {
              required: "Bu alanın doldurulması zorunludur.",
            })}
            placeholder="Ad Soyad"
            className="w-full p-2 border-2 border-white rounded-md focus:outline-none focus:border-accent"
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
            className="w-full p-2 border-2 border-white rounded-md focus:outline-none focus:border-accent"
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
            className="w-full h-auto p-2 border-2 border-white rounded-md focus:outline-none focus:border-accent"
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
          <AnimatePresence>
            {sendStatus != null && (
              <motion.div
                layout
                className={cn(
                  "relative py-2 px-3 rounded-md text-sm text-white",
                  sendStatus.type === "success" ? "bg-green-500" : "bg-red-500"
                )}
                initial={{ opacity: 0, y: 30 }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{ opacity: 0, y: -30 }}
              >
                {sendStatus.message}
              </motion.div>
            )}
          </AnimatePresence>

          <Button
            disabled={isSending}
            type="submit"
            className={cn(
              "cursor-pointer w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200 flex flex-row items-center justify-center",
              isSending && "opacity-50 "
            )}
          >
            {isSending ? (
              <Icon className="w-7 h-auto" path={Icons.mdiLoading} spin></Icon>
            ) : (
              "Gönder"
            )}
          </Button>
        </motion.form>

        <motion.div className="flex items-center gap-1">
          <Icon
            path={Icons.mdiEmailFast}
            className="w-4 h-auto text-gray-200 inline-block"
          />
          <motion.p className="text-sm">
            Bana mail gönderebilirsin:{" "}
            <motion.a
              href={`mailto:${ContactLink.mail}`}
              target="_blank"
              className="underline cursor-pointer hover:text-blue"
            >
              {ContactLink.mail}
            </motion.a>
          </motion.p>
        </motion.div>
      </motion.div>
    </Panel>
  );
}
