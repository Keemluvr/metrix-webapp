"use client";

import { useMemo, useState } from "react";

type template<T> = {
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
    const onView = (selectedId: T["id"]) => {
      const seleted = items.find((item) => item.id === selectedId) as T;
      if (seleted) {
        setModalTemplate(templates?.view?.action(seleted));
        onOpen();
      }
    };

    const onEdit = (selectedId: number) => {
      const seleted = items.find((item) => item.id === selectedId);
      if (seleted) {
        setModalTemplate(templates?.edit?.action(seleted));
        onOpen();
      }
    };

    const onDelete = (selectedId: number) => {
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
