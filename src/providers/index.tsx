"use client";

import { Toast } from "@/providers/toast";
import { queryClient } from "@/services/queryClient";
import { NextUIProvider } from "@nextui-org/react";
import { QueryClientProvider } from "@tanstack/react-query";
import { LazyMotion, domAnimation } from "framer-motion";
import { SessionProvider } from "next-auth/react";
import { useRouter } from "next/navigation";

type ProvidersProps = {
  children: React.ReactNode;
};

const Providers = ({ children }: ProvidersProps) => {
  const router = useRouter();

  return (
    <SessionProvider>
      <QueryClientProvider client={queryClient}>
        <LazyMotion features={domAnimation}>
          <Toast />
          <NextUIProvider navigate={router.push}>{children}</NextUIProvider>
        </LazyMotion>
      </QueryClientProvider>
    </SessionProvider>
  );
};

export default Providers;
