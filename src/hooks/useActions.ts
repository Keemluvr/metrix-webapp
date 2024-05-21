"use client";

import { useMemo, useState } from "react";

type template<T> = {
  isAllowed: boolean;
  action: (item: T) => JSX.Element;
};

type ActionProps<T> = {
  items: T[];
  onOpen: () => void;
  templates: {
    view?: template<T>;
    edit?: template<T>;
    delete?: template<T>;
  };
};

export function UseAction<T extends { id?: number }>({ items, templates, onOpen }: ActionProps<T>) {
  const [modalTemplate, setModalTemplate] = useState<JSX.Element | undefined>(undefined);

  const actions = useMemo(() => {
    let onView, onEdit, onDelete;

    if (templates?.view?.isAllowed)
      onView = (selectedId: T["id"]) => {
        const seleted = items.find((item) => item.id === selectedId) as T;
        if (seleted) {
          setModalTemplate(templates?.view?.action(seleted));
          onOpen();
        }
      };

    if (templates?.edit?.isAllowed)
      onEdit = (selectedId: number) => {
        const seleted = items.find((item) => item.id === selectedId);
        if (seleted) {
          setModalTemplate(templates?.edit?.action(seleted));
          onOpen();
        }
      };

    if (templates?.delete?.isAllowed)
      onDelete = (selectedId: number) => {
        const seleted = items.find((item) => item.id === selectedId);
        if (seleted) {
          setModalTemplate(templates?.delete?.action(seleted));
          onOpen();
        }
      };

    return { onView, onEdit, onDelete };
  }, [items, templates, onOpen]);

  return { actions, modalTemplate, setModalTemplate };
}
