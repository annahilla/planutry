import Button from "./buttons/Button";
import Modal from "./Modal";

interface DeleteConfirmationModalProps {
  isModalOpen: boolean;
  thingToDelete: string;
  setIsModalOpen: (isOpen: boolean) => void;
  handleDelete: () => void;
}

const DeleteConfirmationModal: React.FC<DeleteConfirmationModalProps> = ({
  isModalOpen,
  thingToDelete,
  setIsModalOpen,
  handleDelete,
}) => {
  return (
    <Modal isBig isOpen={isModalOpen} closeModal={() => setIsModalOpen(false)}>
      <p className="text-center mt-8">
        Are you sure you want to delete {thingToDelete}?
      </p>
      <div className="flex gap-3 w-2/3 my-8 m-auto md:gap-10">
        <Button handleClick={handleDelete} type="button" filled>
          Yes
        </Button>
        <Button
          handleClick={() => setIsModalOpen(false)}
          type="button"
          color="black"
        >
          No
        </Button>
      </div>
    </Modal>
  );
};

export default DeleteConfirmationModal;
