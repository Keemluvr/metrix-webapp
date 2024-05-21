"use client";

import ListHeader from "../../../../components/listHeader";
import { useTranslations } from "next-intl";
// import { useSession } from "next-auth/react";
import { UseEditUser } from "@/hooks/useEditUser";
import { Button } from "@nextui-org/react";
import Password from "@/components/form/password";

const Security = () => {
  const t = useTranslations("Form");
  // const { data: session, status } = useSession();
  // const user = session?.user;
  // const isLoadingSession = status === "loading";

  const { control, onSubmit, isLoading } = UseEditUser({
    // defaultValues: {
    //   id: user?.id || "",
    //   name: user?.name || "",
    //   email: user?.email || ""
    // }
  });

  return (
    <>
      <ListHeader title="security-settings" />

      <form onSubmit={onSubmit} className="flex gap-5 flex-col max-w-sm">
        {/* <Password label="new-password" control={control} isDisabled={isLoading || isLoadingSession} />

        <Button
          type="submit"
          className="max-w-min"
          variant="solid"
          color="primary"
          size="lg"
          isLoading={isLoading || isLoadingSession}
        >
          {t("update")}
        </Button> */}
      </form>
    </>
  );
};

export default Security;
