import { IModal } from '../../data/type';
import { useAppDispatch } from '../../hooks/useRedux';
import { deleteTask } from '../../reducer/dataSlice';
import { closeModal } from '../../reducer/modalSlice';
import Button from '../../standard/Button';
import Modal from '../../standard/Modal';

const DeleteTask = (props: IModal) => {
  const { boardTab, ModalDetail } = props;

  const dispatch = useAppDispatch();
  const handleDelete = () => {
    dispatch(deleteTask({ currentBoardTab: boardTab, task: ModalDetail }));
    dispatch(closeModal());
  };

  const handleCancel = () => {
    dispatch(closeModal());
  };

  return (
    <Modal>
      <div className='DeleteBoard'>
        <div className='DeleteBoard__topWrapper'>
          <h2 className='DeleteBoard__text-title'>Deletar essa tarefa?</h2>
          <p className='DeleteBoard__text-info'>
          Tem certeza que deseja excluir o a tarefa &apos;{ModalDetail.title}&apos; ?
          </p>
        </div>
        <div className='DeleteBoard__btnWrapper'>
          <Button small className='DeleteBoard__btn--delete' onClick={handleDelete}>
            Deletar
          </Button>
          <Button small className='DeleteBoard__btn--cancel' onClick={handleCancel}>
            Cancelar
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default DeleteTask;