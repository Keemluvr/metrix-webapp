"use client";

import { Modal, Pagination, useDisclosure } from "@nextui-org/react";
import { UseAction } from "@/hooks/useActions";
import { useMemo } from "react";
import { User } from "@/types/User";
import useUsersQuery from "@/data/users/use-users-query";
import ListHeader from "../../../../components/listHeader";
import Table from "@/components/table";
import useTable from "@/hooks/useTable";
import TableHeader from "@/components/table/tableHeader";
import ModalView from "./modals/view";
import ModalEdit from "./modals/edit";
import ModalDelete from "./modals/delete";
import ModalCreate from "./modals/create";

const List = () => {
  const { data = [], refetch, isLoading } = useUsersQuery();
  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();

  const [sortedItems, tableActions, values] = useTable({ data });
  const { setSortDescriptor, setFilterValue, setPage } = tableActions;
  const { sortDescriptor, filterValue, page, rowsPerPage } = values;

  const columns = [
    { name: "name", uid: "name", sortable: true },
    { name: "email", uid: "email" },
    { name: "gender", uid: "gender" },
    { name: "actions", uid: "actions" }
  ];

  const templates = {
    view: {
      isAllowed: true,
      action: (user: User.Profile) => <ModalView id={user.id} />
    },
    // edit: {
    //   isAllowed: true,
    //   action: (user: User.Profile) => <ModalEdit user={user} onClose={onClose} onSuccess={refetch} />
    // },
    delete: {
      isAllowed: true,
      action: (user: User.Profile) => <ModalDelete id={user.id} onClose={onClose} onSuccess={refetch} />
    }
  };

  const { modalTemplate, setModalTemplate, actions } = UseAction({
    items: data as unknown as User.Profile[],
    templates,
    onOpen
  });

  const topContent: JSX.Element = useMemo(() => {
    const onAddNew = () => {
      setModalTemplate(<ModalCreate onClose={onClose} onSuccess={refetch} />);
      onOpen();
    };

    return (
      <TableHeader filterValue={filterValue} setFilterValue={setFilterValue} setPage={setPage} onAddNew={onAddNew} />
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortedItems, filterValue, setFilterValue, setPage, onClose, onOpen, refetch]);

  const bottomContent: JSX.Element = useMemo(() => {
    const pages = Math.ceil(data.length / rowsPerPage);

    return (
      <div className="flex w-full justify-center">
        <Pagination
          key={data.length}
          isCompact
          showControls
          color="primary"
          page={page}
          total={pages}
          onChange={(page) => setPage(page)}
        />
      </div>
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, rowsPerPage, data.length]);

  return (
    <div className="mx-5">
      <ListHeader title="users-summary" />

      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        backdrop="blur"
        className="absolute top-0"
        classNames={{
          wrapper: "absolute overflow-y-scroll top-0 w-full"
        }}
      >
        {modalTemplate}
      </Modal>

      <Table
        data={sortedItems as unknown as Record<string, unknown>[]}
        columns={columns}
        topContent={topContent}
        bottomContent={bottomContent}
        sortDescriptor={sortDescriptor}
        onSortChange={setSortDescriptor}
        actions={actions}
        isLoading={isLoading}
      />
    </div>
  );
};

export default List;
