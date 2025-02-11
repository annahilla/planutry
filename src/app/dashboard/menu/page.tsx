"use client";

import Week from "@/components/menu-planner/Week";
import { useAppDispatch, useAppSelector } from "@/lib/store/reduxHooks";
import { deleteFullMenu } from "@/services/menuService";
import { useState } from "react";
import { MdOutlineCleaningServices } from "react-icons/md";
import DeleteConfirmationModal from "@/components/ui/DeleteConfirmationModal";
import PageTitle from "@/components/ui/PageTitle";
import { setMenu } from "@/lib/store/menu/menuSlice";

const Menu = () => {
  const dispatch = useAppDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const token = useAppSelector((state) => state.auth.user?.token);

  const handleClear = () => {
    setIsModalOpen(true);
  };

  const clearAll = async () => {
    if (token) {
      const isDeleted = await deleteFullMenu(token);
      setIsModalOpen(false);
      if (isDeleted) {
        dispatch(setMenu({ menu: [] }));
      }
    }
  };

  return (
    <>
      <div className="w-full flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <PageTitle>Meal Planner</PageTitle>
          <button
            onClick={handleClear}
            className="p-2 bg-neutral-50 rounded text-neutral-600 text-sm hover:bg-neutral-100"
          >
            <MdOutlineCleaningServices />
          </button>
        </div>
        <Week />
      </div>
      <DeleteConfirmationModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        handleDelete={clearAll}
        thingToDelete="the menu"
      />
    </>
  );
};

export default Menu;
