"use client";

import { Button } from "@nextui-org/react";
import { UseEditUser } from "@/hooks/useEditUser";
import { useTranslations } from "next-intl";
// import { useSession } from "next-auth/react";
import Email from "@/components/form/email";
import FullName from "@/components/form/fullname";
import ListHeader from "../../../../components/listHeader";

const Account = () => {
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
      <ListHeader title="account-settings" />

      <form onSubmit={onSubmit} className="flex gap-5 flex-col max-w-sm">
        {/* <FullName control={control} isDisabled={isLoading || isLoadingSession} />
        <Email control={control} isDisabled={isLoading || isLoadingSession} />

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

export default Account;
